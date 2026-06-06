import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const SocialLinks: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative container mx-auto px-6">
      <ScrollReveal delay={0.1}>
        <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
          {/* Decorative glow behind bento panel */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 via-transparent to-secondary/5 opacity-50 pointer-events-none" />

          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight leading-tight">
            Let's build something <span className="text-secondary">meaningful.</span>
          </h2>
          
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm always open to discussing technical strategy, full-stack architectures, or potential collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative z-10">
            {/* LinkedIn */}
            <a 
              className="group flex flex-col items-center gap-3" 
              href="https://linkedin.com/in/mannvaswani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-surface-container border border-outline-variant/15 transition-all duration-300 group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] group-hover:shadow-[0_0_25px_rgba(10,102,194,0.45)] group-hover:-translate-y-2 text-on-surface group-hover:text-white">
                <Linkedin size={24} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-on-surface-variant group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a 
              className="group flex flex-col items-center gap-3" 
              href="https://github.com/mannvaswani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-surface-container border border-outline-variant/15 transition-all duration-300 group-hover:bg-[#24292e] group-hover:border-[#24292e] group-hover:shadow-[0_0_25px_rgba(36,41,46,0.6)] group-hover:-translate-y-2 text-on-surface group-hover:text-white">
                <Github size={24} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-on-surface-variant group-hover:text-white transition-colors">GitHub</span>
            </a>

            {/* Instagram */}
            <a 
              className="group flex flex-col items-center gap-3" 
              href="https://instagram.com/mannvaswani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-surface-container border border-outline-variant/15 transition-all duration-300 group-hover:bg-[#E1306C] group-hover:border-[#E1306C] group-hover:shadow-[0_0_25px_rgba(225,48,108,0.45)] group-hover:-translate-y-2 text-on-surface group-hover:text-white">
                <Instagram size={24} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-on-surface-variant group-hover:text-[#E1306C] transition-colors">Instagram</span>
            </a>

            {/* Email */}
            <a 
              className="group flex flex-col items-center gap-3" 
              href="mailto:contact@mannvaswani.com"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-surface-container border border-outline-variant/15 transition-all duration-300 group-hover:bg-[#EA4335] group-hover:border-[#EA4335] group-hover:shadow-[0_0_25px_rgba(234,67,53,0.45)] group-hover:-translate-y-2 text-on-surface group-hover:text-white">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-on-surface-variant group-hover:text-[#EA4335] transition-colors">Email</span>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
