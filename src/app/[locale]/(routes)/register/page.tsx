import { Metadata } from "next";
import { getMessages } from "next-intl/server";

import RegisterForm from "./_components/register-form";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const navCta = messages["nav-cta"] as { register: string };

  return {
    title: navCta.register,
  };
}

export default function RegistrationForm() {
  return (
    <main>
      <RegisterForm />
    </main>
  );
}
