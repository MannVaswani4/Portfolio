import React from 'react';
import { motion } from 'framer-motion';
import { HolographicCard } from '../components/ui/HolographicCard';
import { GraduationCap, School } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-12 text-4xl font-bold text-white md:text-5xl"
                >
                    <span className="text-neon-blue">01.</span> Education
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2">
                    <HolographicCard className="p-8">
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-neon-blue/20 p-3 text-neon-blue">
                                <GraduationCap size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Newton School of Technology</h3>
                                <p className="text-neon-blue">B.Tech – Computer Science & AI</p>
                                <p className="text-sm text-gray-400">Aug 2023 – May 2027 | Sonipat, India</p>
                                <div className="mt-4 inline-block rounded border border-neon-blue/30 bg-neon-blue/10 px-3 py-1 text-sm text-neon-blue">
                                    GPA: 9.06/10
                                </div>
                                <p className="mt-4 text-gray-300">
                                    Relevant Coursework: Probability and Statistics, Fundamentals of Programming, OOP, DSA, Advanced Programming.
                                </p>
                            </div>
                        </div>
                    </HolographicCard>

                    <HolographicCard className="p-8">
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-neon-purple/20 p-3 text-neon-purple">
                                <School size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Scholars’ Den School</h3>
                                <p className="text-neon-purple">High School – Maths and Science</p>
                                <div className="mt-4 inline-block rounded border border-neon-purple/30 bg-neon-purple/10 px-3 py-1 text-sm text-neon-purple">
                                    Grade: 87.6%
                                </div>
                            </div>
                        </div>
                    </HolographicCard>
                </div>
            </div>
        </section>
    );
};
