"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GrowthLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/growth-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Invalid password. Please try again.");
        return;
      }

      const result = await response.json();

      if (!result.success) {
        setError("Login failed. Please try again.");
        return;
      }

      router.replace("/growth-dashboard");
      router.refresh();
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-indigo-400">
            ORNEXA
          </p>

          <h1 className="text-3xl font-bold text-white">
            Growth Analytics V2
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            Private Growth Engineering Dashboard
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Dashboard Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />

          {error && (
            <p role="alert" className="mt-4 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Access Dashboard"}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-slate-500">
          Ornexa Growth Engineering · Private Access
        </p>
      </div>
    </main>
  );
}
