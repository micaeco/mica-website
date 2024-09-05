import React from 'react';

import Button from '@/src/components/ui/button';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section>
      <div className="px-4 py-16 text-center">
        <Link href="/beta">
          <Button>En vull un!</Button>
        </Link>
      </div>
    </section>
  );
}
