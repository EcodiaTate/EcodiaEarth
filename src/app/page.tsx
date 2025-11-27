// src/app/page.tsx
export const dynamic = "force-static";
export const revalidate = 300;

import type { Metadata } from "next";
import ClientHome from "./ClientPage";

export const metadata: Metadata = {
  title: "Ecodia · Eco-action app & upcycling marketplace",
  description:
    "Ecodia is a solarpunk-inspired eco-action app and upcycling marketplace that helps young people and local communities take real climate action, earn rewards, and discover eco-friendly businesses.",
  keywords: [
    "Ecodia",
    "eco action app",
    "climate action",
    "upcycling marketplace",
    "eco local",
    "sustainability",
    "youth climate",
    "solarpunk",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ecodia · Eco-action for the next generation",
    description:
      "Join Ecodia to complete eco sidequests, discover eco-friendly local businesses, and shop curated upcycled fashion and products.",
    url: "/",
    siteName: "Ecodia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecodia · Eco-action app & upcycling marketplace",
    description:
      "Earn rewards for real-world climate action, discover eco-friendly local offers, and shop upcycled fashion on Ecodia.",
  },
};

export default function Page() {
  return <ClientHome />;
}
