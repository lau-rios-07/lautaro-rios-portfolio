interface SectionKickerProps {
  index: string;
  label: string;
}

/**
 * The magazine-masthead device that unifies Featured Projects, About, and
 * Analytics Workflow as one numbered system. Deliberately NOT used on
 * Certifications & Learning or the Footer — their quietness is intentional
 * (UX Spec Section 8), and giving them the same bold marker would erase
 * that contrast.
 */
export function SectionKicker({ index, label }: SectionKickerProps) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">
      {index} — {label}
    </p>
  );
}
