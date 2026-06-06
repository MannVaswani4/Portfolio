'use client';

import React, { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface CountUpProps {
  from?: number;
  to: number;
  separator?: string;
  direction?: 'up' | 'down';
  duration?: number;
  className?: string;
  delay?: number;
}

export const CountUp: React.FC<CountUpProps> = ({
  from = 0,
  to,
  separator = '',
  direction = 'up',
  duration = 1,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial value
    element.textContent = from.toString();

    if (!inView) return;

    const timeout = setTimeout(() => {
      const startVal = direction === 'down' ? Math.max(from, to) : Math.min(from, to);
      const endVal = direction === 'down' ? Math.min(from, to) : Math.max(from, to);

      const controls = animate(startVal, endVal, {
        duration: duration,
        ease: 'easeOut',
        onUpdate(value) {
          const rounded = Math.round(value);
          const formatted = separator
            ? rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
            : rounded.toString();
          element.textContent = formatted;
        },
      });
      return () => controls.stop();
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [from, to, separator, direction, duration, delay, inView]);

  return <span ref={ref} className={className} />;
};

export default CountUp;
