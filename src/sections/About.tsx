import React from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { RevealText } from '../components/ui/RevealText';
import { Palette, Code, FileText } from 'lucide-react';
import { ThreeDMarquee } from '../components/ui/3d-marquee';



export const About: React.FC = () => {
  const handleScrollToProjects = () => {
    const projSection = document.getElementById('work');
    if (projSection) {
      projSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          {/* Bio text (Left Side) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00f0ff]"></span>
                <span className="font-mono text-[10px] text-primary-container uppercase tracking-widest font-semibold">
                  AI Enthusiast & Developer
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Bridging design and <br />
                <span className="text-primary-container glow-cyan-text" style={{ textShadow: '0 0 15px rgba(0, 240, 255, 0.3)' }}>
                  Engineering.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                <RevealText text="I am Mann Vaswani, a developer passionate about building seamless digital experiences. My focus lies in creating efficient, scalable applications by merging robust backend logic with intuitive, polished frontend design." />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={handleScrollToProjects}
                  className="px-8 py-3 bg-primary-container text-on-primary font-mono text-xs font-bold uppercase tracking-wider rounded hover:opacity-90 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                >
                  View Projects
                </button>
                <a
                  href="#/resume.pdf"
                  download
                  className="flex items-center gap-2 px-8 py-3 border border-primary-container/50 text-primary-container font-mono text-xs font-bold uppercase tracking-wider rounded hover:bg-primary-container/10 active:scale-95 transition-all"
                >
                  <FileText size={14} /> Download Resume
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Profile Image card (Right Side) */}
          <div className="lg:col-span-5 relative group flex justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-primary-container/20 blur-3xl rounded-full profile-bg-glow pointer-events-none"></div>
            
            <ScrollReveal delay={0.2} width="w-full" className="max-w-[400px]">
              <div className="relative glass-card aspect-square rounded-xl overflow-hidden border border-outline-variant/30 group">
                <img
                  src="/Bgremove.png"
                  alt="Mann Vaswani"
                  className="w-full h-full object-cover grayscale contrast-110 brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
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

          <div className="mx-auto my-10 w-full rounded-3xl bg-surface-lowest border border-outline-variant/20 p-2 backdrop-blur-sm shadow-[0_0_50px_rgba(0,240,255,0.05)]">
            <ThreeDMarquee />
          </div>
        </div>

        {/* 3. Philosophy Section (The Ethos) */}
        <section className="relative py-16 px-8 overflow-hidden rounded-3xl border border-outline-variant/10">
          {/* Subtle Grid backdrop */}
          <div className="absolute inset-0 bg-surface-low/60 backdrop-blur-md -z-10"></div>
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
            backgroundImage: 'linear-gradient(#dbfcff 1px, transparent 1px), linear-gradient(90deg, #dbfcff 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}></div>

          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="font-mono text-xs text-secondary tracking-[0.3em] uppercase font-bold">The Ethos</span>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">Precision in Every Pixel</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-6">
              {/* Pillar 1 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Code className="text-primary-container" size={20} />
                  <h4 className="font-display text-base font-bold text-on-surface">Clean Code, Complex Thinking</h4>
                </div>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  I believe in writing code that is not just functional but maintainable and elegant. Architecture is the foundation upon which great user experiences are built.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Palette className="text-secondary" size={20} />
                  <h4 className="font-display text-base font-bold text-on-surface">User-Centric Design</h4>
                </div>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Technology should be invisible. My design philosophy focuses on reducing friction and creating interfaces that feel like a natural extension of the user's intent.
                </p>
              </div>
            </div>

            <div className="pt-8 flex justify-center">
              <blockquote className="italic font-sans text-on-surface text-lg border-l-4 border-primary-container pl-6 py-2 max-w-2xl text-left leading-relaxed">
                "Great products aren't just built; they are crafted through a meticulous balance of logic, empathy, and technical excellence."
              </blockquote>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};
