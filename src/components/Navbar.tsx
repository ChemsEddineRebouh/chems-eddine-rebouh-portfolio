import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useApp } from '../AppContext';
import { cn } from '../lib/utils';
import Profile from '../assets/me.png';
import CV from '../assets/ChemsRebouh_CV.pdf';

const Navbar = () => {
  const { t, lang, setLang, isDark, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter text-primary font-headline flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <img src={Profile} alt="Chems-Eddine Rebouh" className="w-full h-full object-cover rounded-full" />
          </div>
          Chems-Eddine Rebouh
        </a>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-surface-container-low p-1 rounded-lg border border-outline-variant/10">
            <button 
              onClick={() => setLang('fr')}
              className={cn(
                "px-2 py-1 text-[10px] font-bold rounded transition-all",
                lang === 'fr' ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              FR
            </button>
            <button 
              onClick={() => setLang('en')}
              className={cn(
                "px-2 py-1 text-[10px] font-bold rounded transition-all",
                lang === 'en' ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              EN
            </button>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href={CV} download="ChemsRebouh_CV.pdf" className="hidden sm:block bg-primary hover:bg-primary-container text-on-primary px-5 py-2 rounded-lg font-bold text-sm transition-all active:scale-95">
  {t.nav.resume}
</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
