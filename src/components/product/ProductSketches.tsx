import React from 'react';
import { Droplet, Cpu, Radio } from 'lucide-react';

import ImageCard from '@/src/components/ui/ImageCard';
import TextCard from '@/src/components/ui/TextCard';

const features = [
  {
    title: "Disseny Compacte",
    description: "El disseny del producte és elegant i compacte.",
  },
  {
    title: "Modularitat",
    description: "Fàcil de desmontar, simplificant així la substitució de la bateria i la reparació del sensor.",
  },
  {
    title: "Materials robusts",
    description: "Disseny reforçat per a entorns difícils i aplicacions exteriors de mesurament de flux d'aigua.",
  },
];

type Props = {
  icon: React.ReactNode;
  text: string;
};

function FeatureIcon({ icon, text }: Props) {
  return(
    <div className="flex items-center space-x-2">
      {icon}
      <span>{text}</span>
    </div>
  );
};

const ProductFeatures: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-10 text-center text-3xl font-bold">
        Primers esbossos del sensor...
      </h1>
      
      <div className="grid grid-cols-1 2xl:grid-cols-2">
        <ImageCard
          className="m-5"
          imageSrc="/images/sensor-sketch.png"
          alt="Sensor Sketch"
          width={1440}
          height={1024}
        />

        <div className="m-5 grid grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <TextCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <div className="m-5 rounded-lg bg-gray-100 p-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Característiques Principals
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FeatureIcon icon={<Droplet className="text-secondary" />} text="Mesura precisa del flux d'aigua" />
          <FeatureIcon icon={<Cpu className="text-primary" />} text="Processament avançat de dades" />
          <FeatureIcon icon={<Radio className="text-accent" />} text="Connectivitat via ràdio" />
        </div>
      </div>

      <p className="mt-8 text-center text-sm">
        Nota: El sensor MICA mesura el flux d&apos;aigua i processa les dades localment. 
        Amb la instal·lació d&apos;n pont o &apos;gateway&apos;, les dades es poden transmetre a la núvol per a l&apos;anàlisi i la visualització.
      </p>
    </div>
  );
};

export default ProductFeatures;