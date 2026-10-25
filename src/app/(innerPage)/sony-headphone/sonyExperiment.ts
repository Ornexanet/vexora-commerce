
export type SonyVariant = "A" | "B";

const experimentKey = "sony_landing_cta_v1";

export function getSonyVariant(): SonyVariant {
  const savedVariant = sessionStorage.getItem(experimentKey);

  if (savedVariant === "A" || savedVariant === "B") {
    return savedVariant;
  }

  const variant: SonyVariant = Math.random() < 0.5 ? "A" : "B";

  sessionStorage.setItem(experimentKey, variant);

  return variant;
}

