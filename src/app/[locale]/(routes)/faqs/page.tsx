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

export default async function FAQs() {
  return (
    <main>
      <Faqs />
    </main>
  );
}
