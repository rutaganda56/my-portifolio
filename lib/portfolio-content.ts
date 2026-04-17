export type Language = "en" | "fr" | "rw";

export const languageOptions: Array<{ code: Language; label: string }> = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "rw", label: "RW" },
];

export const sectionIds = [
  "about",
  "experience",
  "work",
  "skills",
  "awards",
  "gallery",
  "contact",
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/your-github-username",
    placeholder: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rutaganda-valentin-587682264/",
    placeholder: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ntore__r/",
    placeholder: false,
  },
] as const;

type TranslationShape = {
  nav: {
    about: string;
    experience: string;
    work: string;
    skills: string;
    awards: string;
    gallery: string;
    contact: string;
    theme: string;
    language: string;
    menu: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    visitLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
  };
  experience: {
    title: string;
    intro: string;
    items: Array<{
      role: string;
      period: string;
      description: string;
      skills: string[];
    }>;
    website: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    liveDemo: string;
    sourceCode: string;
    toolsLabel: string;
    items: Array<{
      name: string;
      description: string;
      technologies: string[];
      liveUrl: string;
      githubUrl: string;
      image: string;
      placeholder?: boolean;
    }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: Array<{
      name: string;
      items: Array<{ name: string; level: string }>;
    }>;
  };
  awards: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      organization: string;
      year: string;
      description: string;
      placeholder?: boolean;
    }>;
  };
  gallery: {
    eyebrow: string;
    title: string;
    open: string;
    close: string;
    items: Array<{ src: string; alt: string; caption: string; placeholder?: boolean }>;
  };
  contact: {
    title: string;
    intro: string;
    formTitle: string;
    fullName: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    missingEndpoint: string;
    invalidName: string;
    invalidEmail: string;
    invalidMessage: string;
    contactInfo: string;
    phoneLabel: string;
    emailLabel: string;
  };
  footer: {
    location: string;
    rights: string;
    social: string;
    placeholderNote: string;
  };
};

export const translations: Record<Language, TranslationShape> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      work: "Projects",
      skills: "Skills",
      awards: "Awards",
      gallery: "Gallery",
      contact: "Contact",
      theme: "Toggle theme",
      language: "Language",
      menu: "Open menu",
    },
    hero: {
      badge: "Full-stack software engineer",
      title: "Hi, I'm Rutaganda Jean Valentin.",
      description:
        "I build thoughtful web products with React, Next.js, TypeScript, Java, and Spring Boot, turning ideas into polished user experiences and reliable backend systems.",
      cta: "View projects",
      visitLabel: "Visited",
    },
    about: {
      eyebrow: "Get to know me better",
      title: "About Me",
      body:
        "I'm a developer with hands-on experience building modern web solutions for startups and growing teams. I enjoy creating clean interfaces, scalable APIs, and practical digital products that solve real problems.",
    },
    experience: {
      title: "Experience",
      intro: "Places where I have contributed and grown as a developer.",
      website: "Visit website",
      items: [
        {
          role: "Trainee, Africa to Silicon Valley",
          period: "November 2025 - Present",
          description:
            "Training in problem solving, software engineering fundamentals, and interview readiness while collaborating with ambitious peers across Africa.",
          skills: ["Python", "Algorithms", "Problem Solving"],
        },
        {
          role: "Full-stack Developer, Hepta Dev",
          period: "May 2025 - October 2025",
          description:
            "Built product features and client-facing experiences with a focus on responsive frontend interfaces and maintainable full-stack delivery.",
          skills: ["Next.js", "TypeScript", "Product Delivery"],
        },
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects",
      liveDemo: "Live demo",
      sourceCode: "GitHub",
      toolsLabel: "Tech stack",
      items: [
        {
          name: "PICKOVO",
          description:
            "Rwanda's mobile car service platform for booking diagnostics, maintenance, and auto repair at the customer's doorstep.",
          technologies: ["Next.js", "Responsive UI", "Booking Flow"],
          liveUrl: "https://www.pickovo.com/",
          githubUrl: "https://github.com/your-github-username/pickovo-case-study",
          image: "/Pickovo.JPG",
          placeholder: true,
        },
        {
          name: "MINETECH",
          description:
            "A smart dashboard experience that gives mining teams better visibility into field operations, reporting, and compliance activity.",
          technologies: ["Next.js", "Dashboard Design", "Data Visibility"],
          liveUrl: "https://www.minetech.co.rw/",
          githubUrl: "https://github.com/your-github-username/minetech-case-study",
          image: "/minetech.JPG",
          placeholder: true,
        },
      ],
    },
    skills: {
      eyebrow: "What I work with",
      title: "Skills",
      groups: [
        {
          name: "Languages",
          items: [
            { name: "TypeScript", level: "Proficient" },
            { name: "JavaScript", level: "Proficient" },
            { name: "Java", level: "Proficient" },
            { name: "Python", level: "Working knowledge" },
            {name:"C#",level: "Working knowledge"}
          ],
        },
        {
          name: "Frameworks",
          items: [
            { name: "Next.js", level: "Proficient" },
            { name: "React", level: "Proficient" },
            { name: "Spring Boot", level: "Working knowledge" },
            {name:"ASP.net" , level:"Working knowledge"}
          ],
        },
        {
          name: "Tools",
          items: [
            { name: "Git", level: "Proficient" },
            { name: "REST APIs", level: "Proficient" },
            { name: "Responsive Design", level: "Proficient" },
            {name:"Data Structures And Algorithms", level:"Working Knowledge"}
          ],
        },
        {
          name: "Soft Skills",
          items: [
            { name: "Collaboration", level: "Strong" },
            { name: "Communication", level: "Strong" },
            { name: "Adaptability", level: "Strong" },
          ],
        },
      ],
    },
    awards: {
      eyebrow: "Recognition",
      title: "Honors & Awards",
      items: [
        {
          title: "Portfolio highlight award",
          organization: "Placeholder",
          year: "2026",
          description:
            "Replace this with a real academic, professional, or community recognition.",
          placeholder: true,
        },
        {
          title: "Outstanding team contribution",
          organization: "Placeholder",
          year: "2025",
          description:
            "Use this slot to mention a scholarship, competition result, or leadership recognition.",
          placeholder: true,
        },
      ],
    },
    gallery: {
      eyebrow: "A few snapshots",
      title: "Gallery",
      open: "Open image",
      close: "Close gallery",
      items: [
        // {
        //   src: "/rutagandavalentin.jpeg",
        //   alt: "Portrait of Rutaganda Jean Valentin",
        //   caption: "Profile portrait",
        // },
        {
          src: "/WhatsApp Image 2026-04-17 at 11.43.24 (1).jpeg",
          alt: "gallery image",
          caption: "Profile portrait",
        },
        {
          src: "/WhatsApp Image 2026-04-17 at 11.43.25 (1).jpeg",
          alt: "gallery image",
          caption: "Memory",
        },
        {
          src: "/WhatsApp Image 2026-04-17 at 11.43.26.jpeg",
          alt: "gallery image",
          caption: "Memory"
        },
      ],
    },
    contact: {
      title: "Contact Me",
      intro: "Have an idea, role, or project in mind? Send me a message.",
      formTitle: "Send a message",
      fullName: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
      sending: "Sending...",
      success: "Your message has been sent successfully.",
      missingEndpoint:
        "Message delivery failed. If this is the first time using FormSubmit, open the activation email sent to your Gmail inbox and confirm the form.",
      invalidName: "Please enter your full name.",
      invalidEmail: "Please enter a valid email address.",
      invalidMessage: "Please enter a message with at least 20 characters.",
      contactInfo: "Contact information",
      phoneLabel: "Phone",
      emailLabel: "Email",
    },
    footer: {
      location: "Kigali, Rwanda",
      rights: "All rights reserved.",
      social: "Social links",
      placeholderNote: "Some links are placeholders and should be replaced.",
    },
  },
  fr: {
    nav: {
      about: "A propos",
      experience: "Experience",
      work: "Projets",
      skills: "Competences",
      awards: "Recompenses",
      gallery: "Galerie",
      contact: "Contact",
      theme: "Changer le theme",
      language: "Langue",
      menu: "Ouvrir le menu",
    },
    hero: {
      badge: "Ingenieur logiciel full-stack",
      title: "Bonjour, je suis Rutaganda Jean Valentin.",
      description:
        "Je conçois des produits web soignes avec React, Next.js, TypeScript, Java et Spring Boot en transformant les idees en experiences fluides et en backends fiables.",
      cta: "Voir les projets",
      visitLabel: "Visite",
    },
    about: {
      eyebrow: "Mieux me connaitre",
      title: "A propos de moi",
      body:
        "Je suis developpeur avec une experience concrete dans la creation de solutions web modernes pour des startups et des equipes en croissance. J'aime concevoir des interfaces propres, des API evolutives et des produits numeriques utiles.",
    },
    experience: {
      title: "Experience",
      intro: "Des environnements ou j'ai appris, contribue et progresse.",
      website: "Visiter le site",
      items: [
        {
          role: "Stagiaire, Africa to Silicon Valley",
          period: "Novembre 2025 - Aujourd'hui",
          description:
            "Formation en resolution de problemes, fondamentaux du genie logiciel et preparation aux entretiens avec des pairs ambitieux a travers l'Afrique.",
          skills: ["Python", "Algorithmes", "Resolution de problemes"],
        },
        {
          role: "Developpeur full-stack, Hepta Dev",
          period: "Mai 2025 - Octobre 2025",
          description:
            "Creation de fonctionnalites produit et d'experiences client avec une attention particuliere pour les interfaces responsives et une livraison full-stack maintenable.",
          skills: ["Next.js", "TypeScript", "Livraison produit"],
        },
      ],
    },
    projects: {
      eyebrow: "Quelques realisations",
      title: "Projets",
      liveDemo: "Demo live",
      sourceCode: "GitHub",
      toolsLabel: "Technologies",
      items: [
        {
          name: "PICKOVO",
          description:
            "La plateforme rwandaise de services automobiles mobiles pour reserver un diagnostic, un entretien ou une reparation a domicile.",
          technologies: ["Next.js", "Interface responsive", "Reservation"],
          liveUrl: "https://www.pickovo.com/",
          githubUrl: "https://github.com/your-github-username/pickovo-case-study",
          image: "/Pickovo.JPG",
          placeholder: true,
        },
        {
          name: "MINETECH",
          description:
            "Une experience de tableau de bord qui aide les equipes minieres a suivre les operations terrain, les rapports et la conformite.",
          technologies: ["Next.js", "Design dashboard", "Visibilite des donnees"],
          liveUrl: "https://www.minetech.co.rw/",
          githubUrl: "https://github.com/your-github-username/minetech-case-study",
          image: "/minetech.JPG",
          placeholder: true,
        },
      ],
    },
    skills: {
      eyebrow: "Mes domaines de travail",
      title: "Competences",
      groups: [
        {
          name: "Langages",
          items: [
            { name: "TypeScript", level: "Competent" },
            { name: "JavaScript", level: "Competent" },
            { name: "Java", level: "Competent" },
            { name: "Python", level: "Bonne base" },
          ],
        },
        {
          name: "Frameworks",
          items: [
            { name: "Next.js", level: "Competent" },
            { name: "React", level: "Competent" },
            { name: "Spring Boot", level: "Bonne base" },
          ],
        },
        {
          name: "Outils",
          items: [
            { name: "Git", level: "Competent" },
            { name: "APIs REST", level: "Competent" },
            { name: "Design responsive", level: "Competent" },
          ],
        },
        {
          name: "Soft skills",
          items: [
            { name: "Collaboration", level: "Solide" },
            { name: "Communication", level: "Solide" },
            { name: "Adaptabilite", level: "Solide" },
          ],
        },
      ],
    },
    awards: {
      eyebrow: "Distinctions",
      title: "Honneurs et recompenses",
      items: [
        {
          title: "Prix vitrine du portfolio",
          organization: "Placeholder",
          year: "2026",
          description:
            "Remplacez cet element par une distinction academique, professionnelle ou communautaire reelle.",
          placeholder: true,
        },
        {
          title: "Contribution d'equipe remarquable",
          organization: "Placeholder",
          year: "2025",
          description:
            "Utilisez cet espace pour une bourse, un concours ou une reconnaissance de leadership.",
          placeholder: true,
        },
      ],
    },
    gallery: {
      eyebrow: "Quelques images",
      title: "Galerie",
      open: "Ouvrir l'image",
      close: "Fermer la galerie",
      items: [
        {
          src: "/rutagandavalentin.jpeg",
          alt: "Portrait de Rutaganda Jean Valentin",
          caption: "Portrait",
        },
        {
          src: "/Pickovo.JPG",
          alt: "Apercu du projet Pickovo",
          caption: "Projet Pickovo",
        },
        {
          src: "/minetech.JPG",
          alt: "Apercu du projet MineTech",
          caption: "Projet MineTech",
        },
        {
          src: "https://picsum.photos/800/1000?random=21",
          alt: "Image de galerie fictive",
          caption: "Souvenir fictif",
          placeholder: true,
        },
      ],
    },
    contact: {
      title: "Me contacter",
      intro: "Vous avez une idee, une opportunite ou un projet? Envoyez-moi un message.",
      formTitle: "Envoyer un message",
      fullName: "Nom complet",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      submit: "Envoyer",
      sending: "Envoi...",
      success: "Votre message a bien ete envoye.",
      missingEndpoint:
        "L'envoi a echoue. Si c'est votre premiere utilisation de FormSubmit, ouvrez l'email d'activation recu dans votre boite Gmail et confirmez le formulaire.",
      invalidName: "Veuillez saisir votre nom complet.",
      invalidEmail: "Veuillez saisir une adresse email valide.",
      invalidMessage: "Veuillez ecrire un message d'au moins 20 caracteres.",
      contactInfo: "Informations de contact",
      phoneLabel: "Telephone",
      emailLabel: "Email",
    },
    footer: {
      location: "Kigali, Rwanda",
      rights: "Tous droits reserves.",
      social: "Reseaux sociaux",
      placeholderNote: "Certains liens sont provisoires et doivent etre remplaces.",
    },
  },
  rw: {
    nav: {
      about: "Ibyanjye",
      experience: "Uburambe",
      work: "Imishinga",
      skills: "Ubumenyi",
      awards: "Ibihembo",
      gallery: "Amafoto",
      contact: "Twandikire",
      theme: "Hindura insanganyamatsiko",
      language: "Ururimi",
      menu: "Fungura menu",
    },
    hero: {
      badge: "Inzobere mu gukora porogaramu za full-stack",
      title: "Muraho, ndi Rutaganda Jean Valentin.",
      description:
        "Nkora imbuga na porogaramu zitekerejwe neza nkoresheje React, Next.js, TypeScript, Java na Spring Boot kugira ngo ibitekerezo bihinduke ibisubizo bifatika kandi byizewe.",
      cta: "Reba imishinga",
      visitLabel: "Wasuye",
    },
    about: {
      eyebrow: "Menya byinshi kuri njye",
      title: "Abo Ndi Bo",
      body:
        "Ndi developer ufite uburambe mu kubaka ibisubizo bya web bigezweho bifasha startups n'amatsinda ari gukura. Nkunda gukora interfaces zisukuye, APIs zaguka neza, n'ibicuruzwa by'ikoranabuhanga bikemura ibibazo nyabyo.",
    },
    experience: {
      title: "Uburambe",
      intro: "Aho nakoze kandi nkahakura nk'umwubatsi wa software.",
      website: "Sura urubuga",
      items: [
        {
          role: "Trainee, Africa to Silicon Valley",
          period: "Ugushyingo 2025 - Kugeza ubu",
          description:
            "Ndimo guhugurwa mu gukemura ibibazo, amahame ya software engineering no kwitegura interviews nkorana n'abanyeshuri bafite intego muri Afrika.",
          skills: ["Python", "Algorithms", "Problem solving"],
        },
        {
          role: "Full-stack Developer, Hepta Dev",
          period: "Gicurasi 2025 - Ukwakira 2025",
          description:
            "Nubatse features z'ibicuruzwa n'uburambe bw'abakoresha nshyize imbere frontend yitabira neza no gutanga ibisubizo bya full-stack byoroshye kubungabunga.",
          skills: ["Next.js", "TypeScript", "Product delivery"],
        },
      ],
    },
    projects: {
      eyebrow: "Bimwe mu byo nakoze",
      title: "Imishinga",
      liveDemo: "Urubuga",
      sourceCode: "GitHub",
      toolsLabel: "Ikoranabuhanga",
      items: [
        {
          name: "PICKOVO",
          description:
            "Urubuga rwo mu Rwanda rutanga serivisi zo gusana no gusuzuma imodoka aho umukiriya ari, rukorohereza booking online.",
          technologies: ["Next.js", "Responsive UI", "Booking"],
          liveUrl: "https://www.pickovo.com/",
          githubUrl: "https://github.com/your-github-username/pickovo-case-study",
          image: "/Pickovo.JPG",
          placeholder: true,
        },
        {
          name: "MINETECH",
          description:
            "Dashboard ifasha abakora mu bucukuzi kubona amakuru yo mu kazi, reports n'ibijyanye n'ubuziranenge mu gihe nyacyo.",
          technologies: ["Next.js", "Dashboard", "Data visibility"],
          liveUrl: "https://www.minetech.co.rw/",
          githubUrl: "https://github.com/your-github-username/minetech-case-study",
          image: "/minetech.JPG",
          placeholder: true,
        },
      ],
    },
    skills: {
      eyebrow: "Ibyo nkoresha kenshi",
      title: "Ubumenyi",
      groups: [
        {
          name: "Indimi za porogaramu",
          items: [
            { name: "TypeScript", level: "Nzi neza" },
            { name: "JavaScript", level: "Nzi neza" },
            { name: "Java", level: "Nzi neza" },
            { name: "Python", level: "Ndayikoresha" },
          ],
        },
        {
          name: "Frameworks",
          items: [
            { name: "Next.js", level: "Nzi neza" },
            { name: "React", level: "Nzi neza" },
            { name: "Spring Boot", level: "Ndayikoresha" },
          ],
        },
        {
          name: "Ibikoresho",
          items: [
            { name: "Git", level: "Nzi neza" },
            { name: "REST APIs", level: "Nzi neza" },
            { name: "Responsive Design", level: "Nzi neza" },
          ],
        },
        {
          name: "Uburyo bwo gukorana",
          items: [
            { name: "Gukorana n'abandi", level: "Bikomeye" },
            { name: "Itumanaho", level: "Bikomeye" },
            { name: "Kwihinduranya", level: "Bikomeye" },
          ],
        },
      ],
    },
    awards: {
      eyebrow: "Ibyagezweho",
      title: "Ibihembo n'ishimwe",
      items: [
        {
          title: "Ishimwe rya portfolio",
          organization: "Placeholder",
          year: "2026",
          description:
            "Hano shyiramo igihembo cyangwa ishimwe nyaryo wahawe mu ishuri, mu kazi cyangwa mu muryango.",
          placeholder: true,
        },
        {
          title: "Ishimwe ry'uruhare rwiza mu ikipe",
          organization: "Placeholder",
          year: "2025",
          description:
            "Wakoresha aha uvuga scholarship, competition cyangwa leadership recognition.",
          placeholder: true,
        },
      ],
    },
    gallery: {
      eyebrow: "Amafoto make",
      title: "Amafoto",
      open: "Fungura ifoto",
      close: "Funga amafoto",
      items: [
        {
          src: "/rutagandavalentin.jpeg",
          alt: "Ifoto ya Rutaganda Jean Valentin",
          caption: "Ifoto yanjye",
        },
        {
          src: "/Pickovo.JPG",
          alt: "Ifoto y'umushinga Pickovo",
          caption: "Umushinga Pickovo",
        },
        {
          src: "/minetech.JPG",
          alt: "Ifoto y'umushinga MineTech",
          caption: "Umushinga MineTech",
        },
        {
          src: "https://picsum.photos/800/1000?random=21",
          alt: "Ifoto y'agateganyo",
          caption: "Ifoto y'agateganyo",
          placeholder: true,
        },
      ],
    },
    contact: {
      title: "Twandikire",
      intro: "Niba ufite igitekerezo, akazi cyangwa project ushaka ko dukorana, unyoherereze ubutumwa.",
      formTitle: "Ohereza ubutumwa",
      fullName: "Amazina yawe",
      email: "Imeyili",
      subject: "Umutwe",
      message: "Ubutumwa",
      submit: "Ohereza",
      sending: "Birimo koherezwa...",
      success: "Ubutumwa bwoherejwe neza.",
      missingEndpoint:
        "Kohereza ntibyakunze. Niba ari ubwa mbere ukoresheje FormSubmit, fungura email y'activation yaje muri Gmail yawe maze wemeze form.",
      invalidName: "Andika amazina yawe yose.",
      invalidEmail: "Andika imeyili iboneye.",
      invalidMessage: "Andika ubutumwa nibura bufite inyuguti 20.",
      contactInfo: "Aho wanyandikira",
      phoneLabel: "Telefone",
      emailLabel: "Imeyili",
    },
    footer: {
      location: "Kigali, Rwanda",
      rights: "Uburenganzira bwose bwihariwe nyirabyo.",
      social: "Imbuga nkoranyambaga",
      placeholderNote: "Hari links z'agateganyo zigomba gusimbuzwa iza nyazo.",
    },
  },
};
