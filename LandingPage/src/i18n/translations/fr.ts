import type { Messages } from "../types"

// French dictionary — formal "vous", "PME" for SMEs.
// `satisfies Messages` makes `npm run typecheck` fail on any missing or extra key.
export const fr = {
  meta: {
    home: {
      title: "ORBYTH | Your Unfair Advantage",
      description:
        "ORBYTH conçoit et gère des automatisations IA qui prennent en charge les tâches répétitives des PME. Regagnez des heures chaque semaine et empêchez les erreurs d'atteindre vos clients.",
    },
    about: {
      title: "À propos d'ORBYTH nous construisons et gérons vos automatisations",
      description:
        "ORBYTH est une société anversoise d'automatisation IA pour les PME de tous les secteurs. Nous concevons les automatisations, les intégrons dans votre entreprise et les maintenons en fonctionnement.",
    },
    contact: {
      title: "Contactez ORBYTH planifiez un audit gratuit",
      description:
        "Dites-nous ce qui dévore le temps de votre équipe. Planifiez un audit d'automatisation gratuit ou réservez un appel de 30 minutes avec ORBYTH.",
    },
    services: {
      administratie: {
        title: "Automatisation des flux administratifs | ORBYTH",
        description:
          "ORBYTH automatise approbations, bons de commande et documents d'onboarding pour les PME du transport et de la logistique, acheminés, complétés et classés sans étape manuelle.",
      },
      data: {
        title: "Saisie & synchronisation de données | ORBYTH",
        description:
          "ORBYTH connecte votre CRM, ERP, WMS et tableurs pour que les données soient saisies une fois et restent correctes partout, pour les PME du transport et de la logistique.",
      },
      followUps: {
        title: "Suivi client & communication | ORBYTH",
        description:
          "ORBYTH automatise la relance de devis, la confirmation de rendez-vous et le tri de la boîte mail pour qu'aucun client n'attende, pour les PME du transport et de la logistique.",
      },
      reporting: {
        title: "Automatisation des rapports & documents | ORBYTH",
        description:
          "ORBYTH construit tableaux de bord, rapports et documents directement à partir de vos systèmes en temps réel, toujours à jour, pour les PME du transport et de la logistique.",
      },
      finance: {
        title: "Automatisation de la facturation | ORBYTH",
        description:
          "ORBYTH capture, rapproche et comptabilise les factures entrantes et envoie et relance les sortantes automatiquement, pour les PME du transport et de la logistique.",
      },
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
    backToTop: "Retour en haut",
    backToHome: "Retour à l'accueil",
  },

  home: {
    hero: {
      kicker: "Automatisation IA pour PME",
      title: "Nous concevons les systèmes sur lesquels repose réellement votre exploitation",
      subline:
        "ORBYTH est la couche qui relie votre TMS, votre ERP et votre WMS. Votre équipe regagne des heures chaque semaine, et les erreurs n'atteignent plus vos clients.",
      ctaPrimary: "Planifiez un audit d'automatisation gratuit",
      ctaSecondary: "Notre méthode",
      diagramTasks: ["Factures", "Boîte mail", "Saisie de données", "Rapports", "Planification"],
      diagramDescriptions: [
        "Problème: Les factures arrivent dans des formats variés, et les tarifs ne correspondent pas toujours aux accords conclus. Les vérifier prend du temps, et les erreurs ne sont souvent découvertes qu'après paiement.\nSolution: Extraction automatique des données et rapprochement avec vos tarifs convenus, directement relié à vos systèmes.\nRésultat: Moins de vérifications manuelles, moins de pertes financières, une vue plus claire.",
        "Problème: Tous les e-mails ne sont pas aussi urgents. Mais dans une boîte de réception chargée où réservations, PODs et questions clients se mélangent, tout se ressemble tant qu'on ne l'a pas ouvert. Tout doit être lu et identifié manuellement avant suivi ou ressaisie dans vos systèmes.\nSolution: Nous évaluons et acheminons automatiquement les e-mails entrants vers le bon endroit, en priorisant les cas urgents.\nRésultat: Moins de saisie manuelle, moins d'e-mails manqués ou retardés, une vue plus rapide de ce qui demande une action.",
        "Problème: Les données des bons de commande, documents de livraison et e-mails sont souvent ressaisies manuellement trois fois, dans trois systèmes différents, un temps qui pourrait être mieux utilisé ailleurs.\nSolution: Nous extrayons automatiquement ces données et les injectons directement dans vos systèmes. Saisies une fois, parfaitement correctes partout.\nRésultat: Moins de temps passé à saisir, moins d'erreurs, des données cohérentes dans tous vos systèmes.",
        "Problème: Les rapports sont souvent compilés manuellement dans Excel à partir de chiffres issus de votre TMS, ERP et WMS. Le temps que le rapport soit prêt, les chiffres sont généralement déjà dépassés.\nSolution: Nous faisons en sorte que les rapports soient construits directement à partir des données système en temps réel, sans passer par des exports obsolètes.\nRésultat: Des rapports qui se mettent à jour eux-mêmes, aucun travail manuel.",
        "Problème: Les trajets et rendez-vous sont généralement planifiés manuellement en fonction des disponibilités, des chauffeurs et des créneaux horaires. Un seul créneau modifié signifie qu'il faut appeler, envoyer un e-mail et replanifier, tout en gérant le reste de la journée.\nSolution: Nous faisons en sorte que les changements de planning circulent automatiquement et instantanément vers tous ceux qui en ont besoin.\nRésultat: Moins d'allers-retours, moins d'erreurs de planification, une adaptation plus rapide aux changements.",
      ],
      diagramLabel:
        "Diagramme : les tâches récurrentes factures, boîte mail, saisie de données, rapports et planification gravitent autour d'un noyau automatisé.",
    },

    proof: {
      builtOn: "Construit sur des plateformes que vous connaissez déjà",
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
      readMore: "En savoir plus",
      items: [
        {
          label: "Admin",
          title: "Flux administratifs",
          body: "Approbations, bons de commande et documents d'onboarding, acheminés, complétés et classés sans la moindre étape manuelle.",
          examples: ["Bons de commande", "Chaînes d'approbation", "Onboarding des collaborateurs"],
        },
        {
          label: "Données",
          title: "Saisie & synchronisation de données",
          body: "Une seule source de vérité. Nous connectons votre CRM, votre ERP et vos tableurs pour que les données circulent d'elles-mêmes, avec précision, instantanément, dans les deux sens.",
          examples: ["Synchronisation CRM–ERP", "Traitement des commandes", "Entretien des données de référence"],
        },
        {
          label: "Clients",
          title: "Suivi client & communication",
          body: "Devis relancés, rendez-vous confirmés, questions traitées, vos clients reçoivent une réponse immédiate, à chaque fois.",
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
          body: "Les factures entrantes sont capturées, rapprochées et comptabilisées automatiquement, et les sortantes envoyées et relancées sans que personne ne touche un tableur.",
          examples: ["Capture de factures", "Rappels de paiement", "Traitement des notes de frais"],
        },
      ],
    },

    process: {
      kicker: "Processus",
      title: "De l'audit au système opérationnel en quelques semaines",
      standfirst: "Un parcours fixe avec un livrable à chaque étape, vous savez toujours où vous en êtes.",
      steps: [
        {
          title: "Audit",
          body: "Nous cartographions vos tâches répétitives et chiffrons ce que chacune vous coûte.",
          deliverable: "Livrable: une feuille de route d'automatisation priorisée.",
        },
        {
          title: "Conception",
          body: "Nous concevons le flux de travail autour de la façon dont votre équipe travaille réellement, et non l'inverse.",
          deliverable: "Livrable: un plan validé avec un périmètre fixe.",
        },
        {
          title: "Construction",
          body: "Nous construisons l'automatisation et l'intégrons aux outils que vous utilisez déjà.",
          deliverable: "Livrable: un système testé, en service dans votre environnement.",
        },
        {
          title: "Exploitation & amélioration",
          body: "Nous surveillons, entretenons et améliorons chaque automatisation que nous livrons. Vous obtenez les résultats; nous faisons tourner le moteur.",
          deliverable: "Livrable: des rapports de performance mensuels.",
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
            "Le coût dépend de la complexité du processus et des systèmes impliqués. Chaque automatisation ayant ses propres exigences, la tarification est établie par projet après l'audit.",
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

  serviceDetails: {
    // Eyebrows de section partagés (identiques sur chaque page de détail service).
    recognizeKicker: "Vous reconnaissez ?",
    solutionKicker: "Ce que nous faisons",
    approachKicker: "Notre approche",
    items: {
      administratie: {
        label: "Admin",
        title: "Flux administratifs",
        pitch:
          "La paperasse qui fait tourner votre exploitation, traitée de bout en bout, sans que personne ne coure après une signature ou ne ressaisisse un formulaire.",
        recognize: {
          title: "L'administratif qui n'est jamais tout à fait terminé",
          items: [
            "Les bons de commande attendent une signature pendant des jours parce que la bonne personne est sur la route.",
            "Les mêmes détails de commande sont ressaisis dans trois systèmes différents.",
            "Intégrer un nouveau chauffeur, c'est un dossier de formulaires que quelqu'un remplit à la main.",
            "Les approbations vivent dans des fils d'e-mails, et personne ne sait vraiment ce qui a été validé.",
          ],
        },
        solution: {
          title: "Une paperasse qui s'achemine et se classe toute seule",
          paragraphs: [
            "Nous cartographions chaque flux administratif, du bon de commande à l'onboarding, et le reconstruisons en automatisation. Les documents sont créés, préremplis avec les données que vous détenez déjà, et envoyés automatiquement à la bonne personne pour approbation.",
            "Une fois validé, tout est classé au bon endroit et enregistré dans vos systèmes. Aucune ressaisie, aucun formulaire perdu, aucune incertitude sur l'endroit où une approbation s'est bloquée.",
          ],
        },
        approach: {
          title: "De la trace papier au flux opérationnel",
          steps: [
            {
              title: "Nous cartographions le flux",
              body: "Nous suivons un processus administratif de bout en bout et notons chaque formulaire, transfert et signature qu'il implique.",
            },
            {
              title: "Nous construisons et connectons",
              body: "Nous le reconstruisons en automatisation et le connectons aux outils que vous utilisez déjà, testé sur de vrais documents.",
            },
            {
              title: "Nous exploitons et affinons",
              body: "Nous la maintenons en service, gérons les exceptions et l'ajustons à mesure que vos processus évoluent.",
            },
          ],
        },
        cta: {
          title: "Curieux de savoir ce que nous automatiserions en premier ?",
          body: "Réservez un court appel découverte et nous passerons en revue votre administratif, aucune préparation nécessaire.",
        },
      },
      data: {
        label: "Données",
        title: "Saisie & synchronisation de données",
        pitch:
          "Un chiffre, une adresse, une commande, saisis une seule fois et corrects dans chaque système, qui circulent d'eux-mêmes au lieu d'être ressaisis.",
        recognize: {
          title: "Quand vos systèmes se contredisent",
          items: [
            "La même commande est saisie dans votre TMS, votre ERP et un tableur, trois fois, trois occasions de se tromper.",
            "L'adresse d'un client est correcte dans un système et obsolète dans un autre.",
            "Quelqu'un passe la matinée à copier des données au lieu de faire son vrai travail.",
            "Vous n'êtes jamais tout à fait sûr du système qui contient le bon chiffre.",
          ],
        },
        solution: {
          title: "Une seule source de vérité, toujours synchronisée",
          paragraphs: [
            "Nous connectons votre CRM, votre ERP, votre WMS et vos tableurs pour que les données circulent automatiquement entre eux. Saisissez une commande une fois et elle apparaît, correctement, partout où elle est nécessaire, dans les deux sens.",
            "Des règles de validation interceptent les erreurs avant qu'elles ne se propagent, pour que chaque système présente la même image exacte. Votre équipe cesse de copier les données et commence à s'y fier.",
          ],
        },
        approach: {
          title: "De l'éparpillé au synchronisé",
          steps: [
            {
              title: "Nous cartographions vos données",
              body: "Nous établissons où réside chaque donnée aujourd'hui et où elle doit circuler.",
            },
            {
              title: "Nous connectons les systèmes",
              body: "Nous construisons les liens entre vos outils, avec validation, et les testons sur de vrais enregistrements.",
            },
            {
              title: "Nous gardons tout propre",
              body: "Nous surveillons la synchronisation, signalons toute anomalie et maintenons vos données exactes à mesure que vous grandissez.",
            },
          ],
        },
        cta: {
          title: "Quels systèmes devraient communiquer en premier ?",
          body: "Réservez un court appel découverte et nous verrons où vos données se bloquent, aucune préparation nécessaire.",
        },
      },
      followUps: {
        label: "Clients",
        title: "Suivi client & communication",
        pitch:
          "Chaque devis relancé, chaque rendez-vous confirmé, chaque question traitée, pour qu'aucun client n'attende et que rien ne passe entre les mailles.",
        recognize: {
          title: "Les relances qui passent à la trappe",
          items: [
            "Un devis part et personne ne pense à le relancer une semaine plus tard.",
            "Les clients appellent pour savoir où en est leur livraison parce que personne ne les a informés.",
            "Les rappels de rendez-vous dépendent de quelqu'un qui trouve le temps de les envoyer.",
            "La boîte de réception est pleine et les questions urgentes sont enfouies parmi les questions de routine.",
          ],
        },
        solution: {
          title: "Chaque client traité, à temps",
          paragraphs: [
            "Nous automatisons les relances qui gardent vos clients satisfaits : devis relancés à temps, rendez-vous confirmés, mises à jour de livraison envoyées dès que le statut change. Vos clients ont de vos nouvelles avant même de devoir les demander.",
            "Les questions entrantes sont lues, triées et acheminées vers la bonne personne, les urgentes d'abord. Plus rien ne traîne dans une boîte de réception saturée, et votre équipe consacre son temps aux échanges qui exigent un humain.",
          ],
        },
        approach: {
          title: "Du réactif au fiable",
          steps: [
            {
              title: "Nous cartographions les points de contact",
              body: "Nous listons chaque moment où un client attend de vos nouvelles, et où ces moments sont manqués aujourd'hui.",
            },
            {
              title: "Nous automatisons le suivi",
              body: "Nous construisons les rappels, confirmations et le tri, connectés à votre boîte mail et vos systèmes.",
            },
            {
              title: "Nous gardons l'humain",
              body: "Nous ajustons le ton et les règles au fil du temps, pour que l'automatisation gère la routine et votre équipe le reste.",
            },
          ],
        },
        cta: {
          title: "Où vos clients attendent-ils ?",
          body: "Réservez un court appel découverte et nous ciblerons les relances à automatiser en premier, aucune préparation nécessaire.",
        },
      },
      reporting: {
        label: "Reporting",
        title: "Rapports & documents",
        pitch:
          "Le rapport hebdomadaire, le tableau de bord de gestion, le document de conformité, construits à partir de données en temps réel et prêts avant même que vous ne les demandiez.",
        recognize: {
          title: "Des rapports déjà dépassés à leur arrivée",
          items: [
            "Quelqu'un passe chaque vendredi après-midi à saisir des chiffres dans Excel à la main.",
            "Le temps que le rapport soit prêt, les chiffres ont déjà changé.",
            "Différents rapports affichent des chiffres différents parce qu'ils ont été construits à partir d'exports différents.",
            "Générer un devis ou un document de conformité, c'est copier-coller depuis trois endroits.",
          ],
        },
        solution: {
          title: "Des rapports et documents qui se construisent tout seuls",
          paragraphs: [
            "Nous relions vos rapports et documents directement à vos systèmes en temps réel. Tableaux de bord, synthèses hebdomadaires, devis et dossiers de conformité sont générés à partir de données actuelles, selon le calendrier, dans le format que vous utilisez déjà.",
            "Les chiffres sont toujours à jour et toujours cohérents, parce qu'ils proviennent d'une seule source. Votre équipe cesse d'assembler des rapports et commence à agir dessus.",
          ],
        },
        approach: {
          title: "De l'export manuel au rapport en direct",
          steps: [
            {
              title: "Nous cartographions vos rapports",
              body: "Nous examinons les rapports et documents que vous produisez aujourd'hui et d'où viennent leurs chiffres.",
            },
            {
              title: "Nous connectons et générons",
              body: "Nous les relions à vos données en temps réel et automatisons la génération, selon votre calendrier et votre format.",
            },
            {
              title: "Nous les gardons justes",
              body: "Nous surveillons les résultats, ajustons quand vos besoins changent et ajoutons de nouveaux rapports au fil du temps.",
            },
          ],
        },
        cta: {
          title: "Quel rapport dévore votre semaine ?",
          body: "Réservez un court appel découverte et nous trouverons le rapport à automatiser en premier, aucune préparation nécessaire.",
        },
      },
      finance: {
        label: "Finance",
        title: "Facturation",
        pitch:
          "Factures entrantes capturées et comptabilisées, factures sortantes envoyées et relancées, sans que personne ne touche un tableur.",
        recognize: {
          title: "La facturation qui ne s'arrête jamais",
          items: [
            "Les factures entrantes arrivent dans tous les formats et quelqu'un vérifie chacune à la main.",
            "Les tarifs d'une facture ne correspondent pas à l'accord, et on ne s'en aperçoit qu'après paiement.",
            "Les factures sortantes partent en retard parce qu'il fallait d'abord rassembler les chiffres.",
            "Relancer les factures impayées dépend de quelqu'un qui y pense.",
          ],
        },
        solution: {
          title: "Des factures qui se gèrent toutes seules",
          paragraphs: [
            "Les factures entrantes sont capturées, lues et rapprochées automatiquement de vos tarifs et commandes convenus, puis comptabilisées dans votre système. Les écarts sont signalés avant qu'ils ne vous coûtent, pas après.",
            "Les factures sortantes sont générées à partir de données en temps réel et envoyées à temps, et les impayées sont relancées selon un calendrier que vous définissez. Votre travail financier ne dépend plus de tableurs ni de la mémoire de quelqu'un.",
          ],
        },
        approach: {
          title: "De la boîte mail à la comptabilisation",
          steps: [
            {
              title: "Nous cartographions le flux",
              body: "Nous suivons vos factures entrantes et sortantes, et où se situent les contrôles et les retards aujourd'hui.",
            },
            {
              title: "Nous automatisons capture et rapprochement",
              body: "Nous construisons la capture, le rapprochement et la génération, connectés à votre comptabilité et vos systèmes.",
            },
            {
              title: "Nous surveillons les exceptions",
              body: "Nous maintenons le tout en service, faisons remonter les écarts qui exigent un humain et affinons les règles au fil du temps.",
            },
          ],
        },
        cta: {
          title: "Combien d'heures la facturation vous coûte-t-elle ?",
          body: "Réservez un court appel découverte et nous cartographierons où votre facturation perd du temps, aucune préparation nécessaire.",
        },
      },
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
          body: "Pas en fonctionnalités livrées ni en licences vendues. Une automatisation qui ne rend pas de temps est un échec, donc nous ne la livrons pas.",
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
      body: "Réservez un appel découverte, aucune préparation nécessaire, aucun engagement.",
      button: "Réservez un appel découverte",
    },
    form: {
      title: "Parlez-nous de votre situation",
      name: "Nom",
      company: "Entreprise",
      email: "E-mail",
      message: "Qu'est-ce qui ralentit votre équipe maintenant?",
      submit: "Envoyer le message",
      submitting: "Envoi…",
      successTitle: "Message bien reçu.",
      successBody:
        "Nous revenons vers vous sous un jour ouvrable. Vous voulez aller plus vite ? Réservez directement un appel découverte.",
      successCta: "Réservez un appel découverte",
      error: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou écrivez-nous directement à info@orbyth.com.",
      subject: "Nouvelle demande via le site, ORBYTH",
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