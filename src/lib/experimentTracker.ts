
import type { ExperimentVariant } from "@/lib/pixelExperiment";

export type ExperimentEventName =
  | "experiment_exposure"
  | "experiment_cta_clicked";

const EXPERIMENT_ID = "pixel11pro_cta_copy_v1";
const SESSION_KEY = "ornexa_growth_session";

export function trackExperimentEvent(
  eventName: ExperimentEventName,
  variant: ExperimentVariant
): void {
  let sessionId = sessionStorage.getItem(SESSION_KEY);

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }

  const event = {
    event_id: crypto.randomUUID(),
    experiment_id: EXPERIMENT_ID,
    session_id: sessionId,
    variant: variant,
    event_name: eventName,
  };

  fetch("/api/experiment-events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((response) => {
      if (!response.ok) {
        console.error(
          "Experiment tracking failed:",
          response.status
        );
      }
    })
    .catch((error) => {
      console.error("Experiment tracking failed:", error);
    });
}

