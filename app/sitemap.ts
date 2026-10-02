import type { MetadataRoute } from "next";
import { projects } from "../data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
