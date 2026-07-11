import type { ResultStat } from "@/types/site";

/**
 * Every value below is sourced directly from the four GitHub repo analyses,
 * not estimated. Sourcing notes:
 * - 4 projects: the four repos analyzed.
 * - 22 business hypotheses validated: 10 (E-Commerce) + 6 (Marketing) + 6
 *   (Telco Churn), counted from each README. Northwind has no stated
 *   hypothesis framework yet, so it isn't included in this count — revisit
 *   once that repo is enriched.
 * - 4 Power BI dashboards: one per project, each repo confirms a Power BI
 *   deliverable.
 * - "Up to 15x": the Telco Churn finding (month-to-month churn 42.7% vs.
 *   2.8% for two-year contracts) — the single strongest number across all
 *   four projects.
 */
export const resultStats: ResultStat[] = [
  { value: 4, label: "Projects Delivered" },
  { value: 22, label: "Business Hypotheses Validated" },
  { value: 4, label: "Power BI Dashboards Built" },
  { value: 15, prefix: "Up to ", suffix: "x", label: "Signal Strength Identified" },
];
