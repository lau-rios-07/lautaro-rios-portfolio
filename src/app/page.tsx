import { Hero } from "@/components/sections/Hero";
import { TechBelt } from "@/components/sections/TechBelt";
import { ResultsStrip } from "@/components/sections/ResultsStrip";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { About } from "@/components/sections/About";
import { AnalyticsWorkflow } from "@/components/sections/AnalyticsWorkflow";
import { CertificationsLearning } from "@/components/sections/CertificationsLearning";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechBelt />
      <ResultsStrip />
      <FeaturedProjects />
      <About />
      <AnalyticsWorkflow />
      <CertificationsLearning />
      {/* Contact/Footer is global — see src/components/layout/Footer.tsx,
          rendered in the root layout so it appears on every route. */}
    </>
  );
}
