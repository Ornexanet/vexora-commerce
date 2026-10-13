

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
fetch("/api/growth-events", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
}).then((response) => {
  if (!response.ok) {
    throw new Error(`Growth API returned HTTP ${response.status}`);
  }
}).catch((error) => {

  console.error("[Ornexa Growth V2] Failed to send event:", error);
});

  return payload;
}

