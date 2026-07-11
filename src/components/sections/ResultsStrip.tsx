import { FadeIn } from "@/components/animation/FadeIn";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { resultStats } from "@/data/results-stats";

export function ResultsStrip() {
  return (
    <section
      aria-label="Results at a glance"
      className="relative overflow-hidden border-y border-hairline bg-beige/40"
    >
      {/* Beige sections get this second, stronger grain layer on top of the
          sitewide base layer — warm surfaces hold visible texture better
          than the near-white page background, per the brief. Scoped to
          this section only (not viewport-fixed like GrainOverlay), so it
          never bleeds onto the cream sections above/below it. */}
      <GrainTexture
        id="grain-results-strip"
        opacity={0.06}
        blend="multiply"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:px-10 md:grid-cols-4 lg:px-20">
        {resultStats.map((stat, index) => (
          <FadeIn key={stat.label} delayMs={index * 80}>
            <div className="text-center md:text-left">
              <p className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-warm-gray">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
