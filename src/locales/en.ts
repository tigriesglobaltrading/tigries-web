import type { Locale } from "./fr";

export const en: Locale = {
  meta: { title: "Tigries Global Trading | Construction SaaS" },
  brand: { name: "Tigries", legalName: "Tigries Global Trading", mark: "T", homeAria: "Tigries home" },
  nav: {
    announcement: "EUR 100,000 raised to accelerate the construction SaaS platform. Discover the offer",
    links: [
      { label: "Platform", href: "#product" },
      { label: "Modules", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    getStarted: "Request a demo",
    signIn: "Sign in",
    open: "Open navigation",
    close: "Close navigation",
  },
  hero: {
    title: "Run your entire construction business from one dashboard",
    subtitle:
      "Tigries implements a complete SaaS platform to manage clients, jobsites, quotes, invoices, teams, schedules, equipment, stock, tasks, and reports.",
    cta: "View the demo",
    commandPlaceholder: "Search a jobsite, invoice, tool, or low-stock alert...",
    cards: ["Active jobsites", "Unpaid invoices", "Available equipment"],
  },
  logos: ["Renovation", "HVAC", "Electrical", "Plumbing", "Earthworks", "Maintenance"],
  proof: {
    stats: [
      { value: "12", label: "modules to centralize operational management" },
      { value: "1", label: "professional dashboard adapted to your priorities" },
      { value: "0", label: "scattered files across Excel, WhatsApp, paper, and calls" },
    ],
    quote:
      "Tigries does not just deliver software. The team configures a full operating system adapted to our jobsites, teams, equipment, and billing.",
    authorName: "Construction client",
    authorRole: "Operations management",
    authorInitials: "CC",
  },
  product: {
    label: "Construction SaaS platform",
    title: "Your operations in action",
    subtitle:
      "A ready-to-use company workspace configured with your roles, statuses, documents, data, and the modules that matter to your activity.",
    cta: "Request a presentation",
    pills: ["Company setup", "Data import", "Custom dashboard"],
    cardLabel: "Live tracking",
    cardText: "Track equipment positions, fleet status, routes, and last updates in real time from one clear map view.",
  },
  features: [
    {
      label: "Jobsite management",
      title: "Centralize clients, jobsites, quotes, and invoices",
      mesh: "mesh-blue",
      visual: "profile",
      points: [
        { title: "Structured jobsites", body: "Track client, address, dates, budget, progress, assigned team, equipment, tasks, quotes, and invoices." },
        { title: "Quotes and invoices", body: "Create documents with VAT, numbering, logo, terms, payment statuses, and quote-to-invoice conversion." },
        { title: "Complete history", body: "Keep client, prospect, jobsite, internal note, quote, and invoice history in one place." },
      ],
      visualTitle: "Equipment inventory",
      visualMeta: "Machines | tools | vehicles | availability",
      visualItems: ["Available equipment", "Maintenance status", "Depot location"],
    },
    {
      label: "Field and resources",
      title: "Organize teams, schedules, equipment, and stock",
      mesh: "mesh-green",
      visual: "chat",
      points: [
        { title: "Operational planning", body: "Plan by day, week, or month with employee assignment, equipment booking, deliveries, and maintenance." },
        { title: "Reusable equipment", body: "Track tools, machines, vehicles, depots, condition, assignments, maintenance, and manual location." },
        { title: "Consumable stock", body: "Manage quantities, units, minimum levels, suppliers, movements, low-stock alerts, and jobsite consumption." },
      ],
      visualTitle: "Low stock alert",
      visualMeta: "Electrical cables | main depot",
      visualItems: ["Equipment reserved", "Employee assigned", "Conflict detected"],
    },
    {
      label: "Customization",
      title: "Adapt the platform to your business processes",
      mesh: "mesh-orange",
      visual: "input",
      points: [
        { title: "Choose your modules", body: "Activate only what you need: dashboard, clients, jobsites, team, planning, equipment, stock, tasks, reports, or settings." },
        { title: "Roles and permissions", body: "Configure admins, managers, employees, accountants, or warehouse managers with module access and edit rights." },
        { title: "Documents and statuses", body: "Customize logos, templates, VAT, prefixes, numbering, and statuses for clients, jobsites, equipment, stock, and tasks." },
      ],
      visualTitle: "Company settings",
      visualMeta: "VAT | IBAN | roles | numbering",
      visualItems: ["Company logo", "Permissions", "Business statuses"],
    },
  ],
  onboarding: {
    title: "A complete setup, not just software access",
    subtitle:
      "We map your workflows, configure your workspace, import your data, and train your teams so the platform is usable from day one.",
    cta: "Request a scoping call",
    steps: [
      { number: "1.", title: "Audit and scoping", body: "We analyze your processes, pain points, useful modules, roles, and data to prepare." },
      { number: "2.", title: "Custom configuration", body: "We create the company workspace and configure users, VAT, numbering, statuses, documents, logo, and dashboard." },
      { number: "3.", title: "Import, training, and support", body: "We import data from Excel, CSV, or legacy tools, then train admins, managers, and field teams." },
    ],
    mockup: {
      eyebrow: "Company workspace",
      title: "Configuration & data",
      status: "Ready",
      cards: ["Clients and prospects", "Equipment and vehicles", "Stock and suppliers"],
      codeLabel: "Premium options",
      code: "API keys\nGPS tracking\nEquipment QR codes\nAccounting integrations",
    },
  },
  benefits: {
    title: "Digitalize construction without multiplying tools",
    subtitle: "Replace Excel files, WhatsApp, paper, calls, and scattered software with one platform for your operations.",
    cards: [
      { title: "Ready to use", body: "Complete setup, company configuration, modules, documents, dashboard, hosting, backups, and updates." },
      { title: "Built for your trade", body: "Construction, renovation, electrical, plumbing, HVAC, earthworks, roadworks, or building maintenance." },
      { title: "Scalable", body: "Add APIs, webhooks, GPS tracking, equipment QR codes, customer portal, accounting integrations, or field mobile app." },
    ],
  },
  testimonials: [
    {
      quote: "We do not just offer software. We implement a complete management system for construction companies.",
      name: "Tigries Global Trading",
      role: "Construction SaaS publisher",
      initials: "TG",
    },
    {
      quote: "An all-in-one SaaS platform to manage jobsites, teams, invoices, stock, and equipment from one dashboard.",
      name: "Tigries Global Trading",
      role: "Operational solution",
      initials: "TG",
    },
  ],
  carousel: { previous: "Previous testimonial", next: "Next testimonial" },
  faq: {
    title: "Frequently asked questions",
    items: [
      { question: "Which modules are included?", answer: "The platform covers dashboard, clients, jobsites, quotes, invoices, team, planning, equipment, stock, tasks, reports, and company settings." },
      { question: "Is the platform customized?", answer: "Yes. Modules, roles, permissions, statuses, documents, VAT, numbering, dashboard widgets, and business fields can be adapted." },
      { question: "Can you import our existing data?", answer: "Yes. We can support imports from Excel, CSV, legacy software, client lists, equipment lists, stock lists, quotes, and invoices." },
      { question: "What services are included in the subscription?", answer: "The subscription includes hosting, backups, updates, bug fixes, user support, security, and continuous improvement." },
      { question: "Are premium options available?", answer: "Yes. API keys, advanced GPS tracking, equipment QR codes, webhooks, accounting integrations, customer portal, and field mobile app can be added." },
      { question: "What is the commercial offer?", answer: "The recommended Pro offer includes a full setup at EUR 5,000 excl. VAT and a EUR 500 excl. VAT monthly subscription, with a recommended 12-month commitment." },
    ],
  },
  finalCta: { title: "Digitalize the full management of your construction business", cta: "Schedule a demo" },
  requestDemo: {
    eyebrow: "Demo request",
    title: "Let’s discuss your construction operations",
    subtitle:
      "Share a few details about your company. We will prepare a demo adapted to your jobsites, teams, equipment, invoicing, and existing data.",
    formTitle: "Contact information",
    fields: {
      name: "Full name",
      company: "Company",
      email: "Work email",
      phone: "Phone",
      trade: "Main activity",
      message: "Your context",
    },
    submit: "Send request",
    asideTitle: "What we scope during the call",
    asideItems: ["Useful modules", "Data to import", "Roles and permissions", "Quotes, invoices, and VAT", "Planning, equipment, and stock"],
    backHome: "Back to site",
  },
  footer: {
    disclaimer:
      "Tigries Global Trading publishes a customizable construction SaaS solution. Modules, options, pricing, and integrations may vary depending on the client project.",
    columns: [
      { title: "Services", links: ["Customer portal", "APIs", "Training"] },
      { title: "Legal", links: ["Legal notice", "Imprint"] },
    ],
  },
};
