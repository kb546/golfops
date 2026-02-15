import { Hero } from "@/components/marketing/hero";
import { PainPoints } from "@/components/marketing/pain-points";
import { FeatureShowcase } from "@/components/marketing/feature-showcase";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { UseCases } from "@/components/marketing/use-cases";
import { BlogPreview } from "@/components/marketing/blog-preview";
import { CTASection } from "@/components/marketing/cta-section";

// Week 3: Premium Sections
import { SocialProofSection } from "@/components/marketing/sections/social-proof-section";
import { StatsSection } from "@/components/marketing/sections/stats-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofSection />  {/* NEW: Logo cloud for trust */}
      <PainPoints />
      <FeatureShowcase />
      <StatsSection />  {/* NEW: Animated stats */}
      <HowItWorks />
      <UseCases />
      <BlogPreview />
      <CTASection />
    </>
  );
}
