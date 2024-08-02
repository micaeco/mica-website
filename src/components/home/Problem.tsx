'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Problem() {
  return (
    <section className="relative bg-tertiary px-3 py-10 sm:py-12">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 md:flex-row"
        >
          <div className="space-y-6 md:w-1/2">
            <h2 className="text-2xl font-bold">Sabies que...</h2>
            <p className="mt-4">
              Un estudi afirma que el 72% del consum d&apos;aigua a casa nostra el produeix només 3
              electrodomèstics: la dutxa, el vàter i la rentadora.
              <Link
                href="https://proyectoaguas.es/que-es-lo-que-mas-consume-agua-en-casa/"
                className="transition hover:text-blue-500"
                target="_blank"
              >
                <ExternalLink className="ml-2 inline" />
              </Link>
            </p>
            <div className="rounded-lg border-l-4 border-primary bg-white p-4 shadow-lg transition hover:scale-105">
              <p className="text-lg font-bold">
                I tú, saps quins aparells són els que més aigua consumeixen a casa teva?
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="group relative border-accent shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="/images/barcelona-beach.jpg"
                alt="Il·lustració d'una dutxa"
                width={400}
                height={400}
                className="h-auto w-full rounded-lg bg-white object-cover p-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
