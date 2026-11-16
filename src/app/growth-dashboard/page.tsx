
import { getGrowthOverview } from "@/lib/growthOverview";
import { getConversionFunnel } from "@/lib/growthFunnel";
import { getProductAnalytics } from "@/lib/productAnalytics";
import { getLandingAnalytics } from "@/lib/growthLandingAnalytics";

import GrowthDashboardClient from "@/components/growth/GrowthDashboardClient";

export const dynamic = "force-dynamic";

export default async function GrowthDashboardPage() {
  const [overview, funnel, products, landing] = await Promise.all([
    getGrowthOverview(),
    getConversionFunnel(),
    getProductAnalytics(),
    getLandingAnalytics(),
  ]);

  return (
    <GrowthDashboardClient
      overview={overview}
      funnel={funnel}
      products={products}
      landing={landing}
    />
  );
}

