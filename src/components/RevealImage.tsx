import { motion } from 'motion/react';
import React from 'react';

export function RevealImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      className={`overflow-hidden ${className}`}
    >
      <motion.img
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
      />
    </motion.div>
  );
}
