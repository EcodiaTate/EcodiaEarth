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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar-hide">
     <body className="antialiased overflow-x-hidden">
  <BiosphereProvider>
    {/* overlays that must remain crisp + fixed */}
    <CustomCursor />
  
    <div id="scale-root" className="relative z-10">
      <ScaleSelector />
      <main>{children}</main>
    </div>
  </BiosphereProvider>
</body>

    </html>
  );
}