"use client";
import { Timer } from "@/lib/icons";
import { useEffect, useRef, useState } from "react";

const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

function formatRemaining(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => n.toString().padStart(2, "0");

const Countdown = () => {
  // target timestamp (ms). When it passes, we'll reset it to now + FIVE_DAYS_MS
  const [target, setTarget] = useState<number>(() => Date.now() + FIVE_DAYS_MS);
  const [remaining, setRemaining] = useState<number>(FIVE_DAYS_MS);
  const tickRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;

    const tick = () => {
      const now = Date.now();
      let diff = target - now;
      if (diff <= 0) {
        // reset target to now + FIVE_DAYS_MS and show full 5 days immediately
        const newTarget = now + FIVE_DAYS_MS;
        setTarget(newTarget);
        diff = FIVE_DAYS_MS;
      }
      if (mounted) setRemaining(diff);
      tickRef.current = window.setTimeout(tick, 1000);
    };

    tick();

    return () => {
      mounted = false;
      if (tickRef.current) clearTimeout(tickRef.current);
    };
  }, [target]);

  const { days, hours, minutes, seconds } = formatRemaining(remaining);

  return (
    <div className="rounded-2xl lg:px-7.5 px-3 py-4 bg-[#FFEAEA] text-[#ED1B1B] flex items-center h-13.5">
      <Timer />
      <div className="lg:pl-3.5 pl-2 flex items-center gap-2.5">
        <b className="lg:text-lg sm:text-base text-sm">{days} days</b>
        <b>:</b>
        <b className="lg:text-lg sm:text-base text-sm">{pad(hours)} hrs</b>
        <b>:</b>
        <b className="lg:text-lg sm:text-base text-sm">{pad(minutes)} mins</b>
        <b>:</b>
        <b className="lg:text-lg sm:text-base text-sm">{pad(seconds)} secs</b>
      </div>
    </div>
  );
};

export default Countdown;
