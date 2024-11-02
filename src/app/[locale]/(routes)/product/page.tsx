import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

import HowItWorks from './components/howItWorks';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const navLinks = messages.navLinks as { product: string };

  return {
    title: navLinks.product,
  };
}

export default function Product() {
  return (
    <main>
      <HowItWorks />
    </main>
  );
}
