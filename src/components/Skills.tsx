import React from 'react';
import { motion } from 'motion/react';
import { Code, Layers, Terminal, Database, ShieldCheck, ListChecks, Languages as LanguagesIcon } from 'lucide-react';
import { useApp } from '../AppContext';

const Skills = () => {
  const { t } = useApp();
  
  const skillGroups = [
    {
      title: t.skills.categories.programming,
      icon: <Code />,
      skills: ["C#", "Python", "Java", "TypeScript", "JavaScript", "PHP", "SQL", "HTML", "CSS", "Power Fx/Query", "VBA", "C", "C++", "Kotlin"]
    },
    {
      title: t.skills.categories.frameworks,
      icon: <Layers />,
      skills: ["ASP.NET Core", "Spring Boot", "Laravel", "React Native", "Flutter", "Angular", "Vue.js", "Express.js", "React", "Node.js", "PyTest", "Next.js", "Nest.js"]
    },
    {
      title: t.skills.categories.tools,
      icon: <Terminal />,
      skills: ["VS Code", "Git", "GitHub", "IntelliJ IDEA", "Postman", "PlantUML", "Docker", "Jira", "JUnit", "Maven"]
    },
    {
      title: t.skills.categories.databases,
      icon: <Database />,
      skills: ["SQL Server", "SQLite", "PostgreSQL", "Firebase/Firestore", "MongoDB", "MySQL", "Supabase"]
    },
    {
      title: t.skills.categories.methodologies,
      icon: <ListChecks />,
      skills: [t.skills.methodologies.agile, t.skills.methodologies.uml, t.skills.methodologies.patterns, t.skills.methodologies.tdd]
    },
    {
      title: t.skills.categories.languages,
      icon: <LanguagesIcon />,
      skills: [t.skills.languages.french, t.skills.languages.english]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <p className="font-label text-primary uppercase tracking-[0.3em] text-xs">{t.skills.title}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">{t.skills.subtitle}</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">{t.skills.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 hover:bg-surface-container transition-colors group"
            >
              <div className="p-3 bg-surface-container-high rounded-lg w-fit text-primary mb-6 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="font-bold text-lg mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-label uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-primary/10 rounded-2xl text-primary">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold">{t.skills.categories.security}</h3>
              <p className="text-on-surface-variant text-sm">OWASP, NIST, Metasploit, Wireshark, Nmap, Linux (Kali)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
