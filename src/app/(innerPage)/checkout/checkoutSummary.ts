import type { CartItem } from "@/types/cart";

const sekFormatter = new Intl.NumberFormat("sv-SE", {
  style: "currency",
  currency: "SEK",
});

export const formatSEK = (amount: number) => sekFormatter.format(amount);

// Portfolio demo amounts only, not configured delivery offers or currency conversion.
// The fixed amount matches the existing cart's mock fixed-rate option in SEK.
export const DEMO_SHIPPING_METHODS = [
  { id: "free", label: "Fri frakt (demo)", amount: 0 },
  { id: "flat", label: "Fast frakt (demo)", amount: 15 },
] as const;

export type DemoShippingMethod = (typeof DEMO_SHIPPING_METHODS)[number]["id"];

export const isDemoShippingMethod = (value: unknown): value is DemoShippingMethod =>
  DEMO_SHIPPING_METHODS.some((method) => method.id === value);

export const getItemUnitPrice = (item: CartItem) =>
  item.discount ? item.price - item.discount : item.price;

export const getCheckoutTotals = (
  subtotal: number,
  totalQuantity: number,
  shippingMethod: DemoShippingMethod,
) => {
  // Match priceSummary.tsx: item discounts are already in getCartTotal(),
  // then the existing 10% bundle discount applies to two or more units.
  const bundleDiscount = subtotal * (totalQuantity >= 2 ? 0.1 : 0);
  const shipping = DEMO_SHIPPING_METHODS.find((method) => method.id === shippingMethod)!;

  return {
    subtotal,
    bundleDiscount,
    shipping: shipping.amount,
    total: subtotal - bundleDiscount + shipping.amount,
  };
};
