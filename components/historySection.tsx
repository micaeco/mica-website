import React from 'react';
import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';

export default function HistorySection() {
  return (
    <section className="w-full bg-tertiary py-16 px-4 lg:px-0">
      <div className="container mx-auto mb-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-2xl font-semibold text-primary-500 mb-4">La nostra Història</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-primary-600 mb-6 leading-tight">
              Innovant per combatre la sequera a Barcelona
            </h3>
            <p className="text-lg mb-6">
              L&apos;estiu de 2022, Barcelona va patir una de les pitjors sequeres de la seva història. 
              Mentre la ciutat entrava en <span className="font-semibold text-accent-500">FASE D&apos;ALERTA</span>, 
              un grup d&apos;enginyers locals va tenir una idea revolucionària. 
            </p>
            <p className="text-lg mb-6">
              Així va néixer Mica, 
              amb la missió de transformar com entenem i conservem l&apos;aigua. La nostra tecnologia permet als 
              barcelonins enfrontar-se a cada nova crisi hídrica amb dades precises i eines innovadores.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h4 className="text-lg font-semibold text-primary-500 mb-2 flex items-center">
                <AlertTriangle className="text-accent-500 w-6 h-6 mr-2" />
                Sabies que...?
              </h4>
              <p className="text-primary-500">
                En la fase d&apos;alerta actual, el consum d&apos;aigua està limitat a 250 litres per habitant i dia, incloent-hi activitats econòmiques i comercials.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="rounded-lg overflow-hidden shadow-xl">
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
};