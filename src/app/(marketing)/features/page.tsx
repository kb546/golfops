import type { Metadata } from "next";
import { FeaturesContent } from "./features-content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything you need to run a golf tournament — registration, smart pairings, live scoring, global payments, sponsor management, and AI communication.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
