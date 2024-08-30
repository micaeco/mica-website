import React from 'react';

import CtaButton from '@/src/components/ui/my-button';

export default function CallToAction() {
  return (
    <section>
      <div className="px-4 py-16 text-center">
        <CtaButton text="En vull un!" href="/beta" />
      </div>
    </section>
  );
}
