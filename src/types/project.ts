export type ProjectStatus = "complete" | "pending-enrichment";

export interface ProjectCaseStudy {
  businessProblem: string;
  datasetOverview: string;
  businessQuestions: string[];
  methodology: string;
  sqlAnalysis: string;
  dashboardPreview: string;
  keyInsights: string[];
  recommendations: string[];
  technologiesUsed: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  /** Optional short caption shown under the image on the case study page. */
  caption?: string;
}

export interface Project {
  slug: string;
  /** The proper project name — used as the H1 on the case study page. */
  title: string;
  /** The numeric, specific hook shown on the scan-layer card. */
  outcomeHeadline: string;
  /** One supporting sentence for the card — never more, per UX Spec Section 5. */
  contextSentence: string;
  /** Short tag list shown on the card. */
  tech: string[];
  githubUrl: string;
  /** Absent until a real screenshot is supplied — see DashboardPlaceholder.
   *  This is the single hero image used on the scan-layer card. */
  dashboardImageSrc?: string;
  dashboardImageAlt: string;
  /** Optional extra screenshots woven through the case study's Dashboard
   *  Preview section, beyond the one hero image above. Empty/absent for
   *  projects with only one screenshot. */
  additionalImages?: ProjectImage[];
  /** Controls Featured Projects ordering (ascending). Independent of the
   *  projects.ts array order, so re-sequencing the homepage never requires
   *  moving large blocks of case-study content around. */
  displayOrder: number;
  status: ProjectStatus;
  keyTakeaways: string[];
  caseStudy: ProjectCaseStudy;
}
