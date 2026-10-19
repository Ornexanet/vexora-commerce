export type ExperimentVariant = "A" | "B";

const EXPERIMENT_KEY = "ornexa_add_to_cart_v1";

export function getExperimentVariant(): ExperimentVariant {
  if (typeof window === "undefined") {
    return "A";
  }

  const savedVariant = localStorage.getItem(EXPERIMENT_KEY);
  if (savedVariant === "A" || savedVariant === "B") {
  return savedVariant;
}

  const variant: ExperimentVariant = 
  Math.random() < 0.5 ? "A" : "B";
  localStorage.setItem(EXPERIMENT_KEY, variant);
return variant;

}
