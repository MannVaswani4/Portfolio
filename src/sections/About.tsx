import React from 'react';
import { content } from '../data/content';

import { ScrollReveal } from '../components/ui/ScrollReveal';
import { RevealText } from '../components/ui/RevealText';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 relative bg-[#EAB308]">
      <div className="container mx-auto px-6">
      <div className="mb-8">
        <span className="text-xs font-mono text-black/40 uppercase tracking-widest">01. About</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Bridging design <br className="hidden md:block" /> and engineering.
          </h2>
          <div className="text-black/70 text-lg leading-relaxed text-balance">
            <RevealText text={content.about.bio} />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {Object.entries(content.about.skills).map(([category, items], idx) => (
            <div key={category}>
              <ScrollReveal delay={idx * 0.1}>
                <h3 className="text-sm font-mono text-black/50 mb-4 uppercase tracking-wider">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIdx) => (
                    <ScrollReveal key={skill} delay={idx * 0.1 + skillIdx * 0.05} width="w-auto">
                      <span className="px-3 py-1 text-xs font-semibold tracking-wide border border-black/20 rounded-full text-black/70 bg-black/5">
                        {skill}
                      </span>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
