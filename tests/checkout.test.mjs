import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const requireModule = createRequire(import.meta.url);
const checkout = "../src/app/(innerPage)/checkout/";

// Transpile in memory: no generated files, browser storage, analytics or requests.
function load(file, mocks = {}, globals = {}) {
  const source = fs.readFileSync(new URL(file, import.meta.url), "utf8");
  const code = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  }).outputText;
  const compiledModule = { exports: {} };
  vm.runInNewContext(code, {
    module: compiledModule,
    exports: compiledModule.exports,
    require: (name) => Object.hasOwn(mocks, name) ? mocks[name] : requireModule(name),
    ...globals,
  });
  return compiledModule.exports;
}

const summary = load(checkout + "checkoutSummary.ts");
const item = (extra = {}) => ({
  id: 101, title: "Testhörlurar", thumbnail: "/images/test.png",
  price: 120, discount: 20, quantity: 2, ...extra,
});
const items = () => [item(), item({ id: 102, title: "Testkabel", price: 50, discount: null, quantity: 1 })];
const cart = (entries = items(), isLoaded = true) => ({
  cartItems: entries, isLoaded,
  getCartTotal: () => entries.reduce((sum, entry) => sum + summary.getItemUnitPrice(entry) * entry.quantity, 0),
});

// Minimal lifecycle harness for the actual provider and checkout handlers.
// Effects are explicit so loading and Strict Mode replay can be tested separately.
function hooks() {
  const slots = [];
  let cursor = 0;
  let effects = [];
  const react = {
    ...React,
    useState(initial) {
      const index = cursor++;
      if (!(index in slots)) slots[index] = typeof initial === "function" ? initial() : initial;
      return [slots[index], (next) => {
        slots[index] = typeof next === "function" ? next(slots[index]) : next;
      }];
    },
    useRef(initial) { return react.useState({ current: initial })[0]; },
    useEffect(effect, deps) {
      const index = cursor++;
      const previous = slots[index];
      if (!previous || deps.some((value, i) => !Object.is(value, previous[i]))) effects.push(effect);
      slots[index] = deps;
    },
    useCallback: (callback) => callback,
    useMemo: (factory) => factory(),
  };
  return {
    react,
    render(Component, props = {}) { cursor = 0; return Component(props); },
    flush(replay = false) {
      const pending = effects;
      effects = [];
      for (const effect of pending) { effect(); if (replay) effect(); }
    },
    slots,
  };
}

const RadioGroup = ({ children }) => React.createElement("div", null, children);
const paymentMocks = {
  "@/components/ui/button": { Button: ({ children, ...props }) => React.createElement("button", props, children) },
  "@/components/ui/checkbox": { Checkbox: (props) => React.createElement("input", { ...props, type: "checkbox" }) },
  "@/components/ui/label": { Label: (props) => React.createElement("label", props) },
  "@/components/ui/radio-group": {
    RadioGroup,
    RadioGroupItem: (props) => React.createElement("input", { ...props, type: "radio" }),
  },
  "next/image": (props) => React.createElement("img", props),
  "./checkoutSummary": summary,
};

function payment(state, onShippingMethodChange = () => {}) {
  return load(checkout + "checkoutPayment.tsx", {
    ...paymentMocks, "@/contextApi/cartContext": { useCart: () => state },
  }).default({ shippingMethod: "flat", onShippingMethodChange });
}

function find(element, predicate) {
  if (!React.isValidElement(element)) return undefined;
  if (predicate(element)) return element;
  for (const child of React.Children.toArray(element.props.children)) {
    const match = find(child, predicate);
    if (match) return match;
  }
}

function wrapper(state) {
  const lifecycle = hooks();
  const events = [];
  const Form = () => null;
  const Payment = () => null;
  const Component = load(checkout + "checkoutPageWrapper.tsx", {
    react: lifecycle.react,
    "next/link": ({ children, ...props }) => React.createElement("a", props, children),
    "@/contextApi/cartContext": { useCart: () => state },
    "@/lib/growth-events": { trackEvent: (name) => events.push(name) },
    "./checkoutForm": Form,
    "./checkoutPayment": Payment,
    "./checkoutSummary": summary,
  }, {
    FormData: class {
      constructor(form) { this.fields = new Map(Object.entries(form.fields)); }
      get(name) { return this.fields.get(name) ?? null; }
    },
  }).default;
  return { ...lifecycle, draw: () => lifecycle.render(Component), events, Payment };
}

function submit(form, fields) {
  let prevented = false;
  form.props.onSubmit({ preventDefault() { prevented = true; }, currentTarget: { fields } });
  assert.equal(prevented, true);
}

test("unit discounts are absolute SEK reductions, not percentages", () => {
  assert.equal(summary.getItemUnitPrice(item()), 100);
  assert.equal(summary.getItemUnitPrice(item({ discount: 0 })), 120);
  assert.equal(summary.getItemUnitPrice(item({ discount: null })), 120);
});

test("mixed cart totals match the existing cart bundle discount and both demo shipping choices", () => {
  const state = cart();
  assert.equal(state.getCartTotal(), 250);
  const free = summary.getCheckoutTotals(state.getCartTotal(), 3, "free");
  const fixed = summary.getCheckoutTotals(state.getCartTotal(), 3, "flat");
  assert.equal(free.bundleDiscount, 25);
  assert.equal(free.total, 225);
  assert.equal(fixed.shipping, 15);
  assert.equal(fixed.total, 240);
  assert.equal(summary.getCheckoutTotals(100, 1, "free").bundleDiscount, 0);
  assert.equal(summary.getCheckoutTotals(100, 2, "free").bundleDiscount, 10);
});

test("fractional amounts stay numeric and format in sv-SE/SEK", () => {
  const total = summary.getCheckoutTotals((19.95 - 0.05) * 3, 3, "flat").total;
  assert.ok(Math.abs(total - 68.73) < 0.000001);
  assert.equal(summary.formatSEK(total), new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK" }).format(68.73));
  assert.equal(summary.isDemoShippingMethod("flat"), true);
  assert.equal(summary.isDemoShippingMethod("paypal"), false);
  assert.equal(summary.isDemoShippingMethod(null), false);
});

test("summary renders all real cart rows, discounts, line totals and no payment claims", () => {
  const html = renderToStaticMarkup(payment(cart()));
  assert.match(html, /Testhörlurar/);
  assert.match(html, /Testkabel/);
  assert.match(html, /src="\/images\/test.png"/);
  for (const amount of [100, 20, 200, 50, 25, 240]) assert.ok(html.includes(summary.formatSEK(amount)));
  assert.doesNotMatch(html, /Go360|camera-1|\$|PayPal|banköverföring|check-payment|payment_method/);
  assert.match(html, /Ingen betalning/);
  assert.match(html, /påhittade exempel i SEK/);
});

test("shipping selection exposes a form field and accepts only defined methods", () => {
  const changed = [];
  const group = find(payment(cart(), (method) => changed.push(method)), (el) => el.type === RadioGroup);
  assert.equal(group.props.name, "shipping_method");
  assert.equal(group.props.value, "flat");
  group.props.onValueChange("invalid");
  group.props.onValueChange("free");
  group.props.onValueChange("flat");
  assert.deepEqual(changed, ["free", "flat"]);
});

test("loading and empty carts show neither totals nor a submit form", () => {
  for (const state of [cart(items(), false), cart([])]) {
    const html = renderToStaticMarkup(payment(state));
    assert.doesNotMatch(html, /Totalt|kr|<button|Testhörlurar/);
    const flow = wrapper(state);
    const page = flow.draw();
    assert.notEqual(page.type, "form");
    assert.doesNotMatch(renderToStaticMarkup(page), /<form|<button/);
  }
});

test("checkout_started runs once, including effect replay and later cart hydration", () => {
  const state = cart([], false);
  const flow = wrapper(state);
  flow.draw();
  flow.flush(true);
  state.isLoaded = true;
  state.cartItems = items();
  flow.draw();
  flow.flush(true);
  assert.deepEqual(flow.events, ["checkout_started"]);
});

test("demo submission validates shipping and acknowledgement, without purchase events or personal-data output", () => {
  const flow = wrapper(cart());
  let page = flow.draw();
  flow.flush(true);
  submit(page, { shipping_method: "flat", demo_confirmation: "on" });
  assert.match(renderToStaticMarkup(flow.draw()), /Välj ett av demofraktalternativen/);
  submit(page, { shipping_method: "free" });
  assert.match(renderToStaticMarkup(flow.draw()), /Bekräfta att du förstår/);
  find(page, (el) => el.type === flow.Payment).props.onShippingMethodChange("flat");
  page = flow.draw();
  submit(page, { shipping_method: "flat", demo_confirmation: "on", first_name: "DO_NOT_ECHO" });
  const html = renderToStaticMarkup(flow.draw());
  assert.match(html, /Ingen beställning har skapats/);
  assert.doesNotMatch(html, /DO_NOT_ECHO|Beställningen har lagts/);
  assert.deepEqual(flow.events, ["checkout_started"]);
});

test("an empty cart cannot be submitted even through a retained handler", () => {
  const state = cart();
  const flow = wrapper(state);
  const form = flow.draw();
  state.cartItems.length = 0;
  submit(form, { shipping_method: "free", demo_confirmation: "on" });
  assert.equal(flow.slots[1], false);
  assert.equal(flow.draw().type, "section");
});

test("provider hydration is guarded and normal cart actions still work", () => {
  const lifecycle = hooks();
  const writes = [];
  const Provider = load("../src/contextApi/cartContext.tsx", {
    react: lifecycle.react, sonner: { toast: { success() {} } },
  }, { localStorage: { getItem: () => JSON.stringify(items()), setItem: (...args) => writes.push(args) } }).CartProvider;
  let context = lifecycle.render(Provider).props.value;
  assert.equal(context.isLoaded, false);
  assert.equal(writes.length, 0);
  lifecycle.flush();
  context = lifecycle.render(Provider).props.value;
  assert.equal(context.isLoaded, true);
  assert.equal(context.getCartTotal(), 250);
  context.incrementQuantity(102);
  context = lifecycle.render(Provider).props.value;
  assert.equal(context.getCartTotal(), 300);
  context.decrementQuantity(102);
  context.removeFromCart(101);
  context = lifecycle.render(Provider).props.value;
  assert.equal(context.getCartTotal(), 50);
  context.addToCart(item({ quantity: 1 }), 1);
  context = lifecycle.render(Provider).props.value;
  assert.equal(context.getCartTotal(), 150);
  context.clearCart();
  assert.equal(lifecycle.render(Provider).props.value.getCartTotal(), 0);
});

test("malformed, invalid or inaccessible browser storage cannot leave hydration stuck", () => {
  for (const saved of ["broken JSON", "{}", '[{"price":-1}]', "throws"]) {
    const lifecycle = hooks();
    const Provider = load("../src/contextApi/cartContext.tsx", {
      react: lifecycle.react, sonner: { toast: { success() {} } },
    }, { localStorage: {
      getItem() { if (saved === "throws") throw new Error("Storage unavailable"); return saved; },
      setItem() { throw new Error("Storage unavailable"); },
    } }).CartProvider;
    lifecycle.render(Provider);
    lifecycle.flush();
    const context = lifecycle.render(Provider).props.value;
    assert.equal(context.isLoaded, true);
    assert.equal(context.cartItems.length, 0);
    assert.doesNotThrow(() => lifecycle.flush());
  }
});
