// English dictionary — source of truth for the Messages shape.
// Every key added here must also be added to nl.ts and fr.ts (enforced by `satisfies Messages`).
export const en = {
  meta: {
    home: {
      title: "ORBYTH | Your Unfair Advantage",
      description:
        "ORBYTH designs and runs AI automations that take over repetitive tasks for SMEs — win back hours every week and stop errors from reaching your customers.",
    },
    about: {
      title: "About ORBYTH — we build and run your automations",
      description:
        "ORBYTH is an Antwerp-based AI automation firm for SMEs across every sector. We engineer automations, integrate them into your business and keep them running.",
    },
    contact: {
      title: "Contact ORBYTH — plan a free audit",
      description:
        "Tell us what eats your team's time. Plan a free audit or book a 30-minute intro call with ORBYTH.",
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
  },

  home: {
    hero: {
      kicker: "AI automation for SMEs",
      title: "Installing AI systems to solve problems for businesses and creating leverage",
      subline:
        "ORBYTH designs and runs AI systems that solve problems for businesses and create leverage. Your team wins back hours every week, and errors stop reaching your customers.",
      ctaPrimary: "Plan a free audit",
      ctaSecondary: "See how we work",
      diagramTasks: ["Invoices", "Mailbox", "Data entry", "Reports", "Scheduling"],
      diagramLabel:
        "Diagram: recurring tasks — invoices, mailbox, data entry, reports and scheduling — orbiting one automated core.",
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
      items: [
        {
          label: "Admin",
          title: "Administrative workflows",
          body: "Approvals, purchase orders and onboarding paperwork — routed, filled in and filed without a single manual step.",
          examples: ["Purchase orders", "Approval chains", "Employee onboarding"],
        },
        {
          label: "Data",
          title: "Data entry & synchronization",
          body: "One source of truth. We connect your CRM, ERP and spreadsheets so data moves itself — accurately, instantly, both ways.",
          examples: ["CRM–ERP sync", "Order intake", "Master data upkeep"],
        },
        {
          label: "Customers",
          title: "Customer service & Follow-ups",
          body: "Quotes chased, appointments confirmed, questions answered — your customers get an immediate response, every time.",
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
          body: "Incoming invoices captured, matched and booked automatically — and outgoing ones sent and chased without anyone touching a spreadsheet.",
          examples: ["Invoice capture", "Payment reminders", "Expense processing"],
        },
      ],
    },

    process: {
      kicker: "Process",
      title: "From audit to running system in weeks",
      standfirst: "A fixed path with a deliverable at every step — you always know where you stand.",
      steps: [
        {
          title: "Audit",
          body: "We map your repetitive tasks and quantify what each one costs you.",
          deliverable: "Deliverable: a prioritized automation roadmap.",
        },
        {
          title: "Design",
          body: "We design the workflow around how your team actually works — not the other way round.",
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
            "Costs depend on complexity and the number of processes being automated. A typical project starts from a few thousand euros for a targeted automation, up to tens of thousands for a full supply-chain transformation.",
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
          body: "Not in features shipped or licenses sold. An automation that doesn't return time is a failure — so we don't ship it.",
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
