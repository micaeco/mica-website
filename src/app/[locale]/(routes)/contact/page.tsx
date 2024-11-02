import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

import Contact from './components/contact';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const navCta = messages.navCta as { contact: string };

  return {
    title: navCta.contact,
  };
}

export default function ContactPage() {
  return <Contact />;
}
