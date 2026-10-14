import type { MetadataRoute } from "next";
import { SERVICES, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: [string, number][] = [
    ["", 1],
    ["/autolackiererei-mosbach", 0.9],
    ["/leistungen", 0.9],
    ...SERVICES.map((s) => [`/leistungen/${s.slug}`, 0.8] as [string, number]),
    ["/wir-ueber-uns", 0.6],
    ["/wir-ueber-uns/firmen-chronik", 0.4],
    ["/bildergalerie", 0.6],
    ["/stellenangebote", 0.5],
    ["/kontakt", 0.8],
  ];
  return pages.map(([path, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
