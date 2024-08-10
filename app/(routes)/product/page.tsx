'use client';

import Infographic from '@/src/components/product/Infographic';
import CallToAction from '@/src/components/product/CallToAction';

const benefits = [
  {
    title: 'Instal·lació del sensor',
    description:
      "Instal·la i calibra un únic sensor en la canonada d'entrada principal. Aquest sensor, alimentat per bateries de llarga duració, enviarà la informació detallada a una plataforma al núvol per poder ser analitzada.",
    imageSrc: '/icons/water-meter.webp',
  },
  {
    title: 'Consum per dispositiu',
    description:
      "La intel·ligència artificial s'encarrega d'analitzar les dades i categoritzar el consum en diferents events com dutxes, rentadores o aixetes. Això permet identificar quins dispositius consumeixen més aigua. També és capaç d'identificar fugues i generar recomanacions personalitzades al teu consum.",
    imageSrc: '/icons/kitchen-tap.webp',
  },
  {
    title: 'Visualització de dades',
    description:
      "A través del teu mòbil o des de la web, podràs visualitzar les dades de consum en temps real i històriques. A més a més, s'inclouen gràfiques i un anàlisi detallat dels hàbits de consum i comparatives amb perfils similars al teu.",
    imageSrc: '/icons/data-analysis.webp',
  },
  {
    title: 'Pla de consum',
    description:
      "Basant-nos en l'anàlisi de les teves dades, generem recomanacions personalitzades per optimitzar el teu ús d'aigua. Això et permetrà estalviar aigua i diners.",
    imageSrc: '/icons/eco-friendly.webp',
  },
];

export default function Product() {
  return (
    <main className="container mx-auto flex flex-col">
      <Infographic />
      <CallToAction />
    </main>
  );
}
