'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import StarRating from '@/src/components/ui/star-rating';

const testimonials = [
  {
    quote: "MICA m'ha ajudat a entendre millor els meus hàbits de consum",
    author: 'Irene',
    role: 'Membre de MICA',
    rating: 5,
  },
  {
    quote:
      "Em vaig adonar que abans que arribi l'aigua calenta a la dutxa, es gasten més de 10 litres d'aigua. Ara guardem aquesta aigua en un cubell per reaprofitar-la.",
    author: 'Jaime',
    role: 'Membre de MICA',
    rating: 4.5,
  },
  {
    quote: 'No ens adonem de la quantitat de vegades que fem servir el vàter.',
    author: 'Ana',
    role: 'Ana-lista de MICA',
    rating: 4,
  },
  {
    quote:
      'El meu pare diu que les meves dutxes gasten 4 vegades més aigua que les seves. No sé si aquesta aplicació és per a mi.',
    author: 'Gabi',
    role: 'Membre de MICA',
    rating: 3.5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="bg-gray-100 px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <StarRating rating={testimonials[current].rating} />
              <p className="mb-4 mt-2 text-2xl italic text-primary">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <p className="font-semibold text-primary">{testimonials[current].author}</p>
              <p className="text-sm text-primary/60">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
