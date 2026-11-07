import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Bot, Code, Smartphone, Store } from 'lucide-react';
import { useApp } from '../AppContext';
import { cn } from '../lib/utils';
import project01 from '../assets/project01.webp';
import project02 from '../assets/project02.webp';
import project03 from '../assets/project03.webp';
import project04 from '../assets/project04.webp';

const Projects = () => {
  const { t, lang } = useApp();
  const en = lang === 'en';

  const projects = [
    {
      title: en ? "AI Technical Interview Simulator" : "Simulateur d'entrevue technique IA",
      desc: en
        ? "Full-stack interview training application: a Spring Boot backend orchestrates the DeepSeek API to generate contextual questions and evaluate answers in real time."
        : "Application full-stack d'entraînement aux entrevues : un backend Spring Boot orchestre l'API DeepSeek pour générer des questions contextuelles et évaluer les réponses en temps réel.",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL", "DeepSeek API"],
      icon: <Bot size={24} aria-hidden="true" />,
      image: project01,
      href: "https://github.com/ChemsEddineRebouh/ProjetChatBotAi",
      wide: true
    },
    {
      title: en ? "Class1Prep - SAAQ Mobile App" : "Class1Prep - Application Mobile SAAQ",
      desc: en
        ? "SAAQ Class 1 theory exam preparation: practice by category, a 32-question exam simulation and local mistake tracking."
        : "Préparation à l'examen théorique SAAQ Classe 1 : pratique par catégorie, simulation d'examen de 32 questions et suivi des erreurs en local.",
      tags: ["React Native", "Expo", "TypeScript", "AdMob"],
      icon: <Smartphone size={24} aria-hidden="true" />,
      image: project02,
      href: "https://github.com/ChemsEddineRebouh/Class1Prep"
    },
    {
      title: en ? "ClicVente - Mobile Marketplace" : "ClicVente - Marketplace Mobile",
      desc: en
        ? "Listing marketplace with Firebase authentication, real-time one-to-one messaging, and dynamic search and filtering."
        : "Marketplace d'annonces avec authentification Firebase, messagerie 1-à-1 en temps réel, recherche et filtrage dynamiques.",
      tags: ["React Native", "Expo", "Firebase", "NativeWind"],
      icon: <Store size={24} aria-hidden="true" />,
      image: project03,
      href: "https://github.com/ChemsEddineRebouh/Projet-de-Marketplace-Mobile"
    },
    {
      title: en ? "Sorting Visualizer" : "Visualiseur de Tri",
      desc: en
        ? "JavaFX application to animate the step-by-step execution of Quick Sort and Merge Sort using custom arrays."
        : "Application JavaFX pour animer l'exécution étape par étape du tri rapide et du tri fusion à l'aide de tableaux personnalisés.",
      tags: ["Java", "JavaFX"],
      icon: <Code size={24} aria-hidden="true" />,
      image: project04,
      href: "https://github.com/ChemsEddineRebouh/AlgoTri",
      wide: true
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <p className="font-label text-primary uppercase tracking-[0.3em] text-xs">{t.projects.title}</p>
            <h2 className="text-4xl font-bold font-headline tracking-tight">{t.projects.subtitle}</h2>
          </div>
          <a
            href="https://github.com/ChemsEddineRebouh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-on-surface-variant hover:text-primary transition-colors font-label text-sm border-b border-outline-variant pb-1"
          >
            {t.projects.viewAll}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative flex flex-col justify-end min-h-[500px] overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 md:col-span-6",
                project.wide ? "lg:col-span-8" : "lg:col-span-4"
              )}
            >
              <div className="absolute top-8 left-8 z-20">
                <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">
                  Project_0{idx + 1}
                </span>
              </div>

              <img
                src={project.image}
                alt={en ? `Preview of ${project.title}` : `Aperçu de ${project.title}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />

              <div className="relative z-10 p-8 pt-20 space-y-4 w-full">
                <div className="p-3 bg-surface-container-high rounded-lg w-fit text-primary">
                  {project.icon}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-surface-container-highest/50 text-on-surface-variant text-[10px] font-label uppercase tracking-widest border border-outline-variant/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-on-surface-variant max-w-md">{project.desc}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.projects.viewCode} : ${project.title}`}
                  className="flex items-center gap-2 text-primary font-bold text-sm group/btn w-fit"
                >
                  {t.projects.viewCode}
                  <ExternalLink size={16} aria-hidden="true" className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
