import { FadeIn } from "@/components/animation/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { projects } from "@/data/projects";

// Sorted by displayOrder rather than relying on projects.ts's array order —
// Telco leads (the 15x contract-churn gap is both the sharpest headline of
// the four and the one screenshot that visually proves its own claim in a
// single glance, via the Churn Rate by Contract Type chart). E-Commerce is
// second for its visual variety (treemap + line chart, not just bars) and
// the largest absolute figure ($21.78M). Northwind stays last — see its
// "pending-enrichment" badge.
const orderedProjects = [...projects].sort((a, b) => a.displayOrder - b.displayOrder);

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-20">
      <FadeIn>
        <SectionKicker index="01" label="Selected Work" />
        <h2 className="mt-3 font-display text-h2 font-semibold text-charcoal">
          Featured Projects
        </h2>
        <p className="mt-3 max-w-2xl text-warm-gray">
          Four end-to-end analyses, each validated against real business hypotheses and delivered
          as an executive-ready Power BI dashboard.
        </p>
      </FadeIn>

      <div className="mt-14 flex flex-col gap-10">
        {orderedProjects.map((project, i) => (
          <FadeIn key={project.slug} delayMs={i * 100}>
            <ProjectCard
              project={project}
              index={String(i + 1).padStart(2, "0")}
              reverse={i % 2 === 1}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
