import React from 'react';
import { content } from '../data/content';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ExternalLink, FileText, Database, Activity, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-24 relative bg-background text-on-surface">
      <div className="container mx-auto px-6 max-w-[1440px] space-y-16">
        
        {/* Header Section */}
        <header className="space-y-4">
          <ScrollReveal delay={0.1}>
            <div className="inline-block px-3 py-1 bg-primary-container/10 border border-primary-container/20 rounded-full mb-2">
              <span className="font-mono text-[10px] text-primary-container uppercase tracking-widest font-semibold">
                Portfolio Showcase
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-on-surface leading-tight max-w-4xl uppercase">
              Learning to engineer future <br />
              <span className="text-secondary glow-violet-text" style={{ textShadow: '0 0 15px rgba(207, 92, 255, 0.3)' }}>
                by hands on experience.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
            </p>
          </ScrollReveal>
        </header>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {content.projects.map((project, idx) => {
            const id = project.id;
            let colSpan = "md:col-span-4";
            let cardHeight = "min-h-[350px] md:h-[380px]";
            let layoutType = "vertical-standard";

            if (id === 'deceptivision') {
              colSpan = "md:col-span-8";
              layoutType = "split-left";
            } else if (id === 'tripadvisor') {
              colSpan = "md:col-span-4";
              layoutType = "vertical-standard";
            } else if (id === 'agrilo') {
              colSpan = "md:col-span-6";
              cardHeight = "min-h-[380px] md:h-[440px]";
              layoutType = "vertical-tall";
            } else if (id === 'studio448') {
              colSpan = "md:col-span-6";
              cardHeight = "min-h-[380px] md:h-[440px]";
              layoutType = "vertical-tall";
            } else if (id === 'opportrix') {
              colSpan = "md:col-span-8";
              layoutType = "split-right";
            } else if (id === 'accredian') {
              colSpan = "md:col-span-4";
              layoutType = "vertical-standard";
            } else if (id === 'humanness') {
              colSpan = "md:col-span-8";
              layoutType = "split-left";
            } else if (id === 'globalair') {
              colSpan = "md:col-span-4";
              layoutType = "vertical-standard";
            }

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProject(project.id)}
                className={`${colSpan} ${cardHeight} group relative overflow-hidden glass-card rounded-xl flex flex-col cursor-pointer`}
              >
                {/* 1. Split-left layout */}
                {layoutType === "split-left" && (
                  <div className="flex flex-col md:flex-row h-full w-full">
                    <div className="h-[220px] md:h-full md:w-[55%] overflow-hidden relative shrink-0">
                      {project.coverImage && (
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-dim via-transparent to-transparent"></div>
                    </div>

                    <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-surface-dim/45 backdrop-blur-sm relative md:-ml-8 md:z-10">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map(t => (
                            <span key={t} className="font-mono text-[9px] bg-primary-container/10 border border-primary-container/20 text-primary-container px-2.5 py-0.5 rounded-full font-semibold uppercase">
                              {t}
                            </span>
                          ))}
                        </div>
                        <h2 className="font-display text-xl md:text-2xl font-bold text-on-surface mb-3 group-hover:text-primary-container transition-colors leading-tight">
                          {project.title}
                        </h2>
                        <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-3 md:line-clamp-4">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex gap-4 pt-2 mt-auto">
                        {project.demoLink && project.demoLink !== "#" && (
                          <button
                            onClick={(e) => { e.stopPropagation(); window.open(project.demoLink, '_blank'); }}
                            className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider bg-primary-container text-black px-5 py-3 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                          >
                            <ExternalLink size={12} /> {project.demoLink.includes('figma.com') ? 'Figma Design' : 'Live Demo'}
                          </button>
                        )}
                        {project.pdfLink && project.pdfLink !== "#" && (
                          <button
                            onClick={(e) => { e.stopPropagation(); window.open(project.pdfLink, '_blank'); }}
                            className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-primary-container/40 text-primary-container px-5 py-3 rounded-lg hover:bg-primary-container/10 active:scale-95 transition-all"
                          >
                            <FileText size={12} /> View PDF
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Split-right layout */}
                {layoutType === "split-right" && (
                  <div className="flex flex-col md:flex-row-reverse h-full w-full">
                    <div className="h-[220px] md:h-full md:w-[55%] overflow-hidden relative shrink-0">
                      {project.coverImage && (
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-surface-dim via-transparent to-transparent"></div>
                    </div>

                    <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-surface-dim/45 backdrop-blur-sm relative md:-mr-8 md:z-10">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map(t => (
                            <span key={t} className="font-mono text-[9px] bg-primary-container/10 border border-primary-container/20 text-primary-container px-2.5 py-0.5 rounded-full font-semibold uppercase">
                              {t}
                            </span>
                          ))}
                        </div>
                        <h2 className="font-display text-xl md:text-2xl font-bold text-on-surface mb-3 group-hover:text-primary-container transition-colors leading-tight">
                          {project.title}
                        </h2>
                        <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-3 md:line-clamp-4">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex gap-4 pt-2 mt-auto">
                        {project.demoLink && project.demoLink !== "#" && (
                          <button
                            onClick={(e) => { e.stopPropagation(); window.open(project.demoLink, '_blank'); }}
                            className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider bg-primary-container text-black px-5 py-3 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                          >
                            <ExternalLink size={12} /> {project.demoLink.includes('figma.com') ? 'Figma Design' : 'Live Demo'}
                          </button>
                        )}
                        {project.pdfLink && project.pdfLink !== "#" && (
                          <button
                            onClick={(e) => { e.stopPropagation(); window.open(project.pdfLink, '_blank'); }}
                            className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-primary-container/40 text-primary-container px-5 py-3 rounded-lg hover:bg-primary-container/10 active:scale-95 transition-all"
                          >
                            <FileText size={12} /> View PDF
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Vertical Standard layout */}
                {layoutType === "vertical-standard" && (
                  <>
                    <div className="h-[180px] overflow-hidden relative shrink-0">
                      {project.coverImage && (
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
                    </div>

                    <div className="p-5 md:p-6 relative -mt-6 bg-gradient-to-t from-surface-dim via-surface-dim to-transparent flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.tech.slice(0, 3).map(t => (
                            <span key={t} className="font-mono text-[8px] bg-primary-container/10 border border-primary-container/20 text-primary-container px-2.5 py-0.5 rounded-full font-semibold uppercase">
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="font-mono text-[8px] border border-outline-variant/30 text-on-surface-variant/70 px-2 py-0.5 rounded-full">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                        <h2 className="font-display text-lg md:text-xl font-bold text-on-surface mb-2 group-hover:text-primary-container transition-colors leading-tight line-clamp-1">
                          {project.title}
                        </h2>
                        <p className="font-sans text-[11px] md:text-xs text-on-surface-variant mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex gap-3 pt-1 mt-auto">
                        {project.demoLink && project.demoLink !== "#" && (
                          <button
                            onClick={(e) => { e.stopPropagation(); window.open(project.demoLink, '_blank'); }}
                            className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider bg-primary-container text-black px-4 py-2.5 rounded hover:scale-105 active:scale-95 transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                          >
                            <ExternalLink size={10} /> {project.demoLink.includes('figma.com') ? 'Figma Design' : 'Live Demo'}
                          </button>
                        )}
                        {project.pdfLink && project.pdfLink !== "#" && (
                          <button
                            onClick={(e) => { e.stopPropagation(); window.open(project.pdfLink, '_blank'); }}
                            className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider border border-primary-container/40 text-primary-container px-4 py-2.5 rounded hover:bg-primary-container/10 active:scale-95 transition-all"
                          >
                            <FileText size={10} /> View PDF
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* 4. Vertical Tall layout */}
                {layoutType === "vertical-tall" && (
                  <>
                    <div className="h-[240px] md:h-[260px] overflow-hidden relative shrink-0">
                      {project.coverImage && (
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className={`w-full h-full object-cover ${project.id === 'agrilo' ? 'object-top' : 'object-center'} transition-transform duration-700 group-hover:scale-105`}
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
                    </div>

                    <div className="p-6 relative -mt-8 bg-gradient-to-t from-surface-dim via-surface-dim to-transparent flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.slice(0, 4).map(t => (
                            <span key={t} className="font-mono text-[9px] bg-primary-container/10 border border-primary-container/20 text-primary-container px-2.5 py-0.5 rounded-full font-semibold uppercase">
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="font-mono text-[9px] border border-outline-variant/30 text-on-surface-variant/70 px-2.5 py-0.5 rounded-full">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>
                        <h2 className="font-display text-xl font-bold text-on-surface mb-2 group-hover:text-primary-container transition-colors leading-tight">
                          {project.title}
                        </h2>
                        <p className="font-sans text-xs text-on-surface-variant mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex gap-3 pt-1 mt-auto">
                        {project.demoLink && project.demoLink !== "#" && (
                          <button
                            onClick={(e) => { e.stopPropagation(); window.open(project.demoLink, '_blank'); }}
                            className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider bg-primary-container text-black px-4 py-2.5 rounded hover:scale-105 active:scale-95 transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                          >
                            <ExternalLink size={10} /> {project.demoLink.includes('figma.com') ? 'Figma Design' : 'Live Demo'}
                          </button>
                        )}
                        {project.pdfLink && project.pdfLink !== "#" && (
                          <button
                            onClick={(e) => { e.stopPropagation(); window.open(project.pdfLink, '_blank'); }}
                            className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider border border-primary-container/40 text-primary-container px-4 py-2.5 rounded hover:bg-primary-container/10 active:scale-95 transition-all"
                          >
                            <FileText size={10} /> View PDF
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* 5. Icon Card layout */}
                {layoutType === "icon-card" && (
                  <div className="p-6 md:p-8 flex-col flex justify-between h-full w-full">
                    <div>
                      <div className="w-12 h-12 bg-primary-container/10 border border-primary-container/30 rounded-lg flex items-center justify-center mb-4 text-primary-container group-hover:glow-cyan transition-all">
                        {project.id === 'vectordb' ? (
                          <Database size={20} className="stroke-[1.5]" />
                        ) : (
                          <Activity size={20} className="stroke-[1.5]" />
                        )}
                      </div>
                      <h3 className="font-display text-lg font-bold text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="font-mono text-[9px] border border-outline-variant text-on-surface-variant px-2.5 py-0.5 rounded font-semibold uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-container hover:gap-3.5 transition-all text-left">
                        Explore Details <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. Background Image Card layout */}
                {layoutType === "bg-card" && (
                  <div className="h-full w-full relative flex flex-col justify-end p-6 md:p-8">
                    {project.coverImage && (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent"></div>
                    
                    <div className="relative z-10 space-y-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-xl line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-container hover:scale-105 active:scale-95 transition-all">
                        <Eye size={12} /> View Project Case
                      </div>
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
