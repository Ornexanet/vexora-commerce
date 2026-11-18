
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const allowedEvents = [
  "experiment_exposure",
  "experiment_cta_clicked",
] as const;

const allowedVariants = ["A", "B"] as const;

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();

    if (rawBody.length > 2048) {
      return NextResponse.json(
        { error: "Request too large" },
        { status: 413 }
      );
    }

    const body: unknown = JSON.parse(rawBody);

    if (
      typeof body !== "object" ||
      body === null ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const {
      event_id,
      experiment_id,
      session_id,
      variant,
      event_name,
    } = body as Record<string, unknown>;

    if (
      typeof event_id !== "string" ||
      !uuidRegex.test(event_id) ||
      typeof session_id !== "string" ||
      !uuidRegex.test(session_id) ||
      typeof experiment_id !== "string" ||
      experiment_id.length === 0 ||
      experiment_id.length > 100 ||
      !/^[a-zA-Z0-9_-]+$/.test(experiment_id) ||
      typeof variant !== "string" ||
      !allowedVariants.some((v) => v === variant) ||
      typeof event_name !== "string" ||
      !allowedEvents.some((event) => event === event_name)
    ) {
      return NextResponse.json(
        { error: "Invalid experiment event data" },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from("experiment_events")
      .insert({
        event_id,
        experiment_id,
        session_id,
        variant,
        event_name,
      });

    if (error) {
      if (error.code === "23505") {
        const isEventIdDuplicate =
          error.message.includes("experiment_events_pkey");

        const isExposureDuplicate =
          error.message.includes(
            "experiment_exposure_once_per_session"
          );

        if (isEventIdDuplicate || isExposureDuplicate) {
          return NextResponse.json(
            { success: true, duplicate: true },
            { status: 200 }
          );
        }
      }

      console.error(
        "Experiment event insert failed:",
        error.message
      );

      return NextResponse.json(
        { error: "Failed to save experiment event" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Experiment API error:", error);

    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

