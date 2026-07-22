// English dictionary — source of truth for the Messages shape.
// Every key added here must also be added to nl.ts and fr.ts (enforced by `satisfies Messages`).
export const en = {
  meta: {
    home: {
      title: "ORBYTH | Your Unfair Advantage",
      description:
        "ORBYTH designs and runs AI automations that take over repetitive tasks for SMEs. Win back hours every week and stop errors from reaching your customers.",
    },
    about: {
      title: "About ORBYTH: we build and run your automations",
      description:
        "ORBYTH is an Antwerp-based AI automation firm for SMEs across every sector. We engineer automations, integrate them into your business and keep them running.",
    },
    contact: {
      title: "Contact ORBYTH: plan a free audit",
      description:
        "Tell us what eats your team's time. Plan a free audit or book a 30-minute intro call with ORBYTH.",
    },
    services: {
      administratie: {
        title: "Administrative workflow automation | ORBYTH",
        description:
          "ORBYTH automates approvals, purchase orders and onboarding paperwork for transport and logistics SMEs, routed, filled in and filed without manual steps.",
      },
      data: {
        title: "Data entry & synchronization | ORBYTH",
        description:
          "ORBYTH connects your CRM, ERP, WMS and spreadsheets so data is entered once and stays correct everywhere, for transport and logistics SMEs.",
      },
      followUps: {
        title: "Customer service & follow-up automation | ORBYTH",
        description:
          "ORBYTH automates quote follow-ups, appointment confirmations and inbox triage so no customer waits, for transport and logistics SMEs.",
      },
      reporting: {
        title: "Reporting & document automation | ORBYTH",
        description:
          "ORBYTH builds dashboards, reports and documents straight from your live systems, always current, on schedule, for transport and logistics SMEs.",
      },
      finance: {
        title: "Invoicing automation | ORBYTH",
        description:
          "ORBYTH captures, matches and books incoming invoices and sends and chases outgoing ones automatically, for transport and logistics SMEs.",
      },
    },
  },

  nav: {
    home: "Home",
    about: "About",
    contact: "Contact",
    cta: "Book your call",
    langLabel: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    backToTop: "Back to top",
    backToHome: "Back to home",
  },

  home: {
    hero: {
      kicker: "AI automation for SMEs",
      title: "We engineer the systems your operations actually run on",
      subline:
        "ORBYTH is the connective layer between your TMS, ERP and WMS. Your team wins back hours every week, and errors stop reaching your customers.",
      ctaPrimary: "Plan a free audit",
      ctaSecondary: "See how we work",
      diagramTasks: ["Invoices", "Mailbox", "Data entry", "Reports", "Scheduling"],
      diagramDescriptions: [
        "Problem: Invoices arrive in various formats, and rates don't always match the agreements. Checking this takes time, and errors are often discovered only after payment.\nSolution: Automated data extraction and matching against your agreed rates, directly linked to your systems.\nResult: Less manual checking, fewer financial losses, a clearer overview.",
        "Problem: Not every email is equally urgent. But in a crowded inbox where bookings, PODs, and customer questions are mixed together, it all looks the same until opened. Everything must be read and recognized manually before follow-up or re-entry into your systems.\nSolution: We automatically assess and route incoming emails to the right place, prioritizing the urgent matters. \nResult: Less manual typing, fewer missed or delayed emails, a faster view of what requires action.",
        "Problem: Data from purchase orders, delivery documents, and emails are often manually typed out three times, across three different systems, time that could be better spent elsewhere. \nSolution: We automatically extract that data and feed it directly into your systems. Entered once, perfectly correct everywhere.\nResult: Less time spent typing, fewer errors, consistent data across all your systems.",
        "Problem: Reports are often manually compiled in Excel using figures from your TMS, ERP, and WMS. By the time the report is ready, the numbers are usually outdated.\nSolution: We ensure reports are built directly from real-time system data, bypassing outdated exports.\nResult: Self-updating reports, zero manual work.",
        "Problem: Trips and appointments are usually scheduled manually based on availability, drivers, and time windows. One changed time window means someone has to call, email, and reschedule, while still managing the rest of the day.\nSolution: We ensure schedule changes flow automatically and instantly to everyone who needs them.\nResult: Less back-and-forth, fewer scheduling errors, faster adaptation to changes.",
      ],
      diagramLabel:
        "Diagram: recurring tasks, invoices, mailbox, data entry, reports and scheduling, orbiting one automated core.",
    },

    proof: {
      builtOn: "Built on platforms you already trust",    
    },

    problem: {
      kicker: "The problem",
      title: "Systemize or Stagnate",
      standfirst:
        "Great businesses are built on solid architecture. Without the right systems, manual work costs you hours, introduces mistakes, and limits growth.",
      items: [
        {
          title: "Hours lost",
          body: "You are losing countless hours just moving data between platforms.",
        },
        {
          title: "Errors",
          body: "Manual mistakes often go unnoticed until they break a process later, forcing your team to stop, trace the error, and clean up the mess.",
        },
        {
          title: "Growth",
          body: "Getting more clients shouldn't mean your team needs to drown. Your business needs to be able to take on more work with the team you already have.",
        },
      ],
    },

    services: {
      kicker: "Services",
      title: "What we automate",
      standfirst: "We take over the work no one should be doing by hand.",
      readMore: "Read more",
      items: [
        {
          label: "Admin",
          title: "Administrative workflows",
          body: "Approvals, purchase orders and onboarding paperwork, routed, filled in and filed without a single manual step.",
          examples: ["Purchase orders", "Approval chains", "Employee onboarding"],
        },
        {
          label: "Data",
          title: "Data entry & synchronization",
          body: "One source of truth. We connect your CRM, ERP and spreadsheets so data moves itself, accurately, instantly, both ways.",
          examples: ["CRM–ERP sync", "Order intake", "Master data upkeep"],
        },
        {
          label: "Customers",
          title: "Customer service & Follow-ups",
          body: "Quotes chased, appointments confirmed, questions answered, your customers get an immediate response, every time.",
          examples: ["Quote follow-up", "Appointment reminders", "Inbox triage"],
        },
        {
          label: "Reporting",
          title: "Reporting & documents",
          body: "The weekly report writes itself. Dashboards, summaries and documents generated from live data, on schedule.",
          examples: ["Management reports", "Quote generation", "Compliance documents"],
        },
        {
          label: "Finance",
          title: "Invoicing",
          body: "Incoming invoices captured, matched and booked automatically, and outgoing ones sent and chased without anyone touching a spreadsheet.",
          examples: ["Invoice capture", "Payment reminders", "Expense processing"],
        },
      ],
    },

    process: {
      kicker: "Process",
      title: "From audit to running system in weeks",
      standfirst: "A fixed path with a deliverable at every step, you always know where you stand.",
      steps: [
        {
          title: "Audit",
          body: "We map your repetitive tasks and quantify what each one costs you.",
          deliverable: "Deliverable: a prioritized automation roadmap.",
        },
        {
          title: "Design",
          body: "We design the workflow around how your team actually works, not the other way round.",
          deliverable: "Deliverable: a validated blueprint with a fixed scope.",
        },
        {
          title: "Build",
          body: "We build and integrate the automation with the tools you already use.",
          deliverable: "Deliverable: a tested system, live in your environment.",
        },
        {
          title: "Run & improve",
          body: "We monitor, maintain and improve every automation we ship. You get the results; we run the engine.",
          deliverable: "Deliverable: monthly performance reports.",
        },
      ],
    },

    outcomes: {
      kicker: "The Outcome",
      title: "Measured in hours, not promises",
      quote: "We don't sell software. We take a task off your plate and give you the hours back.",
      quoteAttribution: "The ORBYTH principle",
      items: [
        {
          title: "Focus",
          body: "Your specialists spend their week on work that needs judgment, not on moving data around.",
        },
        {
          title: "Reliability",
          body: "Data arrives complete and correct, in every system, every time.",
        },
        {
          title: "Scale",
          body: "Growth no longer means more headcount for administration.",
        },
      ],
    },

    faq: {
      kicker: "FAQ",
      title: "Questions",
      items: [     
        {
          question: "How long before we see results?",
          answer:
            "Most clients have their first automation live within six weeks of the audit. The audit itself takes one to two weeks and immediately shows you where the biggest gains are.",
        },
        {
          question: "Do we need technical staff?",
          answer:
            "No. We build, host and maintain everything. Your team needs zero technical knowledge, if you can describe the task, we can automate it.",
        },
        {
          question: "What does it cost?",
          answer:
            "Costs depend on the complexity of the process and the systems involved. Every automation has its own complexity and requirements, so pricing is scoped per project after the audit.",
        },
        {
          question: "What happens to our data?",
          answer:
            "Your data stays yours. We work GDPR-compliant, process data within the EU wherever possible, and never use your business data to train anything.",
        },
        {
          question: "Do you use our current software or build new systems?",
          answer:
            "We do both. We connect the tools you already use, and build custom systems where needed.",
        },
        {
          question: "Do you stay after delivery?",
          answer:
            "Yes. Building the system is just the first step. We stay on board to manage, update, and improve it as your business grows.",
        },
      ],
    },
  },

  serviceDetails: {
    // Shared section eyebrows (identical across every service detail page).
    recognizeKicker: "Recognize this?",
    solutionKicker: "What we do",
    approachKicker: "Our approach",
    items: {
      administratie: {
        label: "Admin",
        title: "Administrative workflows",
        pitch:
          "The paperwork that keeps your operation running, handled end to end, without anyone chasing a signature or retyping a form.",
        recognize: {
          title: "The admin that never quite gets done",
          items: [
            "Purchase orders wait days for a signature because the right person is on the road.",
            "The same order details get retyped into three different systems.",
            "Onboarding a new driver means a folder of forms someone fills in by hand.",
            "Approvals live in email threads, and no one is sure what's been signed off.",
          ],
        },
        solution: {
          title: "Paperwork that routes and files itself",
          paragraphs: [
            "We map every administrative flow, from purchase order to onboarding, and rebuild it as an automation. Documents are created, pre-filled with the data you already hold, and sent to the right person for approval automatically.",
            "Once signed off, everything is filed in the right place and logged in your systems. No retyping, no lost forms, no wondering where an approval got stuck.",
          ],
        },
        approach: {
          title: "From paper trail to running flow",
          steps: [
            {
              title: "We map the flow",
              body: "We follow one admin process end to end and note every form, hand-off and signature it touches.",
            },
            {
              title: "We build and connect",
              body: "We rebuild it as an automation and connect it to the tools you already use, tested on real documents.",
            },
            {
              title: "We run and refine",
              body: "We keep it running, handle the exceptions and adjust as your processes change.",
            },
          ],
        },
        cta: {
          title: "Curious what we'd automate first?",
          body: "Book a short intro call and we'll walk through your admin, no preparation needed.",
        },
      },
      data: {
        label: "Data",
        title: "Data entry & synchronization",
        pitch:
          "One number, one address, one order, entered once and correct in every system, moving itself instead of being retyped.",
        recognize: {
          title: "When your systems don't agree",
          items: [
            "The same order gets keyed into your TMS, your ERP and a spreadsheet, three times, three chances to slip.",
            "A customer's address is right in one system and outdated in another.",
            "Someone spends the morning copying data instead of doing their actual job.",
            "You're never fully sure which system holds the correct number.",
          ],
        },
        solution: {
          title: "One source of truth, kept in sync",
          paragraphs: [
            "We connect your CRM, ERP, WMS and spreadsheets so data flows between them automatically. Enter an order once and it appears, correctly, everywhere it's needed, in both directions.",
            "Validation rules catch the errors before they spread, so every system holds the same, accurate picture. Your team stops copying data and starts trusting it.",
          ],
        },
        approach: {
          title: "From scattered to synchronized",
          steps: [
            {
              title: "We map your data",
              body: "We chart where each piece of data lives today and where it has to travel.",
            },
            {
              title: "We connect the systems",
              body: "We build the links between your tools, with validation, and test them on real records.",
            },
            {
              title: "We keep it clean",
              body: "We monitor the sync, flag anything that looks off and keep your data accurate as you grow.",
            },
          ],
        },
        cta: {
          title: "Which systems should talk to each other first?",
          body: "Book a short intro call and we'll look at where your data gets stuck, no preparation needed.",
        },
      },
      followUps: {
        label: "Customers",
        title: "Customer service & follow-ups",
        pitch:
          "Every quote followed up, every appointment confirmed, every question answered, so no customer waits and nothing slips through.",
        recognize: {
          title: "The follow-ups that fall through",
          items: [
            "A quote goes out and no one remembers to chase it a week later.",
            "Customers call to ask where their delivery is because nobody updated them.",
            "Appointment reminders depend on someone finding the time to send them.",
            "The inbox is full and the urgent questions are buried among the routine ones.",
          ],
        },
        solution: {
          title: "Every customer answered, on time",
          paragraphs: [
            "We automate the follow-ups that keep customers happy: quotes chased on schedule, appointments confirmed, delivery updates sent the moment status changes. Your customers hear from you before they have to ask.",
            "Incoming questions are read, sorted and routed to the right person, with the urgent ones first. Nothing waits in a crowded inbox, and your team spends its time on the conversations that need a human.",
          ],
        },
        approach: {
          title: "From reactive to reliable",
          steps: [
            {
              title: "We map the touchpoints",
              body: "We list every moment a customer expects to hear from you, and where those moments get missed today.",
            },
            {
              title: "We automate the follow-up",
              body: "We build the reminders, confirmations and triage, connected to your inbox and systems.",
            },
            {
              title: "We keep it human",
              body: "We tune the tone and rules over time, so automation handles the routine and your team handles the rest.",
            },
          ],
        },
        cta: {
          title: "Where are your customers left waiting?",
          body: "Book a short intro call and we'll pinpoint the follow-ups worth automating first, no preparation needed.",
        },
      },
      reporting: {
        label: "Reporting",
        title: "Reporting & documents",
        pitch:
          "The weekly report, the management dashboard, the compliance document, built from live data and ready before you ask for them.",
        recognize: {
          title: "Reports that are outdated on arrival",
          items: [
            "Someone spends every Friday afternoon pulling numbers into Excel by hand.",
            "By the time the report is ready, the figures have already moved on.",
            "Different reports show different numbers because they were built from different exports.",
            "Generating a quote or compliance document means copy-pasting from three places.",
          ],
        },
        solution: {
          title: "Reports and documents that build themselves",
          paragraphs: [
            "We connect your reports and documents straight to your live systems. Dashboards, weekly summaries, quotes and compliance files are generated from current data, on schedule, in the format you already use.",
            "The numbers are always current and always consistent, because they come from one source. Your team stops assembling reports and starts acting on them.",
          ],
        },
        approach: {
          title: "From manual export to live report",
          steps: [
            {
              title: "We map what you report",
              body: "We look at the reports and documents you build today and where their numbers come from.",
            },
            {
              title: "We connect and generate",
              body: "We link them to your live data and automate the generation, on your schedule and in your format.",
            },
            {
              title: "We keep them right",
              body: "We monitor the outputs, adjust as your needs change and add new reports as they come up.",
            },
          ],
        },
        cta: {
          title: "Which report eats your week?",
          body: "Book a short intro call and we'll find the report worth automating first, no preparation needed.",
        },
      },
      finance: {
        label: "Finance",
        title: "Invoicing",
        pitch:
          "Incoming invoices captured and booked, outgoing invoices sent and chased, without anyone touching a spreadsheet.",
        recognize: {
          title: "The invoicing that never stops",
          items: [
            "Incoming invoices arrive in every format and someone checks each one by hand.",
            "Rates on an invoice don't match the agreement, and it's only noticed after payment.",
            "Outgoing invoices go out late because the numbers had to be gathered first.",
            "Chasing unpaid invoices depends on someone remembering to do it.",
          ],
        },
        solution: {
          title: "Invoices that handle themselves",
          paragraphs: [
            "Incoming invoices are captured, read and matched against your agreed rates and orders automatically, then booked in your system. Mismatches are flagged before they cost you, not after.",
            "Outgoing invoices are generated from live data and sent on time, and unpaid ones are chased on a schedule you set. Your finance work stops depending on spreadsheets and someone's memory.",
          ],
        },
        approach: {
          title: "From inbox to booked",
          steps: [
            {
              title: "We map the flow",
              body: "We follow your invoices in and out, and where the checks and delays happen today.",
            },
            {
              title: "We automate capture and matching",
              body: "We build the capture, matching and generation, connected to your accounting and systems.",
            },
            {
              title: "We watch the exceptions",
              body: "We keep it running, surface the mismatches that need a human and refine the rules over time.",
            },
          ],
        },
        cta: {
          title: "How many hours does invoicing cost you?",
          body: "Book a short intro call and we'll map where your invoicing leaks time, no preparation needed.",
        },
      },
    },
  },

  about: {
    mission: {
      kicker: "About ORBYTH",
      lines: ["Machines should do", "the repetitive work.", "People should do the thinking."],
    },
    positioning: {
      title: "The partner that builds and runs your systems",
      paragraphs: [
        "Based in Antwerp, ORBYTH engineers underlying systems for logistics companies. We align your transport and warehouse operations. We integrate your systems so your entire supply chain handles more volume without extra admin.",
        "We don't just hand over a tool and wish you luck. We engineer a system that connects your logistics and stay involved to maintain it. You focus on moving freight; we handle the rest.",
      ],
    },
    principles: {
      kicker: "Principles",
      title: "How we work",
      items: [
        {
          title: "Precision over promises",
          body: "We quantify before we automate. Every proposal states what a task costs you today and what the automation returns.",
        },
        {
          title: "Ownership end-to-end",
          body: "One partner from audit to daily operation. If something breaks at 7 a.m., it's our problem before you notice it.",
        },
        {
          title: "Measured in hours saved",
          body: "Not in features shipped or licenses sold. An automation that doesn't return time is a failure, so we don't ship it.",
        },
      ],
    },
    engage: {
      kicker: "Engagement",
      title: "How we engage",
      standfirst: "The same four steps, for every client, every time.",
    },
  },

  contact: {
    kicker: "Contact",
    title: "Tell us what eats your team's time.",
    promise: "We reply within one business day.",
    channels: {
      email: "info@orbyth.com",
      emailLabel: "E-mail",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      location: "Antwerp, Belgium",
      locationLabel: "Based in",
    },
    calendly: {
      title: "Prefer to talk?",
      body: "Book an intro, no preparation needed, no obligations.",
      button: "Book an intro call",
    },
    form: {
      title: "Tell us about your situation",
      name: "Name",
      company: "Company",
      email: "Email",
      message: "What's slowing your team down now?",
      submit: "Send message",
      submitting: "Sending…",
      successTitle: "Message received.",
      successBody:
        "We'll get back to you within one business day. Want to move faster? Book an intro call right away.",
      successCta: "Book an intro call",
      error: "Something went wrong while sending. Please try again, or email us directly at info@orbyth.com.",
      subject: "New website inquiry, ORBYTH",
    },
    reassurance: [
      { title: "Free audit", body: "The first step never costs anything." },
      { title: "No vendor lock-in", body: "You own every system we build." },
      { title: "GDPR-compliant", body: "Your data is handled within the EU." },
    ],
  },

  cta: {
    title: "Ready to work on your business instead of in it?",
    body: "During a free audit, we pinpoint exactly where your business leaks time and show you how the right system fixes it.",
    button: "Plan a free audit",
    secondary: "Or book an intro call",
  },

  footer: {
    tagline: "AI automations, designed and run for SMEs.",
    navigate: "Navigate",
    contact: "Contact",
    language: "Language",
    rights: "All rights reserved.",
  },
}
