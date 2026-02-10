import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by people who run golf events. GolfOps exists so organizers never have to juggle spreadsheets, chase payments, and pair foursomes at midnight again.",
};

export default function AboutPage() {
  return <AboutContent />;
}
