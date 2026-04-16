import React from 'react';
import { cn } from './Button';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className }) => {
  return (
    <span 
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-text-secondary whitespace-nowrap",
        className
      )}
    >
      {children}
    </span>
  );
};
