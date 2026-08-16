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
    // Add more URLs here as the app grows
  ];
}
