import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import ContactForm from "./_components/contact-form";
import LookingFor from "./_components/looking-for";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const navCta = await getTranslations({ locale, namespace: "nav-cta" });

  return {
    title: navCta("contact"),
  };
}

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-white to-muted">
      <LookingFor />
      <ContactForm />
    </main>
  );
}
