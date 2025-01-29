import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Hero() {
  return (
    <section>
      <div className="mx-auto">
        {/* Main grid container */}
        <div className="grid grid-cols-1 items-center gap-8 px-4 py-16 lg:grid-cols-12 lg:px-8">
          {/* Content side - spans 7 columns on desktop */}
          <div className="space-y-8 lg:col-span-7">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Les úniques cookies que utilitzem...{" "}
              <span className="text-brand-quaternary">són per menjar!</span>
            </h1>

            <div className="space-y-4 text-gray-600">
              <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                Benvinguts a cookies.mica.eco, un projecte creatiu i solidari vinculat a
                l&apos;associació MICA ECO, que promou la gestió sostenible de l&apos;aigua i la
                consciència ambiental.
              </h2>

              <Accordion type="single" collapsible className="w-full max-w-2xl">
                <AccordionItem value="item-2">
                  <AccordionTrigger>Que oferiu?</AccordionTrigger>
                  <AccordionContent>
                    Oferim galetes artesanals i personalitzades per regals, empreses i
                    esdeveniments. Cada galeta és única, decorada amb cura i pensada per gaudir en
                    ocasions especials.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>A on van els beneficis?</AccordionTrigger>
                  <AccordionContent>
                    Els beneficis de la venda de les nostres galetes es destinen íntegrament a
                    l’associació. Gràcies a la nostra app, els usuaris de MICA ECO podran convertir
                    els punts obtinguts amb l’estalvi d’aigua en donacions a les ONGs que més els
                    inspirin.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Feu servir cookies?</AccordionTrigger>
                  <AccordionContent>
                    La política de privacitat de MICA ECO garanteix que no fem servir cookies
                    digitals per rastrejar-te. En canvi, les úniques cookies que trobaràs són les
                    que pots tastar!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Image side - spans 5 columns on desktop */}
          <div className="h-full w-full lg:col-span-5">
            <div className="aspect-video overflow-hidden rounded-xl shadow-xl lg:aspect-square">
              <Image
                src="/images/hero.jpg"
                alt="Galetes artesanals fetes a mà"
                priority
                width={3000}
                height={2250}
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
