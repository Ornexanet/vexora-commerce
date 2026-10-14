import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  growthSessionCookie,
  verifyGrowthSession,
} from "@/lib/growth-auth";

import GrowthDashboardClient from "./GrowthDashboardClient";

export default async function GrowthDashboardPage() {
  const cookieStore = await cookies();

  const session = cookieStore.get(growthSessionCookie)?.value;

  if (!verifyGrowthSession(session)) {
    redirect("/growth-login");
  }

  return <GrowthDashboardClient />;
}
