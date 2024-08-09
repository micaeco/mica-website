import Image from 'next/image';
import { GiCargoCrane } from 'react-icons/gi';

export default function Hero() {
  return (
    <section className="bg-primary py-12 text-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center 2xl:flex-row 2xl:justify-between">
          <div className="max-w-xl text-center 2xl:text-left">
            <GiCargoCrane className="mx-auto mb-6 size-16 text-accent 2xl:mx-0" />
            <h3 className="mb-4 font-semibold">Uneix-te programa beta!</h3>
            <p className="mb-6 text-gray-300">
              Encara estem en fase de disseny. Tot i així, et pots apuntar des d&apos;avui mateix al
              nostre programa beta. Només cal que ens deixis el teu correu electrònic i et
              mantindrem informat sobre les novetats.
            </p>
          </div>
          <div className="mt-8 max-w-md 2xl:mt-0">
            <Image
              src="/images/sensor-sketch-no-bg.webp"
              alt="MICA Sensor Sketch"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
