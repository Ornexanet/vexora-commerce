
export type CartVariant = "A" | "B";

export const CART_EXPERIMENT_ID = "add_to_cart_color_v1";

const CART_EXPERIMENT_KEY = "ornexa_cart_color_v1";

// Random assignment: 50% A / 50% B
export function getCartVariant(): CartVariant {
  return Math.random() < 0.5 ? "A" : "B";
}

// Read previously assigned variant
export function getSavedCartVariant(): CartVariant | null {
  if (typeof window === "undefined") {
    return null;
  }

  const saved = localStorage.getItem(CART_EXPERIMENT_KEY);

  return saved === "A" || saved === "B" ? saved : null;
}

// Save assignment in the browser
export function saveCartVariant(variant: CartVariant): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(CART_EXPERIMENT_KEY, variant);
}

// Assign once, then reuse the same variant
export function getOrCreateCartVariant(): CartVariant {
  const saved = getSavedCartVariant();

  if (saved !== null) {
    return saved;
  }

  const variant = getCartVariant();
  saveCartVariant(variant);

  return variant;
}

