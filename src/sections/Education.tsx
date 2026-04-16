import React from 'react';
import { content } from '../data/content';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Download } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative container mx-auto px-6">
      <SectionLabel>03. Education & Resume</SectionLabel>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12 mb-16">
        {content.education.map((edu, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <Card className="h-full flex flex-col justify-between" interactive>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.school}</h3>
                <p className="text-accent mb-4">{edu.degree}</p>
                {edu.description && (
                  <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-mono tracking-wider text-text-muted">{edu.period}</span>
                <span className="px-2 py-1 rounded bg-surface-overlay border border-border text-xs font-mono text-white">
                  GPA: {edu.gpa}
                </span>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="flex justify-center mt-12 block">
          <Button className="w-full sm:w-auto" onClick={() => window.open('#', '_blank')}>
            <Download size={16} />
            Download Resume
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};
