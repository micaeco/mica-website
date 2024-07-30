'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-tertiary py-56">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="mb-20 text-center text-4xl leading-normal sm:text-5xl sm:leading-[1.4]">
              Sabies que el <span className="font-bold">80%</span> del consum d&apos;aigua es produeix a la dutxa la cisterna i la rentadora?
            </h2>
            <div className="grid grid-cols-3">
              <Image
                src="/images/shower.webp"
                alt="Il·lustració de dutxa, cisterna i rentadora"
                width={300}
                height={300}
                className="mx-auto"
              />
              <Image
                src="/images/washing-machine.webp"
                alt="Il·lustració de dutxa, cisterna i rentadora"
                width={300}
                height={300}
                className="mx-auto"
              />
              <Image
                src="/images/toilet.webp"
                alt="Il·lustració de dutxa, cisterna i rentadora"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}