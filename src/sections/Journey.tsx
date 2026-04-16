import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { content } from '../data/content';
import { SectionLabel } from '../components/ui/SectionLabel';

export const Journey: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden pt-24 pb-12">
        <div className="container mx-auto px-6 absolute top-24 left-0 right-0 z-10 w-full">
          <SectionLabel>05. The Journey</SectionLabel>
        </div>
        
        <motion.div style={{ x }} className="flex gap-12 px-6 ml-6 md:ml-24 mt-16 w-max">
          {content.journey.map((item, idx) => (
            <div 
              key={idx} 
              className="w-[85vw] md:w-[60vw] lg:w-[40vw] h-[60vh] rounded-2xl bg-surface border border-border p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group"
            >
              {/* Aesthetic gradient overlay for milestone */}
              <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-surface to-accent/10 opacity-60 z-0" />
              <div className="absolute top-0 right-0 p-8 text-[8rem] font-bold text-white/5 leading-none select-none z-0">
                {item.year}
              </div>
              
              <div className="relative z-10">
                <span className="px-3 py-1 text-xs font-mono font-medium text-accent border border-accent/30 rounded-full mb-6 inline-block bg-accent/5 backdrop-blur-sm">
                  {item.year}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-text-secondary text-balance">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
