export type ExperimentVariant = "A" | "B";
export const ADD_TO_CART_EXPERIMENT =
"add_to_visibility_v1";

export function assignExperimentVariant(): ExperimentVariant {
  const randomValue = Math.random();

  return randomValue < 0.5 ? "A" : "B";
}
export function getExperimentVariant(): ExperimentVariant {
  if (typeof window === "undefined") {
    return "A";
  }

  const storageKey = `experiment:${ADD_TO_CART_EXPERIMENT}`;

  const savedVariant = window.localStorage.getItem(storageKey);

  if (savedVariant === "A" || savedVariant === "B") {
    return savedVariant;
  }

  const newVariant = assignExperimentVariant();

  window.localStorage.setItem(storageKey, newVariant);

  return newVariant;
}
  //wishlist A/B Experiment
  export const WISHLIST_EXPERIMENT =
  "wiahlist_button_clarity_v1";
 export function getWishlistExperimentVariant(): ExperimentVariant {
 if (typeof window === "undefined") {
  return "A";
 }
const storageKey = `experiment:${WISHLIST_EXPERIMENT}`;

 const savedVariant =
 window.localStorage.getItem(storageKey);
 if (savedVariant === "A" || savedVariant === "B") {
  return savedVariant;
 }
 
  const newVariant = 
  assignExperimentVariant();
  window.localStorage.setItem(storageKey,newVariant);
  return newVariant;
}

