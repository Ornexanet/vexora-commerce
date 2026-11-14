
import { getGrowthOverview } from "@/lib/growthOverview";
import { getConversionFunnel } from "@/lib/growthFunnel";
import GrowthDashboardClient from "@/components/growth/GrowthDashboardClient";

export const dynamic = "force-dynamic";

export default async function GrowthDashboardPage() {
  const [overview, funnel] = await Promise.all([
    getGrowthOverview(),
    getConversionFunnel(),
  ]);

  return (
    <GrowthDashboardClient
      overview={overview}
      funnel={funnel}
    />
  );
}

