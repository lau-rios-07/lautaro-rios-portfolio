"use client";

import type { ReactNode } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  /** Stagger delay in milliseconds — used for sequences like the hero's
   * name → role → tagline → CTA reveal, or a row of cards. */
  delayMs?: number;
  className?: string;
}

/**
 * Fade + 12px upward translate on scroll-into-view. This is the only
 * entrance animation pattern on the site (UX Spec, Section 10) — every
 * section reuses this component rather than defining its own transition.
 */
export function FadeIn({ children, delayMs = 0, className }: FadeInProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldReveal = isInView || prefersReducedMotion;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-signature motion-reduce:transition-none",
        shouldReveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className
      )}
      style={
        shouldReveal && !prefersReducedMotion
          ? { transitionDelay: `${delayMs}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
