export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ResultStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}
