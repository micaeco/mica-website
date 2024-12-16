"use client";

import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import StarRating from "@/components/ui/star-rating";

export default function TestimonialCarousel() {
  const t = useTranslations();
  const testimonials: { rating: number; quote: string; author: string; role: string }[] =
    t.raw("home.testimonials");
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
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
    <section className="bg-muted px-4 pt-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl"
          orientation="horizontal"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={() => plugin.current.play()}
          opts={{ loop: true, align: "start" }}
          setApi={(api) => setApi(api ?? null)}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="flex h-full flex-col items-center justify-center">
                  <CardHeader>
                    <StarRating rating={testimonial.rating} />
                  </CardHeader>
                  <CardContent className="text-center italic">
                    <h5>&quot;{testimonial.quote}&quot;</h5>
                  </CardContent>
                  <CardFooter className="flex flex-col justify-center">
                    <p className="font-bold capitalize">{testimonial.author}</p>
                    <span className="text-sm font-extralight text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Tabs */}
        <div className="mt-4 flex w-full justify-center">
          <div className="flex flex-wrap gap-2 px-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1 w-8 rounded-full transition-all md:w-16 ${
                  current === index ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
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
