import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = env.appUrl;

  const pages = ["/", "/about", "/beta", "/contact", "/faqs", "/product"] as const;

  return {
    rules: {
      userAgent: "*",
      allow: [...pages],
      disallow: "",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
