import React, { useRef, useId } from 'react';

export interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // Speed factor. Higher is faster. Defaults to 100
  direction?: 'left' | 'right' | 'up' | 'down';
  logoHeight?: number; // Height of the logo/icon container
  gap?: number; // Gap between logos
  hoverSpeed?: number; // If 0, pauses on hover
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string; // e.g. "#131313"
  ariaLabel?: string;
  useCustomRender?: boolean;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 50,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#131313',
  ariaLabel = 'Technology stack showcase',
  useCustomRender = false,
}) => {
  const componentId = useId().replace(/:/g, '');
  const containerRef = useRef<HTMLDivElement>(null);

  // We duplicate logos to ensure infinite scroll
  // If logos array is small, we repeat it multiple times to ensure it covers twice the width/height of viewport
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  // Map speed factor to animation duration
  // Standard speed = 100 => duration of ~20s for a normal set of logos
  const duration = speed > 0 ? (2000 / speed) : 20;

  const isVertical = direction === 'up' || direction === 'down';

  // CSS keyframes defined dynamically per instance
  const keyframesName = `logo-loop-anim-${componentId}`;
  
  let keyframesCSS = '';
  if (direction === 'left') {
    keyframesCSS = `
      @keyframes ${keyframesName} {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
  } else if (direction === 'right') {
    keyframesCSS = `
      @keyframes ${keyframesName} {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `;
  } else if (direction === 'up') {
    keyframesCSS = `
      @keyframes ${keyframesName} {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
    `;
  } else if (direction === 'down') {
    keyframesCSS = `
      @keyframes ${keyframesName} {
        0% { transform: translateY(-50%); }
        100% { transform: translateY(0); }
      }
    `;
  }

  // Fade out styling
  const fadeGradientStyle = fadeOut
    ? isVertical
      ? {
          background: `linear-gradient(to bottom, ${fadeOutColor} 0%, transparent 15%, transparent 85%, ${fadeOutColor} 100%)`,
        }
      : {
          background: `linear-gradient(to right, ${fadeOutColor} 0%, transparent 15%, transparent 85%, ${fadeOutColor} 100%)`,
        }
    : {};

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none ${isVertical ? 'h-full flex flex-col justify-center' : 'w-full flex items-center'}`}
      aria-label={ariaLabel}
      role="region"
    >
      {/* Dynamic Keyframes Injection */}
      <style dangerouslySetInnerHTML={{ __html: keyframesCSS }} />

      {/* Fade Edge Overlays */}
      {fadeOut && (
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={fadeGradientStyle}
        />
      )}

      {/* Loop Track Container */}
      <div
        className={`flex ${isVertical ? 'flex-col h-max py-4' : 'flex-row w-max px-4'} logo-loop-track-${componentId}`}
        style={{
          display: 'flex',
          gap: `${gap}px`,
          animation: `${keyframesName} ${duration}s linear infinite`,
          animationPlayState: 'running',
        }}
      >
        {/* CSS to manage hover actions */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .logo-loop-track-${componentId}:hover {
              animation-play-state: ${hoverSpeed === 0 ? 'paused' : 'running'};
            }
          `
        }} />

        {repeatedLogos.map((logo, index) => {
          const itemContent = (
            <div
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border border-outline-variant/10 bg-surface-low/30 backdrop-blur-sm shadow-sm transition-all duration-300
                ${scaleOnHover ? 'hover:scale-[1.05] hover:border-primary-container/30 hover:bg-surface-low/50 hover:shadow-md' : ''}
              `}
              style={{
                height: isVertical ? 'auto' : `${logoHeight}px`,
                minWidth: isVertical ? '100%' : 'auto',
              }}
            >
              {logo.node && (
                <span className="text-3xl text-on-surface flex items-center justify-center shrink-0">
                  {logo.node}
                </span>
              )}
              {logo.src && (
                <img
                  src={logo.src}
                  alt={logo.alt || logo.title || 'brand logo'}
                  className="object-contain shrink-0 select-none"
                  style={{ height: '70%', maxWidth: '120px' }}
                  draggable={false}
                  loading="lazy"
                />
              )}
              {logo.title && !useCustomRender && (
                <span className="font-mono text-sm font-semibold tracking-wider text-on-surface-variant group-hover:text-primary transition-colors">
                  {logo.title}
                </span>
              )}
            </div>
          );

          if (logo.href) {
            return (
              <a
                key={`${logo.title || 'logo'}-${index}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline block focus:outline-none"
              >
                {itemContent}
              </a>
            );
          }

          return (
            <div key={`${logo.title || 'logo'}-${index}`} className="block">
              {itemContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoLoop;
