'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "MICA m'ha ajudat a reduir la meva factura d'aigua en un 30%!",
    author: "Maria G.",
    role: "Usuària satisfeta",
  },
  {
    quote: "Una eina imprescindible per a qualsevol llar conscient del medi ambient.",
    author: "Joan P.",
    role: "Activista ambiental",
  },
  {
    quote: "Fàcil d'usar i amb resultats reals. Totalment recomanable!",
    author: "Laura S.",
    role: "Propietària de casa",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  });

  return (
    <section className="bg-secondary bg-gradient-to-b px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="mb-4 text-2xl italic text-primary">&ldquo;{testimonials[current].quote}&rdquo;</p>
              <p className="font-semibold text-primary">{testimonials[current].author}</p>
              <p className="text-sm text-primary/60">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}