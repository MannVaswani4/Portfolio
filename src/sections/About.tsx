import React from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Instagram, Linkedin, Github } from 'lucide-react';
import { ThreeDMarquee } from '../components/ui/3d-marquee';
import { CountUp } from '../components/ui/CountUp';
import { Card } from '../components/ui/card';
import EducationAndCertifications from '../sections/EducationAndCertifications';
import { Experience } from './Experience';

export const About: React.FC = () => {

  return (
    <section id="about" className="py-24 relative bg-background text-on-surface overflow-hidden">
      {/* Floating Portrait & Glow keyframe styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes profileGlow {
          0%, 100% { opacity: 0.15; transform: scale(0.95); }
          50% { opacity: 0.35; transform: scale(1.05); }
        }
        .profile-bg-glow {
          animation: profileGlow 8s ease-in-out infinite;
        }
      `}} />

      <div className="container mx-auto px-6 max-w-[1440px] space-y-20">
        
        {/* 1. Hero / Profile Section */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio text (Left Side) - shifted inwards towards center */}
          <div className="lg:col-span-5 lg:col-start-2 space-y-8">
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-on-surface">
                About Me
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-sans text-xl md:text-2xl lg:text-3xl text-on-surface leading-relaxed max-w-2xl">
                Hi, I'm Mann — a product‑minded builder, AI enthusiast, and Full‑Stack Developer who loves creating technology that solves real world problems
              </p>
            </ScrollReveal>

            {/* Stats Section */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-3 gap-6 py-8 border-y border-outline-variant/15 my-6">
                {/* Years of Experience */}
                <div className="space-y-2">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#a8ff35] font-display flex items-baseline leading-none">
                    <CountUp from={0} to={2} duration={1} />
                    <span className="text-2xl md:text-3xl lg:text-4xl ml-0.5">+</span>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-on-surface-variant font-medium leading-snug pt-1">
                    Years of Experience
                  </p>
                </div>

                {/* Users Impacted */}
                <div className="space-y-2">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#a8ff35] font-display flex items-baseline leading-none">
                    <CountUp from={0} to={55} duration={1.5} />
                    <span className="text-2xl md:text-3xl lg:text-4xl ml-0.5">k</span>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-on-surface-variant font-medium leading-snug pt-1">
                    Users Impacted
                  </p>
                </div>

                {/* Roles across products */}
                <div className="space-y-2">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#a8ff35] font-display flex items-baseline leading-none">
                    <CountUp from={0} to={3} duration={1} />
                    <span className="text-2xl md:text-3xl lg:text-4xl ml-0.5">+</span>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-on-surface-variant font-medium leading-snug pt-1">
                    Roles across products
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Details */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6">
                <div className="flex flex-col items-start space-y-1">
                  <a href="tel:+916265807090" className="text-xs font-mono uppercase tracking-wider text-on-surface-variant hover:text-[#a8ff35] transition-colors">Call Today</a>
                  <a href="tel:+916265807090" className="text-base sm:text-lg font-sans text-on-surface hover:text-[#a8ff35] transition-colors">+91 6265807090</a>
                </div>
                <div className="flex flex-col items-start space-y-1">
                  <a href="mailto:mannvaswani4@gmail.com" className="text-xs font-mono uppercase tracking-wider text-on-surface-variant hover:text-[#a8ff35] transition-colors">Email</a>
                  <a href="mailto:mannvaswani4@gmail.com" className="text-base sm:text-lg font-sans text-on-surface hover:text-[#a8ff35] transition-colors">mannvaswani4@gmail.com</a>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Icons & My Story Button */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-outline-variant/10">
                {/* Social Icons */}
                <div className="flex items-center gap-6">
                  <a href="https://www.linkedin.com/in/mann-vaswani-953217291/" target="_blank" rel="noreferrer" className="text-on-surface hover:text-[#a8ff35] transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.instagram.com/mann_vaswani/?hl=en" target="_blank" rel="noreferrer" className="text-on-surface hover:text-[#a8ff35] transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://github.com/MannVaswani4?tab=overview&from=2026-06-01&to=2026-06-07" target="_blank" rel="noreferrer" className="text-on-surface hover:text-[#a8ff35] transition-colors">
                    <Github size={24} />
                  </a>
                </div>

                {/* My Story Button */}
                <button 
                  onClick={() => {
                    const journeySec = document.getElementById('experience');
                    if (journeySec) {
                      journeySec.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-10 py-3 border border-[#a8ff35] text-[#a8ff35] font-display text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#a8ff35]/15 active:scale-95 transition-all"
                >
                  My Story
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Profile Image card (Right Side) - shifted inwards */}
          <div className="lg:col-span-4 lg:col-start-8 lg:col-end-12 relative group flex justify-center">
            {/* Warm Ambient Background Glow */}
            <div className="absolute -inset-4 bg-[#f97316]/10 blur-3xl rounded-full pointer-events-none"></div>
            
            <ScrollReveal delay={0.2} width="w-full" className="max-w-[440px]">
              <Card className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden border border-outline-variant/20 bg-gradient-to-b from-amber-400 via-orange-500 to-amber-700 shadow-[0_12px_40px_rgba(249,115,22,0.25)] p-0">
                <img
                  src="/MannAnimated.png"
                  alt="Mann Vaswani"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  draggable={false}
                />
              </Card>
            </ScrollReveal>
          </div>
        </div>

        {/* 2. Tech Stack Section */}
        <div className="space-y-6 pt-10">
          <div className="flex items-end justify-between border-b border-outline-variant/10 pb-4">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface">Core Stack</h3>
              <p className="font-sans text-sm text-on-surface-variant">The technologies I master to build the web.</p>
            </div>
            <span className="font-mono text-xs text-primary-container/50 tracking-wider">V.2.0.48</span>
          </div>

          <div className="mx-auto my-10 w-full relative overflow-hidden">
            {/* Blurry fade-out overlays at top and bottom */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#131313] via-[#131313]/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#131313] via-[#131313]/50 to-transparent z-10 pointer-events-none" />
            
            {/* Blurry fade-out overlays at left and right */}
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#131313] via-[#131313]/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#131313] via-[#131313]/50 to-transparent z-10 pointer-events-none" />

            <ThreeDMarquee />
          </div>
        </div>

        {/* Experience Section placed right after Core Stack */}
        <Experience />

        {/* 3. Certifications Section */}
        <section className="relative py-16 px-8 overflow-hidden rounded-3xl border border-outline-variant/10">
          {/* Subtle Grid backdrop */}
          <div className="absolute inset-0 bg-surface-low/60 backdrop-blur-md -z-10"></div>
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
            backgroundImage: 'linear-gradient(#dbfcff 1px, transparent 1px), linear-gradient(90deg, #dbfcff 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}></div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs text-secondary tracking-[0.3em] uppercase font-bold">Credentials</span>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">Professional Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              {/* Cert 1 */}
              <div className="flex flex-col sm:flex-row gap-6 items-start bg-surface-lowest/40 p-6 rounded-2xl border border-outline-variant/5 hover:border-primary-container/20 transition-all">
                <img src="/AIforprod.png" alt="AI for Product Management" className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0 rounded-lg" />
                <div className="space-y-2">
                  <h4 className="font-display text-lg font-bold text-on-surface leading-snug">AI for Product Management</h4>
                  <p className="font-mono text-xs text-on-surface-variant/80">Google Cloud | Pendo &bull; Jun 2026</p>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Trained in LLM application, AI-powered product strategy, data-driven decision making, and product-led growth tactics.
                  </p>
                  <a href="https://www.credly.com/badges/ae42dd2a-0c41-4e0d-83cc-9b350c83c1cd/public_url" target="_blank" rel="noreferrer" className="inline-block pt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-container hover:underline">
                    View Credential
                  </a>
                </div>
              </div>

              {/* Cert 2 */}
              <div className="flex flex-col sm:flex-row gap-6 items-start bg-surface-lowest/40 p-6 rounded-2xl border border-outline-variant/5 hover:border-primary-container/20 transition-all">
                <img src="/PMbasics.png" alt="Product Management Basics" className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0 rounded-lg" />
                <div className="space-y-2">
                  <h4 className="font-display text-lg font-bold text-on-surface leading-snug">Product Management Basics</h4>
                  <p className="font-mono text-xs text-on-surface-variant/80">Pendo | Mind the Product &bull; Jun 2026</p>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Trained in the PM lifecycle, focusing on product discovery, roadmapping, prioritization, and stakeholder management.
                  </p>
                  <a href="https://www.credly.com/badges/a1fc1cce-a690-42e9-89b0-2b509417f972/public_url" target="_blank" rel="noreferrer" className="inline-block pt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-container hover:underline">
                    View Credential
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <EducationAndCertifications />

      </div>
    </section>
  );
};
