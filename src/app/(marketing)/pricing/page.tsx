import type { Metadata } from "next";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for golf tournament management. Start free, scale as you grow. No hidden fees.",
};

export default function PricingPage() {
  return <PricingContent />;
}
