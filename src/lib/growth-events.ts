
export type GrowthEvent =
  | "product_viewed"
  | "add_to_cart"
  | "add_to_wishlist"
  | "checkout_started"
  | "purchase_completed";

export type GrowthEventData = {
  productId?: number | string;
  productName?: string;
  price?: number;
  quantity?: number;
};

export type GrowthEventPayload = {
  event: GrowthEvent;
  data: GrowthEventData;
  timestamp: string;
};

export function trackEvent(
  event: GrowthEvent,
  data: GrowthEventData = {}
): GrowthEventPayload {
  const payload: GrowthEventPayload = {
    event,
    data,
    timestamp: new Date().toISOString(),
  };

  console.log("[Ornexa Growth V2]", payload);

  return payload;
}

