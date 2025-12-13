import { Inter, Fjalla_One } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
