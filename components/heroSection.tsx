import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="h-screen snap-start w-full flex items-center justify-center bg-tertiary-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-10">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Benvinguts a <span className="text-accent">Mica</span>
            </h1>
            <h1 className="text-4xl lg:text-3xl mb-6 leading-tight">
              De Mica en Mica s&apos;omple la pica
            </h1>
            <p className="text-2xl mb-8 opacity-90 leading-relaxed">
              Transformem la manera de cuidar el nostre planeta amb solucions ecològiques innovadores per a l&apos;estalvi d&apos;aigua. Junts, podem fer una diferència significativa.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/about" className="flex items-center text-xl font-bold text-primary uppercase">
                <button className="bg-primary-500 text-white font-semibold py-3 px-6 rounded-full duration-300 ease-in-out flex items-center active:translate-y-1 transition">
                    Descobreix més
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}