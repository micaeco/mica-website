import React from 'react';
import { Droplet, AlertTriangle, TrendingUp } from 'lucide-react';

const KeyBenefits = () => {
  return (
    <section className="bg-gradient-to-b from-secondary-200 to-secondary-500 py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">Beneficis Clau</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-accent p-4">
              <Droplet className="size-8 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-primary">Categorització Intel·ligent</h3>
            <p className="text-gray-700">La nostra IA identifica i categoritza automàticament els esdeveniments d&apos;ús d&apos;aigua, com dutxes, rentavaixelles i aixetes.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-accent p-4">
              <AlertTriangle className="size-8 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-primary">Detecció de Fugues</h3>
            <p className="text-gray-700">Identifiquem ràpidament possibles fugues, estalviant-vos aigua i diners en reparacions costoses.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-accent p-4">
              <TrendingUp className="size-8 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-primary">Recomanacions Personalitzades</h3>
            <p className="text-gray-700">Rebeu consells adaptats al vostre patró d&apos;ús per maximitzar l&apos;estalvi d&apos;aigua sense sacrificar el confort.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;