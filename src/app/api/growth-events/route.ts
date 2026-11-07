
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const allowedEvents = [
  "product_viewed",
  "add_to_cart",
  "add_to_wishlist",
  "checkout_started",
] as const;

export async function POST(request: NextRequest) {
  try {
    
const rawBody = await request.text();

if (rawBody.length > 2048) {
  return NextResponse.json(
    { error: "Request too large" },
    { status: 413 }
  );
}

const body = JSON.parse(rawBody);



    const { event_id, event_name, session_id, product_id } = body;

    if (
        typeof event_id !== "string" ||
   !RegExp(
    "^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",
    "i"
     ).test(event_id) ||

      typeof event_name !== "string" ||
      !allowedEvents.some((event) => event === event_name) ||
      typeof session_id !== "string" ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(session_id) ||
      (product_id !== undefined &&
        (!Number.isInteger(product_id) || product_id <= 0))
    ) {
      return NextResponse.json(
        { error: "Invalid event data" },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from("growth_events")
      .insert({
        event_id,
        event_name,
        session_id,
        product_id: product_id ?? null,
      });

     if (error) {
        
     if (
     error.code === "23505" &&
     error.message.includes("growth_events_event_id_unique")
     ) {


      return NextResponse.json(
      { success: true, duplicate: true },
      { status: 200 }
      );
      }
 
      console.error("Growth event insert failed:", error.message);

      return NextResponse.json(
        { error: "Failed to save event" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

