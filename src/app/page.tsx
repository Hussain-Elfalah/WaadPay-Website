import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import MarketOpportunitySection from "@/components/sections/MarketOpportunitySection";
import TechnologySection from "@/components/sections/TechnologySection";
import TeamSection from "@/components/sections/TeamSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <MarketOpportunitySection />
      <TechnologySection />
      <TeamSection />
      <InvestmentSection />
      <ContactSection />
    </>
  );
}
