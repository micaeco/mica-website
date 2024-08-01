import React from 'react';
import { GiCargoCrane } from "react-icons/gi";
import Image from 'next/image';

import CTAButton from '@/src/components/ui/CTAButton';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-12 text-white sm:py-16 md:py-20">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="w-full max-w-xl text-center md:text-left">
            <GiCargoCrane className="mx-auto mb-6 size-16 text-accent md:mx-0" />
            <h3 className="mb-4 font-semibold">
              Converteix-te en un Beta Tester
            </h3>
            <p className="mb-6 text-gray-300">
              Encara estem en fase de disseny. Tot i així, et pots apuntar des d&apos;avui mateix al nostre programa pilot. Només cal que ens deixis el teu correu electrònic i et mantindrem informat sobre les novetats.
            </p>
            <CTAButton text="Fes el registre" href="/register" />
          </div>
          <div className="w-full max-w-md">
            <Image
              className="rounded-lg border-4 border-accent shadow-xl"
              src="/images/sensor-sketch.png"
              alt="MICA Sensor Sketch"
              width={600}
              height={600}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -skew-y-6 bg-blue-500 opacity-20"></div>
    </section>
  );
};

export default Hero;