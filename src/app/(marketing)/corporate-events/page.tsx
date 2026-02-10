import type { Metadata } from "next";
import { CorporateContent } from "./corporate-content";

export const metadata: Metadata = {
  title: "Corporate Golf Events",
  description:
    "Professional golf events without the operational headache. Branded event pages, smart pairings, and instant leaderboards that impress clients and partners.",
};

export default function CorporateEventsPage() {
  return <CorporateContent />;
}
