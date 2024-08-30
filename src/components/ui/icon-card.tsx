import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function IconCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="rounded-lg p-2">
      <Icon className="mb-4 size-20 rounded-full bg-primary p-4 text-white" />
      <h3 className="mb-3 text-2xl font-bold text-primary">{title}</h3>
      <p className="text-base font-light">{description}</p>
    </div>
  );
}
