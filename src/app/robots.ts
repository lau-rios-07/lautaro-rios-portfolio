import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // TODO: replace with the real deployed domain — see layout.tsx.
    sitemap: "https://lautarorios.dev/sitemap.xml",
  };
}
