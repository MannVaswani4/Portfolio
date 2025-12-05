import React from 'react';

export const FluidBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-bg-dark">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-neon-blue/20 blur-[120px] animate-float" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neon-purple/20 blur-[120px] animate-float" style={{ animationDelay: '-2s' }} />
            <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-neon-pink/10 blur-[100px] animate-pulse-slow" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
    );
};
