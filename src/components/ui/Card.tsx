import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from './Button'; // Reusing the utility

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  className, 
  children, 
  interactive = false,
  ...props 
}) => {
  return (
    <motion.div
      className={cn(
        "bg-surface border border-border rounded-2xl p-6 relative overflow-hidden",
        interactive && "hover:border-border-hover transition-colors",
        className
      )}
      whileHover={interactive ? { y: -4 } : {}}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
