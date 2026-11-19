import type { Metadata } from "next";
import "../globals.css";
import { RootDocument, siteDescription } from "@/components/site/RootDocument";

const description = siteDescription("en");

export const metadata: Metadata = {
  title: { default: "Unbound — Discover outdoor and adventure sports in Turkey", template: "%s | Unbound" },
  description,
  keywords: ["outdoor sports Turkey", "adventure sports", "sailing", "kayaking", "mountaineering", "paragliding", "diving", "camping", "hiking", "horse riding"],
  authors: [{ name: "Unbound" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Unbound — Discover outdoor and adventure sports in Turkey", description, url: "https://gounbound.app/en/", siteName: "Unbound",
    images: [{ url: "https://gounbound.app/images/hero.jpg", width: 1200, height: 630, alt: "Unbound" }], type: "website", locale: "en_GB", alternateLocale: ["tr_TR"],
  },
  twitter: { card: "summary_large_image", title: "Unbound", description, images: ["https://gounbound.app/images/hero.jpg"] },
  metadataBase: new URL("https://gounbound.app"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
