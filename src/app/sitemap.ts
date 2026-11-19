import { MetadataRoute } from "next";
import { places, sports } from "@/lib/catalog";

export const dynamic = "force-static";

const BASE = "https://gounbound.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Her sayfa Türkçe ve İngilizce (/en) olarak listelenir; birbirlerine hreflang ile bağlıdır.
  const page = (path: string, priority: number, changeFrequency: "daily" | "weekly" | "monthly" = "weekly") =>
    ["tr", "en"].map((lang) => ({
      url: `${BASE}${lang === "en" ? `/en${path}` : path}`, lastModified: new Date(), changeFrequency, priority,
      alternates: { languages: { tr: `${BASE}${path}`, en: `${BASE}/en${path}` } },
    }));
  const trOnly = (path: string) => ({ url: `${BASE}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 });
  return [
    page("/", 1),
    page("/uygulama/", 0.9),
    page("/sporlar/", 0.9),
    page("/mekanlar/", 0.9),
    page("/raporlar/", 0.8, "daily"),
    page("/harita/", 0.7),
    page("/ne-yapsam/", 0.7),
    ...sports.map((s) => page(`/sporlar/${s.slug}/`, 0.8)),
    ...places.map((p) => page(`/mekanlar/${p.slug}/`, 0.6, "monthly")),
    ...["kullanim-kosullari", "gizlilik", "kvkk", "hesap-silme"].map((p) => trOnly(`/${p}/`)),
  ].flat();
}
