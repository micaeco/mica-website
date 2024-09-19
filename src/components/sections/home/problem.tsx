'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, CircleHelp } from 'lucide-react';

export default function Problem() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 md:flex-row"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src="/images/piechart.png" alt="Piechart" width={1100} height={1100} />
          </motion.div>
          <div className="space-y-6">
            <h2 className="font-bold">Sabies que...</h2>
            <p className="mt-4 font-light">
              Un estudi afirma que el 82% del consum d&apos;aigua a casa nostra el produeix només 3
              dispositius: la dutxa, el vàter i l'aixeta'.
              <Link
                href="https://docs.amb.cat/alfresco/api/-default-/public/alfresco/versions/1/nodes/059eb8bc-f3f0-4cf2-b60d-bbd639344706/content/EAU-AMB%202020_IERMB_Informe_resum.pdf?attachment=false&mimeType=application/pdf&sizeInBytes=996300"
                className="transition hover:text-blue-500"
                target="_blank"
              >
                <ExternalLink className="ml-2 inline" />
              </Link>
            </p>
            <div className="flex flex-row">
              <CircleHelp size={30} />
              <p className="ml-2 font-bold">
                I tu, saps quins dispositius són els que més aigua consumeixen a casa teva?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
