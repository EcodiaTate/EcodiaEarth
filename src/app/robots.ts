// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_ECODIA_URL ?? "https://ecodia.earth";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // If you have private/admin paths later, add them here:
        // disallow: ["/admin", "/api"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
