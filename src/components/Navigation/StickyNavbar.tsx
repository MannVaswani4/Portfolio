import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const StickyNavbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.8) {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 
          bg-surface/70 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_0_20px_rgba(0,240,255,0.1)] 
          transition-all duration-500 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div 
          className="flex items-center gap-3 cursor-pointer z-50"
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="h-8 w-8 overflow-hidden rounded-full border border-outline-variant/30 shrink-0">
            <img
              src="/PotraitMann.png"
              alt="MV"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <span className="font-display text-[12px] font-bold tracking-[0.25em] text-primary uppercase">
            mann v.
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {['About', 'Experience', 'Work', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-mono text-[11px] font-medium tracking-[0.18em] text-on-surface-variant uppercase transition-colors hover:text-primary"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden text-primary/65 hover:text-primary transition-colors z-50 p-2"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface-dim/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {['About', 'Experience', 'Work', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => {
              setIsMobileMenuOpen(false);
              scrollToSection(item.toLowerCase());
            }}
            className="font-display text-lg font-semibold tracking-[0.25em] text-on-surface-variant uppercase transition-all hover:text-primary hover:scale-105"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
