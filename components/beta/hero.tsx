import React from 'react';
import { GiCargoCrane } from "react-icons/gi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <GiCargoCrane className="mx-auto mb-6 size-16 text-accent" />
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
          Estem en fase de disseny.
        </h1>
        <h1 className="mb-4 text-2xl font-bold md:text-4xl">
          Però pots col·laborar com un Beta Tester!
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
          Ens agradaria comptar amb el teu feedback per millorar Mica abans de llançar-la al mercat.
        </p>
      </div>
      <div className="absolute inset-0 -skew-y-6 bg-blue-500 opacity-20"></div>
    </section>
  );
};

export default Hero;