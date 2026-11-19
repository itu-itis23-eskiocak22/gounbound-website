import type { Metadata } from "next";
import "../globals.css";
import { RootDocument, siteDescription } from "@/components/site/RootDocument";

const description = siteDescription("tr");

export const metadata: Metadata = {
  title: { default: "Unbound — Doğa ve macera sporlarını keşfet", template: "%s | Unbound" },
  description,
  keywords: ["doğa sporları", "macera sporları", "yelken", "kano", "dağcılık", "yamaç paraşütü", "dalış", "kamp", "hiking", "atlı binicilik", "rota", "faaliyet raporu"],
  authors: [{ name: "Unbound" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Unbound — Doğa ve macera sporlarını keşfet", description, url: "https://gounbound.app", siteName: "Unbound",
    images: [{ url: "https://gounbound.app/images/hero.jpg", width: 1200, height: 630, alt: "Unbound" }], type: "website", locale: "tr_TR", alternateLocale: ["en_GB"],
  },
  twitter: { card: "summary_large_image", title: "Unbound", description, images: ["https://gounbound.app/images/hero.jpg"] },
  metadataBase: new URL("https://gounbound.app"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="tr">{children}</RootDocument>;
}
