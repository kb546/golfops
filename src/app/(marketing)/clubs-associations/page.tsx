import type { Metadata } from "next";
import { ClubsContent } from "./clubs-content";

export const metadata: Metadata = {
  title: "Clubs & Associations",
  description:
    "Run weekly competitions, member events, and inter-club tournaments — all from one platform. Simplify your club's tournament season.",
};

export default function ClubsAssociationsPage() {
  return <ClubsContent />;
}
