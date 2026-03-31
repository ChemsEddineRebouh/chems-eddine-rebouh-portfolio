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
        "Participated in functional needs analysis and technical documentation.",
        "Developed robust application modules in JS and PHP.",
        "Collaborated with clients to translate business needs into solutions.",
        "Provided level 2 technical support and bug fixes."
      ] : [
        "Participation à l'analyse des besoins fonctionnels et documentation technique.",
        "Développement de modules applicatifs robustes en JS et PHP.",
        "Collaboration directe avec les clients pour traduire les besoins en solutions.",
        "Support technique de niveau 2 et déploiement de correctifs."
      ]
    }
  ];

  const education = [
    {
      school: "ÉTS",
      degree: lang === 'en' ? "Bachelor in Software Engineering" : "Baccalauréat en génie logiciel",
      date: "2024 - Present",
      location: "Montréal, QC"
    },
    {
      school: "Collège Montmorency",
      degree: lang === 'en' ? "DEC in Computer Science" : "DEC en Informatique",
      date: "2024",
      location: "Laval, QC"
    }
  ];

  return (
    <section id="experience" className="py-24 px-8 bg-surface-container-lowest">
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
                <div className="text-right">
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
