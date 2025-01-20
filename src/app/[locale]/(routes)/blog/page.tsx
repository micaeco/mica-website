import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Blog from "./_components/blog";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const navLinks = await getTranslations({ locale, namespace: "nav-links" });

  return {
    title: navLinks("blog"),
  };
}

export default function BlogPage() {
  return <Blog />;
}
