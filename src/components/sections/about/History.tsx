import React from 'react';
import Image from 'next/image';

export default function HistorySection() {
  return (
    <section className="container w-full bg-white px-8 py-16">
      <div className="mx-auto flex flex-col items-center xl:flex-row">
        <div className="flex flex-col justify-start">
          <h2 className="font-bold">La nostra història.</h2>
          <h5 className="mb-3 font-bold">Innovant per combatre la sequera a Barcelona.</h5>
          <p className="mb-6 font-light">
            L&apos;estiu de 2022, Barcelona va patir una de les pitjors sequeres de la seva
            història. Mentre la ciutat entrava en fase d'alerta, un grup d&apos;enginyers locals va
            tenir una idea revolucionària.
          </p>
          <p className="mb-6 font-light">
            Així va néixer MICA, amb la missió de transformar com entenem i conservem l&apos;aigua.
            La nostra tecnologia permet als barcelonins enfrontar-se a cada nova crisi hídrica amb
            dades precises i eines innovadores.
          </p>
        </div>
        <Image
          className="align-start"
          src="/images/journey.png"
          alt="Journey"
          width={500}
          height={500}
          loading="eager"
        />
      </div>
    </section>
  );
}
