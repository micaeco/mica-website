import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';

import Latest from './components/latest';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const navLinks = messages.navLinks as { 'privacy-policy': string };

  return {
    title: navLinks['privacy-policy'],
  };
}

export default function PrivacyPolicy() {
  return (
    <main>
      <Latest />
    </main>
  );
}
