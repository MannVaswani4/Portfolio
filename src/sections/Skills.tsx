import React from 'react';
import { motion } from 'framer-motion';
import { HolographicCard } from '../components/ui/HolographicCard';

const skills = {
    "Languages": ["Python", "Java", "JavaScript", "TypeScript"],
    "Tools & Tech": ["Jupyter Notebook", "Firebase", "Vercel", "Microsoft Clarity", "GitHub", "VS Code"],
    "Design": ["Figma", "Canva"]
};

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-12 text-4xl font-bold text-white md:text-5xl"
                >
                    <span className="text-neon-blue">05.</span> Skills
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {Object.entries(skills).map(([category, items]) => (
                        <HolographicCard key={category} className="p-6">
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">{category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill, i) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 243, 255, 0.2)" }}
                                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 cursor-default hover:text-white hover:border-neon-blue/50 transition-colors"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </HolographicCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
