import type { Messages } from "../types"

// Dutch dictionary — formal "u", Flemish vocabulary ("kmo's").
// `satisfies Messages` makes `npm run typecheck` fail on any missing or extra key.
export const nl = {
  meta: {
    home: {
      title: "ORBYTH | Your Unfair Advantage",
      description:
        "ORBYTH ontwerpt en beheert AI-automatiseringen die repetitieve taken overnemen voor kmo's. Win elke week uren terug en laat fouten uw klanten niet meer bereiken.",
    },
    about: {
      title: "Over ORBYTH: wij bouwen én runnen uw automatiseringen",
      description:
        "ORBYTH is een Antwerps AI-automatiseringsbureau voor kmo's in elke sector. Wij bouwen automatiseringen, integreren ze in uw bedrijf en houden ze draaiende.",
    },
    contact: {
      title: "Contacteer ORBYTH: plan een gratis audit",
      description:
        "Vertel ons wat de tijd van uw team opslorpt. Plan een gratis automatiseringsaudit of boek een intro-gesprek van 30 minuten met ORBYTH.",
    },
    services: {
      administratie: {
        title: "Administratieve workflows automatiseren | ORBYTH",
        description:
          "ORBYTH automatiseert goedkeuringen, bestelbonnen en onboardingdocumenten voor kmo's in transport en logistiek, doorgestuurd, ingevuld en geklasseerd zonder handmatige stappen.",
      },
      data: {
        title: "Data-invoer & synchronisatie | ORBYTH",
        description:
          "ORBYTH verbindt uw CRM, ERP, WMS en spreadsheets zodat data één keer wordt ingevoerd en overal correct blijft, voor kmo's in transport en logistiek.",
      },
      followUps: {
        title: "Klantopvolging & communicatie automatiseren | ORBYTH",
        description:
          "ORBYTH automatiseert offerteopvolging, afspraakbevestigingen en inbox-triage zodat geen enkele klant wacht, voor kmo's in transport en logistiek.",
      },
      reporting: {
        title: "Rapportage & documenten automatiseren | ORBYTH",
        description:
          "ORBYTH bouwt dashboards, rapporten en documenten rechtstreeks uit uw live systemen, altijd actueel, volgens schema, voor kmo's in transport en logistiek.",
      },
      finance: {
        title: "Facturatie automatiseren | ORBYTH",
        description:
          "ORBYTH leest inkomende facturen in, matcht en boekt ze, en verstuurt en volgt uitgaande facturen automatisch op, voor kmo's in transport en logistiek.",
      },
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
    backToTop: "Terug naar boven",
    backToHome: "Terug naar home",
  },

  home: {
    hero: {
      kicker: "AI-automatisering voor kmo's",
      title: "Wij bouwen de systemen waar uw operatie écht op draait",
      subline:
        "ORBYTH is de verbindende laag tussen uw TMS, ERP en WMS. Uw team wint elke week uren terug, en fouten bereiken uw klanten niet meer.",
      ctaPrimary: "Plan een gratis automatiseringsaudit",
      ctaSecondary: "Zo werken we",
      diagramTasks: ["Facturen", "Mailbox", "Data-invoer", "Rapporten", "Planning"],
      diagramDescriptions: [
        "Probleem: Facturen komen binnen in wisselende formaten en tarieven kloppen niet altijd met wat is afgesproken. Dat controleren kost tijd, en fouten worden vaak pas na betaling ontdekt.\nOplossing: Automatische uitlezing en matching tegen je afgesproken tarieven, direct gekoppeld aan je systemen.\nResultaat: Minder controle, minder verlies, meer overzicht.",
        "Probleem: Niet elke mail is even dringend, maar in een volle inbox met boekingen, PODs en klantvragen door elkaar ziet dat verschil er hetzelfde uit tot iemand het opent. Alles moet manueel gelezen en herkend worden voor het wordt opgevolgd of overgetypt in je systemen.\nOplossing: We laten inkomende mails automatisch beoordelen en doorsturen naar waar ze moeten zijn, met dringende zaken vooraan.\nResultaat: Minder manueel overtypen, minder gemiste of vertraagde mails, sneller zicht op wat actie nodig heeft.",
        "Probleem: Gegevens uit bestelbonnen, leverdocumenten en mails worden vaak drie keer manueel overgetypt, in drie verschillende systemen, tijd die iemand liever ergens anders aan zou besteden.\nOplossing: We laten die gegevens automatisch uitlezen en rechtstreeks invoeren in je systemen, één keer, overal correct.\nResultaat: Minder tijd aan overtypen, minder fouten, consistente data doorheen je systemen.",
        "Probleem: Rapporten worden vaak manueel samengesteld uit cijfers uit TMS, ERP en WMS, in Excel. Tegen dat het rapport klaar is, zijn de cijfers vaak alweer verouderd.\nOplossing: We zorgen dat rapporten rechtstreeks uit actuele systeemdata worden opgebouwd, niet uit een verouderde export.\nResultaat: Rapporten die zichzelf bijwerken, geen handmatig werk meer.",
        "Probleem: Ritten en afspraken worden vaak manueel ingepland op basis van beschikbaarheid, chauffeurs en tijdsvensters. Eén gewijzigd tijdsvenster en iemand moet weer bellen, mailen en herplannen, terwijl de rest van de dag ook nog moet doorgaan.\nOplossing: We zorgen dat planningswijzigingen automatisch en meteen doorstromen naar wie ze nodig heeft.\nResultaat: Minder heen-en-weer, minder plannings­fouten, sneller aanpassen bij wijzigingen.",
      ],
      diagramLabel:
        "Diagram: terugkerende taken, facturen, mailbox, data-invoer, rapporten en planning, cirkelen rond één geautomatiseerde kern.",
    },

    proof: {
      builtOn: "Gebouwd op platformen die u al vertrouwt",
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
          body: "Handmatige fouten blijven vaak onopgemerkt tot ze later een proces breken, en uw team moet stoppen, de fout traceren en de rommel opruimen.",
        },
        {
          title: "Groei",
          body: "Meer klanten binnenhalen mag niet betekenen dat uw team verdrinkt. Uw bedrijf moet meer werk aankunnen met het team dat u al hebt.",
        },
      ],
    },

    services: {
      kicker: "Diensten",
      title: "Wat we automatiseren",
      standfirst: "Wij nemen het werk over dat niemand nog met de hand zou moeten doen.",
      readMore: "Lees meer",
      items: [
        {
          label: "Admin",
          title: "Administratieve workflows",
          body: "Goedkeuringen, bestelbonnen en onboardingdocumenten, doorgestuurd, ingevuld en geklasseerd zonder één handmatige stap.",
          examples: ["Bestelbonnen", "Goedkeuringsflows", "Onboarding van medewerkers"],
        },
        {
          label: "Data",
          title: "Data-invoer & synchronisatie",
          body: "Eén bron van waarheid. Wij verbinden uw CRM, ERP en spreadsheets zodat data zichzelf verplaatst, correct en meteen, in beide richtingen.",
          examples: ["CRM–ERP-synchronisatie", "Orderverwerking", "Onderhoud van stamdata"],
        },
        {
          label: "Klanten",
          title: "Klantopvolging & communicatie",
          body: "Offertes opgevolgd, afspraken bevestigd, vragen beantwoord, uw klanten krijgen meteen een antwoord, elke keer opnieuw.",
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
          body: "Inkomende facturen automatisch ingelezen, gematcht en geboekt, en uitgaande facturen verstuurd en opgevolgd zonder dat iemand een spreadsheet aanraakt.",
          examples: ["Factuurinlezing", "Betalingsherinneringen", "Onkostenverwerking"],
        },
      ],
    },

    process: {
      kicker: "Proces",
      title: "Van audit naar draaiend systeem in enkele weken",
      standfirst: "Een vast traject met een resultaat na elke stap, u weet altijd waar u staat.",
      steps: [
        {
          title: "Audit",
          body: "We brengen uw repetitieve taken in kaart en becijferen wat elke taak u kost.",
          deliverable: "Resultaat: een geprioriteerde automatiseringsroadmap.",
        },
        {
          title: "Ontwerp",
          body: "We ontwerpen de workflow rond hoe uw team écht werkt, niet omgekeerd.",
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
            "De meeste klanten hebben hun eerste automatisering live binnen zes weken na de audit. De audit zelf duurt een a twee weken en toont u meteen waar de grootste winst zit.",
        },
        {
          question: "Hebben we technisch personeel nodig?",
          answer:
            "Nee. Wij bouwen, hosten en onderhouden alles. Uw team heeft geen enkele technische kennis nodig, als u de taak kunt beschrijven, kunnen wij ze automatiseren.",
        },
        {
          question: "Wat kost het?",
          answer:
            "De kostprijs is afhankelijk van de complexiteit van het proces en de betrokken systemen. Omdat elke automatisering unieke vereisten heeft, bepalen we de prijs steeds per project na de audit.",
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

  serviceDetails: {
    // Gedeelde sectie-eyebrows (identiek op elke service-detailpagina).
    recognizeKicker: "Herkent u dit?",
    solutionKicker: "Wat wij doen",
    approachKicker: "Onze aanpak",
    items: {
      administratie: {
        label: "Admin",
        title: "Administratieve workflows",
        pitch:
          "Het papierwerk dat uw operatie draaiende houdt, van begin tot eind afgehandeld, zonder dat iemand een handtekening moet najagen of een formulier moet overtypen.",
        recognize: {
          title: "De administratie die er nooit helemaal van komt",
          items: [
            "Bestelbonnen wachten dagen op een handtekening omdat de juiste persoon onderweg is.",
            "Dezelfde ordergegevens worden in drie verschillende systemen overgetypt.",
            "Een nieuwe chauffeur onboarden betekent een map vol formulieren die iemand met de hand invult.",
            "Goedkeuringen leven in e-mailthreads, en niemand weet zeker wat al is afgetekend.",
          ],
        },
        solution: {
          title: "Papierwerk dat zichzelf doorstuurt en klasseert",
          paragraphs: [
            "Wij brengen elke administratieve flow in kaart, van bestelbon tot onboarding, en bouwen ze om tot een automatisering. Documenten worden aangemaakt, vooraf ingevuld met gegevens die u al hebt, en automatisch naar de juiste persoon gestuurd ter goedkeuring.",
            "Eens afgetekend wordt alles op de juiste plaats geklasseerd en in uw systemen gelogd. Geen overtypen, geen verloren formulieren, geen twijfel over waar een goedkeuring is blijven hangen.",
          ],
        },
        approach: {
          title: "Van papierspoor naar draaiende flow",
          steps: [
            {
              title: "We brengen de flow in kaart",
              body: "We volgen één administratief proces van begin tot eind en noteren elk formulier, elke overdracht en elke handtekening.",
            },
            {
              title: "We bouwen en koppelen",
              body: "We bouwen ze om tot een automatisering en koppelen ze aan de tools die u al gebruikt, getest op echte documenten.",
            },
            {
              title: "We draaien en verfijnen",
              body: "We houden ze draaiende, vangen de uitzonderingen op en sturen bij wanneer uw processen veranderen.",
            },
          ],
        },
        cta: {
          title: "Benieuwd wat we eerst zouden automatiseren?",
          body: "Boek een kort intro-gesprek en we overlopen samen uw administratie, geen voorbereiding nodig.",
        },
      },
      data: {
        label: "Data",
        title: "Data-invoer & synchronisatie",
        pitch:
          "Eén cijfer, één adres, één order, één keer ingevoerd en overal correct, dat zichzelf verplaatst in plaats van te worden overgetypt.",
        recognize: {
          title: "Wanneer uw systemen elkaar tegenspreken",
          items: [
            "Dezelfde order wordt in uw TMS, uw ERP en een spreadsheet getikt, drie keer, drie kansen op een fout.",
            "Het adres van een klant klopt in het ene systeem en is verouderd in het andere.",
            "Iemand kopieert de hele voormiddag data in plaats van zijn eigenlijke werk te doen.",
            "U weet nooit helemaal zeker welk systeem het juiste cijfer bevat.",
          ],
        },
        solution: {
          title: "Eén bron van waarheid, altijd gesynchroniseerd",
          paragraphs: [
            "Wij verbinden uw CRM, ERP, WMS en spreadsheets zodat data automatisch tussen ze stroomt. Voer een order één keer in en het verschijnt, correct, overal waar het nodig is, in beide richtingen.",
            "Validatieregels vangen de fouten op voor ze zich verspreiden, zodat elk systeem hetzelfde, correcte beeld heeft. Uw team stopt met data kopiëren en begint ze te vertrouwen.",
          ],
        },
        approach: {
          title: "Van verspreid naar gesynchroniseerd",
          steps: [
            {
              title: "We brengen uw data in kaart",
              body: "We brengen in kaart waar elk gegeven vandaag leeft en waar het naartoe moet.",
            },
            {
              title: "We verbinden de systemen",
              body: "We bouwen de koppelingen tussen uw tools, met validatie, en testen ze op echte records.",
            },
            {
              title: "We houden het zuiver",
              body: "We monitoren de synchronisatie, signaleren wat afwijkt en houden uw data correct terwijl u groeit.",
            },
          ],
        },
        cta: {
          title: "Welke systemen zouden eerst met elkaar moeten praten?",
          body: "Boek een kort intro-gesprek en we bekijken waar uw data vastloopt, geen voorbereiding nodig.",
        },
      },
      followUps: {
        label: "Klanten",
        title: "Klantopvolging & communicatie",
        pitch:
          "Elke offerte opgevolgd, elke afspraak bevestigd, elke vraag beantwoord, zodat geen enkele klant wacht en niets tussen de mazen valt.",
        recognize: {
          title: "De opvolging die erbij inschiet",
          items: [
            "Er gaat een offerte buiten en niemand denkt eraan om ze een week later op te volgen.",
            "Klanten bellen om te vragen waar hun levering blijft, omdat niemand ze op de hoogte hield.",
            "Afspraakherinneringen hangen ervan af of iemand de tijd vindt om ze te versturen.",
            "De inbox zit vol en de dringende vragen zitten verstopt tussen de routinevragen.",
          ],
        },
        solution: {
          title: "Elke klant op tijd te woord gestaan",
          paragraphs: [
            "Wij automatiseren de opvolging die klanten tevreden houdt: offertes tijdig opgevolgd, afspraken bevestigd, leverupdates verstuurd zodra de status verandert. Uw klanten horen van u nog voor ze het moeten vragen.",
            "Inkomende vragen worden gelezen, gesorteerd en naar de juiste persoon gestuurd, met de dringende eerst. Niets blijft liggen in een volle inbox, en uw team besteedt zijn tijd aan de gesprekken die een mens vragen.",
          ],
        },
        approach: {
          title: "Van reactief naar betrouwbaar",
          steps: [
            {
              title: "We brengen de contactmomenten in kaart",
              body: "We lijsten elk moment op waarop een klant iets van u verwacht, en waar die momenten vandaag gemist worden.",
            },
            {
              title: "We automatiseren de opvolging",
              body: "We bouwen de herinneringen, bevestigingen en triage, gekoppeld aan uw inbox en systemen.",
            },
            {
              title: "We houden het menselijk",
              body: "We verfijnen de toon en de regels na verloop van tijd, zodat automatisering de routine afhandelt en uw team de rest.",
            },
          ],
        },
        cta: {
          title: "Waar blijven uw klanten wachten?",
          body: "Boek een kort intro-gesprek en we duiden de opvolging aan die u eerst zou automatiseren, geen voorbereiding nodig.",
        },
      },
      reporting: {
        label: "Rapportage",
        title: "Rapportage & documenten",
        pitch:
          "Het weekrapport, het managementdashboard, het compliancedocument, opgebouwd uit live data en klaar nog voor u erom vraagt.",
        recognize: {
          title: "Rapporten die verouderd zijn bij aankomst",
          items: [
            "Iemand vult elke vrijdagnamiddag met de hand cijfers in Excel in.",
            "Tegen dat het rapport klaar is, zijn de cijfers alweer veranderd.",
            "Verschillende rapporten tonen verschillende cijfers omdat ze uit verschillende exports zijn opgebouwd.",
            "Een offerte of compliancedocument opstellen betekent kopiëren en plakken uit drie bronnen.",
          ],
        },
        solution: {
          title: "Rapporten en documenten die zichzelf opbouwen",
          paragraphs: [
            "Wij koppelen uw rapporten en documenten rechtstreeks aan uw live systemen. Dashboards, weekoverzichten, offertes en compliancedossiers worden gegenereerd uit actuele data, volgens schema, in het formaat dat u al gebruikt.",
            "De cijfers zijn altijd actueel en altijd consistent, omdat ze uit één bron komen. Uw team stopt met rapporten samenstellen en begint ernaar te handelen.",
          ],
        },
        approach: {
          title: "Van manuele export naar live rapport",
          steps: [
            {
              title: "We brengen uw rapportage in kaart",
              body: "We bekijken de rapporten en documenten die u vandaag opmaakt en waar hun cijfers vandaan komen.",
            },
            {
              title: "We koppelen en genereren",
              body: "We verbinden ze met uw live data en automatiseren de generatie, volgens uw schema en in uw formaat.",
            },
            {
              title: "We houden ze correct",
              body: "We monitoren de output, sturen bij wanneer uw noden veranderen en voegen nieuwe rapporten toe waar nodig.",
            },
          ],
        },
        cta: {
          title: "Welk rapport slorpt uw week op?",
          body: "Boek een kort intro-gesprek en we vinden het rapport dat u eerst zou automatiseren, geen voorbereiding nodig.",
        },
      },
      finance: {
        label: "Financiën",
        title: "Facturatie",
        pitch:
          "Inkomende facturen ingelezen en geboekt, uitgaande facturen verstuurd en opgevolgd, zonder dat iemand een spreadsheet aanraakt.",
        recognize: {
          title: "De facturatie die nooit stopt",
          items: [
            "Inkomende facturen komen binnen in elk formaat en iemand controleert er elk met de hand.",
            "Tarieven op een factuur kloppen niet met de afspraak, en dat wordt pas na betaling opgemerkt.",
            "Uitgaande facturen vertrekken te laat omdat de cijfers eerst verzameld moesten worden.",
            "Onbetaalde facturen opvolgen hangt ervan af of iemand eraan denkt.",
          ],
        },
        solution: {
          title: "Facturen die zichzelf afhandelen",
          paragraphs: [
            "Inkomende facturen worden automatisch ingelezen, uitgelezen en gematcht tegen uw afgesproken tarieven en orders, en daarna in uw systeem geboekt. Afwijkingen worden gesignaleerd voor ze u geld kosten, niet erna.",
            "Uitgaande facturen worden gegenereerd uit live data en tijdig verstuurd, en onbetaalde facturen worden opgevolgd volgens een schema dat u bepaalt. Uw financiële werk hangt niet langer af van spreadsheets en iemands geheugen.",
          ],
        },
        approach: {
          title: "Van inbox naar geboekt",
          steps: [
            {
              title: "We brengen de flow in kaart",
              body: "We volgen uw facturen in en uit, en waar de controles en vertragingen vandaag zitten.",
            },
            {
              title: "We automatiseren inlezing en matching",
              body: "We bouwen de inlezing, matching en generatie, gekoppeld aan uw boekhouding en systemen.",
            },
            {
              title: "We bewaken de uitzonderingen",
              body: "We houden het draaiende, brengen de afwijkingen die een mens vragen naar boven en verfijnen de regels na verloop van tijd.",
            },
          ],
        },
        cta: {
          title: "Hoeveel uren kost facturatie u?",
          body: "Boek een kort intro-gesprek en we brengen in kaart waar uw facturatie tijd verliest, geen voorbereiding nodig.",
        },
      },
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
          body: "Een partner van audit tot dagelijkse werking. Als er om 7 uur 's ochtends iets hapert, is het ons probleem nog voor u het merkt.",
        },
        {
          title: "Gemeten in gewonnen uren",
          body: "Niet in opgeleverde features of verkochte licenties. Een automatisering die geen tijd opbrengt, is een mislukking, dus leveren we ze niet op.",
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
    promise: "U krijgt binnen een werkdag antwoord.",
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
      body: "Boek een intro geen voorbereiding nodig, geen verplichtingen.",
      button: "Boek een intro-gesprek",
    },
    form: {
      title: "Vertel ons over uw situatie",
      name: "Naam",
      company: "Bedrijf",
      email: "E-mailadres",
      message: "Wat vertraagt jullie team nu?",
      submit: "Verstuur bericht",
      submitting: "Versturen…",
      successTitle: "Bericht ontvangen.",
      successBody:
        "We nemen binnen één werkdag contact met u op. Sneller schakelen? Boek meteen een intro-gesprek.",
      successCta: "Boek een intro-gesprek",
      error: "Er ging iets mis bij het versturen. Probeer het opnieuw of mail ons rechtstreeks op info@orbyth.com.",
      subject: "Nieuwe websiteaanvraag, ORBYTH",
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
