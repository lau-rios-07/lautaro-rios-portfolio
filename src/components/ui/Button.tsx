import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  download?: boolean;
  external?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-card px-6 py-3 text-base font-semibold transition-all duration-200 ease-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark motion-safe:hover:-translate-y-0.5";

// Exactly two button styles, per the design system — no third variant.
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-charcoal text-cream shadow-rest hover:bg-charcoal-dark hover:shadow-hover",
  secondary: "border border-charcoal bg-transparent text-charcoal hover:bg-beige",
};

/**
 * Renders as a plain <a> for in-page anchors (#projects) and file/external
 * links (résumé download), or a Next <Link> for real route changes. Every
 * CTA on the site today is an anchor or a download — the Link path is here
 * for the /projects/[slug] case study pages coming in a later step.
 */
export function Button({
  children,
  href,
  variant = "primary",
  className,
  download = false,
  external = false,
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);
  const isInPageAnchor = href.startsWith("#");

  if (isInPageAnchor || download || external) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
