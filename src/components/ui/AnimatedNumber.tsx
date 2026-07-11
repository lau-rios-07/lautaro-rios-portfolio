"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
}

/**
 * Counts up from 0 to `value` once the number scrolls into view. Skips the
 * animation entirely (renders the final value immediately) if the user
 * prefers reduced motion. This is the one "earned" bit of polish flagged
 * in the UX spec, Section 4 — cheap to build, kept fast (under 1s) and
 * single-fire so it doesn't feel gimmicky on re-scroll.
 */
export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  durationMs = 900,
}: AnimatedNumberProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplayValue(Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, durationMs, prefersReducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
