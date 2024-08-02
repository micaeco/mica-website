import React from 'react';
import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';

export default function HistorySection() {
  return (
    <section className="w-full bg-tertiary px-6 py-16 lg:px-0">
      <div className="container mx-auto mb-12">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="lg:w-1/2 lg:pr-12">
            <h3 className="mb-6 text-4xl font-bold">La nostra història</h3>
            <h2 className="mb-6 text-5xl font-bold leading-tight">
              Innovant per combatre la sequera a Barcelona
            </h2>
            <p className="mb-6 text-lg">
              L&apos;estiu de 2022, Barcelona va patir una de les pitjors sequeres de la seva
              història. Mentre la ciutat entrava en{' '}
              <span className="font-semibold text-accent-500">FASE D&apos;ALERTA</span>, un grup
              d&apos;enginyers locals va tenir una idea revolucionària.
            </p>
            <p className="mb-6 text-lg">
              Així va néixer MICA, amb la missió de transformar com entenem i conservem
              l&apos;aigua. La nostra tecnologia permet als barcelonins enfrontar-se a cada nova
              crisi hídrica amb dades precises i eines innovadores.
            </p>
            <div className="mb-6 rounded-lg bg-white p-4 shadow-md">
              <h4 className="mb-2 flex items-center text-lg font-semibold text-primary-500">
                <AlertTriangle className="mr-2 size-6 text-accent-500" />
                Sabies que...?
              </h4>
              <p className="text-primary-500">
                En la fase d&apos;alerta actual, el consum d&apos;aigua està limitat a 250 litres
                per habitant i dia, incloent-hi activitats econòmiques i comercials.
              </p>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/drought.jpg"
                alt="Estalvi d'aigua a Barcelona"
                width={1200}
                height={689}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
