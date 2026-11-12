import type { GrowthOverview } from "@/lib/growthAnalyticsTypes";

type Props = {
  data: GrowthOverview;
};

export default function OverviewKpis({ data }: Props) {
  const metrics = [
    { label: "Total Events", value: data.totalEvents },
    { label: "Tracked Sessions", value: data.trackedSessions },
    { label: "Product Views", value: data.productViews },
    { label: "Add-to-Cart Events", value: data.addToCartEvents },
  ];

  return (
    <section
      aria-label="Growth overview metrics"
      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
    >
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="rounded-xl border border-slate-200
            bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-medium text-slate-500">
            {metric.label}
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-900">
            {metric.value.toLocaleString("en-US")}
          </p>
        </article>
      ))}
    </section>
  );
}
