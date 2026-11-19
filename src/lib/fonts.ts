import { Commissioner, Playfair_Display } from "next/font/google";

export const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const fontClasses = `${commissioner.variable} ${playfair.variable}`;
