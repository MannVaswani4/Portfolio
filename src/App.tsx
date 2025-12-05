import { useEffect, useState } from 'react';
import { FluidBackground } from './components/ui/FluidBackground';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Leadership } from './sections/Leadership';
import { Skills } from './sections/Skills';
import { Awards } from './sections/Awards';
import { Contact } from './sections/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <main className="relative min-h-screen bg-bg-dark text-white selection:bg-neon-blue/30 selection:text-neon-blue">
      <FluidBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation (Simple floating) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 px-6 py-3 rounded-full border border-white/10 bg-black/20 backdrop-blur-md hidden md:block">
        <ul className="flex gap-8 text-sm font-medium text-gray-300">
          {['About', 'Experience', 'Projects', 'Leadership', 'Skills', 'Awards', 'Contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-neon-blue transition-colors"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Awards />
        <Contact />
      </div>

      <footer className="py-8 text-center text-gray-500 text-sm relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <p>© 2025 Mann Vaswani. All systems operational.</p>
      </footer>
    </main>
  );
}

export default App;
