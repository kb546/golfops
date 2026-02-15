"use client";

import { LogoCloud } from "@/components/ui/logo-cloud";

// Note: You'll need to add actual logo files to /public/logos/
// These are placeholder paths - replace with your actual tournament/partner logos
const partners = [
  { src: "/logos/partner-1.svg", alt: "PGA Tour", width: 120, height: 40 },
  { src: "/logos/partner-2.svg", alt: "USGA", width: 100, height: 40 },
  { src: "/logos/partner-3.svg", alt: "Ryder Cup", width: 120, height: 40 },
  { src: "/logos/partner-4.svg", alt: "The Masters", width: 130, height: 40 },
  { src: "/logos/partner-5.svg", alt: "US Open", width: 110, height: 40 },
];

export function SocialProofSection() {
  return (
    <section className="py-20 bg-[var(--color-surface)]">
      <div className="container-marketing">
        <LogoCloud
          title="Trusted by Championship Tournaments"
          logos={partners}
          grayscale={true}
        />
      </div>
    </section>
  );
}
