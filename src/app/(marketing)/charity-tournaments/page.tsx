import type { Metadata } from "next";
import { CharityContent } from "./charity-content";

export const metadata: Metadata = {
  title: "Charity Golf Tournaments",
  description:
    "Raise more, stress less. The all-in-one platform for charity golf events — registration, donations, sponsors, and scoring in one dashboard.",
};

export default function CharityTournamentsPage() {
  return <CharityContent />;
}
