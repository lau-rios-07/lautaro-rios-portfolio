import { ArrowRight, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_15%_0%,var(--color-beige)_0%,var(--color-cream)_60%)]"
    >
      {/* Oversized ghost initial — the "subtle depth" device from the Art
          Direction pass. Extremely low opacity, purely decorative, sits
          behind the text column. This is the one place the site allows
          itself a large gesture, and it's still quiet enough to lose on
          a quick glance — which is exactly the point. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[4vw] -top-[6vw] select-none font-display text-[42vw] font-semibold leading-none text-charcoal/[0.035] sm:text-[32vw] lg:-right-[2vw] lg:text-[26vw]"
      >
        L
      </span>

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36 lg:px-20 lg:py-48">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">
              Portfolio
            </p>
          </FadeIn>

          <FadeIn delayMs={60}>
            <h1 className="mt-4 font-display text-display font-semibold leading-[0.98] tracking-tight text-charcoal">
              {siteConfig.name}
            </h1>
          </FadeIn>

          {/* The one gold accent moment in the hero — UX Spec, Section 2. */}
          <FadeIn delayMs={140}>
            <div className="my-6 h-[3px] w-20 rounded-full bg-gold" aria-hidden="true" />
          </FadeIn>

          <FadeIn delayMs={220}>
            <p className="text-xl font-medium text-charcoal sm:text-2xl">{siteConfig.role}</p>
          </FadeIn>

          <FadeIn delayMs={300}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-warm-gray sm:text-lg">
              {siteConfig.tagline}
            </p>
          </FadeIn>

          <FadeIn delayMs={380}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {/* The primary CTA is the literal bridge to Featured Projects
                  (UX Spec, Section 2, "Leads to Projects") — the arrow nudge
                  on hover reinforces that this button moves you forward,
                  not just a generic click. */}
              <Button href="#projects" variant="primary" className="group/cta">
                View Projects
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 ease-signature group-hover/cta:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </FadeIn>

          <FadeIn delayMs={460}>
            <a
              href={siteConfig.resumeUrl}
              download
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-warm-gray underline decoration-hairline underline-offset-4 transition-colors hover:text-gold-dark"
            >
              Download Résumé
            </a>
          </FadeIn>
        </div>

        {/* Scroll cue — a small, functional nudge toward Projects, not
            decoration for its own sake. Hidden on short mobile viewports
            where it would crowd the CTA row; motion-safe only. */}
        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-warm-gray transition-colors hover:text-gold-dark motion-safe:animate-bounce sm:flex"
        >
          <span className="text-xs font-medium uppercase tracking-wide">Scroll</span>
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
