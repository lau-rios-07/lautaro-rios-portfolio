import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";

const currentLearning = [
  "Advanced Excel",
  "Microsoft Fabric",
  "Azure",
  "AI-Assisted Analytics",
  "English Communication",
];

export function CertificationsLearning() {
  return (
    <section
      aria-label="Certifications and current learning"
      className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:px-20"
    >
      <FadeIn>
        <div className="flex flex-col gap-8 border-t border-hairline pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-warm-gray">
              Certification
            </p>
            <a
              href="https://cert.efset.org/en/2Bf6yS"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal transition-colors hover:text-gold-dark"
            >
              EF SET English Certificate — C1 Advanced
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-warm-gray">
              Currently learning
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-warm-gray">
              {currentLearning.map((item, index) => (
                <li key={item} className="inline-flex items-center">
                  {item}
                  {index < currentLearning.length - 1 && (
                    <span className="ml-3 text-warm-gray/40" aria-hidden="true">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
