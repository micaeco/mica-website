import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

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
