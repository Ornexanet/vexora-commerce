
"use client";

import { useState } from "react";

import type {
  GrowthOverview,
  ConversionFunnel as ConversionFunnelData,
} from "@/lib/growthAnalyticsTypes";

import OverviewKpis from "@/components/growth/OverviewKpis";
import ConversionFunnel from "@/components/growth/ConversionFunnel";

type Props = {
  overview: GrowthOverview;
  funnel: ConversionFunnelData;
};

const modules = [
  { id: "overview", label: "Overview", icon: "◫" },
  { id: "funnels", label: "Conversion Funnels", icon: "▽" },
  { id: "products", label: "Product Analytics", icon: "▣" },
  { id: "landing", label: "Landing Pages", icon: "↗" },
  { id: "experiments", label: "A/B Experiments", icon: "⚗" },
  { id: "quality", label: "Data Quality", icon: "✓" },
];

export default function GrowthDashboardClient({
  overview,
  funnel,
}: Props) {
  const [activeModule, setActiveModule] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentModule = modules.find(
    (module) => module.id === activeModule
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Close navigation"
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64
            bg-slate-950 text-white transition-transform
            lg:static lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="border-b border-slate-800 px-6 py-7">
            <h1 className="text-2xl font-bold tracking-wider">
              ORNEXA
            </h1>

            <p className="mt-1 text-xs tracking-widest text-slate-400">
              GROWTH INTELLIGENCE
            </p>
          </div>

          <nav
            aria-label="Dashboard modules"
            className="space-y-2 p-4"
          >
            {modules.map((module) => (
              <button
                key={module.id}
                type="button"
                onClick={() => {
                  setActiveModule(module.id);
                  setSidebarOpen(false);
                }}
                aria-current={
                  activeModule === module.id
                    ? "page"
                    : undefined
                }
                className={`flex w-full items-center gap-3
                  rounded-lg px-4 py-3 text-left text-sm
                  transition-colors ${
                    activeModule === module.id
                      ? "bg-blue-600 font-semibold text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
              >
                <span
                  aria-hidden="true"
                  className="w-5 text-center"
                >
                  {module.icon}
                </span>

                {module.label}
              </button>
            ))}
          </nav>

          <div className="px-6 py-5 text-xs text-slate-500">
            Ornexa Growth Intelligence V1
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header
            className="flex items-center justify-between
              border-b border-slate-200 bg-white
              px-5 py-5 lg:px-8"
          >
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="rounded-lg border border-slate-200
                  px-3 py-2 lg:hidden"
                aria-label="Open navigation"
                onClick={() => setSidebarOpen(true)}
              >
                ☰
              </button>

              <div>
                <h2 className="text-xl font-bold lg:text-2xl">
                  {currentModule?.label}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Growth Analytics &amp; Experimentation
                </p>
              </div>
            </div>

            <span
              className="rounded-full bg-slate-100
                px-3 py-1 text-xs font-medium text-slate-600"
            >
              Dashboard V1
            </span>
          </header>

          <main className="flex-1 p-5 lg:p-8">
            <div className="mx-auto max-w-7xl">
              {activeModule === "overview" ? (
                <OverviewKpis data={overview} />
              ) : activeModule === "funnels" ? (
                <ConversionFunnel data={funnel} />
              ) : (
                <section
                  className="rounded-xl border
                    border-slate-200 bg-white
                    p-8 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">
                    {currentModule?.label}
                  </h3>

                  <p className="mt-3 text-sm text-slate-500">
                    Analytics integration pending.
                  </p>
                </section>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

