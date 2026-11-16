import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gounbound.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...["kullanim-kosullari", "gizlilik", "kvkk", "hesap-silme"].map((path) => ({
      url: `https://gounbound.app/${path}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ];
}
