import React from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Star, ArrowRight } from 'lucide-react';

export const ContentShowcase: React.FC = () => {
  const handleScrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contributions = [
    {
      title: 'AI-Driven Realty Workflows',
      description: 'Automating lead qualification with LLMs.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKL9Xj43DzA26V-pY3o82wDvfEfBWk75O9XNHBV3RnrhOjwLfCRVsuNu6sWlChtt7-n0fFQufJ0iEZYBkDKj7lRUMBL0VG7F_f8xz7-zPwc_IsDeK9MIt_fw-4zCs1wobCx6w0c2pvEzHvtksEa2Jpgna6tOKmHydOHi6UW8E9wcTG1od4LDjRIVWPP9XkPEt30k-nhp2m9aP5RymtB5xFgd7lqoCEuWZLcv7pyzhx9Zii3OZpKIEPgkn59OJmqp_HdgbYOWt4J8W-',
      action: 'View Case Study',
      color: 'text-primary-container',
      glow: 'hover:border-primary-container hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]'
    },
    {
      title: 'Commuter Tracking Systems',
      description: 'Real-time geospatial data visualization.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh3SfhVL1IvTM3sBgxITdyUKeMC-PH9w082XhST6giCRLFo-M1Iaa2IDqXAwqdtvpGTYhL1F8WbX72dNri_g_4OAgWtq1FugBU0F4kAhdQhHIrh1fQtza3VdAMErw1Eqkl-cxFwffaD9CBtbAHCHE-_jkXzDPijvdWV0v_FEVnRvuhwKIvoPm7jMyjpTgq4oEeOqLvt9Uctwzf_CPpjrIHvQm4SyvUP-ty6_2A2lvS0TFswR0sU403bZY4utezO17DbOOzJxkhuH5G',
      action: 'View Repository',
      color: 'text-secondary',
      glow: 'hover:border-secondary hover:shadow-[0_0_20px_rgba(207,92,255,0.25)]'
    },
    {
      title: 'Academic Management Portals',
      description: 'Comprehensive ERP for higher education.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8jBZ5YkO_eluXi0vvdwxE5VlfEIG5fZoM1A3Jc9rVlWWQ5L898nNyTaVDlB_K8v1Wa5tOnyoB2Xg0kzLz0coZxqDk7ruzfS9Q5H-gGzrKPOtyRAHD1888eCZ--TgFE0_4ba8ex8LFw57ghrdJIDJsDq67hEHiHU0Jjpkaf3BtlNusJEabTA-jK4s7BvhCZUmuDlTSzYAzOR9K8WMhjuvkBkpwp9YYIZNXsGdOuyLGNTV82aPQcT6Pc2NdwAEUWrYE991Af2jlJUgw',
      action: 'Launch Portal',
      color: 'text-primary-container',
      glow: 'hover:border-primary-container hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]'
    }
  ];

  return (
    <section id="highlights" className="py-24 relative bg-background text-on-surface">
      <div className="container mx-auto px-6 max-w-[1440px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star size={16} className="text-secondary fill-secondary" />
              <span className="font-mono text-xs text-secondary uppercase tracking-[0.2em] font-semibold">
                Project Highlights
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-on-surface">
              Recent Contributions
            </h2>
          </div>
          
          <button
            onClick={handleScrollToWork}
            className="flex items-center gap-2 font-mono text-xs text-primary border border-primary/30 px-6 py-3 rounded-full hover:bg-primary/10 transition-all active:scale-95 shrink-0 self-start md:self-end"
          >
            View Full Portfolio
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((item, idx) => (
            <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
              <div 
                className="group cursor-pointer flex flex-col h-full"
                onClick={handleScrollToWork}
              >
                <div className={`relative overflow-hidden rounded-xl aspect-video mb-4 glass-card ${item.glow}`}>
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    alt={item.title}
                    src={item.image}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-bg-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className={`${item.color} font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1`}>
                      {item.action} <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
                
                <h3 className="font-display text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
