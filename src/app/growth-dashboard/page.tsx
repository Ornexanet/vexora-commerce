
import { getGrowthOverview } from "@/lib/growthOverview";
import { getConversionFunnel } from "@/lib/growthFunnel";
import { getProductAnalytics } from "@/lib/productAnalytics";
import { getLandingAnalytics } from "@/lib/growthLandingAnalytics";
import { getExperimentAnalytics } from "@/lib/growthExperimentAnalytics";

import GrowthDashboardClient from "@/components/growth/GrowthDashboardClient";

export const dynamic = "force-dynamic";

export default async function GrowthDashboardPage() {
  const [
    overview,
    funnel,
    products,
    landing,
    experiments,
  ] = await Promise.all([
    getGrowthOverview(),
    getConversionFunnel(),
    getProductAnalytics(),
    getLandingAnalytics(),
    getExperimentAnalytics(),
  ]);

  return (
    <GrowthDashboardClient
      overview={overview}
      funnel={funnel}
      products={products}
      landing={landing}
      experiments={experiments}
    />
  );
}

