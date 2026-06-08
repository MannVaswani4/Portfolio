import React from 'react';
import { content } from '../data/content';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ExternalLink, FileText, Database, Activity, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  // Extract AgriSphere and Rishiverse from data
  const agriProject = content.projects.find(p => p.title.toLowerCase().includes('agri')) || content.projects[0];
  const rishiProject = content.projects.find(p => p.title.toLowerCase().includes('rishi')) || content.projects[1];

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
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-on-surface leading-tight max-w-4xl">
              Engineering the future with <br />
              <span className="text-secondary glow-violet-text" style={{ textShadow: '0 0 15px rgba(207, 92, 255, 0.3)' }}>
                Generative Intelligence.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              A curated selection of industrial-grade applications and experimental frameworks leveraging modern tech stacks.
            </p>
          </ScrollReveal>
        </header>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: AgriSphere (8 cols on desktop) */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 group relative overflow-hidden glass-card rounded-xl flex flex-col justify-between"
          >
            <div className="h-[260px] md:h-[320px] overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHXN7rU0Zi0Vk1isurk-9ciORVJAXgTrSvdDGgc0HrNfIgI6mli0ZTbE1PQxuyemJOOQIti6E_W83SlW7O9LyrBz_GHzG6E-voJe-lZ69TY4ceF_OueRbEXccdPKjuktX-Ko9opjI0se-Q4z4dM1xTfAVb3UWrOmMxxN5y2kGtaizeiWf7J2nhFeQtTHAfV0hJolqMl8uNp_2lamPusca_tuh4qCkaGlk7_TsHXdf7PVG2Hf__f8vT__lAW2MejSbPlVTmC0jebAXF"
                alt="AgriSphere Interface"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/30 to-transparent"></div>
            </div>

            <div className="p-6 md:p-8 relative -mt-10 bg-gradient-to-t from-surface-dim via-surface-dim to-transparent flex-grow flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {agriProject.tech.map(t => (
                    <span key={t} className="font-mono text-[9px] bg-primary-container/10 border border-primary-container/20 text-primary-container px-2.5 py-0.5 rounded-full font-semibold uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-on-surface mb-3 group-hover:text-primary-container transition-colors">
                  {agriProject.title}
                </h2>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 max-w-xl leading-relaxed">
                  {agriProject.subtitle}. AI crop disease diagnosis with ~95% accuracy and real-time irrigation advice using weather and soil variables.
                </p>
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  onClick={() => window.open(agriProject.demoLink, '_blank')}
                  className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider bg-primary-container text-on-primary px-5 py-3 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                >
                  <ExternalLink size={12} /> Live Demo
                </button>
                <button
                  onClick={() => window.open(agriProject.pdfLink, '_blank')}
                  className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-primary-container/40 text-primary-container px-5 py-3 rounded-lg hover:bg-primary-container/10 active:scale-95 transition-all"
                >
                  <FileText size={12} /> View PDF
                </button>
              </div>
            </div>
          </motion.article>

          {/* Card 2: Rishiverse (4 cols on desktop) */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 group glass-card rounded-xl flex flex-col justify-between"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdFqznERDNeVt48DX-vQKjjoB9r0IcmnzpIUaWu7FutxSBnABzJ0ta9HBEcOl-cL0E9P-WXmde7Gs_jH6jBUN9Pw__Oh9Ss8JNLIoPTYs2sv4GNq38yhur_iTg1-NizOj4kWExLDVWskg2Uk4u4rqQh98tM495c3JQmBL_zqxaCqPcVYrFNMbi3t65WzWHkPsjHGBKRnXeAcEMkas9lntKcVxNgfp_0Qr4HzdMy69pthDuP0JBVsqLhnFFpSe7H0mgEFjnEAHD7oP0"
                alt="Rishiverse ERP Interface"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent"></div>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {rishiProject.tech.slice(0, 3).map(t => (
                    <span key={t} className="font-mono text-[9px] bg-secondary/10 border border-secondary/20 text-secondary px-2.5 py-0.5 rounded-full font-semibold uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-display text-lg font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors">
                  {rishiProject.title}
                </h2>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {rishiProject.subtitle}. A Unified Student ERP system designed to centralize academic workflow management for 5,500+ users.
                </p>
              </div>

              <div className="mt-auto pt-2">
                <button
                  onClick={() => window.open(rishiProject.demoLink, '_blank')}
                  className="w-full flex items-center justify-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-primary-container/40 text-primary-container py-3 rounded-lg hover:bg-primary-container/10 active:scale-95 transition-all"
                >
                  <ExternalLink size={12} /> Live Demo
                </button>
              </div>
            </div>
          </motion.article>

          {/* Card 3: VectorDB Optimizer (4 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 group glass-card rounded-xl p-6 flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <div className="w-12 h-12 bg-primary-container/10 border border-primary-container/30 rounded-lg flex items-center justify-center mb-4 text-primary-container group-hover:glow-cyan transition-all">
                <Database size={20} className="stroke-[1.5]" />
              </div>
              <h3 className="font-display text-base font-bold text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                VectorDB Optimizer
              </h3>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed">
                High-performance indexing strategies for Pinecone and Milvus databases, reducing query latency by up to 40%.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-[9px] border border-outline-variant text-on-surface-variant px-2.5 py-0.5 rounded font-semibold uppercase">Go</span>
                <span className="font-mono text-[9px] border border-outline-variant text-on-surface-variant px-2.5 py-0.5 rounded font-semibold uppercase">gRPC</span>
              </div>
              <button className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-container hover:gap-3.5 transition-all text-left">
                Explore Code <ArrowRight size={12} />
              </button>
            </div>
          </motion.article>

          {/* Card 4: Sentinel AI Monitor (4 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 group glass-card rounded-xl p-6 flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/30 rounded-lg flex items-center justify-center mb-4 text-secondary">
                <Activity size={20} className="stroke-[1.5]" />
              </div>
              <h3 className="font-display text-base font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors">
                Sentinel AI Monitor
              </h3>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed">
                Real-time data drift detection and model bias monitoring for production machine learning prediction pipelines.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-[9px] border border-outline-variant text-on-surface-variant px-2.5 py-0.5 rounded font-semibold uppercase">Dask</span>
                <span className="font-mono text-[9px] border border-outline-variant text-on-surface-variant px-2.5 py-0.5 rounded font-semibold uppercase">FastAPI</span>
              </div>
              <button className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-container hover:gap-3.5 transition-all text-left">
                Explore Code <ArrowRight size={12} />
              </button>
            </div>
          </motion.article>

          {/* Card 5: Web3 Identity Engine (4 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 group glass-card rounded-xl overflow-hidden min-h-[220px] relative flex flex-col justify-end p-6"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOTiNuag99HnyV7RiXCfqMS3t5ygtz7zcruBfbZEhHSx2Q9eKw44y-2MntNt993DZdfSIQz1d5lpNXSfyztmnoqM__kX17xx3l7p-Z-7d4gNTFyhTDYUXkUKi6l0uFESHT9Cd6SLgi0eRq5AQT08fXTiDV5D1W4nlRjiQuK8LZsGMoWULbD5H5CZ0b3It7BsT_UrINUnzGUOzOueMc_0n0QmPEsXjjtjhbDilSfc18tfQ5ux9mmO8NBNroJcIQKNthmKGpcs6YjRV4"
              alt="Web3 Identity Engine"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent"></div>
            
            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="font-display text-base font-bold text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                  Web3 Identity Engine
                </h3>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  Decentralized AI identity verification protocol.
                </p>
              </div>
              <button className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-container hover:scale-105 active:scale-95 transition-all">
                <Eye size={12} /> View Case Study
              </button>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
};
