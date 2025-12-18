// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecodia.earth";

  // Only the canonical pages (NOT @modal intercept routes)
  const routes = [
    "",
    "/entry",
    "/vision",
    "/values",
    "/ecosystem",
    "/technology",
    "/company",
    "/labs",
    "/roadmap",
    "/press",
    "/legal",
    "/contact",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
