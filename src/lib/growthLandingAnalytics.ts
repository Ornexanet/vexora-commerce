
import "server-only";

import { supabaseAdmin } from "./supabaseAdmin";

export type LandingAnalytics = {
  productId: number;
  viewSessions: number;
  clickSessions: number;
  ctaCtr: number | null;
};

type LandingAnalyticsRow = {
  product_id: number;
  view_sessions: number;
  click_sessions: number;
  cta_ctr: number | null;
};

export async function getLandingAnalytics(): Promise<LandingAnalytics[]> {
  const { data, error } = await supabaseAdmin.rpc(
    "get_landing_analytics_v1"
  );

  if (error) {
    throw new Error(
      `Landing analytics query failed: ${error.message}`
    );
  }

  if (!data) {
    throw new Error("Landing analytics returned no data");
  }

  const rows = data as LandingAnalyticsRow[];

  return rows.map((row) => ({
    productId: Number(row.product_id),
    viewSessions: Number(row.view_sessions),
    clickSessions: Number(row.click_sessions),
    ctaCtr: row.cta_ctr === null ? null : Number(row.cta_ctr),
  }));
}

