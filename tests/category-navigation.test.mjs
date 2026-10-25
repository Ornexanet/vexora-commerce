import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import React from "react";
import ts from "typescript";

const requireModule = createRequire(import.meta.url);
function load(file, mocks = {}) {
  const source = fs.readFileSync(new URL(`../src/${file}`, import.meta.url), "utf8");
  const compiledModule = { exports: {} };
  vm.runInNewContext(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText, {
    module: compiledModule, exports: compiledModule.exports,
    require: (name) => Object.hasOwn(mocks, name) ? mocks[name] : requireModule(name),
  });
  return compiledModule.exports;
}
function nodes(node) {
  if (!React.isValidElement(node)) return [];
  return [node, ...React.Children.toArray(node.props.children).flatMap(nodes)];
}
const catalog = load("mockData/products.tsx");
const filters = load("lib/shopFilters.ts", { "@/mockData/products": catalog });
const { categoriesList } = load("mockData/categoriesList.tsx");
const Stub = () => null;
const Select = () => null;
const SelectItem = () => null;
const Card = () => null;
const CardHorizontal = () => null;
const paths = ["mobiler", "headphones", "smartWatch", "accessories"];
const routes = ["mobiler", "horlurar", "smarta-klockor", "tillbehor"];

test("every header category has an existing shop destination with a catalog category", () => {
  assert.equal(categoriesList.length, 4);
  categoriesList.forEach((entry, index) => {
    const url = new URL(entry.href, "https://shop.ornexa.net");
    assert.equal(url.pathname, `/${routes[index]}`);
    assert.ok(fs.existsSync(new URL(`../src/app/(innerPage)/${routes[index]}/page.tsx`, import.meta.url)));
    assert.ok(catalog.allProducts.some((product) => product.categories.includes(paths[index])));
  });
});

test("the actual dropdown navigates for all categories and resets mobile search", () => {
  const pushed = [];
  const states = [];
  const Header = load("components/header/topHeader.tsx", {
    react: { ...React, useState: (initial) => [initial, (value) => states.push(value)] },
    "next/navigation": { useRouter: () => ({ push: (href) => pushed.push(href) }) },
    "next/link": Stub, "next/image": Stub,
    "@/components/ui/input-group": { InputGroup: Stub, InputGroupAddon: Stub, InputGroupButton: Stub, InputGroupInput: Stub },
    "@/components/ui/select": { Select, SelectItem, SelectContent: Stub, SelectTrigger: Stub, SelectValue: Stub },
    "@/lib/icons": { MicroPhone: Stub }, "@/lib/utils": { cn: (...args) => args.join(" ") },
    "@/mockData/categoriesList": { categoriesList }, "@/mockData/products": catalog,
    "./headerExtraInfo": Stub, "./cartSidebar": Stub,
  }).default;
  const tree = nodes(Header());
  const dropdown = tree.find((node) => node.type === Select);
  const options = tree.filter((node) => node.type === SelectItem);
  assert.equal(options.length, 5);
  for (const option of options) dropdown.props.onValueChange(option.props.value);
  assert.deepEqual(pushed, ["/shop-with-sidebar", ...categoriesList.map((entry) => entry.href)]);
  assert.equal(states.length, 10);
  assert.ok(states.every((value) => value === "" || value === false));
});

test("dedicated category pages render only their category in grid and list views", () => {
  for (const shopView of ["default", "list"]) {
    routes.forEach((route, index) => {
      const Container = load(`app/(innerPage)/${route}/productsContainer.tsx`, {
        "@/mockData/products": catalog,
        "@/contextApi/shopFiltersProvider": { useShopFilters: () => filters.getShopResults("/" + route, new URLSearchParams()) },
        "@/components/ui/card": Card, "@/components/ui/cardHorizontal": CardHorizontal,
        "@/contextApi/shopGridViewProvider": { useShopGridView: () => ({ shopView }) },
        "@/lib/utils": { cn: (...args) => args.join(" ") },
      }).default;
      const rows = nodes(Container()).filter((node) => node.type === (shopView === "list" ? CardHorizontal : Card));
      const expected = catalog.allProducts.filter((product) => product.categories.includes(paths[index]));
      assert.ok(rows.length > 0);
      assert.ok(rows.every((row) => row.props.product.categories.includes(paths[index])));
      assert.deepEqual(rows.map((row) => row.props.product.id), Array.from(expected, (product) => product.id));
    });
  }
});
