import type { Metadata } from "next";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for golf tournament management. Talk to sales for tailored pricing. No hidden fees.",
};

export default function PricingPage() {
  return <PricingContent />;
}
