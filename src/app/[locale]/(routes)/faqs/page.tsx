import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Faqs from "./_components/faqs";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const navLinks = await getTranslations({ locale, namespace: "nav-links" });

  return {
    title: navLinks("faqs"),
  };
}

export default async function FAQs() {
  return (
    <main>
      <Faqs />
    </main>
  );
}
