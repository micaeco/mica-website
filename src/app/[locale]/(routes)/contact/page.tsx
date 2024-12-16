import { Metadata } from "next";
import { getMessages } from "next-intl/server";

import ContactForm from "./_components/contact-form";
import LookingFor from "./_components/looking-for";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const navCta = messages["nav-cta"] as { contact: string };

  return {
    title: navCta.contact,
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
