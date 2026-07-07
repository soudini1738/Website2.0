import type { Messages } from "../types"

// French dictionary — formal "vous", "PME" for SMEs.
// `satisfies Messages` makes `npm run typecheck` fail on any missing or extra key.
export const fr = {
  meta: {
    home: {
      title: "ORBYTH — Automatisation IA pour PME",
      description:
        "ORBYTH conçoit et gère des automatisations IA qui prennent en charge les tâches répétitives des PME — regagnez des heures chaque semaine et empêchez les erreurs d'atteindre vos clients.",
    },
    about: {
      title: "À propos d'ORBYTH — nous construisons et gérons vos automatisations",
      description:
        "ORBYTH est une société anversoise d'automatisation IA pour les PME de tous les secteurs. Nous concevons les automatisations, les intégrons dans votre entreprise et les maintenons en fonctionnement.",
    },
    contact: {
      title: "Contactez ORBYTH — planifiez un audit d'automatisation gratuit",
      description:
        "Dites-nous ce qui dévore le temps de votre équipe. Planifiez un audit d'automatisation gratuit ou réservez un appel de 30 minutes avec ORBYTH.",
    },
  },

  nav: {
    home: "Accueil",
    about: "À propos",
    contact: "Contact",
    cta: "Réservez un appel",
    langLabel: "Langue",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    skipToContent: "Aller au contenu",
  },

  home: {
    hero: {
      kicker: "Automatisation IA pour PME",
      title: "Nous installons des systèmes d'IA qui résolvent les problèmes des entreprises et créent un effet de levier.",
      subline:
        "ORBYTH conçoit et gère des systèmes d'IA qui résolvent les problèmes des entreprises et créent un effet de levier. Votre équipe regagne des heures chaque semaine, et les erreurs n'atteignent plus vos clients.",
      ctaPrimary: "Planifiez un audit d'automatisation gratuit",
      ctaSecondary: "Notre méthode",
      diagramTasks: ["Factures", "Boîte mail", "Saisie de données", "Rapports", "Planification"],
      diagramLabel:
        "Diagramme : les tâches récurrentes — factures, boîte mail, saisie de données, rapports et planification — gravitent autour d'un noyau automatisé.",
    },

    proof: {
      builtOn: "Construit sur des plateformes que vous connaissez déjà",
      stats: [
        { value: 12, prefix: "", suffix: "+", unit: "h / semaine", label: "récupérées" },
        { value: 92, prefix: "", suffix: "%", unit: "", label: "taux de résolution" },
        { value: 6, prefix: "<", suffix: "", unit: "semaines", label: "avant votre première automatisation en production" },
      ],
    },

    problem: {
      kicker: "Le problème",
      title: "Systématiser ou stagner",
      standfirst:
        "Les grandes entreprises reposent sur une architecture solide. Sans les bons systèmes, le travail manuel vous coûte des heures, introduit des erreurs et limite votre croissance.",
      items: [
        {
          title: "Des heures perdues",
          body: "Vous perdez d'innombrables heures à simplement déplacer des données entre plateformes.",
        },
        {
          title: "Des erreurs",
          body: "Les erreurs manuelles passent souvent inaperçues jusqu'à ce qu'elles cassent un processus plus tard, obligeant votre équipe à s'arrêter, retracer l'erreur et réparer les dégâts.",
        },
        {
          title: "La croissance",
          body: "Gagner plus de clients ne devrait pas noyer votre équipe. Votre entreprise doit pouvoir absorber plus de travail avec l'équipe que vous avez déjà.",
        },
      ],
    },

    services: {
      kicker: "Services",
      title: "Ce que nous automatisons",
      standfirst: "Nous prenons en charge le travail que personne ne devrait encore faire à la main.",
      items: [
        {
          label: "Admin",
          title: "Flux administratifs",
          body: "Approbations, bons de commande et documents d'onboarding — acheminés, complétés et classés sans la moindre étape manuelle.",
          examples: ["Bons de commande", "Chaînes d'approbation", "Onboarding des collaborateurs"],
        },
        {
          label: "Données",
          title: "Saisie & synchronisation de données",
          body: "Une seule source de vérité. Nous connectons votre CRM, votre ERP et vos tableurs pour que les données circulent d'elles-mêmes — avec précision, instantanément, dans les deux sens.",
          examples: ["Synchronisation CRM–ERP", "Traitement des commandes", "Entretien des données de référence"],
        },
        {
          label: "Clients",
          title: "Suivi client & communication",
          body: "Devis relancés, rendez-vous confirmés, questions traitées — vos clients reçoivent une réponse immédiate, à chaque fois.",
          examples: ["Relance de devis", "Rappels de rendez-vous", "Tri de la boîte mail"],
        },
        {
          label: "Reporting",
          title: "Rapports & documents",
          body: "Le rapport hebdomadaire s'écrit tout seul. Tableaux de bord, synthèses et documents générés à partir de données en temps réel, selon le calendrier.",
          examples: ["Rapports de gestion", "Génération de devis", "Documents de conformité"],
        },
        {
          label: "Finance",
          title: "Facturation",
          body: "Les factures entrantes sont capturées, rapprochées et comptabilisées automatiquement — et les sortantes envoyées et relancées sans que personne ne touche un tableur.",
          examples: ["Capture de factures", "Rappels de paiement", "Traitement des notes de frais"],
        },
      ],
    },

    process: {
      kicker: "Processus",
      title: "De l'audit au système opérationnel en quelques semaines",
      standfirst: "Un parcours fixe avec un livrable à chaque étape — vous savez toujours où vous en êtes.",
      steps: [
        {
          title: "Audit",
          body: "Nous cartographions vos tâches répétitives et chiffrons ce que chacune vous coûte.",
          deliverable: "Livrable : une feuille de route d'automatisation priorisée.",
        },
        {
          title: "Conception",
          body: "Nous concevons le flux de travail autour de la façon dont votre équipe travaille réellement — et non l'inverse.",
          deliverable: "Livrable : un plan validé avec un périmètre fixe.",
        },
        {
          title: "Construction",
          body: "Nous construisons l'automatisation et l'intégrons aux outils que vous utilisez déjà.",
          deliverable: "Livrable : un système testé, en service dans votre environnement.",
        },
        {
          title: "Exploitation & amélioration",
          body: "Nous surveillons, entretenons et améliorons chaque automatisation que nous livrons. Vous obtenez les résultats ; nous faisons tourner le moteur.",
          deliverable: "Livrable : des rapports de performance mensuels.",
        },
      ],
    },

    outcomes: {
      kicker: "Le résultat",
      title: "Mesurés en heures, pas en promesses",
      quote: "Nous ne vendons pas de logiciel. Nous vous déchargeons d'une tâche et vous rendons les heures.",
      quoteAttribution: "Le principe ORBYTH",
      items: [
        {
          title: "Concentration",
          body: "Vos spécialistes consacrent leur semaine au travail qui demande du jugement, pas au déplacement de données.",
        },
        {
          title: "Fiabilité",
          body: "Les données arrivent complètes et correctes, dans chaque système, à chaque fois.",
        },
        {
          title: "Échelle",
          body: "Croître ne signifie plus recruter davantage pour l'administratif.",
        },
      ],
    },

    faq: {
      kicker: "FAQ",
      title: "Questions",
      items: [
        {
          question: "Quand verrons-nous des résultats ?",
          answer:
            "La plupart des clients ont leur première automatisation en service dans les six semaines suivant l'audit. L'audit lui-même prend une à deux semaines et vous montre immédiatement où se trouvent les gains les plus importants.",
        },
        {
          question: "Avons-nous besoin de personnel technique ?",
          answer:
            "Non. Nous construisons, hébergeons et entretenons tout. Votre équipe n'a besoin d'aucune connaissance technique, si vous pouvez décrire la tâche, nous pouvons l'automatiser.",
        },
        {
          question: "Combien cela coûte-t-il ?",
          answer:
            "Le coût dépend de la complexité et du nombre de processus à automatiser. Un projet type démarre à quelques milliers d'euros pour une automatisation ciblée, jusqu'à plusieurs dizaines de milliers pour une transformation complète de votre chaîne d'approvisionnement.",
        },
        {
          question: "Qu'advient-il de nos données ?",
          answer:
            "Vos données restent les vôtres. Nous travaillons en conformité avec le RGPD, traitons les données au sein de l'UE dans la mesure du possible et n'utilisons jamais vos données d'entreprise pour entraîner quoi que ce soit.",
        },
        {
          question: "Utilisez-vous nos logiciels actuels ou construisez-vous de nouveaux systèmes ?",
          answer:
            "Les deux. Nous connectons les outils que vous utilisez déjà, et construisons des systèmes sur mesure là où c'est nécessaire.",
        },
        {
          question: "Restez-vous après la livraison ?",
          answer:
            "Oui. Construire le système n'est que la première étape. Nous restons à bord pour le gérer, le mettre à jour et l'améliorer à mesure que votre entreprise grandit.",
        },
      ],
    },
  },

  about: {
    mission: {
      kicker: "À propos d'ORBYTH",
      lines: ["Les machines devraient faire", "le travail répétitif.", "Les humains, la réflexion."],
    },
    positioning: {
      title: "Le partenaire qui construit et gère vos systèmes",
      paragraphs: [
        "Basée à Anvers, ORBYTH conçoit les systèmes sous-jacents des entreprises logistiques. Nous synchronisons vos opérations de transport et d'entreposage. Nous intégrons vos outils pour que votre supply chain absorbe plus de volume sans charge administrative supplémentaire.",
        "Nous ne nous contentons pas de vous livrer un outil en vous souhaitant bonne chance. Nous concevons un système qui connecte votre logistique et restons impliqués pour en assurer la maintenance. Vous vous concentrez sur le transport de vos marchandises ; nous nous occupons du reste.",
      ],
    },
    principles: {
      kicker: "Principes",
      title: "Notre façon de travailler",
      items: [
        {
          title: "La précision plutôt que les promesses",
          body: "Nous chiffrons avant d'automatiser. Chaque proposition indique ce qu'une tâche vous coûte aujourd'hui et ce que l'automatisation vous rapporte.",
        },
        {
          title: "La responsabilité de bout en bout",
          body: "Un seul partenaire, de l'audit à l'exploitation quotidienne. Si quelque chose casse à 7 h du matin, c'est notre problème avant même que vous ne le remarquiez.",
        },
        {
          title: "Mesuré en heures gagnées",
          body: "Pas en fonctionnalités livrées ni en licences vendues. Une automatisation qui ne rend pas de temps est un échec — donc nous ne la livrons pas.",
        },
      ],
    },
    engage: {
      kicker: "Collaboration",
      title: "Comment nous collaborons",
      standfirst: "Les quatre mêmes étapes, pour chaque client, à chaque fois.",
    },
  },

  contact: {
    kicker: "Contact",
    title: "Dites-nous ce qui dévore le temps de votre équipe.",
    promise: "Nous répondons sous un jour ouvrable.",
    channels: {
      email: "info@orbyth.com",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      linkedinLabel: "LinkedIn",
      location: "Anvers, Belgique",
      locationLabel: "Basés à",
    },
    calendly: {
      title: "Vous préférez en parler ?",
      body: "Réservez un appel découverte — aucune préparation nécessaire, aucun engagement.",
      button: "Réservez un appel découverte",
    },
    form: {
      title: "Parlez-nous de votre situation",
      name: "Nom",
      company: "Entreprise",
      email: "E-mail",
      message: "Quel travail répétitif devrait disparaître en premier ?",
      submit: "Envoyer le message",
      submitting: "Envoi…",
      successTitle: "Message bien reçu.",
      successBody:
        "Nous revenons vers vous sous un jour ouvrable. Vous voulez aller plus vite ? Réservez directement un appel découverte.",
      successCta: "Réservez un appel découverte",
      error: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou écrivez-nous directement à info@orbyth.com.",
      subject: "Nouvelle demande via le site — ORBYTH",
    },
    reassurance: [
      { title: "Audit gratuit", body: "La première étape ne vous coûte jamais rien." },
      { title: "Aucune dépendance fournisseur", body: "Chaque système que nous construisons vous appartient." },
      { title: "Conforme au RGPD", body: "Vos données sont traitées au sein de l'UE." },
    ],
  },

  cta: {
    title: "Prêt à travailler sur votre entreprise plutôt que dedans ?",
    body: "Lors d'un audit gratuit, nous ciblons précisément où votre entreprise perd du temps et vous montrons comment le bon système y remédie.",
    button: "Planifiez un audit gratuit",
    secondary: "Ou réservez un appel",
  },

  footer: {
    tagline: "Automatisations IA, conçues et gérées pour les PME.",
    navigate: "Navigation",
    contact: "Contact",
    language: "Langue",
    rights: "Tous droits réservés.",
  },
} satisfies Messages