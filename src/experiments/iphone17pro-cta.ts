
export const iphone17ProExperiment = {
  id: "iphone17pro_cta_v1",
  productId: 2,
  allocation: 0.5,
  control: "Lägg i varukorgen",
  variant: "Köp nu",
} as const;

export type IPhone17ProVariant = "A" | "B";

export function getIPhone17ProVariant(): IPhone17ProVariant {
  if (typeof window === "undefined") return "A";

  const key = "ornexa_iphone17pro_cta_v1";

  const stored = window.localStorage.getItem(key);

  if (stored === "A" || stored === "B") {
    return stored;
  }

  const variant: IPhone17ProVariant =
    Math.random() < iphone17ProExperiment.allocation
      ? "B"
      : "A";

  window.localStorage.setItem(key, variant);

  return variant;
}

