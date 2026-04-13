import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Github, 
  Linkedin, 
  Terminal 
} from 'lucide-react';
import { useApp } from '../AppContext';
import Profile from '../assets/me.png';

const Hero = () => {
  const { t, lang } = useApp();
  
  return (
    <section id="home" className="relative min-h-screen flex items-start pt-32 lg:pt-48 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-tertiary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-9 space-y-12">
            <div className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black font-headline tracking-tighter leading-[0.85] relative"
                >
                  {t.hero.title} <br />
                  <span className="text-gradient font-serif italic font-normal lowercase tracking-normal">{t.hero.subtitle}</span>
                </motion.h1>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative flex-shrink-0"
              >
                <div className="relative w-48 h-64 md:w-100 md:h-120 rounded-2xl overflow-hidden glass-card p-2 group transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none" />
                  <div className="w-full h-full bg-surface-container-high rounded-xl flex items-center justify-center border border-outline-variant/10">
  <img src={Profile} alt="Chems-Eddine Rebouh" className="w-full h-full object-cover rounded-xl" />
</div>
                  
                  <div className="absolute top-3 right-3 z-20">
                    <div className="glass-card px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest border-primary/20 text-primary">
                      MTL • QC
                    </div>
                  </div>
                </div>

                <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 border border-primary/10 rounded-full" />
                <div className="absolute -z-10 -bottom-4 -left-4 w-16 h-16 border border-tertiary/10 rounded-full" />
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed opacity-90"
              >
                {t.hero.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a href="#projects" className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-8 py-4 rounded-lg flex items-center gap-2 group transition-all hover:shadow-[0_0_30px_rgba(173,198,255,0.3)]">
                  {t.hero.ctaProjects}
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="bg-surface-container-low text-on-surface font-semibold px-8 py-4 rounded-lg border border-outline-variant/10 hover:bg-surface-container transition-colors">
                  {t.hero.ctaContact}
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8"
              >
                <div className="flex items-center gap-6">
                  <a href="https://github.com/ChemsEddineRebouh" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 text-sm font-label uppercase tracking-widest">
                    <Github size={20}  /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/ChemsEddineRebouh" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 text-sm font-label uppercase tracking-widest">
                    <Linkedin size={20} /> LinkedIn
                  </a>
                </div>
                
                <div className="hidden sm:block w-px h-8 bg-outline-variant/20" />
                
                <p className="text-[10px] font-serif italic text-on-surface-variant max-w-[200px] leading-tight">
                  {lang === 'en' 
                    ? "Passionate about the intersection of code, security, and human experience." 
                    : "Passionné par l'intersection du code, de la sécurité et de l'expérience humaine."}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-label uppercase tracking-[0.3em] text-on-surface-variant">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
