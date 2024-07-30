import React from 'react';
import { Zap, TrendingUp, Users, Gift } from 'lucide-react';

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const BenefitCard = ({ icon: Icon, title, description }: Props) => (
  <div className="rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:scale-105">
    <Icon className="mb-4 size-12 text-accent" />
    <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const BetaBenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Tecnologia Pionera",
      description: "Sigues el primer en experimentar la innovació en estalvi d'aigua amb IA."
    },
    {
      icon: TrendingUp,
      title: "Estalvis Immediats",
      description: "Segueix el teu consum d'aigua des del primer dia."
    },
    {
      icon: Users,
      title: "Impacte Col·lectiu",
      description: "Forma part d'una comunitat compromesa amb la sostenibilitat."
    },
    {
      icon: Gift,
      title: "Recompenses Exclusives",
      description: "Accedeix a descomptes i avantatges únics per a beta testers."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
          Descobreix les avantatges del Beta Tester
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BetaBenefitsSection;