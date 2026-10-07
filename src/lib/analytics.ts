export type GrowthEvent =
  | "product_viewed"
  | "add_to_cart"
  | "add_to_wishlist"
  | "bundle_offer_viewed"
  | "bundle_discount_applied"
  | "checkout_started"
  | "purchase_completed";
  
export const trackEvent = async (
  event: GrowthEvent,
  data: Record<string, unknown> = {}
) => {

  console.log("[Growth Event]", {
    event,
    ...data,
    timestamp: new Date().toISOString(),
  });
  return fetch("/api/growth-events", {

  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    event,
    ...data,
    timestamp: new Date().toISOString(),
  }),
}).catch((error) => {
  console.error("[Growth Tracking Error]", error);
});

};

