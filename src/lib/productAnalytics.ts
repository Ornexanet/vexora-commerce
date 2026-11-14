
import "server-only";

import { supabaseAdmin } from "./supabaseAdmin";
import type { ProductAnalytics } from "./growthAnalyticsTypes";

type ProductAnalyticsRow = {
  product_id: number;
  product_views: number;
  cart_adds: number;
  wishlist_adds: number;
  view_sessions: number;
  cart_sessions: number;
  wishlist_sessions: number;
};

export async function getProductAnalytics(): Promise<ProductAnalytics[]> {
  const { data, error } = await supabaseAdmin.rpc(
    "get_product_analytics"
  );

  if (error) {
    throw new Error(
      `Product analytics query failed: ${error.message}`
    );
  }

  if (!data) {
    throw new Error("Product analytics returned no data");
  }

  const rows = data as ProductAnalyticsRow[];

  return rows.map((row) => ({
    productId: Number(row.product_id),
    productViews: Number(row.product_views),
    cartAdds: Number(row.cart_adds),
    wishlistAdds: Number(row.wishlist_adds),
    viewSessions: Number(row.view_sessions),
    cartSessions: Number(row.cart_sessions),
    wishlistSessions: Number(row.wishlist_sessions),
  }));
}

