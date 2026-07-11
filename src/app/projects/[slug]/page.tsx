import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animation/FadeIn";
import { DashboardPlaceholder } from "@/components/ui/DashboardPlaceholder";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { Pill } from "@/components/ui/Pill";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  // Next.js 16: dynamic route params are async — must be awaited.
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.outcomeHeadline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <article className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-32 lg:px-20">
      <FadeIn>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-warm-gray transition-colors hover:text-gold-dark"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All projects
        </Link>
      </FadeIn>

      {/* ---------- Masthead: title + pull-quote outcome + meta ---------- */}
      <FadeIn delayMs={80}>
        <header className="mt-8 max-w-3xl">
          {project.status === "pending-enrichment" && (
            <span className="mb-4 inline-flex w-fit items-center rounded-full border border-gold/40 bg-beige px-3 py-1 font-mono text-xs font-medium text-gold-dark">
              Pipeline project — case study being enriched
            </span>
          )}
          <h1 className="font-display text-h1 font-semibold leading-[1.05] text-charcoal">
            {project.title}
          </h1>

          {/* Pull-quote treatment for the outcome headline — the same field
              that headlines the scan-layer card, now given real room. */}
          <p className="mt-5 font-display text-2xl italic leading-snug text-gold-dark sm:text-3xl">
            &ldquo;{project.outcomeHeadline}&rdquo;
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ul className="flex flex-wrap gap-2">
              {caseStudy.technologiesUsed.map((tech) => (
                <li key={tech}>
                  <Pill>{tech}</Pill>
                </li>
              ))}
            </ul>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-gold-dark underline-offset-4 hover:underline"
            >
              View on GitHub
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </header>
      </FadeIn>

      {/* ---------- The dashboard, as the visual centerpiece ---------- */}
      {/* Full width of the page, not the narrow reading column — this is
          deliberately the largest visual element on the page. aspect-[9/5]
          matches the real Power BI exports (1.76–1.92:1 across all 12
          screenshots) far more closely than a generic 16:9, and
          object-contain on a cream fill means a KPI number or chart label
          near the image's edge never gets cropped — at this size, on the
          page the user is calling the "visual centerpiece," that matters
          more than filling the box edge-to-edge. */}
      <FadeIn delayMs={160}>
        <div className="relative mt-12 aspect-[9/5] w-full overflow-hidden rounded-card bg-cream shadow-hover">
          {project.dashboardImageSrc ? (
            <Image
              src={project.dashboardImageSrc}
              alt={project.dashboardImageAlt}
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-contain"
              preload
            />
          ) : (
            <DashboardPlaceholder expectedPath={`/images/projects/${project.slug}.png`} />
          )}
        </div>
      </FadeIn>

      {/* ---------- Scannable highlights ---------- */}
      <FadeIn delayMs={220}>
        <div className="relative mt-12 max-w-3xl overflow-hidden rounded-card border border-hairline bg-beige/60 p-6 sm:p-8">
          <GrainTexture
            id={`grain-takeaways-${project.slug}`}
            opacity={0.06}
            blend="multiply"
            className="pointer-events-none absolute inset-0 h-full w-full"
          />
          <p className="relative font-mono text-xs font-medium uppercase tracking-[0.2em] text-warm-gray">
            Key takeaways
          </p>
          <ul className="relative mt-4 flex flex-col gap-2.5">
            {project.keyTakeaways.map((takeaway) => (
              <li key={takeaway} className="flex gap-3 text-charcoal">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {takeaway}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* ---------- Framing: problem + dataset, side by side ---------- */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <CaseStudySection title="Business Problem" delayMs={0}>
          <p>{caseStudy.businessProblem}</p>
        </CaseStudySection>
        <CaseStudySection title="Dataset Overview" delayMs={40}>
          <p>{caseStudy.datasetOverview}</p>
        </CaseStudySection>
      </div>

      {/* ---------- Narrative: the sequential how — narrower reading
          column, deliberately, since this is where actual reading (not
          scanning) happens. ---------- */}
      <div className="mt-16 flex max-w-3xl flex-col gap-12">
        <CaseStudySection title="Business Questions" delayMs={0}>
          <ol className="flex flex-col gap-2">
            {caseStudy.businessQuestions.map((question) => (
              <li key={question} className="flex gap-3">
                <span className="font-mono text-sm text-gold-dark">→</span>
                <span>{question}</span>
              </li>
            ))}
          </ol>
        </CaseStudySection>

        <CaseStudySection title="Methodology" delayMs={40}>
          <p>{caseStudy.methodology}</p>
        </CaseStudySection>

        <CaseStudySection title="SQL Analysis" delayMs={80}>
          <p>{caseStudy.sqlAnalysis}</p>
        </CaseStudySection>

        <CaseStudySection title="Dashboard Preview" delayMs={120}>
          <p>{caseStudy.dashboardPreview}</p>
        </CaseStudySection>
      </div>

      {/* Additional screenshots — a gallery beneath the Dashboard Preview
          description, using the same aspect ratio and object-contain
          treatment as the hero image above for visual consistency. */}
      {project.additionalImages && project.additionalImages.length > 0 && (
        <FadeIn delayMs={160}>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project.additionalImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-card shadow-rest">
                <div className="relative aspect-[9/5] w-full bg-cream">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                {image.caption && (
                  <figcaption className="bg-beige px-4 py-3 text-sm text-warm-gray">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </FadeIn>
      )}

      {/* ---------- Payoff: findings + actions, side by side ---------- */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <CaseStudySection title="Key Insights" delayMs={0}>
          <ul className="flex flex-col gap-3">
            {caseStudy.keyInsights.map((insight) => (
              <li key={insight} className="flex gap-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Business Recommendations" delayMs={40}>
          <ul className="flex flex-col gap-3">
            {caseStudy.recommendations.map((recommendation) => (
              <li key={recommendation} className="flex gap-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>
      </div>

      <FadeIn delayMs={80}>
        <div className="mt-16 flex flex-col items-start gap-4 rounded-card bg-charcoal p-8 text-cream sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <p className="text-lg font-medium">Want to see the full code behind this analysis?</p>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-card bg-cream px-5 py-2.5 text-sm font-semibold text-charcoal transition-all duration-200 ease-signature hover:bg-beige motion-safe:hover:-translate-y-0.5"
          >
            View on GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </FadeIn>
    </article>
  );
}

interface CaseStudySectionProps {
  title: string;
  delayMs: number;
  children: React.ReactNode;
}

function CaseStudySection({ title, delayMs, children }: CaseStudySectionProps) {
  return (
    <FadeIn delayMs={delayMs}>
      <section>
        <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
          {title}
        </h2>
        <div className="mt-3 flex flex-col gap-3 leading-relaxed text-charcoal">
          {children}
        </div>
      </section>
    </FadeIn>
  );
}
