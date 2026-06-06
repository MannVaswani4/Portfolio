import React, { useRef } from 'react';
import { content } from '../data/content';
import { TrendingUp, Terminal, Code, MapPin } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const icons = [TrendingUp, Terminal, Code];
const borderColors = ['border-primary-container', 'border-secondary', 'border-primary-container'];
const glowColors = [
  'shadow-[0_0_15px_rgba(0,240,255,0.35)]',
  'shadow-[0_0_15px_rgba(207,92,255,0.35)]',
  'shadow-[0_0_15px_rgba(0,240,255,0.35)]'
];
const textColors = ['text-primary-container', 'text-secondary', 'text-primary-container'];

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 relative bg-background text-on-surface">
      <div className="container mx-auto px-6 max-w-[1440px]">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-primary-container">
            Experience
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-primary-container/50 to-transparent"></div>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative space-y-16">
          {/* Background Track Line */}
          <div className="absolute inset-y-0 left-5 md:left-1/2 -translate-x-1/2 w-0.5 bg-outline-variant/15 pointer-events-none" />

          {/* Active Progress Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }} 
            className="absolute inset-y-0 left-5 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary-container via-secondary to-accent pointer-events-none" 
          />
          {content.experience.map((exp, idx) => {
            const Icon = icons[idx % icons.length];
            const borderCol = borderColors[idx % borderColors.length];
            const glowCol = glowColors[idx % glowColors.length];
            const textCol = textColors[idx % textColors.length];

            return (
              <div
                key={idx}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline node icon */}
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border ${borderCol} bg-surface-dim ${textCol} ${glowCol} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={18} className="stroke-[2]" />
                </div>

                {/* Timeline Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl relative overflow-hidden group">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-3">
                    <h3 className="font-display text-lg font-bold text-on-surface transition-colors group-hover:text-primary-container">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-[10px] text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20 shrink-0 self-start lg:self-center font-semibold">
                      {exp.period.split('|')[0].trim()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-4 border-b border-outline-variant/15 pb-2">
                    <div className="font-mono text-xs text-primary-container font-semibold">{exp.company}</div>
                    <div className="font-mono text-[10px] text-text-muted flex items-center gap-1">
                      <MapPin size={12} className="stroke-[1.5]" />
                      {exp.period.includes('|') ? exp.period.split('|')[1].trim() : 'India'}
                    </div>
                  </div>

                  <ul className="font-sans text-xs md:text-sm text-on-surface-variant/90 space-y-2 list-disc ml-4 leading-relaxed">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* Core tags depending on job */}
                  <div className="mt-4 flex flex-wrap gap-2 pt-2">
                    {exp.company.toLowerCase().includes('realty') && (
                      <>
                        <span className="font-mono text-[9px] px-2 py-1 bg-surface-container-highest border border-outline-variant/30 rounded text-on-surface-variant">AI Strategy</span>
                        <span className="font-mono text-[9px] px-2 py-1 bg-surface-container-highest border border-outline-variant/30 rounded text-on-surface-variant">CRM Automation</span>
                        <span className="font-mono text-[9px] px-2 py-1 bg-surface-container-highest border border-outline-variant/30 rounded text-on-surface-variant">PropTech</span>
                      </>
                    )}
                    {exp.company.toLowerCase().includes('sync') && (
                      <>
                        <span className="font-mono text-[9px] px-2 py-1 bg-surface-container-highest border border-outline-variant/30 rounded text-on-surface-variant">React</span>
                        <span className="font-mono text-[9px] px-2 py-1 bg-surface-container-highest border border-outline-variant/30 rounded text-on-surface-variant">TypeScript</span>
                        <span className="font-mono text-[9px] px-2 py-1 bg-surface-container-highest border border-outline-variant/30 rounded text-on-surface-variant">Tailwind CSS</span>
                      </>
                    )}
                    {exp.company.toLowerCase().includes('rishihood') && (
                      <>
                        <span className="font-mono text-[9px] px-2 py-1 bg-surface-container-highest border border-outline-variant/30 rounded text-on-surface-variant">MERN Stack</span>
                        <span className="font-mono text-[9px] px-2 py-1 bg-surface-container-highest border border-outline-variant/30 rounded text-on-surface-variant">ERP Architecture</span>
                        <span className="font-mono text-[9px] px-2 py-1 bg-surface-container-highest border border-outline-variant/30 rounded text-on-surface-variant">REST API</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
