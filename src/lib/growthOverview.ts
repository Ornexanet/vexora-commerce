
import "server-only";
import { supabaseAdmin } from "./supabaseAdmin";
import type { GrowthOverview } from "./growthAnalyticsTypes";

export async function getGrowthOverview(): Promise<GrowthOverview> {
  const { data, error } = await supabaseAdmin
    .rpc("get_growth_overview");

  if (error) {
    throw new Error(`Growth overview query failed: ${error.message}`);
  }

  const result = data?.[0];

  if (!result) {
    throw new Error("Growth overview returned no result");
  }

  return {
    totalEvents: Number(result.total_events),
    trackedSessions: Number(result.tracked_sessions),
    productViews: Number(result.product_views),
    addToCartEvents: Number(result.add_to_cart_events),
  };
}

