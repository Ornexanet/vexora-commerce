
import type {
  ProductAnalytics as ProductAnalyticsData,
} from "@/lib/growthAnalyticsTypes";

type Props = {
  data: ProductAnalyticsData[];
};

export default function ProductAnalytics({ data }: Props) {
  const products = [...data].sort(
    (a, b) => b.productViews - a.productViews
  );

  const totalViews = products.reduce(
    (sum, product) => sum + product.productViews,
    0
  );

  const totalCartAdds = products.reduce(
    (sum, product) => sum + product.cartAdds,
    0
  );

  const totalWishlistAdds = products.reduce(
    (sum, product) => sum + product.wishlistAdds,
    0
  );

  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">
          Product Analytics
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Product-level engagement metrics from tracked events.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Tracked Products", value: products.length },
          { label: "Product Views", value: totalViews },
          { label: "Cart Adds", value: totalCartAdds },
          { label: "Wishlist Adds", value: totalWishlistAdds },
        ].map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">
              {metric.label}
            </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {metric.value.toLocaleString("en-US")}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5">
          <h4 className="text-lg font-semibold text-slate-900">
            Product Performance
          </h4>

          <p className="mt-1 text-sm text-slate-500">
            Products sorted by total views.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-5 py-4 font-semibold">
                  Product ID
                </th>
                <th className="px-5 py-4 font-semibold">
                  Views
                </th>
                <th className="px-5 py-4 font-semibold">
                  Cart Adds
                </th>
                <th className="px-5 py-4 font-semibold">
                  Wishlist Adds
                </th>
                <th className="px-5 py-4 font-semibold">
                  View Sessions
                </th>
                <th className="px-5 py-4 font-semibold">
                  Cart Sessions
                </th>
                <th className="px-5 py-4 font-semibold">
                  Wishlist Sessions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {products.map((product) => (
                <tr
                  key={product.productId}
                  className="hover:bg-slate-50"
                >
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    #{product.productId}
                  </td>
                  <td className="px-5 py-4">
                    {product.productViews}
                  </td>
                  <td className="px-5 py-4">
                    {product.cartAdds}
                  </td>
                  <td className="px-5 py-4">
                    {product.wishlistAdds}
                  </td>
                  <td className="px-5 py-4">
                    {product.viewSessions}
                  </td>
                  <td className="px-5 py-4">
                    {product.cartSessions}
                  </td>
                  <td className="px-5 py-4">
                    {product.wishlistSessions}
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-10 text-center text-slate-500"
                  >
                    No product analytics data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-slate-500">
        Event counts represent tracked actions. Session counts
        represent distinct sessions per product and event type.
        Data currently includes testing activity.
      </p>
    </section>
  );
}

