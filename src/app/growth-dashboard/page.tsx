
import { getGrowthOverview } from "@/lib/growthOverview";
import GrowthDashboardClient from "@/components/growth/GrowthDashboardClient";

export const dynamic = "force-dynamic";

export default async function GrowthDashboardPage() {
  const overview = await getGrowthOverview();

  return <GrowthDashboardClient overview={overview} />;
}

