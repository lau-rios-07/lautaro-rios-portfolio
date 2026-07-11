import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small mono-type tag used for technology names. JetBrains Mono here (vs.
 * Inter everywhere else) is a deliberate, restrained "code" signal — the
 * one place on the site besides the Analytics Workflow step numbers where
 * the mono face appears.
 */
export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-beige px-3 py-1 font-mono text-sm font-medium text-charcoal",
        className
      )}
    >
      {children}
    </span>
  );
}
