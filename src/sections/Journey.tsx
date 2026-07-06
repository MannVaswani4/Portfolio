import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, Youtube, Star } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  url: string;
}

const videos: VideoItem[] = [
  {
    id: 'cMZzGp0PRyk',
    title: 'Apple Vision Pro Unboxed at an Indian University',
    description: 'The first ever Apple Vision Pro unboxing at a university in India exploring what spatial computing looks like and what it means for the future of education and product design.',
    url: 'https://youtu.be/cMZzGp0PRyk?si=ifLy_hPtawI4v1Ds'
  },
  {
    id: 'wgLo7POzU58',
    title: 'How We Built a Campus Super App for 5000 + Students',
    description: 'See how a student led team designed and built a full campus platform covering ERP LMS attendance grading and gate passes transforming university life through real world full stack development UI UX and product thinking.',
    url: 'https://youtu.be/wgLo7POzU58?si=EC5A022WtldIa1Rh'
  },
  {
    id: 'f-7xPzZGz7E',
    title: 'Inside HPAIR Bangkok Representing India at a Global Leadership Forum',
    description: 'A behind the scenes look at my experience as an HPAIR delegate in Bangkok connecting with global leaders sharing ideas and learning how technology policy and innovation meet on a global stage.',
    url: 'https://youtu.be/f-7xPzZGz7E?si=BuszCZXO93YBOQ-6'
  },
  {
    id: 'p9hnERzlAn0',
    title: 'What Our Manager Thought of Us as First Year Interns',
    description: 'A candid review from my manager at MoveInSync on how we performed as first year interns working on real enterprise systems shipping production features and exceeding expectations.',
    url: 'https://youtu.be/p9hnERzlAn0?si=P8c8NkFrDrz85ZOB'
  },
  {
    id: 'RaEMz6tRlr8',
    title: 'How to Crack High Impact Tech Internships',
    description: 'Practical advice on building the right projects crafting a strong profile and approaching companies so you can land meaningful internships without depending on college placements.',
    url: 'https://youtu.be/RaEMz6tRlr8?si=6VbR6V1es6rzV-nF'
  }
];

export const Journey: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Scroll mapping for horizontal layout (slightly larger translation range for 5 items)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-68%"]);

  // Disable body scroll when video modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  return (
    <section ref={targetRef} className="relative md:h-[300vh] h-auto bg-background">
      <div className="relative md:sticky md:top-0 md:h-screen h-auto flex flex-col justify-center overflow-hidden py-12">
        <header className="container mx-auto px-6 w-full space-y-4 mb-8">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-2 mb-1">
              <Youtube size={14} className="text-primary-container" />
              <span className="font-mono text-xs text-primary-container uppercase tracking-[0.2em] font-semibold">
                Featured Features & Talks
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-on-surface">
                In the Making
              </h2>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-outline-variant/30 to-transparent"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-sans text-xs md:text-sm text-on-surface-variant max-w-2xl leading-relaxed text-left">
              A collection of moments, projects, events, and stories that show who I am beyond the work, from hackathons and internships to talks, travel, and everything in between.
            </p>
          </ScrollReveal>
        </header>
        
        <motion.div 
          style={{ x: isMobile ? 0 : x }} 
          className="flex gap-6 md:gap-8 px-6 ml-0 md:ml-24 w-auto md:w-max overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory md:snap-none pb-4"
        >
          {videos.map((video) => (
            <div 
              key={video.id} 
              onClick={() => setActiveVideo(video)}
              className="w-[80vw] md:w-[50vw] lg:w-[35vw] h-[60vh] md:h-[67vh] rounded-xl glass-card flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-outline-variant/15 hover:border-primary-container/30 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,240,255,0.06)] shrink-0 snap-center"
            >
              {/* YouTube Logo (Top Left overlay) */}
              <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 shadow-md">
                <svg viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto">
                  <rect x="0" y="3" width="26" height="18" rx="4" fill="#FF0000" />
                  <polygon points="11,9 11,15 16,12" fill="#FFFFFF" />
                  <text x="31" y="16.5" fill="#FFFFFF" font-family="'Inter', system-ui, sans-serif" font-weight="900" font-size="10.5" letter-spacing="-0.02em">YouTube</text>
                </svg>
              </div>

              {/* Card Thumbnail Top Section */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0e0e0e] border-b border-white/5 shrink-0">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Details Bottom Section */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4 text-left overflow-hidden">
                <div className="space-y-2">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold text-primary-container border border-primary-container/20 rounded-full inline-flex items-center gap-1 bg-primary-container/5 backdrop-blur-sm uppercase tracking-wider mb-2">
                    <Youtube size={10} /> Video Feature
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-on-surface group-hover:text-primary-container transition-colors leading-tight line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    {video.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-container mt-auto">
                  Watch Video <Youtube size={12} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal Player Dialog */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            {/* Backdrop close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 cursor-crosshair"
            />

            {/* Video Player Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-[#0e0e0e] border border-outline-variant/30 rounded-3xl p-4 md:p-6 flex flex-col gap-4 z-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Close Icon */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-white hover:border-white/50 transition-colors z-20"
              >
                <X size={18} />
              </button>

              {/* Header Details */}
              <div className="pr-12 border-b border-outline-variant/10 pb-3 text-left">
                <span className="font-mono text-[10px] text-primary-container uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <Star size={10} className="fill-current" /> YouTube Feature
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-1 leading-tight">
                  {activeVideo.title}
                </h3>
              </div>

              {/* YouTube Iframe Embed Frame */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-outline-variant/20 bg-black shadow-inner">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Description summary */}
              <p className="font-sans text-xs md:text-sm text-on-surface-variant text-left leading-relaxed">
                {activeVideo.description}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
