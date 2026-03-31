import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Database, Code, Smartphone } from 'lucide-react';
import { useApp } from '../AppContext';
import { cn } from '../lib/utils';
import project01 from '../assets/project01.png';
import project02 from '../assets/project02.png';
import project03 from '../assets/project03.png';
import project04 from '../assets/project04.png';

const Projects = () => {
  const { t, lang } = useApp();
  
  const projects = [
    {
      title: lang === 'en' ? "AI Technical Interview Simulator" : "Simulateur d'Entrevue Technique IA",
      desc: lang === 'en' ? "Intelligent conversational agent capable of conducting in-depth technical interviews, analyzing code in real-time." : "Agent conversationnel intelligent capable de mener des entrevues techniques approfondies, d'analyser le code en temps réel.",
      tags: ["Java", "Spring Boot", "React", "Llama 3"],
      image: project01,
      featured: true,
      href: "https://github.com/ChemsEddineRebouh/ProjetChatBotAi"
    },
    {
      title: lang === 'en' ? "SAAQ Class 1 Mobile App" : "Application Mobile SAAQ Classe 1",
      desc: lang === 'en' ? "Mobile solution for professional driving test preparation, with interactive simulations." : "Solution mobile pour la préparation de l'examen de conduite professionnelle, avec simulations interactives.",
      tags: ["React Native"],
      image: project02,
      icon: <Smartphone size={24} />,
      href: "https://github.com/ChemsEddineRebouh/Class1Prep"
    },
    {
      title: lang === 'en' ? "Mobile Marketplace" : "Marketplace Mobile",
      desc: lang === 'en' ? "P2P e-commerce platform with real-time messaging and secure payments." : "Plateforme e-commerce P2P avec messagerie temps réel et paiements sécurisés.",
      tags: ["React Native", "Firebase"],
      image: project03,
      icon: <Database size={24} />,
      href: "https://github.com/ChemsEddineRebouh/Projet-de-Marketplace-Mobile"
    },
    {
      title: lang === 'en' ? "Sorting Visualizer" : "Visualiseur de Tri",
      desc: lang === 'en' ? "Interactive tool to visualize sorting algorithms in real-time with performance metrics." : "Outil interactif pour visualiser les algorithmes de tri en temps réel avec des métriques de performance.",
      tags: ["Java", "JavaFX"],
      image: project04,
      icon: <Code size={24} />, 
      href: "https://github.com/ChemsEddineRebouh/AlgoTri"
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-surface">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <p className="font-label text-primary uppercase tracking-[0.3em] text-xs">{t.projects.title}</p>
            <h2 className="text-4xl font-bold font-headline tracking-tight">{t.projects.subtitle}</h2>
          </div>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm border-b border-outline-variant pb-1">
            {lang === 'en' ? "View full archive" : "Voir tout l'archive"}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all duration-500",
                project.featured ? "md:col-span-8 h-[500px]" : "md:col-span-4 h-[500px]" 
              )}
            >
              <div className="absolute top-8 left-8 z-20">
                <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">
                  Project_0{idx + 1}
                </span>
              </div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 space-y-4 w-full">
                {project.icon && (
                  <div className="p-3 bg-surface-container-high rounded-lg w-fit text-primary">
                    {project.icon}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-surface-container-highest/50 text-secondary text-[10px] font-label uppercase tracking-widest border border-outline-variant/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-on-surface-variant max-w-md line-clamp-2">{project.desc}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary font-bold text-sm group/btn w-fit"
                >
                  {t.projects.explore}
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
