import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

import Faqs from './components/faqs';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const navLinks = messages.navLinks as { faqs: string };

  return {
    title: navLinks.faqs,
  };
}

export default function FAQs() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-32">
      <Faqs />
    </main>
  );
}
