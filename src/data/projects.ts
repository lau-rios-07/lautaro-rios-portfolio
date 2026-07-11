import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ecommerce-customer-behavior",
    displayOrder: 2,
    title: "E-Commerce Customer Behavior & Revenue Analysis",
    outcomeHeadline: "Electronics drives 48% of revenue; discounted orders run 49% higher in value",
    contextSentence:
      "Analyzed 17,000+ orders to find where revenue concentration and growth opportunities actually live.",
    tech: ["SQL", "Python", "Excel", "Power BI"],
    githubUrl:
      "https://github.com/lau-rios-07/E-Commerce-Customer-Behavior-Revenue-Product-Performance-Analysis",
    dashboardImageAlt:
      "Power BI executive overview dashboard showing $21.78M total revenue, 17,049 orders, and revenue by category treemap led by Electronics",
    dashboardImageSrc: "/images/projects/ecommerce-customer-behavior.png",
    additionalImages: [
      {
        src: "/images/projects/ecommerce-customer-behavior-2.png",
        alt: "Customer behavior dashboard page showing engagement segments, discount impact on spending, and delivery speed ratings",
        caption: "Page 2 — Customer Behavior: engagement, discounting, and delivery satisfaction patterns.",
      },
      {
        src: "/images/projects/ecommerce-customer-behavior-3.png",
        alt: "Product performance dashboard page showing average order value by category and the product performance matrix",
        caption: "Page 3 — Product Performance: category-level AOV, revenue share, and the revenue-vs-orders matrix.",
      },
    ],
    status: "complete",
    keyTakeaways: [
      "Electronics drives ~48% of revenue — flagged as a single-category dependency risk",
      "Top 4 cities generate ~63% of revenue — geographic concentration identified",
      "Discounted orders run 49% higher in value — informs discount targeting strategy",
      "Q1 revenue nearly doubles other quarters — direct input for inventory/marketing timing",
      "Engagement level correlates with order value — supports the case for UX/retention investment",
    ],
    caseStudy: {
      businessProblem:
        "Leadership needed a clear, evidence-based view of what actually drives revenue and customer spending. Engagement, discounting, geography, and seasonality were all suspected factors — none had been formally tested against the data.",
      datasetOverview:
        "Kaggle's E-Commerce Customer Behavior dataset: 17,049 orders across 5,000 customers, covering product category, device, payment method, session engagement level, discount usage, delivery city, delivery time, and customer satisfaction rating.",
      businessQuestions: [
        "Does product category concentration create revenue risk?",
        "Does customer engagement level correlate with order value?",
        "Do discounted orders differ meaningfully in value from full-price orders?",
        "Is revenue geographically concentrated across cities?",
        "Does payment method correlate with order value?",
        "Is there meaningful seasonal variation in revenue?",
      ],
      methodology:
        "An Excel-based data quality audit caught nulls, duplicates, and inconsistent categorical values first. Exploratory analysis in Python (Pandas) surfaced initial distributions and patterns. Ten business hypotheses — including the six above — were then formally validated in SQL, and the confirmed findings were built into a 3-page interactive Power BI dashboard for executive review.",
      sqlAnalysis:
        "SQL queries aggregated revenue and average order value across category, engagement tier, discount status, city, and payment-method segments, run against the full 17,049-order dataset rather than a sample, to confirm which patterns were statistically real rather than assumed.",
      dashboardPreview:
        "A 3-page interactive Power BI dashboard — Executive Overview, Customer Behavior, and Product Performance — built to translate the validated findings into a format a business stakeholder can act on directly.",
      keyInsights: [
        "Electronics generates 48.13% of total revenue — the single largest category by a wide margin",
        "The top 4 cities account for approximately 63% of revenue — a notable geographic concentration",
        "High-engagement customers average $1,305 per order vs. $1,225 for low-engagement customers (+6.5%)",
        "Discounted orders average $1,993 vs. $1,338 for full-price orders (+49%)",
        "Credit card is the highest-value payment method by average order value ($1,334)",
        "Q1 revenue exceeds $2.7M per month, compared to $1.4M–$1.6M in other months — a clear seasonal peak",
      ],
      recommendations: [
        "Invest in engagement and personalization initiatives, given their measurable link to order value",
        "Monitor and mitigate the revenue concentration risk in Electronics through category diversification",
        "Prioritize marketing and logistics investment in the top-performing cities while testing secondary markets",
        "Encourage credit card and other high-AOV payment methods where feasible",
        "Plan inventory and marketing campaigns around the confirmed Q1 seasonal peak",
      ],
      technologiesUsed: ["Excel", "Python", "Pandas", "SQL", "Power BI"],
    },
  },
  {
    slug: "marketing-campaign-performance",
    displayOrder: 3,
    title: "Marketing Campaign Performance Analysis",
    outcomeHeadline: "Prior campaign acceptance predicts response with up to 6x lift",
    contextSentence:
      "Identified which customer traits actually predict campaign response, ahead of the strongest lever in the data.",
    tech: ["SQL", "Python", "SQLite", "Power BI"],
    githubUrl: "https://github.com/lau-rios-07/Marketing-Campaign-Performance-Analysis",
    dashboardImageAlt:
      "Power BI executive overview dashboard showing 2,236 total customers, 14.8% campaign response rate, and response distribution",
    dashboardImageSrc: "/images/projects/marketing-campaign-performance.png",
    additionalImages: [
      {
        src: "/images/projects/marketing-campaign-performance-2.png",
        alt: "Customer profile dashboard page showing response rate by education, marital status, and number of dependents",
        caption: "Page 2 — Customer Profile: response rate broken down by education, marital status, and dependents.",
      },
      {
        src: "/images/projects/marketing-campaign-performance-3.png",
        alt: "Behavioral drivers dashboard page showing digital purchases, web visits, and previous campaign acceptance by response",
        caption: "Page 3 — Behavioral Drivers: digital engagement and prior-campaign acceptance, accepted vs. rejected.",
      },
      {
        src: "/images/projects/marketing-campaign-performance-4.png",
        alt: "Strategic summary dashboard page showing key findings, the highest-probability responder profile, and business recommendations",
        caption: "Page 4 — Strategic Summary: the responder profile and business recommendations, in one view.",
      },
    ],
    status: "complete",
    keyTakeaways: [
      "Prior campaign acceptance is the single strongest predictor of response — up to 6x lift",
      "High-income, high-spend customers convert at meaningfully higher rates — a clear targeting segment",
      "Digital-channel buyers show 47% more purchases among responders — a channel-specific signal",
      "Education level strongly predicts response (PhD ≈ 5.6x the rate of Basic education)",
      "Non-married segments (single/divorced/widowed) outperform married segments in response rate",
    ],
    caseStudy: {
      businessProblem:
        "The marketing team needed to know which customers were actually likely to respond to a campaign before spending budget on outreach — without that, campaigns risk targeting the wrong audience entirely.",
      datasetOverview:
        "Kaggle's Customer Personality Analysis dataset: 2,236 customers, including demographics, income, historical spend by category, purchase channel (web/store/catalog), recency, and response history across prior campaigns.",
      businessQuestions: [
        "Does income level predict campaign response?",
        "Does historical spend predict campaign response?",
        "Does purchase recency predict campaign response?",
        "Does digital purchase behavior predict campaign response?",
        "Does prior campaign acceptance predict future campaign response?",
        "Do education level and marital status correlate with response rate?",
      ],
      methodology:
        "Python and Pandas handled cleaning and structuring of the raw data. Exploratory analysis surfaced initial patterns, then six business hypotheses were formally validated using SQL via SQLite. A 4-page Power BI dashboard was built to profile the highest-probability responder segment for the marketing team.",
      sqlAnalysis:
        "SQL queries run against a local SQLite database compared response rates across income brackets, spend tiers, recency windows, and digital-purchase frequency — and, most importantly, prior campaign acceptance — isolating which factor carried the strongest signal rather than assuming income or spend alone would dominate.",
      dashboardPreview:
        "A 4-page Power BI dashboard — Overview, Customer Profile, Behavioral Drivers, and Strategic Summary — built to hand the marketing team a concrete targeting profile, not just a set of charts.",
      keyInsights: [
        "Customers who accepted a prior campaign respond again at up to 6x the rate of those who haven't (e.g. Campaign 5: 27.4% vs. 4.7%) — the strongest single predictor in the dataset",
        "Responders show 18% higher income on average ($60,161 vs. $50,839)",
        "Responders show 83% higher historical spend ($988 vs. $539)",
        "Responders are more recently active (35 days vs. 51 days since last purchase)",
        "Responders make 47% more digital purchases (9.27 vs. 6.30)",
        "Education level correlates strongly with response: PhD holders respond at roughly 5.6x the rate of customers with only basic education (20.66% vs. 3.70%)",
      ],
      recommendations: [
        "Prioritize customers with a history of prior campaign acceptance — by far the strongest available signal",
        "Concentrate spend on higher-income, higher-historical-spend segments",
        "Strengthen digital-channel marketing, where responders are already disproportionately active",
        "Build a simple predictive targeting model combining prior acceptance, income, spend, and recency rather than relying on any single factor",
        "Re-engage customers quickly after a purchase, while recency is still working in the campaign's favor",
      ],
      technologiesUsed: ["Python", "Pandas", "SQL", "SQLite", "Power BI"],
    },
  },
  {
    slug: "telco-customer-churn",
    displayOrder: 1,
    title: "Telco Customer Churn Analysis",
    outcomeHeadline: "Month-to-month churn at 42.7% vs. 2.8% for 2-year contracts — a 15x gap",
    contextSentence:
      "Pinpointed exactly which contract, tenure, and service factors separate loyal customers from churn risks.",
    tech: ["SQL", "Python", "Power BI"],
    githubUrl: "https://github.com/lau-rios-07/telco-customer-churn-analysis",
    dashboardImageAlt:
      "Power BI executive overview dashboard showing 26.54% churn rate and churn rate by contract type: 42.71% month-to-month vs 2.83% two-year",
    dashboardImageSrc: "/images/projects/telco-customer-churn.png",
    additionalImages: [
      {
        src: "/images/projects/telco-customer-churn-2.png",
        alt: "Churn drivers dashboard page showing churn rate by tenure group, payment method, tech support, and online security",
        caption: "Page 2 — Churn Drivers: tenure, payment method, tech support, and online security, side by side.",
      },
      {
        src: "/images/projects/telco-customer-churn-3.png",
        alt: "Customer segmentation dashboard page showing customer distribution by monthly charges, payment method, and contract type",
        caption: "Page 3 — Customer Segmentation: where the customer base actually sits across charge tiers and contract types.",
      },
      {
        src: "/images/projects/telco-customer-churn-4.png",
        alt: "Recommendations dashboard page showing top churn driver, key findings, business recommendations, and the highest-risk customer profile",
        caption: "Page 4 — Recommendations: the highest-risk customer profile and the resulting action plan.",
      },
    ],
    status: "complete",
    keyTakeaways: [
      "Month-to-month churn (42.7%) vs. 2-year (2.8%) — a 15x differential, the single strongest lever",
      "First 12 months of tenure carries 47.4% of churn — defines the critical retention window",
      "Missing tech support or online security nearly triples churn risk",
      "High monthly charges (>$80) triple churn risk vs. lower tiers",
      "Correctly flagged a likely confound (electronic check vs. contract type) instead of overclaiming causation",
    ],
    caseStudy: {
      businessProblem:
        "Subscription revenue is only as strong as retention. The business needed to know exactly which customers were at the highest risk of churning and why, so retention spend could be targeted rather than applied broadly.",
      datasetOverview:
        "Kaggle's Telco Customer Churn dataset: 7,043 customers and 21 attributes, including contract type, tenure, monthly charges, payment method, and add-on services (tech support, online security), with a binary churned/retained label.",
      businessQuestions: [
        "Does contract type predict churn?",
        "Does tenure length predict churn risk?",
        "Does having tech support reduce churn?",
        "Does having online security reduce churn?",
        "Do higher monthly charges correlate with higher churn?",
        "Does payment method correlate with churn?",
      ],
      methodology:
        "Data preparation and validation came first, followed by exploratory analysis in Python. Six business hypotheses — the six above — were then validated in SQL, and the confirmed patterns were built into a 4-page Power BI dashboard covering KPIs, churn drivers, customer segmentation, and recommendations.",
      sqlAnalysis:
        "SQL queries segmented the customer base by contract type, tenure bracket, service add-ons, charge tier, and payment method, comparing churn rate across each segment against the base rate to isolate which factors carried real predictive weight.",
      dashboardPreview:
        "A 4-page Power BI dashboard structured around KPIs, churn drivers, customer segmentation, and recommendations — designed to walk a stakeholder from what's happening to what to do about it.",
      keyInsights: [
        "Month-to-month contract customers churn at 42.7%, compared to just 2.8% for two-year contracts — a 15x gap, the single strongest lever in the dataset",
        "47.4% of churn occurs within a customer's first 12 months — the critical early retention window",
        "Customers without tech support churn at 41.6% vs. 15.2% with support (2.7x)",
        "Customers without online security churn at 41.8% vs. 14.6% with security (2.9x)",
        "Customers with monthly charges above $80 churn at 35.5% vs. 10.8% for lower charges (3.3x)",
        "Electronic check payers show the highest churn rate (45.3%) — flagged as likely confounded with contract type rather than reported as an independent cause",
      ],
      recommendations: [
        "Offer incentives for month-to-month customers to move to longer-term contracts",
        "Concentrate retention resources in a customer's first 12 months",
        "Bundle tech support and online security into retention offers, given their strong association with lower churn",
        "Review pricing and perceived value for customers on high monthly charges",
        "Investigate the electronic-check segment further before acting on it, given the likely confound with contract type",
      ],
      technologiesUsed: ["SQL", "Python", "Pandas", "Power BI"],
    },
  },
  {
    slug: "northwind-business-analysis",
    displayOrder: 4,
    title: "Northwind Business Analysis",
    outcomeHeadline: "An automated pipeline surfacing 73% revenue concentration in the top 5 employees",
    contextSentence:
      "Built an automated SQL → Python reporting pipeline surfacing where B2B revenue is concentrated.",
    tech: ["SQL", "Python", "Power BI"],
    githubUrl: "https://github.com/lau-rios-07/northwind-business-analysis",
    dashboardImageAlt:
      "Power BI dashboard showing $402,792 total revenue, top customer Ernst Handel, top country USA, revenue by category, and top employees",
    dashboardImageSrc: "/images/projects/northwind-business-analysis.png",
    status: "pending-enrichment",
    keyTakeaways: [
      "Top 5 employees generate 73.47% of revenue — a notable performance concentration",
      "Top 3 customers account for 21.66% of revenue — a moderate concentration risk",
      "Beverages leads all categories at 28.76% of category revenue",
      "USA is the clear top market at 18.12% of revenue",
      "This project is documented at lower depth than the other three — see the note below rather than a case-study framing that overstates it",
    ],
    caseStudy: {
      businessProblem:
        "Identify which customers, product categories, employees, and countries actually drive revenue in a B2B distribution business, so resources and attention can be focused accordingly.",
      datasetOverview:
        "The Northwind sample database (a classic B2B trading/distribution dataset), queried via SQLite. An exact record count isn't documented in the repository yet.",
      businessQuestions: [
        "[Pending — this repository doesn't yet document explicit business hypotheses the way the other three projects do. The recommended next step is to define 4–6 specific questions (e.g. \"Is revenue concentrated among a small number of customers?\") and validate each one explicitly in SQL, matching the format used across the rest of this portfolio.]",
      ],
      methodology:
        "This project uses an automated pipeline — SQL queries, then Python for KPI calculation, chart generation, and report writing, run end-to-end via script (queries.py → analysis.py → graphics.py → reports.py) — rather than the manual, hypothesis-by-hypothesis investigation used in the other three projects. That's a genuinely different, still-valuable skill: building a repeatable pipeline rather than a one-off analysis. It's presented here as exactly that, not as an equivalent case study to the other three.",
      sqlAnalysis:
        "SQL queries extract revenue by customer, category, employee, and country directly from the Northwind database; Python then calculates the KPI percentages below and generates the summary report. [Pending: the underlying SQL isn't yet broken down hypothesis-by-hypothesis in the repository's documentation.]",
      dashboardPreview:
        "A Power BI dashboard visualizing the KPIs below. [Pending: a page-by-page structure isn't yet documented — the other three projects each specify their dashboard's exact page breakdown; this one doesn't yet.]",
      keyInsights: [
        "The top 5 employees generate 73.47% of total revenue — a significant performance concentration",
        "The top 3 customers account for 21.66% of total revenue",
        "Ernst Handel is the single highest-value customer at $38,031.21 (9.44% of total revenue)",
        "Average customer spend is $20,817.52",
        "Beverages is the leading product category at $115,832.50 (28.76% of category revenue)",
        "Margaret Peacock is the top-performing employee at $111,888.50 (27.78% of employee revenue)",
        "The USA is the top market at $72,971.75 (18.12% of total revenue)",
      ],
      recommendations: [
        "Maintain and strengthen relationships with the highest-value customers",
        "Increase investment in top-performing categories, led by Beverages",
        "Study top-performing employees' approaches to identify replicable practices",
        "Strengthen marketing in the highest-revenue countries, led by the USA",
        "Monitor revenue concentration risk, given how much of total revenue sits with a small number of customers and employees",
      ],
      technologiesUsed: ["SQL", "Python", "Pandas", "Matplotlib", "Seaborn", "Power BI"],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
