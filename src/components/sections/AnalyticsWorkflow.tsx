import { FadeIn } from "@/components/animation/FadeIn";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { SectionKicker } from "@/components/ui/SectionKicker";

const workflowSteps = [
  "Data Quality Assessment",
  "Data Cleaning",
  "Exploratory Data Analysis",
  "Business Hypothesis Validation",
  "SQL Analysis",
  "Dashboard Development",
  "Executive Reporting",
  "Business Recommendations",
];

export function AnalyticsWorkflow() {
  return (
    <section
      aria-label="Analytics workflow"
      className="relative overflow-hidden border-y border-hairline bg-beige/40"
    >
      {/* Same scoped, stronger grain treatment as ResultsStrip — see the
          comment there. This is the section explicitly named as the
          reference example ("How I Work"). */}
      <GrainTexture
        id="grain-workflow"
        opacity={0.06}
        blend="multiply"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-20">
        <FadeIn>
          <SectionKicker index="03" label="Methodology" />
          <h2 className="mt-3 font-display text-h2 font-semibold text-charcoal">How I Work</h2>
          <p className="mt-3 max-w-2xl text-warm-gray">
            The same eight-step process behind all four projects — named once here instead of
            repeated in every case study.
          </p>
        </FadeIn>

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <FadeIn key={step} delayMs={index * 60}>
              <li className="flex h-full flex-col gap-2 rounded-card bg-cream p-5 shadow-rest">
                <span className="font-mono text-sm text-gold-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-charcoal">{step}</span>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
