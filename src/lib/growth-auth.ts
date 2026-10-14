import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "ornexa_growth_session";
const SESSION_DURATION = 60 * 60 * 8; // 8 hours

function getSecret(): string {
  const secret = process.env.GROWTH_DASHBOARD_SECRET;

  if (!secret) {
    throw new Error("GROWTH_DASHBOARD_SECRET is missing");
  }

  return secret;
}

function sign(value: string): string {
  return createHmac("sha256", getSecret())
    .update(value)
    .digest("hex");
}

export function createGrowthSession(): string {
  const expiresAt =
    Math.floor(Date.now() / 1000) + SESSION_DURATION;

  const payload = String(expiresAt);
  return `${payload}.${sign(payload)}`;
}

export function verifyGrowthSession(
  token: string | undefined
): boolean {
  if (!token) return false;

  const [payload, signature, extra] = token.split(".");

  if (!payload || !signature || extra) return false;
  if (!/^\d+$/.test(payload)) return false;
  if (!/^[a-f0-9]{64}$/.test(signature)) return false;

  const expiresAt = Number(payload);

  if (
    !Number.isSafeInteger(expiresAt) ||
    expiresAt <= Math.floor(Date.now() / 1000)
  ) {
    return false;
  }

  const expected = Buffer.from(sign(payload), "hex");
  const received = Buffer.from(signature, "hex");

  return timingSafeEqual(expected, received);
}

export const growthSessionCookie = COOKIE_NAME;
export const growthSessionMaxAge = SESSION_DURATION;
