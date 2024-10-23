'use client';

import { usePathname } from 'next/navigation';

import Latest from '@/components/sections/privacy-policy/latest';
import GoBack from '@/components/ui/go-back';

export default function PrivacyPolicy() {
  const path = usePathname();

  return (
    <main className="container mx-auto px-8 py-16">
      <Latest />
      <GoBack text={'Tornar al registre'} />
    </main>
  );
}
