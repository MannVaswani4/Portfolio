import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Button } from '../components/ui/Button';
import { RevealText } from '../components/ui/RevealText';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % content.hero.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient center radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Placeholder Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-24 mb-8 rounded-full border border-border bg-surface-elevated/50 backdrop-blur object-cover shadow-2xl relative"
        >
          {/* Subtle orb inside to simulate avatar */}
          <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gradient-to-tr from-accent to-purple-500 opacity-80 blur-md" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-white"
        >
          {content.hero.name}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-8 mb-8 text-xl md:text-2xl font-mono text-accent"
        >
          <motion.span
            key={taglineIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {content.hero.taglines[taglineIndex]}
          </motion.span>
        </motion.div>

        <div className="max-w-2xl text-lg text-text-secondary text-balance mb-12">
          <RevealText text={content.hero.description} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-4"
        >
          <Button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
            View Work
          </Button>
          <Button variant="ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-text-muted"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};
