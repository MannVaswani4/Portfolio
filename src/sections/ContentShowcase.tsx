import React from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const ContentShowcase: React.FC = () => {
  return (
    <section className="py-24 relative container mx-auto px-6 hide-scrollbar">
      <SectionLabel>06. Highlights</SectionLabel>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 auto-rows-[300px]">
        {/* Placeholder Bento Grid */}
        <ScrollReveal delay={0.1}>
          <div className="w-full h-full rounded-2xl bg-surface border border-border overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm font-mono z-0">
              [Visual / Image 1]
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
              <span className="text-white font-medium">HPAIR Conference 2024</span>
              <span className="text-text-secondary text-sm">Bangkok, Thailand</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="md:col-span-2">
          <div className="w-full h-full rounded-2xl bg-surface border border-border overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm font-mono z-0">
               [Visual / Image 2]
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
              <span className="text-white font-medium">RealtyEaseAI Growth</span>
              <span className="text-text-secondary text-sm">Scaled to $4K MRR</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="md:col-span-2 lg:col-span-1">
          <div className="w-full h-full rounded-2xl bg-surface border border-border overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm font-mono z-0">
               [Visual / Image 3]
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
              <span className="text-white font-medium">Damru Fest Operations</span>
              <span className="text-text-secondary text-sm">Led 120+ volunteers</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4} className="md:col-span-1 lg:col-span-2">
          <div className="w-full h-full rounded-2xl bg-surface border border-border overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm font-mono z-0">
               [Visual / Image 4]
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
              <span className="text-white font-medium">MoveInSync</span>
              <span className="text-text-secondary text-sm">Built systems for 50k+ employees</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
