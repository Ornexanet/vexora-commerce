export type GrowthEventName =
| "product_viewed"
| "add_to_cart"
| "add_to_wishlist"
| "checkout_started";
export type GrowthEventPayload = {
  event_id: string;
  event_name: GrowthEventName;
  session_id: string;
  product_id?: number;
};
function createEventId() : string {
    return crypto.randomUUID();
}
function getSessionId(): string {
  const key = "ornexa_growth_session";

  let sessionId = sessionStorage.getItem(key);

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(key, sessionId);
  }

  return sessionId;
}
export function trackEvent(
  eventName: GrowthEventName,
  productId?: number
): void {
  const event: GrowthEventPayload = {
    event_id: createEventId(),
    event_name: eventName,
    session_id: getSessionId(),
    ...(productId !== undefined
      ? { product_id: productId }
      : {}),
  };

  fetch("/api/growth-events", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(event),
}).catch((error) => {
  console.error("Growth tracking failed:", error);
});

}
