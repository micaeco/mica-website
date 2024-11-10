import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

import Verification from './components/verification';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const verification = messages.verification as { title: string };

  return {
    title: verification.title,
  };
}

export default function Verify() {
  return <Verification />;
}
