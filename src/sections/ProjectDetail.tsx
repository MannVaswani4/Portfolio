import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { GravityStarsBackground } from '../components/animate-ui/components/backgrounds/gravity-stars';

interface DetailSection {
  subtitle: string;
  content: string;
  image?: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  tech: string[];
  description: string;
  coverImage?: string;
  demoLink?: string;
  codeLink?: string;
  pdfLink?: string;
  details?: DetailSection[];
  gallery?: string[];
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Scroll to top on mount
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [project]);

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-auto bg-bg-dark text-on-surface py-20 relative px-6 md:px-12 lg:px-24"
    >
      {/* GravityStarsBackground Backdrop */}
      <GravityStarsBackground
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        starsCount={100}
        movementSpeed={0.25}
      />

      {/* Subtle grid backdrop */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{
        backgroundImage: 'linear-gradient(#dbfcff 1px, transparent 1px), linear-gradient(90deg, #dbfcff 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      <div className="max-w-[1200px] mx-auto space-y-12 relative z-10">
        {/* Back navigation */}
        <button
          onClick={onClose}
          className="group flex items-center gap-2 font-mono text-xs text-primary-container border border-primary-container/20 px-5 py-2.5 rounded-full hover:bg-primary-container/10 transition-all hover:border-primary-container/50 active:scale-95 self-start shadow-[0_0_15px_rgba(0,240,255,0.05)]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        {/* Hero Meta Info */}
        <header className="space-y-6 text-left">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#a8ff35] uppercase tracking-[0.2em] font-semibold">
              {project.category} &middot; {project.date}
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none">
              {project.title}
            </h1>
            <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Details Meta Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-outline-variant/10">
            {/* Tech Stack tags */}
            <div className="md:col-span-6 space-y-2">
              <span className="font-mono text-[10px] uppercase text-outline tracking-wider font-bold block">Technologies</span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="font-mono text-[10px] bg-primary-container/5 border border-primary-container/15 text-primary-container px-3 py-1 rounded-full font-semibold uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links CTA */}
            <div className="md:col-span-6 space-y-2 flex flex-col md:items-end justify-end">
              <div className="flex flex-wrap gap-4 pt-2">
                {project.demoLink && project.demoLink !== "#" && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider bg-primary-container text-black px-6 py-3.5 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                  >
                    <ExternalLink size={12} /> {project.demoLink.includes('figma.com') ? 'Figma Design' : 'Live Demo'}
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-white/10 text-white hover:border-[#a8ff35] hover:text-[#a8ff35] px-6 py-3.5 rounded-lg active:scale-95 transition-all"
                  >
                    <Github size={12} /> Code
                  </a>
                )}
                {project.pdfLink && project.pdfLink !== "#" && (
                  <a
                    href={project.pdfLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-primary-container/30 text-primary-container hover:bg-primary-container/10 px-6 py-3.5 rounded-lg active:scale-95 transition-all"
                  >
                    <FileText size={12} /> Research Report
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Full-width Hero Cover Image */}
        {project.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden border border-outline-variant/15 relative bg-[#0e0e0e] shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className={`w-full h-full object-cover ${project.id === 'agrilo' ? 'object-top' : 'object-center'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent"></div>
          </motion.div>
        )}

        {/* Narrative Detail Sections */}
        {project.details && project.details.length > 0 && (
          <div className="space-y-24 py-16">
            {project.details.map((section, idx) => {
              const isEven = idx % 2 === 0;
              const hasImage = !!section.image;

              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
                >
                  {/* Text Description Column */}
                  <div className={`space-y-4 ${
                    hasImage 
                      ? isEven 
                        ? 'lg:col-span-5 lg:order-1' 
                        : 'lg:col-span-5 lg:col-start-8 lg:order-2'
                      : 'lg:col-span-10 lg:col-start-2 text-center'
                  }`}>
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase text-white tracking-wide">
                      {section.subtitle}
                    </h3>
                    <p className={`font-sans text-sm md:text-base text-on-surface-variant leading-relaxed ${
                      hasImage ? 'text-left' : 'max-w-3xl mx-auto'
                    }`}>
                      {section.content}
                    </p>
                  </div>

                  {/* Image Column */}
                  {hasImage && (
                    <div className={`lg:col-span-7 ${
                      isEven ? 'lg:col-start-6 lg:order-2' : 'lg:col-start-1 lg:order-1'
                    }`}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl overflow-hidden border border-outline-variant/15 bg-surface-lowest shadow-lg aspect-video w-full relative group"
                      >
                        <img
                          src={section.image}
                          alt={section.subtitle}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </motion.div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Project Gallery / Additional Visual Analysis */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-8 pt-12 border-t border-outline-variant/10">
            <div className="text-left space-y-2">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase text-white tracking-wide">
                Additional Analysis & Visuals
              </h3>
              <p className="font-sans text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                Screenshots, UX journeys, and analytical charts detailing the product teardown.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-outline-variant/15 bg-surface-lowest shadow-md aspect-video w-full relative group"
                >
                  <img
                    src={imgUrl}
                    alt={`Gallery asset ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
