'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
};

export default function TextCard({ title, description }: Props) {
  return (
    <motion.div 
      className="flex h-full flex-col items-center justify-between rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <h3 className="mb-3 text-2xl font-bold text-primary">{title}</h3>
      <p className="text-base text-gray-700">{description}</p>
    </motion.div>
  );
};