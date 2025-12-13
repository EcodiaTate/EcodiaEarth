import "./globals.css";
import type { Metadata } from "next";
import { inter, fjalla } from "./fonts";

export const metadata: Metadata = {
  title: "Ecodia — earth",
  description: "We turn action into joy.",
};

export default function RootLayout({
  children,
  modal, // <-- parallel slot rendered on top of the page
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fjalla.variable}`}>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
