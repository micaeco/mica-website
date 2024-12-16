'use client';

import Image from 'next/image';
import { useCallback, useState, useEffect } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const images = [
  {
    src: '/images/square1.jpg',
    alt: 'Galetes',
  },
  {
    src: '/images/square2.jpg',
    alt: 'Galetes',
  },
  {
    src: '/images/square3.jpg',
    alt: 'Galetes',
  },
];

export function CookieCarousel() {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="bg-gray-200 px-12 py-16">
      <div className="mx-auto max-w-7xl">
        <Carousel opts={{ loop: true, align: 'start' }} setApi={(api) => setApi(api ?? null)}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative aspect-square">
                  <Image src={image.src} alt={image.alt} fill className="rounded-lg object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Tabs */}
        <div className="mt-4 flex w-full justify-center lg:hidden">
          <div className="flex flex-wrap gap-2 px-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1 w-8 rounded-full transition-all md:w-16 ${
                  current === index
                    ? 'bg-black/80 hover:bg-black/90'
                    : 'bg-black/20 hover:bg-black/30'
                }`}
                aria-label={`${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
