'use client';

import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface TechItem {
  name: string;
  logo: string;
  invert?: boolean;
}

interface ThreeDMarqueeProps {
  items?: TechItem[];
  className?: string;
  variant?: 'logos' | 'images';
}

const defaultTechItems: TechItem[] = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', invert: false },
  { name: 'NextJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', invert: false },
  { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', invert: true },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', invert: false },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', invert: false },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', invert: false },
  { name: 'Antigravity', logo: '/logos/AntiGravityLogo.png', invert: false },
  { name: 'ChatGPT', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@12.0.0/icons/openai.svg', invert: true },
  { name: 'Claude', logo: '/logos/Claude.png', invert: false },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', invert: false },
  { name: 'Lucide', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@12.0.0/icons/lucide.svg', invert: true },
  { name: 'JS (ES6+)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', invert: false },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', invert: false },
  { name: 'NodeJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', invert: false },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', invert: false }
];

export const ThreeDMarquee = ({
  items = defaultTechItems,
  className,
  variant = 'logos',
}: ThreeDMarqueeProps) => {
  const chunkSize = Math.ceil(items.length / 3);
  const chunks = Array.from({ length: 3 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return items.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        'mx-auto block h-[580px] w-full overflow-hidden rounded-2xl max-md:h-[400px]',
        className
      )}
    >
      <div className='flex size-full items-center justify-center'>
        <div className='aspect-square w-[840px] h-[840px] shrink-0 scale-[1.3] max-xl:scale-[1.1] max-sm:scale-[0.95]'>
          <div
            style={{ transform: 'rotateX(52deg) rotateY(0deg) rotateZ(32deg)' }}
            className='relative top-0 right-[-45%] grid size-full origin-top-left grid-cols-3 gap-6 transform-3d max-xl:-top-10 max-xl:right-[-35%] max-sm:top-0 max-sm:gap-3 max-sm:right-[-25%]'
          >
            {chunks.map((subarray, colIndex) => {
              // Duplicate items to allow seamless infinite loops without reverse bouncing
              const doubleSubarray = [...subarray, ...subarray];

              return (
                <motion.figure
                  animate={
                    colIndex % 2 === 0
                      ? { y: ['0%', '-50%'] }
                      : { y: ['-50%', '0%'] }
                  }
                  transition={{
                    duration: colIndex % 2 === 0 ? 10 : 13,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  key={colIndex + 'marquee'}
                  className='flex flex-col items-start gap-6 max-sm:gap-3'
                >
                  {doubleSubarray.map((item, imageIndex) => (
                    <div 
                      className={cn(
                        'relative w-full aspect-[4/3] rounded-2xl glass-card flex flex-col items-center justify-center border border-outline-variant/15 hover:border-primary-container/40 transition-all duration-300 group/card bg-surface-lowest/70 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.45)]',
                        variant === 'images' ? 'p-0 overflow-hidden' : 'p-5'
                      )}
                      key={imageIndex + item.name}
                    >
                      {/* Glowing effect inside card */}
                      <div className='absolute inset-0 bg-gradient-to-br from-primary-container/5 to-secondary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none' />
                      
                      <img
                        className={cn(
                          variant === 'images'
                            ? 'w-full h-full object-cover select-none transition-transform duration-300 group-hover/card:scale-110'
                            : 'h-24 w-24 max-sm:h-18 max-sm:w-18 object-contain select-none transition-transform duration-300 group-hover/card:scale-110',
                          item.invert && 'invert brightness-200'
                        )}
                        src={item.logo}
                        draggable={false}
                        alt={item.name}
                        loading="lazy"
                      />
                      {variant === 'logos' && (
                        <span className='font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-3 group-hover/card:text-primary-container transition-colors'>
                          {item.name}
                        </span>
                      )}
                    </div>
                  ))}
                </motion.figure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDMarquee;
