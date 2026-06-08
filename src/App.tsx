import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sections
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Journey } from './sections/Journey';
import { ContentShowcase } from './sections/ContentShowcase';
import { SocialLinks } from './sections/SocialLinks';
import { Divider } from './components/ui/Divider';

import { StickyNavbar } from './components/Navigation/StickyNavbar';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Force scroll to top and disable browser scroll restoration on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Small delay to ensure smooth entrance
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-bg-dark min-h-screen text-text-primary selection:bg-accent/30 selection:text-accent font-sans">
      <StickyNavbar />
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 bg-bg-dark"
          />
        )}
      </AnimatePresence>



      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Divider />
        <Projects />
        <Journey />
        <ContentShowcase />
        <SocialLinks />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 text-center bg-bg-dark">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Mann Vaswani.</p>
          <p className="mt-2 md:mt-0 font-mono text-xs">Built with React + Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
