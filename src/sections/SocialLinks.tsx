import React from 'react';
import { content } from '../data/content';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  GitHub: <Github size={32} />,
  LinkedIn: <Linkedin size={32} />,
  Instagram: <Instagram size={32} />
};

export const SocialLinks: React.FC = () => {
  return (
    <section id="contact" className="py-40 relative container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
        Let's build something <span className="text-text-muted italic block sm:inline mt-2 sm:mt-0">meaningful.</span>
      </h2>
      
      <div className="flex justify-center items-center gap-10 md:gap-16">
        <a 
          href="mailto:contact@mannvaswani.com" 
          className="text-text-secondary hover:text-white transition-all hover:scale-110"
        >
          <Mail size={32} />
        </a>
        {content.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            {icons[social.name]}
          </a>
        ))}
      </div>
    </section>
  );
};
