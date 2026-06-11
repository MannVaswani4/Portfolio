import React, { useState, useEffect } from 'react';
import { content } from '../data/content';
import { MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThreeDMarquee } from '../components/ui/3d-marquee';
import type { TechItem } from '../components/ui/3d-marquee';

const skillsMap: Record<string, string[]> = {
  "RealtyEaseAI": ["AI Strategy", "CRM Automation", "PropTech", "Outbound Growth"],
  "MoveInSync": ["React", "TypeScript", "Tailwind CSS", "Enterprise UX"],
  "Rishihood University": ["MERN Stack", "ERP Architecture", "REST API", "Role-Based Access"],
  "Praxto Designs": ["UI/UX Design", "Figma", "Design Systems", "User Research"],
  "Harvard Project for Asian and International Relations (HPAIR)": ["Leadership", "Business Strategy", "Geopolitics", "Cross-Cultural Communication"]
};

const imageMap: Record<string, string[]> = {
  "RealtyEaseAI": [
    "/experience/RealtyEaseAI/realty_1.png",
    "/experience/RealtyEaseAI/realty_2.png"
  ],
  "MoveInSync": [
    "/experience/MoveInSync/moveinsync_1.jpg",
    "/experience/MoveInSync/moveinsync_2.jpg",
    "/experience/MoveInSync/moveinsync_3.jpg"
  ],
  "Rishihood University": [
    "/experience/Rishihood/rishihood_1.png",
    "/experience/Rishihood/rishihood_2.png",
    "/experience/Rishihood/rishihood_3.png",
    "/experience/Rishihood/rishihood_4.png"
  ],
  "Praxto Designs": [
    "/experience/PraxtoDesigns/praxto_1.png",
    "/experience/PraxtoDesigns/praxto_2.png"
  ],
  "Harvard Project for Asian and International Relations (HPAIR)": [
    "/experience/HPAIR/hpair_1.jpg",
    "/experience/HPAIR/hpair_2.jpg",
    "/experience/HPAIR/hpair_3.jpg",
    "/experience/HPAIR/hpair_4.jpg"
  ]
};

const marqueeItems: TechItem[] = [
  { name: "RealtyEaseAI 1", logo: "/experience/RealtyEaseAI/realty_1.png" },
  { name: "RealtyEaseAI 2", logo: "/experience/RealtyEaseAI/realty_2.png" },
  { name: "MoveInSync 1", logo: "/experience/MoveInSync/moveinsync_1.jpg" },
  { name: "MoveInSync 2", logo: "/experience/MoveInSync/moveinsync_2.jpg" },
  { name: "MoveInSync 3", logo: "/experience/MoveInSync/moveinsync_3.jpg" },
  { name: "Rishihood 1", logo: "/experience/Rishihood/rishihood_1.png" },
  { name: "Rishihood 2", logo: "/experience/Rishihood/rishihood_2.png" },
  { name: "Rishihood 3", logo: "/experience/Rishihood/rishihood_3.png" },
  { name: "Rishihood 4", logo: "/experience/Rishihood/rishihood_4.png" },
  { name: "Praxto Designs 1", logo: "/experience/PraxtoDesigns/praxto_1.png" },
  { name: "Praxto Designs 2", logo: "/experience/PraxtoDesigns/praxto_2.png" },
  { name: "HPAIR 1", logo: "/experience/HPAIR/hpair_1.jpg" },
  { name: "HPAIR 2", logo: "/experience/HPAIR/hpair_2.jpg" },
  { name: "HPAIR 3", logo: "/experience/HPAIR/hpair_3.jpg" },
  { name: "HPAIR 4", logo: "/experience/HPAIR/hpair_4.jpg" }
];

// Company logo component using provided files in public/logos
const CompanyLogo: React.FC<{ company: string }> = ({ company }) => {
  const c = company.toLowerCase();
  let logoFile = "MoveInSync.png";
  
  if (c.includes("sync")) {
    logoFile = "MoveInSync.png";
  } else if (c.includes("rishihood")) {
    logoFile = "Rishihood.png";
  } else if (c.includes("realty")) {
    logoFile = "RealtyEaseAI.png";
  } else if (c.includes("praxto")) {
    logoFile = "PraxtoDesigns.png";
  } else if (c.includes("hpair")) {
    logoFile = "HPAIR.png";
  }
  
  return (
    <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-white overflow-hidden shadow-md border border-white/10 p-0.5">
      <img src={`/logos/${logoFile}`} alt={company} className="w-full h-full object-contain" />
    </div>
  );
};

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary?: string;
  points: string[];
}

export const Experience: React.FC = () => {
  const [activeExp, setActiveExp] = useState<ExperienceItem | null>(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  // Reset image index when modal changes
  useEffect(() => {
    setActiveImgIdx(0);
  }, [activeExp]);

  // Disable scroll when modal is open
  useEffect(() => {
    if (activeExp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeExp]);

  const handleNextImage = (e: React.MouseEvent, images: string[]) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent, images: string[]) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section 
      id="experience" 
      className="py-24 relative bg-background text-on-surface overflow-hidden"
    >
      {/* Background 3D Marquee for Experience Images */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.09]">
        <ThreeDMarquee items={marqueeItems} variant="images" className="h-full w-full scale-[1.6] translate-x-[-8%]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-primary-container">
            Experience
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-primary-container/50 to-transparent"></div>
        </div>

        {/* Timeline Cards in zigzag layout & floating animation */}
        <div className="space-y-12 md:space-y-20 max-w-[1200px] mx-auto">
          {content.experience.map((exp, idx) => {
            const companySkills = skillsMap[exp.company] || [];
            
            // Alternates sides: index 0 (left), index 1 (right), index 2 (left), index 3 (right)
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center md:justify-between w-full gap-8 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Float-in Experience Card */}
                {/* Left cards (idx 0, 2) slide in from left (-100px). Right cards (idx 1, 3) slide in from right (100px). */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.1 }}
                  onClick={() => setActiveExp(exp)}
                  className={`w-full md:w-[49%] cursor-pointer`}
                >
                  {/* Card Container styled exactly like the reference screenshot */}
                  <div className="glass-card bg-[#181818]/90 border border-white/5 hover:border-primary-container/30 p-8 md:p-10 rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,240,255,0.08)] min-h-[260px] flex flex-col justify-between">
                    <div>
                      {/* Summary bullet text at the top */}
                      <p className="font-sans text-base md:text-lg text-on-surface/90 leading-relaxed mb-6 text-left font-medium">
                        {exp.summary}
                      </p>

                      {/* Thin separation line */}
                      <div className="h-[1px] bg-white/5 w-full mb-6" />
                    </div>

                    <div>
                      {/* Bottom branding row: circular logo, company name, position role */}
                      <div className="flex items-center gap-4">
                        <CompanyLogo company={exp.company} />
                        
                        <div className="flex-grow text-left">
                          <h4 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                            {exp.role}
                          </h4>
                          <p className="font-sans text-sm md:text-base text-on-surface-variant font-medium mt-1">
                            {exp.company} • <span className="font-mono text-xs text-secondary font-semibold">{exp.period.split('|')[0].trim()}</span>
                          </p>
                        </div>
                      </div>

                      {/* Subtle skills tags inside the card */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {companySkills.map((skill) => (
                          <span
                            key={skill}
                            className="font-mono text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-on-surface-variant uppercase tracking-wider font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Empty spacer to push content left/right on desktop */}
                <div className="hidden md:block w-[49%]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Detail Overlay */}
      <AnimatePresence>
        {activeExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveExp(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-4xl w-full bg-[#0e0e0e] border border-outline-variant/30 rounded-3xl p-6 md:p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveExp(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-white hover:border-white/50 transition-colors z-20"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="flex items-start gap-4 pr-10 border-b border-outline-variant/10 pb-5">
                <CompanyLogo company={activeExp.company} />
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface leading-tight">
                    {activeExp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-on-surface-variant font-medium mt-1">
                    <span className="text-[#a8ff35]">{activeExp.company}</span>
                    <span className="text-outline-variant/60">•</span>
                    <span className="font-mono text-xs">{activeExp.period.split('|')[0].trim()}</span>
                    <span className="text-outline-variant/60">•</span>
                    <span className="flex items-center gap-1 font-mono text-xs">
                      <MapPin size={12} />
                      {activeExp.period.includes('|') ? activeExp.period.split('|')[1].trim() : 'India'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Achievement Bullets */}
                <div className="md:col-span-6 space-y-4">
                  <h4 className="font-mono text-xs text-primary-container uppercase tracking-widest font-bold">
                    Key Achievements
                  </h4>
                  <ul className="font-sans text-sm md:text-base text-on-surface-variant/90 space-y-3 list-none pl-0 leading-relaxed">
                    {activeExp.points.map((point, i) => (
                      <li key={i} className="relative pl-5 flex items-start">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-[#a8ff35] rounded-full shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tag block */}
                  <div className="pt-4 border-t border-outline-variant/10">
                    <h5 className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mb-2">
                      Skills Acquired
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {(skillsMap[activeExp.company] || []).map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[10px] px-3 py-1 bg-surface-container border border-outline-variant/30 rounded-full text-on-surface font-medium uppercase"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Gallery Carousel */}
                <div className="md:col-span-6 space-y-4">
                  <h4 className="font-mono text-xs text-secondary uppercase tracking-widest font-bold">
                    Project Gallery
                  </h4>
                  {imageMap[activeExp.company] && imageMap[activeExp.company].length > 0 ? (
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-outline-variant/20 bg-surface-lowest flex items-center justify-center group/carousel shadow-inner">
                      <img
                        src={imageMap[activeExp.company][activeImgIdx]}
                        alt={`${activeExp.company} showcase ${activeImgIdx + 1}`}
                        className="w-full h-full object-contain transition-transform duration-500"
                      />
                      
                      <button
                        onClick={(e) => handlePrevImage(e, imageMap[activeExp.company])}
                        className="absolute left-3 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 transition-colors opacity-0 group-hover/carousel:opacity-100"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      <button
                        onClick={(e) => handleNextImage(e, imageMap[activeExp.company])}
                        className="absolute right-3 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 transition-colors opacity-0 group-hover/carousel:opacity-100"
                      >
                        <ChevronRight size={16} />
                      </button>

                      <div className="absolute bottom-3 flex gap-1.5 justify-center w-full">
                        {imageMap[activeExp.company].map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImgIdx(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === activeImgIdx ? 'bg-[#a8ff35] w-4' : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video w-full rounded-2xl border border-dashed border-outline-variant/30 flex items-center justify-center text-on-surface-variant font-mono text-xs">
                      No gallery assets available
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
