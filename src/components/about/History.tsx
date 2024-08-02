import React from 'react';
import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';

export default function HistorySection() {
  return (
    <section className="w-full bg-tertiary 2xl:px-44 px-8 py-16">
      <div className="flex flex-col items-center 2xl:flex-row 2xl:space-x-8 space-y-4">
        <div className="2xl:w-1/2">
          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Innovant per combatre la sequera a Barcelona
          </h2>
          <p className="mb-6 text-gray-500">
            L&apos;estiu de 2022, Barcelona va patir una de les pitjors sequeres de la seva
            història. Mentre la ciutat entrava en{' '}
            <span className="font-semibold text-accent-500">FASE D&apos;ALERTA</span>, un grup
            d&apos;enginyers locals va tenir una idea revolucionària.
          </p>
          <p className="mb-6 text-gray-500">
            Així va néixer MICA, amb la missió de transformar com entenem i conservem l&apos;aigua.
            La nostra tecnologia permet als barcelonins enfrontar-se a cada nova crisi hídrica amb
            dades precises i eines innovadores.
          </p>
          <div className="mb-6 rounded-lg bg-white p-4 shadow-md">
            <h6 className="mb-2 flex items-center text-primary-500">
              <AlertTriangle className="mr-2 size-6 text-accent-500" />
              Sabies que...?
            </h6>
            <p className="text-primary-500">
              En la fase d&apos;alerta actual, el consum d&apos;aigua està limitat a 250 litres per
              habitant i dia, incloent-hi activitats econòmiques i comercials.
            </p>
          </div>
        </div>
        <div className="relative 2xl:w-1/2 overflow-hidden rounded-lg shadow-xl">
          <Image
            src="/images/drought.jpg"
            alt="Estalvi d'aigua a Barcelona"
            width={1200}
            height={689}
          />
        </div>
      </div>
    </section>
  );
}
