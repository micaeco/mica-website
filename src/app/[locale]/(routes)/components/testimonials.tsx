'use client';

import React, { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

import StarRating from '@/components/ui/star-rating';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const t = useTranslations();
  const testimonials = t.raw('home.testimonials');

  const next = () => setCurrent((current + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="bg-muted px-6 pb-16 pt-24">
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
              <Card>
                <CardHeader>
                  <StarRating rating={Number(testimonials[current].rating)} />
                </CardHeader>
                <CardContent>
                  <p className="mb-4 mt-2 text-2xl italic text-brand-primary">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <p className="font-semibold text-brand-primary">{testimonials[current].author}</p>
                  <p className="text-sm text-brand-primary/60">{testimonials[current].role}</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
