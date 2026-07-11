import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DashboardPlaceholder } from "@/components/ui/DashboardPlaceholder";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  /** Editorial index shown above the headline, e.g. "01". */
  index: string;
  /** Alternates the screenshot side down the page — UX Spec, Section 5. */
  reverse?: boolean;
}

export function ProjectCard({ project, index, reverse = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-dark"
    >
      <article
        className={cn(
          "flex flex-col overflow-hidden rounded-card bg-beige shadow-rest transition-all duration-300 ease-signature group-hover:-translate-y-1 group-hover:shadow-hover lg:flex-row",
          reverse && "lg:flex-row-reverse"
        )}
      >
        {/* Screenshot panel — ~45% width from lg (1024px) up. aspect-[9/5]
            (1.8:1) matches the real dashboard exports closely (they range
            1.76–1.92:1 across all 12 screenshots), so object-contain only
            ever needs a sliver of letterboxing — never a hard crop that
            could cut off a KPI number or chart label. Fixed ratio at every
            breakpoint (not just mobile) so desktop doesn't stretch the
            image to match whatever height the text content happens to be. */}
        <div className="relative aspect-[9/5] w-full shrink-0 overflow-hidden bg-cream lg:w-[45%]">
          {project.dashboardImageSrc ? (
            <Image
              src={project.dashboardImageSrc}
              alt={project.dashboardImageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain transition-transform duration-500 ease-signature group-hover:scale-[1.03]"
            />
          ) : (
            <DashboardPlaceholder expectedPath={`/images/projects/${project.slug}.png`} />
          )}
        </div>

        {/* Content panel — gets the same stronger beige grain treatment as
            Results Strip / How I Work, scoped to just this panel (not the
            image area above, which is a screenshot, not a paper surface). */}
        <div className="relative flex flex-1 flex-col justify-center gap-4 overflow-hidden p-8 sm:p-10 lg:p-12">
          <GrainTexture
            id={`grain-card-${project.slug}`}
            opacity={0.06}
            blend="multiply"
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
          <div className="relative flex items-center justify-between gap-4">
            <span className="font-mono text-sm text-warm-gray/60">{index}</span>
            {project.status === "pending-enrichment" && (
              <span className="inline-flex w-fit items-center rounded-full border border-gold/40 bg-cream px-3 py-1 font-mono text-xs font-medium text-gold-dark">
                Pipeline project — case study being enriched
              </span>
            )}
          </div>

          <h3 className="relative font-display text-2xl font-semibold leading-tight text-charcoal sm:text-3xl">
            {project.outcomeHeadline}
          </h3>

          <p className="relative text-warm-gray">{project.contextSentence}</p>

          <ul className="relative flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech}>
                <Pill>{tech}</Pill>
              </li>
            ))}
          </ul>

          <span className="relative inline-flex items-center gap-1.5 font-medium text-gold-dark">
            View Case Study
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 ease-signature group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
