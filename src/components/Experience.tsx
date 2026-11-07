import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, School } from 'lucide-react';
import { useApp } from '../AppContext';

const Experience = () => {
  const { t, lang } = useApp();
  
  const experiences = [
    {
      company: "Solumation",
      role: t.experience.intern,
      date: "2024",
      location: "Terrebonne, QC",
      points: lang === 'en' ? [
        "Migrated an existing client application (Laravel + Bootstrap) to a decoupled architecture (Vue.js frontend, Laravel API backend), improving load times and code maintainability.",
        "Designed and developed application modules in JavaScript and PHP with optimized CRUD operations, ensuring data integrity through complex validations.",
        "Translated external clients' business requirements into concrete technical solutions, working directly with them to clarify ambiguous needs before development.",
        "Diagnosed and resolved issues in level 2 support, prioritizing recurring fixes over temporary workarounds to stabilize the application.",
        "Worked in an Agile environment (sprints, daily stand-ups, systematic code reviews) and contributed to technical documentation (design patterns, diagrams, use cases)."
      ] : [
        "Migration d'une application cliente existante (Laravel + Bootstrap) vers une architecture découplée (Vue.js en frontend, API Laravel en backend), améliorant les temps de chargement et la maintenabilité du code.",
        "Conception et développement de modules applicatifs en JavaScript et PHP avec des opérations CRUD optimisées, en assurant l'intégrité des données par des validations complexes.",
        "Traduction des exigences d'affaires de clients externes en solutions techniques concrètes, en collaborant directement avec eux pour clarifier les besoins ambigus avant le développement.",
        "Diagnostic et résolution d'anomalies en support de niveau 2, en priorisant les correctifs récurrents plutôt que des solutions temporaires pour stabiliser l'application.",
        "Travail en environnement Agile (sprints, mêlées quotidiennes, revues de code systématiques) et contribution à la documentation technique (patrons de conception, diagrammes, cas d'usage)."
      ]
    }
  ];

  const education = [
    {
      school: "ÉTS",
      degree: lang === 'en' ? "Bachelor in Software Engineering" : "Baccalauréat en génie logiciel",
      date: `2024 - ${t.experience.present}`,
      location: "Montréal, QC"
    },
    {
      school: "Collège Montmorency",
      degree: lang === 'en' ? "DEC in Computer Application Development" : "DEC en Techniques de développement d'applications informatiques",
      date: "2024",
      location: "Laval, QC"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-8 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-4">
            <p className="font-label text-primary uppercase tracking-[0.3em] text-xs">{t.experience.title}</p>
            <h2 className="text-4xl font-bold font-headline tracking-tight">{t.experience.subtitle}</h2>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <School className="text-primary" />
              {lang === 'en' ? "Education" : "Formation"}
            </h3>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l border-outline-variant/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                  <h4 className="font-bold text-lg">{edu.school}</h4>
                  <p className="text-primary text-sm font-label">{edu.degree}</p>
                  <p className="text-on-surface-variant text-xs mt-1">{edu.date} • {edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <p className="text-primary font-label">{exp.role}</p>
                </div>
                <div className="md:text-right shrink-0">
                  <p className="text-on-surface-variant text-sm">{exp.date}</p>
                  <p className="text-on-surface-variant text-sm">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-on-surface-variant leading-relaxed">
                    <ChevronRight size={18} className="text-primary shrink-0 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
