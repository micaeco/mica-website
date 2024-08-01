'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const ImageCard = ({ imageSrc, width, height, alt, className }: Props) => (
  <motion.div 
    className={`flex flex-col items-center justify-between rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}
  >
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
    />
  </motion.div>
);

export default ImageCard;