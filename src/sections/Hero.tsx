import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { content } from '../data/content';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';

/* ─── helpers ───────────────────────────────────────────────── */
const NavLink = ({ label, onClick }: { label: string; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase
               transition-colors hover:text-white"
  >
    {label}
  </button>
);

const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.FC<{ size?: number; strokeWidth?: number }>;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/30 hover:text-white/70 transition-colors"
  >
    <Icon size={16} strokeWidth={1.5} />
  </a>
);

/* ─── Hero ──────────────────────────────────────────────────── */
export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  /*
   * section is 220vh so scrollYProgress goes 0→1 over a 120vh scroll window.
   * The sticky panel pins to top: 0, filling the viewport the whole time.
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const sp = useSpring(scrollYProgress, { stiffness: 55, damping: 16, restDelta: 0.0005 });

  /*
   * Phase 1 (0 → 0.35): everything is fully visible
   * Phase 2 (0.35 → 0.72): nav + headline + left text fade out, image fades
   * Phase 3 (0.35 → 1.0 ): circle scales up to fill entire screen
   */

  // Everything except the circle fades away
  const uiOpacity  = useTransform(sp, [0, 0.25, 0.55], [1, 1, 0]);

  // Image rises and fades
  const imgY       = useTransform(sp, [0, 1], [0, -180]);
  const imgOpacity = useTransform(sp, [0.1, 0.5], [1, 0]);

  // Circle: scales up to fill the screen
  const circleScale   = useTransform(sp, [0.1, 1.0], [1, 15]);
  
  // Circle translates down significantly
  const circleY       = useTransform(sp, [0, 0.5], [0, 200]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: '220vh' }}
    >
      {/* ── STICKY VIEWPORT PANEL ─────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#080808] flex flex-col">

        {/* ── NAV ──────────────────────────────────────────────── */}
        <motion.header
          style={{ opacity: uiOpacity }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-30 shrink-0 flex w-full items-center justify-between
                     px-10 md:px-16 pt-9"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full border border-white/10 shrink-0">
              <img
                src="/PotraitMann.png"
                alt="MV"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <span className="text-[11px] font-semibold tracking-[0.22em] text-white/50 uppercase">
              mann v.
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {['About', 'Experience', 'Work', 'Contact'].map((item) => (
              <NavLink
                key={item}
                label={item}
                onClick={() =>
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                }
              />
            ))}
          </nav>
        </motion.header>

        {/* ── CANVAS ───────────────────────────────────────────── */}
        <div className="relative flex-1 w-full">

          {/* 1. LEFT TEXT */}
          <motion.div
            style={{ opacity: uiOpacity }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
            className="absolute left-10 md:left-16 top-1/2 -translate-y-1/2 z-20
                       flex flex-col gap-5 max-w-[190px]"
          >
            <p className="text-[13px] leading-[1.8] text-white/45 font-light">
              {content.hero.description}
            </p>
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="self-start text-[10px] font-bold tracking-[0.2em] text-white/50
                         uppercase border-b border-white/20 pb-0.5
                         hover:text-white hover:border-white/50 transition-colors"
            >
              View Work
            </button>
          </motion.div>

          {/* 2. CIRCLE + PORTRAIT — both centered */}
          {/*
           * Centering strategy:
           *   outer div: absolute inset-0, flex items-center justify-center
           *   circle wrapper: relative, sized, centered inside outer
           *   circle motion.div: absolute fill, scale origin-center
           *   portrait: absolute bottom of the flex container, centered
           */}
          <div className="absolute inset-0 flex items-center justify-center">

            {/* Circle centering wrapper — this div is the origin of the scale */}
            <div className="relative flex items-center justify-center">
              <motion.div
                style={{ scale: circleScale, y: circleY }}
                initial={{ scale: 0.55, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="w-[42vmin] h-[42vmin] rounded-full bg-[#EAB308]"
              />
            </div>
          </div>

          {/* Portrait — sits above the circle, pinned to bottom-center */}
          <div className="absolute inset-0 flex items-end justify-center pb-0 pointer-events-none">
            <motion.div
              style={{ y: imgY, opacity: imgOpacity }}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <img
                src="/Bgremove.png"
                alt="Mann Vaswani"
                className="h-[100vh] max-h-[1000px] w-auto object-contain object-bottom select-none"
                draggable={false}
              />
            </motion.div>
          </div>

          {/* 3. RIGHT HEADLINE */}
          <motion.div
            style={{ opacity: uiOpacity }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="absolute right-10 md:right-16 top-1/2 -translate-y-1/2 z-20
                       flex flex-col items-end text-right"
          >
            <h1
              className="font-display leading-[0.85] text-white select-none"
              style={{ fontSize: 'clamp(4rem, 10vw, 8.5rem)' }}
            >
              {content.hero.name.split(' ')[0]}
              <br />
              <span style={{ color: '#EAB308' }}>
                {content.hero.name.split(' ')[1]}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-4 text-[10px] font-mono tracking-[0.25em] text-white/30 uppercase"
            >
              {content.hero.taglines[0]}
            </motion.p>
          </motion.div>
        </div>

        {/* ── FOOTER ───────────────────────────────────────────── */}
        <motion.footer
          style={{ opacity: uiOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="relative z-30 shrink-0 flex w-full items-center justify-between
                     px-10 md:px-16 pb-8"
        >
          <div className="flex items-center gap-5">
            <SocialIcon href="https://github.com/mannvaswani" icon={Github} />
            <SocialIcon href="https://linkedin.com/in/mannvaswani" icon={Linkedin} />
            <SocialIcon href="https://instagram.com/mannvaswani" icon={Instagram} />
          </div>
          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-white/25 uppercase">
            <span>Sonipat, India</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={12} strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};
