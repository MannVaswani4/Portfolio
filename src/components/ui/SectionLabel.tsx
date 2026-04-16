import React from 'react';
import { motion } from 'framer-motion';

export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 mb-6"
    >
      <span className="w-8 h-[1px] bg-accent" />
      <span className="text-xs font-mono font-medium tracking-widest uppercase text-accent">
        {children}
      </span>
    </motion.div>
  );
};
