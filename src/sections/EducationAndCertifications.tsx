import { Card } from '../components/ui/card';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'AI for Product Management',
    provider: 'Google Cloud | Pendo',
    link: 'https://www.credly.com/badges/ae42dd2a-0c41-4e0d-83cc-9b350c83c1cd/public_url',
    date: 'Jun 2026',
    description: 'Trained in LLM application, AI-powered product strategy, data-driven decision making, and product-led growth tactics.',
  },
  {
    title: 'Product Management Basics Certification',
    provider: 'Pendo | Mind the Product',
    link: 'https://www.credly.com/badges/a1fc1cce-a690-42e9-89b0-2b509417f972/public_url',
    date: 'Jun 2026',
    description: 'Trained in the PM lifecycle, focusing on product discovery, roadmapping, prioritization, and stakeholder management.',
  },
];

export default function EducationAndCertifications() {
  return (
    <section id="education" className="py-20 bg-background text-on-surface">
      <div className="container mx-auto px-6 max-w-[1440px] space-y-12">
        {/* Header */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center text-on-surface">
          Education & Certifications
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center justify-center p-6 rounded-2xl glass-card w-full max-w-[320px] aspect-[2/1]"
          >
            <img src="/logos/NewtonSchool.png" alt="Newton School of Technology" className="h-16 w-auto object-contain" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center justify-center p-6 rounded-2xl glass-card w-full max-w-[320px] aspect-[2/1]"
          >
            <img src="/logos/ScholarsDen.png" alt="Scholars' Den School Khandwa" className="h-16 w-auto object-contain" />
          </motion.div>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Card
                className="p-6 flex flex-col justify-between h-full bg-surface-lowest/70 backdrop-blur-md border border-outline-variant/20 hover:border-primary-container/40 transition-colors"
              >
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-2">
                    {cert.provider} | {cert.date}
                  </p>
                  <p className="text-base text-on-surface mb-4">
                    {cert.description}
                  </p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-container hover:underline mt-auto inline-flex items-center"
                >
                  View Credential
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
