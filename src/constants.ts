export type Language = 'en' | 'fr';

export interface Translation {
  nav: {
    home: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
    resume: string;
    toggleTheme: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    tagline: string;
    ctaProjects: string;
    ctaContact: string;
  };
  experience: {
    title: string;
    subtitle: string;
    intern: string;
    present: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    viewAll: string;
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
      methodologies: string;
      security: string;
      languages: string;
    };
    methodologies: {
      agile: string;
      uml: string;
      patterns: string;
      tdd: string;
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
    responseTime: string;
    form: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      placeholders: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
      };
      errors: {
        email: string;
        phone: string;
        send: string;
      };
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
    crafted: string;
    github: string;
    linkedin: string;
    email: string;
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
      resume: "Resume",
      toggleTheme: "Toggle light or dark theme",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language"
    },
    hero: {
      title: "Software Developer",
      subtitle: "Full-Stack & Mobile Development",
      description: "Chems-Eddine Rebouh. I'm a software engineering student at ÉTS Montréal dedicated to crafting high-performance mobile applications and resilient software systems with a focus on AI integration.",
      tagline: "Passionate about the intersection of code, security, and human experience.",
      ctaProjects: "View My Projects",
      ctaContact: "Let's Talk"
    },
    experience: {
      title: "Professional",
      subtitle: "Experiences",
      intern: "Full-Stack Developer Intern",
      present: "Present"
    },
    projects: {
      title: "Project",
      subtitle: "Showcase",
      viewCode: "View Code",
      viewAll: "View all my projects"
    },
    skills: {
      title: "Technical",
      subtitle: "Ecosystem",
      description: "A structured synthesis of academic foundations and a modern technological stack, optimized for high-performance software development.",
      categories: {
        programming: "Programming",
        frameworks: "Frameworks",
        tools: "Tools",
        databases: "Databases",
        methodologies: "Methodologies",
        security: "Security & OS",
        languages: "Languages"
      },
      methodologies: {
        agile: "Agile/Scrum",
        uml: "UML",
        patterns: "Design Patterns",
        tdd: "TDD"
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
      responseTime: "Response time: ~24 hours",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number (optional)",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        placeholders: {
          name: "John Doe",
          email: "john@example.com",
          phone: "514-555-5555",
          subject: "Internship opportunity",
          message: "Tell me about your project..."
        },
        errors: {
          email: "Please enter a valid email address.",
          phone: "Please enter a valid phone number, or leave this field empty.",
          send: "Your message could not be sent. Please try again or email me directly."
        }
      },
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        location: "Location"
      }
    },
    footer: {
      copy: "Chems-Eddine Rebouh. Built with passion and precision.",
      crafted: "Crafted with care in Montréal.",
      github: "GitHub profile",
      linkedin: "LinkedIn profile",
      email: "Send an email"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      experience: "Expériences",
      skills: "Compétences",
      contact: "Contact",
      resume: "CV",
      toggleTheme: "Basculer entre le thème clair et sombre",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      language: "Langue"
    },
    hero: {
      title: "Développeur Logiciel",
      subtitle: "Développement Full-Stack & Mobile",
      description: "Chems-Eddine Rebouh. Étudiant en génie logiciel à l'ÉTS Montréal, je me consacre à la conception d'applications mobiles performantes et de systèmes résilients, avec un accent sur l'intégration de l'IA.",
      tagline: "Passionné par l'intersection du code, de la sécurité et de l'expérience humaine.",
      ctaProjects: "Voir mes projets",
      ctaContact: "Discutons"
    },
    experience: {
      title: "Parcours",
      subtitle: "Professionnel",
      intern: "Stagiaire développeur full-stack",
      present: "Présent"
    },
    projects: {
      title: "Galerie de",
      subtitle: "Projets",
      viewCode: "Voir le code",
      viewAll: "Voir tous mes projets"
    },
    skills: {
      title: "Compétences",
      subtitle: "Techniques",
      description: "Une synthèse structurée de mes fondements académiques et d'une pile technologique moderne, optimisée pour le développement logiciel.",
      categories: {
        programming: "Programmation",
        frameworks: "Frameworks",
        tools: "Outils",
        databases: "Bases de données",
        methodologies: "Méthodologies",
        security: "Sécurité & Systèmes",
        languages: "Langues"
      },
      methodologies: {
        agile: "Agile/Scrum",
        uml: "UML",
        patterns: "Patrons de conception",
        tdd: "TDD"
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
      responseTime: "Temps de réponse : ~24 heures",
      form: {
        name: "Nom complet",
        email: "Adresse courriel",
        phone: "Téléphone (facultatif)",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le message",
        sending: "Envoi...",
        success: "Message envoyé avec succès !",
        placeholders: {
          name: "Jean Tremblay",
          email: "jean@exemple.com",
          phone: "514-555-5555",
          subject: "Offre de stage",
          message: "Parlez-moi de votre projet..."
        },
        errors: {
          email: "Veuillez entrer une adresse courriel valide.",
          phone: "Veuillez entrer un numéro de téléphone valide ou laisser ce champ vide.",
          send: "Votre message n'a pas pu être envoyé. Veuillez réessayer ou m'écrire directement par courriel."
        }
      },
      info: {
        title: "Informations de contact",
        email: "Courriel",
        phone: "Téléphone",
        location: "Localisation"
      }
    },
    footer: {
      copy: "Chems-Eddine Rebouh. Conçu avec passion et précision.",
      crafted: "Conçu avec soin à Montréal.",
      github: "Profil GitHub",
      linkedin: "Profil LinkedIn",
      email: "Envoyer un courriel"
    }
  }
};
