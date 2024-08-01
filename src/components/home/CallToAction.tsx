import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Preparat per Estalviar Aigua?</h2>
        <p className="mb-8 text-xl text-white">Uneix-te al nostre programa beta i comença a fer la diferència avui mateix.</p>
        <Link href="/programa-beta" className="rounded-full bg-accent px-6 py-3 font-bold text-white transition duration-300 hover:bg-accent-800">
          Uneix-te al Programa Beta
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;