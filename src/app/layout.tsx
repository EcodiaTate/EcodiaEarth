import "./globals.css";
import type { Metadata } from "next";
import { BiosphereProvider } from "@/context/BiosphereProvider";
import { ScaleSelector } from "@/components/biosphere/layout/ScaleSelector";
import CustomCursor from "@/components/biosphere/layout/CustomCursor";

export const metadata: Metadata = {
  title: "Ecodia Earth | The Biosphere Manifesto",
  description: "A living web architecture. High-end tactile ecology.",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className="antialiased overflow-x-hidden">
        <BiosphereProvider>
          
          <CustomCursor />
          <ScaleSelector />
          <main className="relative z-10">
            {children}
            {modal}
          </main>
        </BiosphereProvider>
      </body>
    </html>
  );
}