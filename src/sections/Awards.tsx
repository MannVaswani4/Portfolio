import React from 'react';
import { motion } from 'framer-motion';
import { HolographicCard } from '../components/ui/HolographicCard';
import { Award } from 'lucide-react';

export const Awards: React.FC = () => {
    return (
        <section id="awards" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-12 text-4xl font-bold text-white md:text-5xl"
                >
                    <span className="text-neon-purple">06.</span> Awards
                </motion.h2>

                <HolographicCard className="p-8 max-w-2xl mx-auto text-center group hover:border-neon-purple/50">
                    <div className="mb-6 inline-flex p-4 rounded-full bg-neon-purple/20 text-neon-purple group-hover:scale-110 transition-transform duration-300">
                        <Award size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">HPAIR Harvard Conference 2024 Delegate</h3>
                    <p className="text-gray-400">Bangkok, Chulalongkorn University</p>
                    <div className="mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-neon-purple to-transparent mx-auto" />
                </HolographicCard>
            </div>
        </section>
    );
};
