import React from 'react';
import { content } from '../data/content';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative container mx-auto px-6">
      <SectionLabel>02. Experience</SectionLabel>
      
      <div className="mt-12 relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-16">
          {content.experience.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] top-1.5 w-[9px] h-[9px] rounded-full bg-surface border-2 border-border group-hover:border-accent group-hover:scale-125 transition-all duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-text-secondary mt-1">{exp.role}</p>
                  </div>
                  <div className="text-sm font-mono text-text-muted whitespace-nowrap mt-1 md:mt-2">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="mt-2.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent/40 transition-colors duration-300" />
                      <span className="leading-relaxed text-sm md:text-base text-balance">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
