import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";


import {
  createGrowthSession,
  growthSessionCookie,
  growthSessionMaxAge,
} from "@/lib/growth-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    const secret = process.env.GROWTH_DASHBOARD_PASSWORD;


    if (!secret) {
      return NextResponse.json(
        { success: false, message: "Authentication not configured" },
        { status: 503 }
      );
    }

    if (typeof password !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const provided = Buffer.from(password);
    const expected = Buffer.from(secret);

    const valid =
      provided.length === expected.length &&
      timingSafeEqual(provided, expected);

    if (!valid) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    response.cookies.set(
      growthSessionCookie,
      createGrowthSession(),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: growthSessionMaxAge,
      }
    );

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
