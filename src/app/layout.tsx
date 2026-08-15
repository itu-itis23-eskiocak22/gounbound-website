import type { Metadata } from "next";
import { Commissioner, Playfair_Display } from "next/font/google";
import "./globals.css";

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UNBOUND | Go beyond your bounds",
  description:
    "UNBOUND is the outdoor community that helps you discover new experiences, learn how to start, connect with people and keep your adventures alive.",
  keywords: [
    "outdoor",
    "adventure",
    "community",
    "hiking",
    "climbing",
    "surfing",
    "paragliding",
    "camping",
    "discover",
  ],
  openGraph: {
    title: "UNBOUND | Go beyond your bounds",
    description:
      "Discover outdoor experiences. Learn how to start. Find your people. Keep the memory alive.",
    url: "https://gounbound.app",
    siteName: "UNBOUND",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNBOUND | Go beyond your bounds",
    description:
      "Discover outdoor experiences. Learn how to start. Find your people. Keep the memory alive.",
  },
  metadataBase: new URL("https://gounbound.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${commissioner.variable} ${playfair.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
