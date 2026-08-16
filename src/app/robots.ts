import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Add any private routes here if needed in the future
    },
    sitemap: "https://gounbound.app/sitemap.xml",
  };
}
