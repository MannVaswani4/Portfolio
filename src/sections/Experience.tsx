import React from 'react';
import { motion } from 'framer-motion';
import { HolographicCard } from '../components/ui/HolographicCard';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        company: "RealtyEaseAI",
        role: "Business Development Supervisor",
        period: "Mar 2022 – Apr 2023 (Khandwa) | Apr 2025 – Sep 2025 (Remote)",
        description: [
            "Youngest early employee; led business development, strategy, and outbound growth",
            "Built branding kit and online presence (1.8K Instagram + LinkedIn), generating 3+ inbound clients",
            "Designed revenue model and scaled to $4K+ Monthly Recurring Revenue",
            "Systematized operations and reduced non-productive hours by 70%",
            "Established Client Delivery department; led team handling 90% of external communication",
            "Reduced workload across departments by 30–40%"
        ]
    },
    {
        company: "MoveInSync",
        role: "Frontend Web Developer",
        period: "June 2024 – Aug 2024 | Bangalore",
        description: [
            "Built responsive enterprise web flows used by 50,000+ employees",
            "Developed reusable UI components; solved device-specific edge cases",
            "Led entire deployment lifecycle; achieved zero critical UI issues post-launch"
        ]
    },
    {
        company: "Rishihood University",
        role: "Full Stack Web Developer",
        period: "June 2024 – Aug 2024 | Sonipat",
        description: [
            "Built Rishiverse, a Student ERP for 5,500+ users (1,200 active at launch)",
            "Digitized 80% of campus workflows",
            "Built and integrated 8+ modules including Attendance, Mess, Exit Pass, Profiles, Complaints",
            "Designed unified data flow with role-based access across departments"
        ]
    }
];

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-12 text-4xl font-bold text-white md:text-5xl"
                >
                    <span className="text-neon-purple">02.</span> Experience
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <HolographicCard key={index} className="p-8 group transition-all hover:border-neon-purple/50">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
                                        <Briefcase size={24} />
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">{exp.company}</h3>
                                            <p className="text-lg text-gray-300">{exp.role}</p>
                                        </div>
                                        <span className="text-sm text-gray-400 font-mono mt-2 md:mt-0">{exp.period}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-400">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neon-purple flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </HolographicCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
