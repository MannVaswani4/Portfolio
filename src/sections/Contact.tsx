import React from 'react';
import { motion } from 'framer-motion';
import { HolographicCard } from '../components/ui/HolographicCard';
import { NeonButton } from '../components/ui/NeonButton';
import { Mail, Phone, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 relative pb-32">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-12 text-4xl font-bold text-white md:text-5xl text-center"
                >
                    <span className="text-neon-blue">07.</span> Initialize Contact
                </motion.h2>

                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <HolographicCard className="p-8 flex items-center gap-6 group">
                            <div className="p-4 rounded-full bg-white/5 text-neon-blue group-hover:scale-110 transition-transform">
                                <Mail size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-400">Email Protocol</h3>
                                <a href="mailto:mannvaswani4@gmail.com" className="text-xl text-white hover:text-neon-blue transition-colors">mannvaswani4@gmail.com</a>
                            </div>
                        </HolographicCard>

                        <HolographicCard className="p-8 flex items-center gap-6 group">
                            <div className="p-4 rounded-full bg-white/5 text-neon-purple group-hover:scale-110 transition-transform">
                                <Phone size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-400">Voice Link</h3>
                                <a href="tel:+916265807090" className="text-xl text-white hover:text-neon-purple transition-colors">+91-6265807090</a>
                            </div>
                        </HolographicCard>

                        <HolographicCard className="p-8 flex items-center gap-6 group">
                            <div className="p-4 rounded-full bg-white/5 text-neon-green group-hover:scale-110 transition-transform">
                                <Linkedin size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-400">Professional Network</h3>
                                <a href="#" className="text-xl text-white hover:text-neon-green transition-colors">LinkedIn Profile</a>
                            </div>
                        </HolographicCard>
                    </div>

                    <HolographicCard className="p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Identity</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    placeholder="Enter Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Signal Frequency</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Transmission</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    placeholder="Enter Message"
                                />
                            </div>
                            <NeonButton className="w-full">
                                Send Transmission
                            </NeonButton>
                        </form>
                    </HolographicCard>
                </div>
            </div>
        </section>
    );
};
