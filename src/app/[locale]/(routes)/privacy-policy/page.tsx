import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

import Latest from "./_components/latest";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const navLinks = await getTranslations({ locale, namespace: "nav-links" });

  return {
    title: navLinks("privacy-policy"),
  };
}

export default function PrivacyPolicy() {
  return (
    <main>
      <Latest />
    </main>
  );
}
