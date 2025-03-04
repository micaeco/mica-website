import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

import { Latest } from "./_components/latest";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const navLinks = await getTranslations({ locale, namespace: "nav-links" });

  return {
    title: navLinks("legal-disclaimer"),
  };
}

export default function LegalDisclaimer() {
  return (
    <main>
      <Latest />
    </main>
  );
}
