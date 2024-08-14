'use client';

import { usePathname } from 'next/navigation';

import Latest from '@/src/components/sections/privacy-policy/Latest';
import GoBack from '@/src/components/ui/GoBack';

export default function PrivacyPolicy() {
  const path = usePathname();

  return (
    <main className="container mx-auto px-8 py-16">
      <Latest />
      <GoBack currentPath={path} desiredPath={'/../register'} text={'Tornar al registre'} />
    </main>
  );
}
