import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useApp } from '../AppContext';

const Footer = () => {
  const { t } = useApp();

  return (
    <footer className="bg-surface-container-lowest py-12 px-6 md:px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter text-primary font-headline">
          Chems-Eddine Rebouh.
        </div>

        <p className="text-xs uppercase tracking-widest text-on-surface-variant font-label text-center">
          © {new Date().getFullYear()} {t.footer.copy}
          <span className="block mt-1 font-serif italic normal-case tracking-normal opacity-70">
            {t.footer.crafted}
          </span>
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/ChemsEddineRebouh" target="_blank" rel="noopener noreferrer" aria-label={t.footer.github} className="text-on-surface-variant hover:text-primary transition-colors"><Github size={20} aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/ChemsEddineRebouh" target="_blank" rel="noopener noreferrer" aria-label={t.footer.linkedin} className="text-on-surface-variant hover:text-primary transition-colors"><Linkedin size={20} aria-hidden="true" /></a>
          <a href="mailto:chems-eddine.rebouh.1@ens.etsmtl.ca" aria-label={t.footer.email} className="text-on-surface-variant hover:text-primary transition-colors"><Mail size={20} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
