import React from 'react';
import { motion } from 'framer-motion';
import { GlitchText } from '../components/ui/GlitchText';
import { NeonButton } from '../components/ui/NeonButton';
import { ArrowDown, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 px-4 py-1.5 text-sm text-neon-blue"
                    >
                        <Terminal size={14} />
                        <span>System Online</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6 text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl"
                    >
                        <GlitchText text="MANN" className="text-white" />
                        <br />
                        <GlitchText text="VASWANI" className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple" />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-10 max-w-2xl text-lg text-gray-400 md:text-xl"
                    >
                        Futuristic Developer & AI Enthusiast. Building next-gen interfaces and intelligent systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <NeonButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects
                        </NeonButton>
                        <NeonButton variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </NeonButton>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-neon-blue"
                >
                    <ArrowDown size={32} />
                </motion.div>
            </motion.div>
        </section>
    );
};
