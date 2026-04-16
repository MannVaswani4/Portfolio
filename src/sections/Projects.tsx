import React from 'react';
import { content } from '../data/content';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { FileText, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 relative container mx-auto px-6">
      <SectionLabel>04. Selected Work</SectionLabel>
      
      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        {content.projects.map((project, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <Card className="h-full flex flex-col pt-10" interactive>
              {/* Optional minimal icon/graphic representation could go here */}
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-accent">{project.subtitle}</p>
                  </div>
                  <span className="text-xs font-mono text-text-muted">{project.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 mt-4">
                  {project.tech.map(t => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <ul className="space-y-2 mb-8">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-border" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-6 border-t border-border mt-auto">
                <Button variant="secondary" className="flex-1 py-2 text-xs" onClick={() => window.open(project.demoLink, '_blank')}>
                  <ExternalLink size={14} /> Live Demo
                </Button>
                <Button variant="ghost" className="flex-1 py-2 text-xs" onClick={() => window.open(project.pdfLink, '_blank')}>
                  <FileText size={14} /> View PDF
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
