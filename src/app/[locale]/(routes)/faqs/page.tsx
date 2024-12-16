import { Metadata } from "next";
import { getMessages } from "next-intl/server";

import Faqs from "./_components/faqs";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const navLinks = messages["nav-links"] as { faqs: string };

  return {
    title: navLinks.faqs,
  };
}

export default async function FAQs() {
  return (
    <main>
      <Faqs />
    </main>
  );
}
