
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const EXPERIMENT_ID = "pixel11pro_cta_copy_v1";

export type ExperimentVariantMetrics = {
  variant: "A" | "B";
  exposureSessions: number;
  clickSessions: number;
  ctr: number;
};

export type ExperimentAnalytics = {
  experimentId: string;
  exposureSessions: number;
  clickSessions: number;
  overallCtr: number;
  variants: ExperimentVariantMetrics[];
};

type ExperimentEvent = {
  session_id: string;
  variant: "A" | "B";
  event_name: string;
};

export async function getExperimentAnalytics(): Promise<ExperimentAnalytics> {
  const { data, error } = await supabaseAdmin
    .from("experiment_events")
    .select("session_id, variant, event_name")
    .eq("experiment_id", EXPERIMENT_ID);

  if (error) {
    throw new Error(`Failed to load experiment analytics: ${error.message}`);
  }

  const events = (data ?? []) as ExperimentEvent[];

  const variants: ExperimentVariantMetrics[] = (["A", "B"] as const).map(
    (variant) => {
      const exposureSessions = new Set(
        events
          .filter(
            (event) =>
              event.variant === variant &&
              event.event_name === "experiment_exposure"
          )
          .map((event) => event.session_id)
      );

      const clickSessions = new Set(
        events
          .filter(
            (event) =>
              event.variant === variant &&
              event.event_name === "experiment_cta_clicked" &&
              exposureSessions.has(event.session_id)
          )
          .map((event) => event.session_id)
      );

      return {
        variant,
        exposureSessions: exposureSessions.size,
        clickSessions: clickSessions.size,
        ctr:
          exposureSessions.size > 0
            ? Number(
                (
                  (clickSessions.size / exposureSessions.size) *
                  100
                ).toFixed(2)
              )
            : 0,
      };
    }
  );

  const exposureSessions = variants.reduce(
    (total, variant) => total + variant.exposureSessions,
    0
  );

  const clickSessions = variants.reduce(
    (total, variant) => total + variant.clickSessions,
    0
  );

  return {
    experimentId: EXPERIMENT_ID,
    exposureSessions,
    clickSessions,
    overallCtr:
      exposureSessions > 0
        ? Number(((clickSessions / exposureSessions) * 100).toFixed(2))
        : 0,
    variants,
  };
}

