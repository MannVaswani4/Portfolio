import React from 'react';
import { cn } from '../../lib/utils';

interface GlitchTextProps {
    text: string;
    className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className }) => {
    return (
        <div className={cn("relative inline-block group", className)}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-blue opacity-0 group-hover:opacity-70 group-hover:animate-pulse group-hover:translate-x-[2px] transition-all duration-100">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-purple opacity-0 group-hover:opacity-70 group-hover:animate-pulse group-hover:-translate-x-[2px] transition-all duration-100 delay-75">
                {text}
            </span>
        </div>
    );
};
