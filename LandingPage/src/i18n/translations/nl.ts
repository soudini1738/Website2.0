import type { Messages } from "../types"

// Dutch dictionary — formal "u", Flemish vocabulary ("kmo's").
// `satisfies Messages` makes `npm run typecheck` fail on any missing or extra key.
export const nl = {
  meta: {
    home: {
      title: "ORBYTH — AI-automatisering voor kmo's",
      description:
        "ORBYTH ontwerpt en beheert AI-automatiseringen die repetitieve taken overnemen voor kmo's — win elke week uren terug en laat fouten uw klanten niet meer bereiken.",
    },
    about: {
      title: "Over ORBYTH — wij bouwen én runnen uw automatiseringen",
      description:
        "ORBYTH is een Antwerps AI-automatiseringsbureau voor kmo's in elke sector. Wij bouwen automatiseringen, integreren ze in uw bedrijf en houden ze draaiende.",
    },
    contact: {
      title: "Contacteer ORBYTH — plan een gratis automatiseringsaudit",
      description:
        "Vertel ons wat de tijd van uw team opslorpt. Plan een gratis automatiseringsaudit of boek een intro-gesprek van 30 minuten met ORBYTH.",
    },
  },

  nav: {
    home: "Home",
    about: "Over ons",
    contact: "Contact",
    cta: "Boek uw gesprek",
    langLabel: "Taal",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    skipToContent: "Naar inhoud",
  },

  home: {
    hero: {
      kicker: "AI-automatisering voor kmo's",
      title: "Wij installeren AI-systemen die problemen oplossen voor bedrijven en een hefboomeffect creëren.",
      subline:
        "ORBYTH ontwerpt en beheert AI-systemen die problemen oplossen voor bedrijven en een hefboomeffect creëren. Uw team wint elke week uren terug, en fouten bereiken uw klanten niet meer.",
      ctaPrimary: "Plan een gratis automatiseringsaudit",
      ctaSecondary: "Zo werken we",
      diagramTasks: ["Facturen", "Mailbox", "Data-invoer", "Rapporten", "Planning"],
      diagramLabel:
        "Diagram: terugkerende taken — facturen, mailbox, data-invoer, rapporten en planning — cirkelen rond één geautomatiseerde kern.",
    },

    proof: {
      builtOn: "Gebouwd op platformen die u al vertrouwt",
      stats: [
        { value: 12, prefix: "", suffix: "+", unit: "u / week", label: "teruggewonnen" },
        { value: 92, prefix: "", suffix: "%", unit: "", label: "oplossingsgraad" },
        { value: 6, prefix: "<", suffix: "", unit: "weken", label: "tot uw eerste automatisering in productie" },
      ],
    },

    problem: {
      kicker: "Het probleem",
      title: "Systematiseer of stagneer",
      standfirst:
        "Sterke bedrijven zijn gebouwd op een solide architectuur. Zonder de juiste systemen kost handmatig werk u uren, veroorzaakt het fouten en remt het uw groei.",
      items: [
        {
          title: "Verloren uren",
          body: "U verliest ontelbare uren aan het louter verplaatsen van data tussen platformen.",
        },
        {
          title: "Fouten",
          body: "Handmatige fouten blijven vaak onopgemerkt tot ze later een proces breken — en uw team moet stoppen, de fout traceren en de rommel opruimen.",
        },
        {
          title: "Groei",
          body: "Meer klanten binnenhalen mag niet betekenen dat uw team verzuipt. Uw bedrijf moet meer werk aankunnen met het team dat u al hebt.",
        },
      ],
    },

    services: {
      kicker: "Diensten",
      title: "Wat we automatiseren",
      standfirst: "Wij nemen het werk over dat niemand nog met de hand zou moeten doen.",
      items: [
        {
          label: "Admin",
          title: "Administratieve workflows",
          body: "Goedkeuringen, bestelbonnen en onboardingdocumenten — doorgestuurd, ingevuld en geklasseerd zonder één handmatige stap.",
          examples: ["Bestelbonnen", "Goedkeuringsflows", "Onboarding van medewerkers"],
        },
        {
          label: "Data",
          title: "Data-invoer & synchronisatie",
          body: "Eén bron van waarheid. Wij verbinden uw CRM, ERP en spreadsheets zodat data zichzelf verplaatst — correct, meteen, in beide richtingen.",
          examples: ["CRM–ERP-synchronisatie", "Orderverwerking", "Onderhoud van stamdata"],
        },
        {
          label: "Klanten",
          title: "Klantopvolging & communicatie",
          body: "Offertes opgevolgd, afspraken bevestigd, vragen beantwoord — uw klanten krijgen meteen een antwoord, elke keer opnieuw.",
          examples: ["Offerteopvolging", "Afspraakherinneringen", "Inbox-triage"],
        },
        {
          label: "Rapportage",
          title: "Rapportage & documenten",
          body: "Het weekrapport schrijft zichzelf. Dashboards, samenvattingen en documenten, gegenereerd uit live data, volgens schema.",
          examples: ["Managementrapporten", "Offertegeneratie", "Compliancedocumenten"],
        },
        {
          label: "Financiën",
          title: "Facturatie",
          body: "Inkomende facturen automatisch ingelezen, gematcht en geboekt — en uitgaande facturen verstuurd en opgevolgd zonder dat iemand een spreadsheet aanraakt.",
          examples: ["Factuurinlezing", "Betalingsherinneringen", "Onkostenverwerking"],
        },
      ],
    },

    process: {
      kicker: "Proces",
      title: "Van audit naar draaiend systeem in enkele weken",
      standfirst: "Een vast traject met een resultaat na elke stap — u weet altijd waar u staat.",
      steps: [
        {
          title: "Audit",
          body: "We brengen uw repetitieve taken in kaart en becijferen wat elke taak u kost.",
          deliverable: "Resultaat: een geprioriteerde automatiseringsroadmap.",
        },
        {
          title: "Ontwerp",
          body: "We ontwerpen de workflow rond hoe uw team écht werkt — niet omgekeerd.",
          deliverable: "Resultaat: een gevalideerde blauwdruk met vaste scope.",
        },
        {
          title: "Bouw",
          body: "We bouwen de automatisering en integreren ze met de tools die u al gebruikt.",
          deliverable: "Resultaat: een getest systeem, live in uw omgeving.",
        },
        {
          title: "Run & verbeter",
          body: "We monitoren, onderhouden en verbeteren elke automatisering die we opleveren. U krijgt de resultaten; wij draaien de motor.",
          deliverable: "Resultaat: maandelijkse prestatierapporten.",
        },
      ],
    },

    outcomes: {
      kicker: "Het Resultaat",
      title: "Gemeten in uren, niet in beloftes",
      quote: "Wij verkopen geen software. Wij nemen een taak van uw bord en geven u de uren terug.",
      quoteAttribution: "Het ORBYTH-principe",
      items: [
        {
          title: "Focus",
          body: "Uw specialisten besteden hun week aan werk dat oordeel vraagt, niet aan het verplaatsen van data.",
        },
        {
          title: "Betrouwbaarheid",
          body: "Data komt volledig en correct aan, in elk systeem, elke keer.",
        },
        {
          title: "Schaal",
          body: "Groeien betekent niet langer extra mensen voor administratie.",
        },
      ],
    },

    faq: {
      kicker: "FAQ",
      title: "Vragen",
      items: [
        {
          question: "Hoe snel zien we resultaat?",
          answer:
            "De meeste klanten hebben hun eerste automatisering live binnen zes weken na de audit. De audit zelf duurt één à twee weken en toont u meteen waar de grootste winst zit.",
        },
        {
          question: "Hebben we technisch personeel nodig?",
          answer:
            "Nee. Wij bouwen, hosten en onderhouden alles. Uw team heeft geen enkele technische kennis nodig, als u de taak kunt beschrijven, kunnen wij ze automatiseren.",
        },
        {
          question: "Wat kost het?",
          answer:
            "De kostprijs hangt af van de complexiteit en het aantal processen dat we automatiseren. Een typisch project start vanaf enkele duizenden euro's voor een gerichte automatisering, tot enkele tienduizenden voor een volledige transformatie van uw supply chain.",
        },
        {
          question: "Wat gebeurt er met onze data?",
          answer:
            "Uw data blijft van u. We werken GDPR-conform, verwerken data waar mogelijk binnen de EU en gebruiken uw bedrijfsdata nooit om iets te trainen.",
        },
        {
          question: "Gebruiken jullie onze huidige software of bouwen jullie nieuwe systemen?",
          answer:
            "Allebei. We verbinden de tools die u al gebruikt, en bouwen systemen op maat waar dat nodig is.",
        },
        {
          question: "Blijven jullie na de oplevering?",
          answer:
            "Ja. Het systeem bouwen is maar de eerste stap. We blijven aan boord om het te beheren, bij te werken en te verbeteren naarmate uw bedrijf groeit.",
        },
      ],
    },
  },

  about: {
    mission: {
      kicker: "Over ORBYTH",
      lines: ["Machines horen", "het repetitieve werk te doen.", "Mensen het denkwerk."],
    },
    positioning: {
      title: "De partner die uw systemen bouwt en runt",
      paragraphs: [
        "Vanuit Antwerpen ontwikkelt ORBYTH de fundamentele systemen voor logistieke bedrijven. Wij synchroniseren uw transport en magazijnoperaties. We integreren uw systemen zodat uw supply chain meer volume aankan zonder extra administratie.",
        "We leveren niet zomaar een tool af om u vervolgens succes te wensen. We bouwen een systeem dat uw logistiek verbindt en blijven betrokken bij het onderhoud ervan. U focust op het verplaatsen van uw vracht; wij regelen de rest.",
      ],
    },
    principles: {
      kicker: "Principes",
      title: "Hoe we werken",
      items: [
        {
          title: "Precisie boven beloftes",
          body: "We becijferen vóór we automatiseren. Elk voorstel benoemt wat een taak u vandaag kost en wat de automatisering opbrengt.",
        },
        {
          title: "Eigenaarschap van a tot z",
          body: "Eén partner van audit tot dagelijkse werking. Als er om 7 uur 's ochtends iets hapert, is het ons probleem nog voor u het merkt.",
        },
        {
          title: "Gemeten in gewonnen uren",
          body: "Niet in opgeleverde features of verkochte licenties. Een automatisering die geen tijd opbrengt, is een mislukking — dus leveren we ze niet op.",
        },
      ],
    },
    engage: {
      kicker: "Samenwerking",
      title: "Zo werken we samen",
      standfirst: "Dezelfde vier stappen, voor elke klant, elke keer.",
    },
  },

  contact: {
    kicker: "Contact",
    title: "Vertel ons wat de tijd van uw team opslorpt.",
    promise: "U krijgt binnen één werkdag antwoord.",
    channels: {
      email: "info@orbyth.com",
      emailLabel: "E-mail",
      phoneLabel: "Telefoon",
      linkedinLabel: "LinkedIn",
      location: "Antwerpen, België",
      locationLabel: "Gevestigd in",
    },
    calendly: {
      title: "Liever een gesprek?",
      body: "Boek een intro — geen voorbereiding nodig, geen verplichtingen.",
      button: "Boek een intro-gesprek",
    },
    form: {
      title: "Vertel ons over uw situatie",
      name: "Naam",
      company: "Bedrijf",
      email: "E-mailadres",
      message: "Welk repetitief werk moet eerst verdwijnen?",
      submit: "Verstuur bericht",
      submitting: "Versturen…",
      successTitle: "Bericht ontvangen.",
      successBody:
        "We nemen binnen één werkdag contact met u op. Sneller schakelen? Boek meteen een intro-gesprek.",
      successCta: "Boek een intro-gesprek",
      error: "Er ging iets mis bij het versturen. Probeer het opnieuw of mail ons rechtstreeks op info@orbyth.com.",
      subject: "Nieuwe websiteaanvraag — ORBYTH",
    },
    reassurance: [
      { title: "Gratis audit", body: "De eerste stap kost u nooit iets." },
      { title: "Geen vendor lock-in", body: "Elk systeem dat we bouwen, is van u." },
      { title: "GDPR-conform", body: "Uw data wordt binnen de EU verwerkt." },
    ],
  },

  cta: {
    title: "Klaar om aan uw bedrijf te werken in plaats van erin?",
    body: "Tijdens een gratis audit brengen we precies in kaart waar uw bedrijf tijd verliest en tonen we hoe het juiste systeem dit oplost.",
    button: "Plan een gratis audit",
    secondary: "Of boek een intro-gesprek",
  },

  footer: {
    tagline: "AI-automatiseringen, ontworpen en beheerd voor kmo's.",
    navigate: "Navigatie",
    contact: "Contact",
    language: "Taal",
    rights: "Alle rechten voorbehouden.",
  },
} satisfies Messages
