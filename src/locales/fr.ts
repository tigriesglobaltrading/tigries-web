export type FeatureVisual = "profile" | "chat" | "input";

export type Locale = {
  meta: { title: string };
  brand: { name: string; legalName: string; mark: string; homeAria: string };
  nav: {
    announcement: string;
    links: { label: string; href: string }[];
    getStarted: string;
    signIn: string;
    open: string;
    close: string;
  };
  hero: { title: string; subtitle: string; cta: string; commandPlaceholder: string; cards: string[] };
  logos: string[];
  proof: {
    stats: { value: string; label: string }[];
    quote: string;
    authorName: string;
    authorRole: string;
    authorInitials: string;
  };
  product: {
    label: string;
    title: string;
    subtitle: string;
    cta: string;
    pills: string[];
    cardLabel: string;
    cardText: string;
  };
  features: {
    label: string;
    title: string;
    mesh: string;
    visual: FeatureVisual;
    points: { title: string; body: string }[];
    visualTitle: string;
    visualMeta: string;
    visualItems: string[];
  }[];
  onboarding: {
    title: string;
    subtitle: string;
    cta: string;
    steps: { number: string; title: string; body: string }[];
    mockup: {
      eyebrow: string;
      title: string;
      status: string;
      cards: string[];
      codeLabel: string;
      code: string;
    };
  };
  benefits: {
    title: string;
    subtitle: string;
    cards: { title: string; body: string }[];
  };
  testimonials: { quote: string; name: string; role: string; initials: string }[];
  carousel: { previous: string; next: string };
  faq: { title: string; items: { question: string; answer: string }[] };
  finalCta: { title: string; cta: string };
  requestDemo: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formTitle: string;
    fields: {
      name: string;
      company: string;
      email: string;
      phone: string;
      trade: string;
      message: string;
    };
    submit: string;
    asideTitle: string;
    asideItems: string[];
    backHome: string;
  };
  footer: {
    disclaimer: string;
    columns: { title: string; links: string[] }[];
  };
};

export const fr: Locale = {
  meta: {
    title: "Tigries Global Trading | SaaS BTP",
  },
  brand: {
    name: "Tigries",
    legalName: "Tigries Global Trading",
    mark: "T",
    homeAria: "Accueil Tigries",
  },
  nav: {
    announcement: "100.000 EUR recoltes pour accelerer la plateforme SaaS BTP. Decouvrir l'offre",
    links: [
      { label: "Plateforme", href: "#product" },
      { label: "Modules", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    getStarted: "Demander une demo",
    signIn: "Connexion",
    open: "Ouvrir la navigation",
    close: "Fermer la navigation",
  },
  hero: {
    title: "Pilotez toute votre entreprise BTP depuis un seul dashboard",
    subtitle:
      "Tigries met en place une plateforme SaaS complete pour gerer clients, chantiers, devis, factures, equipes, planning, materiel, stock, taches et rapports.",
    cta: "Voir la demo",
    commandPlaceholder: "Rechercher un chantier, une facture, un outil ou une alerte stock...",
    cards: ["Chantiers actifs", "Factures impayees", "Materiel disponible"],
  },
  logos: ["Renovation", "HVAC", "Electricite", "Plomberie", "Terrassement", "Maintenance"],
  proof: {
    stats: [
      { value: "12", label: "modules pour centraliser la gestion operationnelle" },
      { value: "1", label: "dashboard professionnel adapte a vos priorites metier" },
      { value: "0", label: "fichiers disperses entre Excel, WhatsApp, papier et appels" },
    ],
    quote:
      "Tigries ne livre pas seulement un logiciel. L'equipe configure un systeme complet, adapte a nos chantiers, nos equipes, notre materiel et notre facturation.",
    authorName: "Client BTP",
    authorRole: "Direction operationnelle",
    authorInitials: "CB",
  },
  product: {
    label: "Plateforme SaaS BTP",
    title: "Votre gestion operationnelle en action",
    subtitle:
      "Un espace societe pret a l'emploi, configure avec vos roles, vos statuts, vos documents, vos donnees et les modules utiles a votre activite.",
    cta: "Demander une presentation",
    pills: ["Configuration societe", "Import donnees", "Dashboard personnalise"],
    cardLabel: "Tracking live",
    cardText: "Suivez positions materiel, statuts de flotte, trajets et dernieres mises a jour en temps reel depuis une carte claire.",
  },
  features: [
    {
      label: "Gestion chantier",
      title: "Centralisez clients, chantiers, devis et factures",
      mesh: "mesh-blue",
      visual: "profile",
      points: [
        {
          title: "Chantiers structures",
          body: "Suivez client, adresse, dates, budget, progression, equipe assignee, materiel, taches, devis et factures.",
        },
        {
          title: "Devis et factures",
          body: "Creez vos documents avec TVA, numerotation, logo, conditions, statuts de paiement et conversion devis vers facture.",
        },
        {
          title: "Historique complet",
          body: "Gardez une trace des clients, prospects, chantiers, notes internes, devis emis et factures liees.",
        },
      ],
      visualTitle: "Inventaire materiel",
      visualMeta: "Machines | outils | vehicules | disponibilite",
      visualItems: ["Materiel disponible", "Statut maintenance", "Depot associe"],
    },
    {
      label: "Terrain et ressources",
      title: "Organisez equipes, planning, materiel et stock",
      mesh: "mesh-green",
      visual: "chat",
      points: [
        {
          title: "Planning operationnel",
          body: "Planifiez jour, semaine ou mois avec affectation employe, reservation equipement, livraisons et maintenance.",
        },
        {
          title: "Materiel reutilisable",
          body: "Suivez outils, machines, vehicules, depots, conditions, assignations, maintenance et localisation manuelle.",
        },
        {
          title: "Stock consommable",
          body: "Gerez quantites, unites, seuils minimums, fournisseurs, mouvements, alertes stock faible et consommation par chantier.",
        },
      ],
      visualTitle: "Alerte stock faible",
      visualMeta: "Cables electriques | depot principal",
      visualItems: ["Materiel reserve", "Employe assigne", "Conflit detecte"],
    },
    {
      label: "Personnalisation",
      title: "Adaptez la plateforme a vos processus metier",
      mesh: "mesh-orange",
      visual: "input",
      points: [
        {
          title: "Modules au choix",
          body: "Activez uniquement les modules utiles : dashboard, clients, chantiers, team, planning, materiel, stock, taches, rapports ou settings.",
        },
        {
          title: "Roles et permissions",
          body: "Configurez admin, manager, employee, accountant ou warehouse manager avec acces par module et droits de modification.",
        },
        {
          title: "Documents et statuts",
          body: "Personnalisez logos, modeles, TVA, prefixes, numerotation, statuts clients, chantiers, materiel, stock et taches.",
        },
      ],
      visualTitle: "Parametres societe",
      visualMeta: "TVA | IBAN | roles | numerotation",
      visualItems: ["Logo societe", "Permissions", "Statuts metier"],
    },
  ],
  onboarding: {
    title: "Une mise en place complete, pas un simple acces logiciel",
    subtitle:
      "Nous cadrons votre fonctionnement, configurons votre espace, importons vos donnees et formons vos equipes pour que la plateforme soit exploitable des le depart.",
    cta: "Demander un cadrage",
    steps: [
      {
        number: "1.",
        title: "Audit et cadrage",
        body: "Nous analysons vos processus, vos problemes, les modules utiles, les roles et les donnees a preparer.",
      },
      {
        number: "2.",
        title: "Configuration personnalisee",
        body: "Nous creons l'espace societe, configurons utilisateurs, TVA, numerotation, statuts, documents, logo et dashboard.",
      },
      {
        number: "3.",
        title: "Import, formation et support",
        body: "Nous importons vos donnees depuis Excel, CSV ou anciens outils, puis formons administrateurs, managers et equipes terrain.",
      },
    ],
    mockup: {
      eyebrow: "Espace societe",
      title: "Configuration & donnees",
      status: "Pret",
      cards: ["Clients et prospects", "Materiel et vehicules", "Stock et fournisseurs"],
      codeLabel: "Options premium",
      code: "API keys\nTracking GPS\nQR codes materiel\nIntegrations comptables",
    },
  },
  benefits: {
    title: "Digitalisez le BTP sans multiplier les outils",
    subtitle:
      "Remplacez les fichiers Excel, WhatsApp, papiers, appels et logiciels disperses par une plateforme unique pour vos operations.",
    cards: [
      {
        title: "Pret a l'emploi",
        body: "Setup complet, configuration societe, modules, documents, dashboard, hebergement, sauvegardes et mises a jour.",
      },
      {
        title: "Adapte a votre metier",
        body: "Construction, renovation, electricite, plomberie, HVAC, terrassement, voirie ou maintenance batiment.",
      },
      {
        title: "Evolutif",
        body: "Ajoutez API, webhooks, tracking GPS, QR codes materiel, portail client, integrations comptables ou application terrain.",
      },
    ],
  },
  testimonials: [
    {
      quote:
        "Nous ne proposons pas seulement un logiciel. Nous mettons en place un systeme complet de gestion pour les entreprises du BTP.",
      name: "Tigries Global Trading",
      role: "Editeur SaaS BTP",
      initials: "TG",
    },
    {
      quote:
        "Une plateforme SaaS tout-en-un pour piloter vos chantiers, equipes, factures, stocks et equipements depuis un seul dashboard.",
      name: "Tigries Global Trading",
      role: "Solution operationnelle",
      initials: "TG",
    },
  ],
  carousel: {
    previous: "Temoignage precedent",
    next: "Temoignage suivant",
  },
  faq: {
    title: "Questions frequentes",
    items: [
      {
        question: "Quels modules sont inclus ?",
        answer:
          "La plateforme couvre dashboard, clients, chantiers, devis, factures, equipe, planning, materiel, stock, taches, rapports et parametres societe.",
      },
      {
        question: "La plateforme est-elle personnalisee ?",
        answer:
          "Oui. Les modules, roles, permissions, statuts, documents, TVA, numerotation, widgets du dashboard et champs metier peuvent etre adaptes.",
      },
      {
        question: "Pouvez-vous importer nos donnees existantes ?",
        answer:
          "Oui. Nous pouvons accompagner l'import depuis Excel, CSV, anciens logiciels, listes clients, listes materiel, listes stock, devis et factures.",
      },
      {
        question: "Quels services sont inclus dans l'abonnement ?",
        answer:
          "L'abonnement inclut hebergement, sauvegardes, mises a jour, corrections bugs, support utilisateur, securite et amelioration continue.",
      },
      {
        question: "Existe-t-il des options premium ?",
        answer:
          "Oui. API keys, tracking GPS avance, QR codes materiel, webhooks, integrations comptables, portail client et application mobile terrain peuvent etre ajoutes.",
      },
      {
        question: "Quel est le positionnement commercial ?",
        answer:
          "L'offre Pro recommandee prevoit un setup complet a 5000 EUR HT et un abonnement a 500 EUR HT par mois, avec engagement conseille de 12 mois.",
      },
    ],
  },
  finalCta: {
    title: "Digitalisez la gestion complete de votre entreprise BTP",
    cta: "Planifier une demo",
  },
  requestDemo: {
    eyebrow: "Demande de demo",
    title: "Parlons de votre organisation BTP",
    subtitle:
      "Partagez quelques informations sur votre entreprise. Nous preparerons une demo adaptee a vos chantiers, equipes, materiel, facturation et donnees existantes.",
    formTitle: "Informations de contact",
    fields: {
      name: "Nom complet",
      company: "Societe",
      email: "Email professionnel",
      phone: "Telephone",
      trade: "Activite principale",
      message: "Votre contexte",
    },
    submit: "Envoyer la demande",
    asideTitle: "Ce que nous cadrons pendant l'appel",
    asideItems: ["Modules utiles", "Donnees a importer", "Roles et permissions", "Devis, factures et TVA", "Planning, materiel et stock"],
    backHome: "Retour au site",
  },
  footer: {
    disclaimer:
      "Tigries Global Trading edite une solution SaaS BTP personnalisable. Les modules, options, tarifs et integrations peuvent varier selon le projet client.",
    columns: [
      { title: "Services", links: ["Portail client", "APIs", "Formation"] },
      { title: "Mentions legales", links: ["Mentions legales", "Imprint"] },
    ],
  },
};
