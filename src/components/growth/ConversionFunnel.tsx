
import type { ConversionFunnel as ConversionFunnelData } from "@/lib/growthAnalyticsTypes";

type Props = {
  data: ConversionFunnelData;
};

export default function ConversionFunnel({ data }: Props) {
  const stages = [
    {
      label: "Product Viewed",
      sessions: data.viewedSessions,
    },
    {
      label: "Add to Cart",
      sessions: data.cartSessions,
    },
    {
      label: "Checkout Started",
      sessions: data.checkoutSessions,
    },
  ];

  function calculateRate(
    numerator: number,
    denominator: number
  ): number | null {
    if (denominator === 0) {
      return null;
    }

    return (numerator / denominator) * 100;
  }

  function formatRate(rate: number | null): string {
    return rate === null ? "N/A" : `${rate.toFixed(1)}%`;
  }

  const viewToCartRate = calculateRate(
    data.cartSessions,
    data.viewedSessions
  );

  const cartToCheckoutRate = calculateRate(
    data.checkoutSessions,
    data.cartSessions
  );

  const metrics = [
    {
      label: "View → Cart",
      conversion: viewToCartRate,
      dropoff:
        viewToCartRate === null ? null : 100 - viewToCartRate,
    },
    {
      label: "Cart → Checkout",
      conversion: cartToCheckoutRate,
      dropoff:
        cartToCheckoutRate === null
          ? null
          : 100 - cartToCheckoutRate,
    },
  ];

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <h3 className="text-lg font-semibold">
        Conversion Funnel
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Ordered session-based funnel · Test data
      </p>

      <div className="mt-8 space-y-6">
        {stages.map((stage) => {
          const percentage = calculateRate(
            stage.sessions,
            data.viewedSessions
          );

          return (
            <div key={stage.label}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-sm font-medium">
                  {stage.label}
                </span>

                <span className="text-sm text-slate-600">
                  {stage.sessions} sessions
                </span>
              </div>

              <div
                className="h-5 overflow-hidden rounded-md bg-slate-100"
                role="progressbar"
                aria-label={stage.label}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percentage ?? 0}
              >
                <div
                  className="h-full rounded-md bg-blue-600 transition-all"
                  style={{
                    width: `${Math.min(
                      100,
                      Math.max(0, percentage ?? 0)
                    )}%`,
                  }}
                />
              </div>

              <p className="mt-1 text-xs text-slate-500">
                {formatRate(percentage)} of viewed sessions
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-slate-200 p-5"
          >
            <h4 className="text-sm font-semibold">
              {metric.label}
            </h4>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500">
                  Conversion Rate
                </p>

                <p className="mt-2 text-2xl font-bold text-blue-600">
                  {formatRate(metric.conversion)}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Drop-off Rate
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-800">
                  {formatRate(metric.dropoff)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-slate-500">
        Metrics are calculated from ordered session-based
        events. Test data only; not representative of
        real customer behavior.
      </p>
    </section>
  );
}

