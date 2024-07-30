import React from 'react';
import { ClipboardList, Cpu, Smartphone, MessageCircle } from 'lucide-react';

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
  isLast: boolean;
};

const ProcessStep = ({ icon: Icon, title, description, isLast }: Props) => (
  <div className="flex items-start">
    <div className="relative mr-4 flex flex-col items-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-white">
        <Icon className="size-6" />
      </div>
      {!isLast && <div className="absolute left-1/2 top-12 h-full w-0.5 -translate-x-1/2 bg-gray-300" />}
    </div>
    <div className="grow pb-8">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const Process = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Registra't",
      description: "Completa un formulari amb la teva informació de contacte."
    },
    {
      icon: Cpu,
      title: "Rep el sensor",
      description: "Sigues dels primers en rebre el sensor Mica quan surti."
    },
    {
      icon: Smartphone,
      title: "Monotoritza",
      description: "Descobreix els teus patrons de consum amb la nostra app."
    },
    {
      icon: MessageCircle,
      title: "Comparteix",
      description: "Dóna'ns el teu feedback i ajuda'ns a millorar el futur de l'estalvi d'aigua."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl md:-translate-x-52">
          Passos a seguir...
        </h2>
        <div className="mx-auto max-w-2xl">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;