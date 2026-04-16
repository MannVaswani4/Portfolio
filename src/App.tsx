import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sections
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';
import { Journey } from './sections/Journey';
import { ContentShowcase } from './sections/ContentShowcase';
import { SocialLinks } from './sections/SocialLinks';
import { Divider } from './components/ui/Divider';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth entrance
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-bg-dark min-h-screen text-text-primary selection:bg-accent/30 selection:text-accent font-sans">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 bg-bg-dark"
          />
        )}
      </AnimatePresence>

      {/* Ultra-minimal Top Nav */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center pointer-events-none"
      >
        <div className="font-bold tracking-tight text-white pointer-events-auto">
          M.V
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary pointer-events-auto">
          {['About', 'Experience', 'Work', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Divider />
        <Experience />
        <Education />
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
