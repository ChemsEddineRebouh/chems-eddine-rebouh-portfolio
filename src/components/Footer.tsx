import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useApp } from '../AppContext';

const Footer = () => {
  const { t, lang } = useApp();
  
  return (
    <footer className="bg-surface-container-lowest py-12 px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter text-primary font-headline">
          Chems-Eddine Rebouh.
        </div>
        
        <p className="text-xs uppercase tracking-widest text-on-surface-variant font-label text-center">
          {t.footer.copy}
          <span className="block mt-1 font-serif italic lowercase tracking-normal opacity-50">
            {lang === 'en' ? "Crafted with care in Montréal." : "Conçu avec soin à Montréal."}
          </span>
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/ChemsEddineRebouh" className="text-on-surface-variant hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/ChemsEddineRebouh" className="text-on-surface-variant hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:chems-eddine.rebouh.1@ens.etsmtl.ca" className="text-on-surface-variant hover:text-primary transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
