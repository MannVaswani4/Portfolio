import React from 'react';
import { content } from '../data/content';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-background text-on-surface">
      <div className="container mx-auto px-6 max-w-[1440px]">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-secondary">
            Education
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-secondary/50 to-transparent"></div>
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {content.education.map((edu, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="glass-card p-6 md:p-8 rounded-xl h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-secondary/10 border border-secondary/30 rounded-lg flex items-center justify-center text-secondary">
                      {edu.degree.toLowerCase().includes('b.tech') ? (
                        <GraduationCap size={22} className="stroke-[1.5]" />
                      ) : (
                        <Award size={22} className="stroke-[1.5]" />
                      )}
                    </div>
                    {edu.gpa && (
                      <span className="font-mono text-[10px] text-primary-container bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full font-semibold uppercase">
                        Score: {edu.gpa}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors">
                      {edu.school}
                    </h3>
                    <p className="font-mono text-xs text-primary-container font-semibold mb-4 uppercase tracking-wider">
                      {edu.degree}
                    </p>
                    {edu.description && (
                      <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6 border-t border-outline-variant/15 pt-4 font-mono text-[10px] text-text-muted">
                  <Calendar size={12} className="stroke-[1.5]" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
