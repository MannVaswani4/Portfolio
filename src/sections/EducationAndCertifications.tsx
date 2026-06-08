import { Card } from '../components/ui/card';
import { motion } from 'framer-motion';

export default function EducationAndCertifications() {
  return (
    <section id="education" className="py-20 bg-background text-on-surface">
      <div className="container mx-auto px-6 max-w-[1440px] space-y-12">
        {/* Header */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center text-on-surface">
          Education
        </h2>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Newton School */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="p-6 flex flex-col sm:flex-row gap-6 items-start h-full bg-surface-lowest/70 backdrop-blur-md border border-outline-variant/20 hover:border-primary-container/40 transition-colors">
              <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-white p-2 rounded-xl border border-outline-variant/10">
                <img src="/logos/NewtonSchool.png" alt="Newton School of Technology" className="w-full h-full object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface leading-tight">
                  Newton School of Technology
                </h3>
                <p className="font-sans text-sm font-semibold text-secondary">
                  B.Tech - Computer Science and Artificial Intelligence
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-on-surface-variant/80">
                  <span>GPA: 9.06/10</span>
                  <span>&bull;</span>
                  <span>Aug. 2023 – May 2027</span>
                  <span>&bull;</span>
                  <span>Sonipat, India</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Scholars' Den */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
          >
            <Card className="p-6 flex flex-col sm:flex-row gap-6 items-start h-full bg-surface-lowest/70 backdrop-blur-md border border-outline-variant/20 hover:border-primary-container/40 transition-colors">
              <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-white p-2 rounded-xl border border-outline-variant/10">
                <img src="/logos/ScholarsDen.png" alt="Scholars' Den School" className="w-full h-full object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface leading-tight">
                  Scholars’ Den School
                </h3>
                <p className="font-sans text-sm font-semibold text-secondary">
                  High School
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-on-surface-variant/80">
                  <span>Maths and Science</span>
                  <span>&bull;</span>
                  <span>GRADE: 87.6%</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
