import React from 'react';
import { content } from '../data/content';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { RevealText } from '../components/ui/RevealText';
import { Github, Linkedin, Instagram, Mail, FileText } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 relative bg-[#EAB308] overflow-hidden text-black">
      {/* Floating Portrait keyframe styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes aboutFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        .about-portrait-float {
          animation: aboutFloat 6s ease-in-out infinite;
        }
      `}} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Animated Portrait Image */}
          <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[380px] md:max-w-[420px]">
              {/* Soft decorative shadow circle */}
              <div className="absolute inset-0 bg-black/5 rounded-full filter blur-3xl pointer-events-none transform -translate-y-6 scale-90" />
              
              <img
                src="/Bgremove.png"
                alt="Mann Vaswani"
                className="about-portrait-float w-full h-auto object-contain select-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                draggable={false}
              />
            </div>
          </div>

          {/* Right Side: Bio details, Links, Resume */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            <div className="mb-6">
              <span className="text-xs font-mono text-black/50 uppercase tracking-widest font-semibold">01. About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black tracking-tight leading-tight">
              Bridging design <br className="hidden md:block" /> and engineering.
            </h2>

            <div className="text-black/75 text-lg leading-relaxed mb-8 max-w-xl">
              <RevealText text={content.about.bio} />
            </div>

            {/* Skills grid section */}
            <div className="flex flex-col gap-6 mb-8 border-t border-black/10 pt-8">
              {Object.entries(content.about.skills).map(([category, items], idx) => (
                <div key={category}>
                  <ScrollReveal delay={idx * 0.1}>
                    <h3 className="text-[10px] font-mono text-black/60 mb-3 uppercase tracking-widest font-bold">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, skillIdx) => (
                        <ScrollReveal key={skill} delay={idx * 0.1 + skillIdx * 0.05} width="w-auto">
                          <span className="px-3 py-1 text-xs font-semibold tracking-wide border border-black/20 rounded-full text-black/80 bg-black/5 hover:bg-black/10 transition-colors duration-200">
                            {skill}
                          </span>
                        </ScrollReveal>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>

            {/* Links and Resume Button Wrapper */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 border-t border-black/10 pt-8">
                <a
                  href="https://github.com/mannvaswani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/30 rounded-full transition-all duration-300 text-black/75 hover:text-black hover:scale-110"
                  title="GitHub Profile"
                >
                  <Github size={20} strokeWidth={1.5} />
                </a>
                <a
                  href="https://linkedin.com/in/mannvaswani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/30 rounded-full transition-all duration-300 text-black/75 hover:text-black hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
                <a
                  href="https://instagram.com/mannvaswani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/30 rounded-full transition-all duration-300 text-black/75 hover:text-black hover:scale-110"
                  title="Instagram Profile"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a
                  href="mailto:contact@mannvaswani.com"
                  className="p-3 bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/30 rounded-full transition-all duration-300 text-black/75 hover:text-black hover:scale-110"
                  title="Email Me"
                >
                  <Mail size={20} strokeWidth={1.5} />
                </a>
                
                <a
                  href="#/resume.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-black hover:bg-black/85 text-white font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-black/15 ml-0 sm:ml-4"
                >
                  <FileText size={14} /> Download Resume
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
};
