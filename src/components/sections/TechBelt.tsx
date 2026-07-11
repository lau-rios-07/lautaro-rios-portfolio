import { FadeIn } from "@/components/animation/FadeIn";
import { Pill } from "@/components/ui/Pill";
import { techStack } from "@/data/tech-stack";

export function TechBelt() {
  return (
    <section aria-label="Core technologies" className="mx-auto max-w-6xl px-6 pb-16 sm:px-10 lg:px-20">
      <FadeIn>
        <ul className="flex flex-wrap justify-center gap-2.5 sm:justify-start">
          {techStack.map((tech) => (
            <li key={tech}>
              <Pill>{tech}</Pill>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
