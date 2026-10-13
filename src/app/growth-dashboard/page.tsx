
"use client";

import { useCallback, useEffect, useState } from "react";

type GrowthData = {
  success: boolean;
  totalEvents: number;
  productViews: number;
  addToCarts: number;
  addToWishlists: number;
  checkoutsStarted: number;
};

const metrics = [
  { key: "productViews", label: "Product Views", symbol: "◉", color: "text-blue-600", bg: "bg-blue-50" },
  { key: "addToCarts", label: "Add to Cart", symbol: "+", color: "text-emerald-600", bg: "bg-emerald-50" },
  { key: "addToWishlists", label: "Add to Wishlist", symbol: "♡", color: "text-rose-600", bg: "bg-rose-50" },
  { key: "checkoutsStarted", label: "Checkout Started", symbol: "→", color: "text-violet-600", bg: "bg-violet-50" },
] as const;

export default function GrowthDashboard() {
  const [data, setData] = useState<GrowthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAnalytics = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/growth-analytics", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch analytics");
      }

      const result: GrowthData = await response.json();

      if (!result.success) {
        throw new Error("Analytics API returned an error");
      }

      setData(result);
    } catch {
      setError("Unable to load analytics. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadAnalytics();
  }, [loadAnalytics]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-widest text-indigo-600">
              ORNEXA / GROWTH ENGINEERING
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Growth Analytics
              <span className="ml-3 text-indigo-600">V2</span>
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              Real event tracking · Upstash Redis · Ornexa Shop
            </p>
          </div>

          <button
            type="button"
            onClick={() => void loadAnalytics()}
            disabled={loading}
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-50"
          >
            {loading ? "Loading..." : "↻ Refresh Data"}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div
            role="alert"
            className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {/* Overview */}
        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold">Event Overview</h2>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
              All-time events
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.key}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    {metric.label}
                  </p>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl font-bold ${metric.bg} ${metric.color}`}
                  >
                    {metric.symbol}
                  </div>
                </div>

                <p className="mt-7 text-4xl font-bold tracking-tight">
                  {data
                    ? data[metric.key].toLocaleString("en-US")
                    : loading
                      ? "..."
                      : "—"}
                </p>

                <p className="mt-3 text-xs text-slate-400">
                  Recorded tracking events
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Total Events */}
        <section className="mt-8 rounded-2xl bg-slate-900 p-7 text-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-slate-300">
                Total Tracked Events
              </p>

              <p className="mt-3 text-4xl font-bold">
                {data
                  ? data.totalEvents.toLocaleString("en-US")
                  : loading
                    ? "..."
                    : "—"}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              {error ? "Data unavailable" : loading ? "Loading data" : "Data loaded"}
            </div>
          </div>
        </section>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-slate-400">
          Ornexa Growth Analytics V2 · Event-based analytics
        </p>
      </div>
    </main>
  );
}

