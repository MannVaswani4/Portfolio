import React from 'react';
import { motion } from 'framer-motion';
import { HolographicCard } from '../components/ui/HolographicCard';
import { Users, Calendar, Shield, MapPin } from 'lucide-react';

export const Leadership: React.FC = () => {
    return (
        <section id="leadership" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-12 text-4xl font-bold text-white md:text-5xl"
                >
                    <span className="text-neon-pink">04.</span> Leadership
                </motion.h2>

                <HolographicCard className="p-8 border-neon-pink/20">
                    <div className="mb-8">
                        <h3 className="text-3xl font-bold text-white mb-2">The Damru Fest</h3>
                        <p className="text-neon-pink text-xl">Operations Lead</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-neon-pink/50 transition-colors">
                            <Shield className="text-neon-pink mb-4" size={32} />
                            <h4 className="text-lg font-bold text-white mb-2">Logistics & Security</h4>
                            <p className="text-sm text-gray-400">Managed Logistics, Security, Accommodation, Transportation</p>
                        </div>

                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-neon-pink/50 transition-colors">
                            <Users className="text-neon-pink mb-4" size={32} />
                            <h4 className="text-lg font-bold text-white mb-2">Team Leadership</h4>
                            <p className="text-sm text-gray-400">Led 120+ volunteers across multiple departments</p>
                        </div>

                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-neon-pink/50 transition-colors">
                            <MapPin className="text-neon-pink mb-4" size={32} />
                            <h4 className="text-lg font-bold text-white mb-2">Coordination</h4>
                            <p className="text-sm text-gray-400">Coordinated with 8+ clubs, sponsors, and brand partners</p>
                        </div>

                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-neon-pink/50 transition-colors">
                            <Calendar className="text-neon-pink mb-4" size={32} />
                            <h4 className="text-lg font-bold text-white mb-2">Execution</h4>
                            <p className="text-sm text-gray-400">Executed a 2-day fest with 36+ hours of continuous operations</p>
                        </div>
                    </div>
                </HolographicCard>
            </div>
        </section>
    );
};
