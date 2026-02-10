import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the GolfOps team. We'd love to hear about your event and show you how GolfOps can help.",
};

export default function ContactPage() {
  return <ContactContent />;
}
