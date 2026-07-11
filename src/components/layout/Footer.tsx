import { Github, Linkedin, Mail } from "lucide-react";
import { BearMark } from "@/components/ui/BearMark";
import { siteConfig } from "@/data/site-config";

/**
 * The one deliberately inverted section on the site — a dark charcoal
 * bookend to the light Hero gradient. Uses `text-gold` (not `text-gold-dark`)
 * for links: gold-dark was calibrated for AA contrast on light backgrounds,
 * but against dark charcoal the lighter gold is both more visible AND
 * still comfortably AA-compliant (~5.1:1) — see globals.css.
 */
export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-charcoal text-cream">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[10vw] -left-[4vw] select-none font-display text-[26vw] font-semibold leading-none text-cream/[0.04] sm:text-[18vw]"
      >
        R
      </span>

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-cream">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-cream/60">
              {siteConfig.role} · {siteConfig.location}
            </p>
          </div>

          <ul className="flex items-center gap-5">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="text-cream/80 transition-colors hover:text-gold"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-cream/80 transition-colors hover:text-gold"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-cream/80 transition-colors hover:text-gold"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/15 pt-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <BearMark className="shrink-0" />
            <p className="ml-[3px] font-display italic text-cream/80">Learning never graduates.</p>
          </div>
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
