import { Hero } from "@/components/marketing/hero";
import { PainPoints } from "@/components/marketing/pain-points";
import { FeatureShowcase } from "@/components/marketing/feature-showcase";
import { SocialProof } from "@/components/marketing/social-proof";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { UseCases } from "@/components/marketing/use-cases";
import { BlogPreview } from "@/components/marketing/blog-preview";
import { CTASection } from "@/components/marketing/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <FeatureShowcase />
      <SocialProof />
      <HowItWorks />
      <UseCases />
      <BlogPreview />
      <CTASection />
    </>
  );
}
