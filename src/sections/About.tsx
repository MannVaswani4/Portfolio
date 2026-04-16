import React from 'react';
import { content } from '../data/content';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Tag } from '../components/ui/Tag';
import { RevealText } from '../components/ui/RevealText';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative container mx-auto px-6">
      <SectionLabel>01. About</SectionLabel>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Bridging design <br className="hidden md:block" /> and engineering.
          </h2>
          <div className="text-text-secondary text-lg leading-relaxed text-balance">
            <RevealText text={content.about.bio} />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {Object.entries(content.about.skills).map(([category, items], idx) => (
            <div key={category}>
              <ScrollReveal delay={idx * 0.1}>
                <h3 className="text-sm font-mono text-text-muted mb-4 uppercase tracking-wider">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIdx) => (
                    <ScrollReveal key={skill} delay={idx * 0.1 + skillIdx * 0.05} width="w-auto">
                      <Tag>{skill}</Tag>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
