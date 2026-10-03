export type GrowthEvent =
  | "product_viewed"
  | "add_to_cart"
  | "bundle_offer_viewed"
  | "bundle_discount_applied"
  | "checkout_started"
  | "purchase_completed";
  
export const trackEvent = (
  event: GrowthEvent,
  data: Record<string, unknown> = {}
) => {
  console.log("[Growth Event]", {
    event,
    ...data,
    timestamp: new Date().toISOString(),
  });
};

