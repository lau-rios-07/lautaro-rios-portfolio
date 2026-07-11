import type { NavLink, SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Lautaro Ríos",
  role: "Junior Data Analyst",
  // TODO: flagged in Design Brief v3, Section 11 — this line is shared by a
  // large share of analyst LinkedIn headlines. The brief suggested testing
  // something that references the real project findings instead (e.g. the
  // 15x churn signal, the 6x campaign-response lift). Revisit before launch.
  tagline: "Transforming Data Into Business Decisions.",
  location: "Argentina",
  email: "lauburo071@gmail.com",
  linkedin: "https://linkedin.com/in/lautaro-rios-62a148317",
  github: "https://github.com/lau-rios-07",
  // No file exists at this path yet — see public/README.md.
  resumeUrl: "/resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
