export type Language = 'en' | 'fr';

export interface Translation {
  nav: {
    home: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
    resume: string;
  };
  hero: {
    availability: string;
    title: string;
    subtitle: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
  };
  experience: {
    title: string;
    subtitle: string;
    description: string;
    intern: string;
  };
  projects: {
    title: string;
    subtitle: string;
    description: string;
    viewCode: string;
    docs: string;
    explore: string;
  };
  skills: {
    title: string;
    subtitle: string;
    description: string;
    categories: {
      programming: string;
      frameworks: string;
      tools: string;
      databases: string;
      security: string;
      languages: string;
    };
    languages: {
      french: string;
      english: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      send: string;
    };
    info: {
      title: string;
      email: string;
      phone: string;
      location: string;
    };
  };
  footer: {
    copy: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      resume: "Resume"
    },
    hero: {
      availability: "Open for Internships & Opportunities",
      title: "Software Engineer",
      subtitle: "Full-Stack & Mobile Development",
      description: "Chems-Eddine Rebouh. I'm a software engineering student at ÉTS Montréal dedicated to crafting high-performance mobile applications and resilient software systems with a focus on AI integration.",
      ctaProjects: "View My Projects",
      ctaContact: "Let's Talk"
    },
    experience: {
      title: "Professional",
      subtitle: "Experiences",
      description: "A curated look at my evolution as a developer, focusing on full-stack development, agile methodologies, and scalable systems.",
      intern: "Intern Full-Stack Developer"
    },
    projects: {
      title: "Project",
      subtitle: "Showcase",
      description: "A rigorous selection of software architectures and mobile applications designed for performance, scalability, and an uncompromising user experience.",
      viewCode: "View Code",
      docs: "Documentation",
      explore: "Explore"
    },
    skills: {
      title: "Technical",
      subtitle: "Ecosystem",
      description: "A structured synthesis of academic foundations and a modern technological stack, optimized for high-performance software development.",
      categories: {
        programming: "Programming",
        frameworks: "Frameworks",
        tools: "Tools & CI/CD",
        databases: "Databases",
        security: "Security & OS",
        languages: "Languages"
      },
      languages: {
        french: "French (Native)",
        english: "English (Functional)"
      }
    },
    contact: {
      title: "Get in touch",
      subtitle: "Contact Me",
      description: "I'm currently seeking new challenges and collaborative opportunities. If you have a project in mind or simply wish to discuss software development, I'd be pleased to hear from you.",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Message",
        send: "Send Inquiry"
      },
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        location: "Location"
      }
    },
    footer: {
      copy: "© 2024 Chems-Eddine Rebouh. Built with passion and precision."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      experience: "Expériences",
      skills: "Compétences",
      contact: "Contact",
      resume: "CV"
    },
    hero: {
      availability: "Disponible pour des stages et opportunités",
      title: "Ingénieur Logiciel",
      subtitle: "Développement Full-Stack & Mobile",
      description: "Chems-Eddine Rebouh. Étudiant en génie logiciel à l'ÉTS Montréal, je me consacre à la conception d'applications mobiles performantes et de systèmes résilients, avec un accent sur l'intégration de l'IA.",
      ctaProjects: "Voir mes projets",
      ctaContact: "Discutons"
    },
    experience: {
      title: "Parcours",
      subtitle: "Professionnel",
      description: "Un regard approfondi sur mon évolution en tant que développeur, axé sur le développement full-stack, les méthodologies agiles et les systèmes évolutifs.",
      intern: "Stagiaire Développeur Full-Stack"
    },
    projects: {
      title: "Galerie de",
      subtitle: "Projets",
      description: "Une sélection rigoureuse d'applications mobiles et de solutions logicielles conçues pour la performance, l'évolutivité et une expérience utilisateur sans compromis.",
      viewCode: "Voir le Code",
      docs: "Documentation",
      explore: "Explorer"
    },
    skills: {
      title: "Compétences",
      subtitle: "Techniques",
      description: "Une synthèse structurée de mes fondements académiques et d'une pile technologique moderne, optimisée pour le développement logiciel.",
      categories: {
        programming: "Programmation",
        frameworks: "Frameworks",
        tools: "Outils & CI/CD",
        databases: "Bases de données",
        security: "Sécurité & Systèmes",
        languages: "Langues"
      },
      languages: {
        french: "Français (Natif)",
        english: "Anglais (Fonctionnel)"
      }
    },
    contact: {
      title: "Parlons-en",
      subtitle: "Me Contacter",
      description: "Je suis actuellement à la recherche de nouveaux défis et d'opportunités de collaboration. Si vous avez un projet en tête ou souhaitez discuter de développement logiciel, n'hésitez pas à me contacter.",
      form: {
        name: "Nom complet",
        email: "Adresse courriel",
        phone: "Numéro de téléphone",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le message"
      },
      info: {
        title: "Informations de contact",
        email: "Email",
        phone: "Téléphone",
        location: "Localisation"
      }
    },
    footer: {
      copy: "© 2024 Chems-Eddine Rebouh. Conçu avec passion et précision."
    }
  }
};