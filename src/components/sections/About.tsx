import { FadeIn } from "@/components/animation/FadeIn";
import { SectionKicker } from "@/components/ui/SectionKicker";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-20">
      <div className="max-w-2xl">
        <FadeIn>
          <SectionKicker index="02" label="About" />
          <h2 className="mt-3 font-display text-h2 font-semibold text-charcoal">About</h2>
        </FadeIn>

        {/*
          Starting draft, not a finished bio — kept strictly to facts already
          established in this project (location, role, tools, job search
          status). Personalize with real background (education, how you got
          into data analytics, what draws you to it) before launch; none of
          that has been invented here.
        */}
        <FadeIn delayMs={80}>
          <div className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-charcoal sm:text-lg">
            <p>
              I&rsquo;m a Junior Data Analyst based in Argentina, focused on turning raw data into
              decisions a business can actually act on. My toolkit is SQL, Python, Power BI, and
              Excel — and every project in this portfolio follows the same discipline: validate
              the hypothesis first, then build the dashboard, not the other way around.
            </p>
            <p>
              I also use AI tools like Claude and ChatGPT to review code and validate insights
              faster — they support the analysis, they don&rsquo;t replace it.
            </p>
            <p>
              I&rsquo;m currently looking for my first full-time analyst role, and I&rsquo;m
              always glad to talk through the how and why behind any of the work here.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
