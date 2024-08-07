import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function IconCard({ icon: Icon, title, description }: Props) {
  return (
    <motion.div
      className="flex h-full flex-col items-center justify-between rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300"
      whileHover={{
        scale: 1.03,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="mb-4 rounded-full bg-secondary p-4">
        <Icon className="size-10 text-primary" />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-primary">{title}</h3>
      <p className="text-base text-gray-500">{description}</p>
    </motion.div>
  );
}
