'use client';

import React, { useRef } from 'react';
import { ClipboardCheck, FileQuestion, UserCheck, Cpu } from 'lucide-react';

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
  isLast?: boolean;
};

const steps: Props[] = [
  {
    icon: ClipboardCheck,
    title: "Registra't.",
    description: 'Completa un formulari amb la teva informació de contacte.',
  },
  {
    icon: FileQuestion,
    title: 'Contesta un qüestionari.',
    description: "T'enviarem un qüestionari per conèixer millor les teves necessitats.",
  },
  {
    icon: UserCheck,
    title: 'Procés de selecció.',
    description: 'Seleccionarem els candidats més adequats per a la prova pilot.',
  },
  {
    icon: Cpu,
    title: "T'enviarem un sensor.",
    description: 'Si ets seleccionat, contactarem amb tu per coordinar la instal·lació del sensor.',
  },
];

function ProcessStep({ icon: Icon, title, description, isLast = false }: Props) {
  const stepRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={stepRef} className="relative flex items-start pb-8">
      <div className="mr-6 flex flex-col items-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-transform hover:scale-110">
          <Icon className="size-7" />
        </div>
        {!isLast && (
          <div
            className="absolute left-7 top-14 w-0.5 -translate-x-1/2 bg-gray-300 transition-all duration-300"
            style={{ height: 'calc(100% - 3.5rem)' }}
          />
        )}
      </div>
      <div className="grow">
        <h6 className="mb-2 text-gray-800">{title}</h6>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h3 className="mb-10 text-center font-bold text-primary">Passos a seguir</h3>
        <div className="mx-auto max-w-3xl">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
