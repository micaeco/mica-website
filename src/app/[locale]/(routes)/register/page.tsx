import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import RegisterForm from "./_components/register-form";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const navCta = await getTranslations({ locale, namespace: "nav-cta" });

  return {
    title: navCta("register"),
  };
}

export default function RegistrationForm() {
  return (
    <main>
      <RegisterForm />
    </main>
  );
}
