// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { inter, fjalla } from "./fonts";
import { EcoToggle } from "@/components/ui/EcoToggle"; // 1. Import the component

export const metadata: Metadata = {
  title: "Ecodia Earth",
  description: "The world we build next",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fjalla.variable} scrollbar-hidden`}>
    <body className="scrollbar-hidden">
      {children}
      {modal}
      <EcoToggle />
    </body>
  </html>
  
  );
}