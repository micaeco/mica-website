import React from 'react';

import Button from '@/src/components/ui/button';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-primary-300 to-primary py-20 text-white">
      <div className="container mx-auto px-8 text-center">
        <h6 className="mx-auto mb-8 max-w-2xl">
          Uneix-te al programa beta de MICA avui i comença a marcar la diferència en el consum
          d&apos;aigua de casa teva i del planeta.
        </h6>
        <div className="space-x-3">
          <Link href="https://app.mica.eco" target="_blank">
            <Button variant="transparent" showArrow={false}>
              Demo app
            </Button>
          </Link>

          <Link href="/register">
            <Button> Registra't </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm opacity-75">
          El número de sensors subvencionats per aquesta fase son limitats. No perdis la teva
          oportunitat!
        </p>
      </div>
    </section>
  );
}
