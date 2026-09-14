import { ApertureHero } from "@/components/vendor/aperture-hero";
import { ThesisSection } from "@/components/sections/01-thesis";
import { HighlightsSection } from "@/components/sections/02-highlights";
import { WhyNowSection } from "@/components/sections/03-why-now";
import { ThirdMovementSection } from "@/components/sections/04-third-movement";
import { ProblemSection } from "@/components/sections/05-problem";
import { SolutionSection } from "@/components/sections/06-solution";
import { SessionSection } from "@/components/sections/07-session";
import { OfferSection } from "@/components/sections/08-offer";
import { MarketSection } from "@/components/sections/09-market";
import { FirstGenerationSection } from "@/components/sections/10-first-generation";
import { EconomicsSection } from "@/components/sections/11-economics";
import { LandscapeSection } from "@/components/sections/12-landscape";
import { InfrastructureSection } from "@/components/sections/13-infrastructure";
import { GovernanceSection } from "@/components/sections/14-governance";
import { TractionSection } from "@/components/sections/15-traction";
import { RoadmapSection } from "@/components/sections/16-roadmap";
import { TeamSection } from "@/components/sections/17-team";
import { AskSection } from "@/components/sections/18-ask";
import { CloseSection } from "@/components/sections/19-close";
import { AppendixSection } from "@/components/sections/appendix";

export default function Home() {
  return (
    <main id="00-cover">
      <ApertureHero />
      <ThesisSection />
      <HighlightsSection />
      <WhyNowSection />
      <ThirdMovementSection />
      <ProblemSection />
      <SolutionSection />
      <SessionSection />
      <OfferSection />
      <MarketSection />
      <FirstGenerationSection />
      <EconomicsSection />
      <LandscapeSection />
      <InfrastructureSection />
      <GovernanceSection />
      <TractionSection />
      <RoadmapSection />
      <TeamSection />
      <AskSection />
      <CloseSection />
      <AppendixSection />
    </main>
  );
}
