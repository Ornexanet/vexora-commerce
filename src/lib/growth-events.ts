import { sendGAEvent } from "@next/third-parties/google";

export type GrowthEvent =
  | "product_viewed"
  | "add_to_cart"
  | "add_to_wishlist"
  | "checkout_started"
  | "purchase_completed"
  | "hero_pagination_clicked"
  | "experiment_exposure"
  | "landing_cta_clicked"
  | "landing_page_viewed";



export type GrowthEventData = {
  productId?: number | string;
  productName?: string;
  price?: number;
  quantity?: number;
  experiment?: string;
  variant?: "A" | "B";
};


export type GrowthEventPayload = {
  event: GrowthEvent;
  data: GrowthEventData;
  timestamp: string;
  sessionId?: string
};

function getSessionId(): string {
  let sessionId = sessionStorage.getItem("ornexa_session_id");

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem("ornexa_session_id", sessionId);
  }

  return sessionId;
}


export function trackEvent(
  event: GrowthEvent,
  data: GrowthEventData = {}
): GrowthEventPayload {
  const payload: GrowthEventPayload = {
  event,
  data,
  timestamp: new Date().toISOString(),
  sessionId: getSessionId(),
};


  console.log("[Ornexa Growth V2]", payload);
fetch("/api/growth-events", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
  keepalive: true,
}).then((response) => {
  if (!response.ok) {
    throw new Error(`Growth API returned HTTP ${response.status}`);
  }
}).catch((error) => {

  console.error("[Ornexa Growth V2] Failed to send event:", error);
});

const ga4EventNames: Record<GrowthEvent, string> = {
  product_viewed: "view_item",
  add_to_cart: "add_to_cart",
  add_to_wishlist: "add_to_wishlist",
  checkout_started: "begin_checkout",
  purchase_completed: "purchase",
  hero_pagination_clicked: "hero_pagination_clicked",
  experiment_exposure: "experiment_exposure",
  landing_cta_clicked: "landing_cta_clicked",
  landing_page_viewed: "landing_page_viewed",
};

sendGAEvent("event", ga4EventNames[event], {
  currency: "SEK",
  value: data.price ?? 0,
  items: data.productId
    ? [{
        item_id: String(data.productId),
        item_name: data.productName ?? "",
        price: data.price ?? 0,
        quantity: data.quantity ?? 1,
      }]
    : [],
});


  return payload;
}

