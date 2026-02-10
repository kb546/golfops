import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GolfOps — Run Smarter Golf Events. Anywhere in the World.",
    template: "%s | GolfOps",
  },
  description:
    "The all-in-one platform for golf tournament registration, smart pairings, live scoring, global payments, and communication — powered by AI.",
  keywords: [
    "golf tournament management",
    "golf event software",
    "golf tournament registration",
    "live golf scoring",
    "golf pairings",
    "charity golf tournament",
  ],
  openGraph: {
    title: "GolfOps — Run Smarter Golf Events",
    description:
      "Registration, smart pairings, live scoring, global payments — one platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GolfOps — Run Smarter Golf Events",
    description:
      "Registration, smart pairings, live scoring, global payments — one platform.",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${plusJakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
