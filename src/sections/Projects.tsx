import React from 'react';
import { motion } from 'framer-motion';
import { HolographicCard } from '../components/ui/HolographicCard';
import { Sprout, ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-12 text-4xl font-bold text-white md:text-5xl"
                >
                    <span className="text-neon-green">03.</span> Projects
                </motion.h2>

                <div className="grid gap-8 lg:grid-cols-2">
                    <HolographicCard className="p-0 overflow-hidden group h-full">
                        <div className="relative h-48 bg-gradient-to-br from-green-900 to-black overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Sprout size={64} className="text-neon-green opacity-50 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                                    <Github size={20} />
                                </button>
                                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                                    <ExternalLink size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">AgriSphere – AI-Powered Digital Agronomist</h3>
                            <p className="text-sm text-neon-green mb-4">Node.js, Express, MongoDB, React, Leaflet, PWA</p>
                            <p className="text-gray-400 mb-6">
                                Oct 2025
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1 w-1 rounded-full bg-neon-green" />
                                    AI crop disease diagnosis with ~95% accuracy
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1 w-1 rounded-full bg-neon-green" />
                                    Real-time irrigation using weather and soil data
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1 w-1 rounded-full bg-neon-green" />
                                    PWA with multilingual and offline support for low-literacy farmers
                                </li>
                            </ul>
                        </div>
                    </HolographicCard>
                </div>
            </div>
        </section>
    );
};
