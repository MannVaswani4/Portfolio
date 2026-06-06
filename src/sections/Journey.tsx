import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { content } from '../data/content';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Calendar } from 'lucide-react';

export const Journey: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Scroll mapping for horizontal layout
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden pt-24 pb-12">
        <div className="container mx-auto px-6 absolute top-24 left-0 right-0 z-10 w-full">
          <SectionLabel>05. The Journey</SectionLabel>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 px-6 ml-6 md:ml-24 mt-16 w-max">
          {content.journey.map((item, idx) => (
            <div 
              key={idx} 
              className="w-[85vw] md:w-[60vw] lg:w-[40vw] h-[55vh] rounded-xl glass-card p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group transition-all"
            >
              {/* Aesthetic background mesh overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface-dim via-surface-low to-accent/5 opacity-50 z-0 pointer-events-none" />
              
              {/* Year watermark */}
              <div className="absolute top-0 right-0 p-6 text-[7rem] md:text-[8rem] font-display font-black text-white/[0.03] group-hover:text-primary-container/[0.05] leading-none select-none z-0 transition-colors duration-500">
                {item.year}
              </div>
              
              <div className="relative z-10 space-y-4">
                <span className="px-3 py-1 text-[10px] font-mono font-bold text-primary-container border border-primary-container/20 rounded-full inline-flex items-center gap-1 bg-primary-container/5 backdrop-blur-sm uppercase tracking-wider">
                  <Calendar size={10} />
                  {item.year}
                </span>
                
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-on-surface transition-colors group-hover:text-primary-container">
                  {item.title}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed text-balance">
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
