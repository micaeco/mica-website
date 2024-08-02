import React from 'react';

import CTAButton from '@/src/components/ui/CTAButton';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-primary-300 to-primary py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="mx-auto mb-8 max-w-2xl text-xl">
          Uneix-te al Programa Beta de MICA avui i comença a marcar la diferència en el consum
          d&apos;aigua de casa teva i del planeta.
        </p>
        <CTAButton text="Registra't" href="/register" />
        <p className="mt-6 text-sm opacity-75">
          El número de sensors subvencionats per aquesta fase son limitats. No perdis la teva
          oportunitat!
        </p>
      </div>
    </section>
  );
}
