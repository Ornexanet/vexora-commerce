import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import React from "react";
import ts from "typescript";
import sharp from "sharp";

const requireModule = createRequire(import.meta.url);
const compiledModule = { exports: {} };
const Image = () => null;
vm.runInNewContext(ts.transpileModule(fs.readFileSync(new URL("../src/components/ui/brandLogo.tsx", import.meta.url), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
}).outputText, {
  module: compiledModule, exports: compiledModule.exports,
  require: (name) => name === "next/image" ? Image : requireModule(name),
});
const BrandLogo = compiledModule.exports.default;
const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url));

test("light/dark selection has accessible, dimensioned logo images", () => {
  for (const theme of ["light", "dark", "auto"]) {
    const tree = BrandLogo({ theme, priority: true, className: "brand-width" });
    const images = React.Children.toArray(tree.props.children);
    assert.equal(images.length, theme === "auto" ? 2 : 1);
    for (const image of images) {
      assert.equal(image.type, Image);
      assert.equal(image.props.alt, "Ornexa");
      assert.equal(image.props.width, 236);
      assert.equal(image.props.height, 48);
      assert.equal(image.props.priority, true);
      assert.equal(image.props.unoptimized, true);
      assert.ok(fs.existsSync(new URL(`../public${image.props.src}`, import.meta.url)));
    }
    if (theme === "auto") {
      assert.ok(images[0].props.className.includes("dark:hidden"));
      assert.ok(images[1].props.className.includes("hidden dark:block"));
    }
  }
});

test("SVG variants render without external fonts, images, scripts or gradients", async () => {
  for (const theme of ["light", "dark"]) {
    const svg = read(`public/brand/ornexa-${theme}.svg`);
    assert.ok(!/<(?:text|image|script|linearGradient|radialGradient)\b/.test(svg.toString()));
    assert.ok(svg.toString().includes('viewBox="0 0 236 48"'));
    const image = await sharp(svg).resize(120).png().toBuffer({ resolveWithObject: true });
    assert.equal(image.info.width, 120);
    assert.ok(image.info.height > 0);
  }
});

test("manifest, Apple icon and favicon contain the required raster sizes", async () => {
  const manifest = JSON.parse(read("public/manifest.webmanifest"));
  for (const icon of manifest.icons) {
    const metadata = await sharp(read(`public${icon.src}`)).metadata();
    assert.equal(`${metadata.width}x${metadata.height}`, icon.sizes);
  }
  assert.equal((await sharp(read("src/app/apple-icon.png")).metadata()).width, 180);
  const ico = read("src/app/favicon.ico");
  assert.equal(ico.readUInt16LE(2), 1);
  assert.equal(ico.readUInt16LE(4), 3);
  assert.deepEqual([ico[6], ico[22], ico[38]], [16, 32, 48]);
});
