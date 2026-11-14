
import "server-only";

import { supabaseAdmin } from "./supabaseAdmin";
import type { ConversionFunnel } from "./growthAnalyticsTypes";

export async function getConversionFunnel(): Promise<ConversionFunnel> {
  const { data, error } = await supabaseAdmin
    .rpc("get_conversion_funnel");

  if (error) {
    throw new Error(`Conversion funnel query failed: ${error.message}`);
  }

  const result = data?.[0];

  if (!result) {
    throw new Error("Conversion funnel returned no result");
  }

  return {
    viewedSessions: Number(result.viewed_sessions),
    cartSessions: Number(result.cart_sessions),
    checkoutSessions: Number(result.checkout_sessions),
  };
}

