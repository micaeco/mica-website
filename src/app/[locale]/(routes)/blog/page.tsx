import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

import Blog from './components/blog';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const navLinks = messages.navLinks as { blog: string };

  return {
    title: navLinks.blog,
  };
}

export default function BlogPage() {
  return <Blog />;
}
