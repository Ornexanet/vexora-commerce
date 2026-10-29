import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import React from "react";
import ts from "typescript";

const requireModule = createRequire(import.meta.url);
function load(file, mocks = {}) {
  const compiledModule = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(new URL(`../src/${file}`, import.meta.url), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(code, { module: compiledModule, exports: compiledModule.exports, URLSearchParams,
    require: (name) => Object.hasOwn(mocks, name) ? mocks[name] : requireModule(name) });
  return compiledModule.exports;
}
const catalog = load("mockData/products.tsx");
const filters = load("lib/shopFilters.ts", { "@/mockData/products": catalog });
const results = (path, query = "") => filters.getShopResults(path, new URLSearchParams(query));

for (const category of filters.shopCategories) {
  test(`${category.key}: every available brand matches catalog products and persists in the URL`, () => {
    const base = results(category.href);
    const expected = catalog.allProducts.filter((product) => product.categories.includes(category.key));
    assert.deepEqual(Array.from(base.products, (product) => product.id), Array.from(expected, (product) => product.id));
    const brands = [...new Set(Array.from(expected, (product) => product.brand?.trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b, "sv"));
    assert.deepEqual(Array.from(base.brands), brands);
    for (const brand of brands) {
      const query = new URLSearchParams({ brand }).toString();
      const selected = results(category.href, query);
      assert.ok(selected.products.length > 0);
      assert.ok(selected.products.every((product) => product.brand.trim() === brand && product.categories.includes(category.key)));
      assert.deepEqual(Array.from(selected.products, (product) => product.id), Array.from(results(category.href, query).products, (product) => product.id));
      const prices = Array.from(selected.products, filters.unitPrice);
      const min = Math.min(...prices), max = Math.max(...prices);
      const priced = results(category.href, `${query}&min=${min}&max=${min}`);
      assert.ok(priced.products.length > 0);
      assert.ok(priced.products.every((product) => filters.unitPrice(product) === min));
      assert.equal(results(category.href, `${query}&min=${max + 1}&max=${max + 2}`).products.length, 0);
    }
    console.log(`${category.label}: ${brands.join(", ")} (${base.products.length} products)`);
  });
}

test("multiple brands use OR, category and price use AND, and unknown brands return empty", () => {
  const base = results("/mobiler");
  const params = new URLSearchParams();
  base.brands.slice(0, 2).forEach((brand) => params.append("brand", brand));
  const actual = results("/mobiler", params.toString());
  assert.equal(actual.products.length, base.products.filter((product) => params.getAll("brand").includes(product.brand)).length);
  assert.equal(results("/mobiler", "brand=nonexistent").products.length, 0);
  assert.equal(results("/mobiler", "min=100&max=0").products.length, 0);
  assert.equal(results("/mobiler", "min=invalid&max=Infinity").products.length, base.products.length);
  assert.equal(results("/shop-with-sidebar", "category=mobiler").products.length, base.products.length);
  assert.equal(results("/mobiler", "category=headphones").category, "mobiler");
});

test("URL updates preserve other filters and reset only brand and price selections", () => {
  const calls = [];
  const Provider = load("contextApi/shopFiltersProvider.tsx", {
    "@/lib/shopFilters": filters,
    "next/navigation": {
      usePathname: () => "/mobiler",
      useSearchParams: () => new URLSearchParams("brand=Apple&min=10&max=5000&other=kept"),
      useRouter: () => ({ replace: (...args) => calls.push(args) }),
    },
  }).default;
  const value = Provider({ children: null }).props.value;
  value.update({ brand: ["Samsung", "Google"] });
  let url = new URL(calls[0][0], "https://shop.ornexa.net");
  assert.deepEqual(url.searchParams.getAll("brand"), ["Samsung", "Google"]);
  assert.equal(url.searchParams.get("min"), "10");
  assert.equal(calls[0][1].scroll, false);
  value.reset();
  url = new URL(calls[1][0], "https://shop.ornexa.net");
  assert.equal(url.pathname, "/mobiler");
  assert.equal(url.searchParams.toString(), "other=kept");
});

test("every listing uses the shared filtered products and an empty state", () => {
  const card = () => null;
  for (const route of ["mobiler", "horlurar", "smarta-klockor", "tillbehor", "shop", "shop-with-sidebar", "shop-list"]) {
    const Container = load(`app/(innerPage)/${route}/productsContainer.tsx`, {
      react: { ...React, useState: () => [true, () => {}], useEffect: () => {} },
      "@/components/ui/card": card, "@/components/ui/cardHorizontal": card,
      "@/contextApi/shopGridViewProvider": { useShopGridView: () => ({ shopView: "list", setShopView: () => {} }) },
      "@/contextApi/shopFiltersProvider": { useShopFilters: () => ({ products: [] }) },
      "@/lib/utils": { cn: (...values) => values.join(" ") },
    }).default;
    const children = React.Children.toArray(Container().props.children);
    assert.ok(children.some((node) => node.props.role === "status"));
  }
});
