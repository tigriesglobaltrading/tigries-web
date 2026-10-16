import type { Locale } from "./fr";

export const de: Locale = {
  meta: { title: "Tigries Global Trading | Bau-SaaS" },
  brand: { name: "Tigries", legalName: "Tigries Global Trading", mark: "T", homeAria: "Tigries Startseite" },
  nav: {
    announcement: "100.000 EUR eingesammelt, um die Bau-SaaS-Plattform zu beschleunigen. Angebot entdecken",
    links: [
      { label: "Plattform", href: "#product" },
      { label: "Module", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    getStarted: "Demo anfragen",
    signIn: "Anmelden",
    open: "Navigation offnen",
    close: "Navigation schliessen",
  },
  hero: {
    title: "Steuern Sie Ihr gesamtes Bauunternehmen aus einem Dashboard",
    subtitle:
      "Tigries richtet eine komplette SaaS-Plattform ein, um Kunden, Baustellen, Angebote, Rechnungen, Teams, Planung, Gerate, Lager, Aufgaben und Berichte zu verwalten.",
    cta: "Demo ansehen",
    commandPlaceholder: "Baustelle, Rechnung, Werkzeug oder Lagerwarnung suchen...",
    cards: ["Aktive Baustellen", "Offene Rechnungen", "Verfugbare Gerate"],
  },
  logos: ["Renovierung", "HVAC", "Elektro", "Sanitar", "Tiefbau", "Wartung"],
  proof: {
    stats: [
      { value: "12", label: "Module zur Zentralisierung der operativen Verwaltung" },
      { value: "1", label: "professionelles Dashboard angepasst an Ihre Prioritaten" },
      { value: "0", label: "verstreute Dateien in Excel, WhatsApp, Papier und Anrufen" },
    ],
    quote:
      "Tigries liefert nicht nur Software. Das Team konfiguriert ein komplettes System fur unsere Baustellen, Teams, Gerate und Fakturierung.",
    authorName: "Baukunde",
    authorRole: "Operative Leitung",
    authorInitials: "BK",
  },
  product: {
    label: "Bau-SaaS-Plattform",
    title: "Ihre operativen Ablaufe in Aktion",
    subtitle:
      "Ein einsatzbereiter Unternehmensbereich, konfiguriert mit Rollen, Status, Dokumenten, Daten und den Modulen, die Ihr Betrieb braucht.",
    cta: "Prasentation anfragen",
    pills: ["Unternehmen einrichten", "Daten importieren", "Dashboard anpassen"],
    cardLabel: "Live-Tracking",
    cardText: "Verfolge Geratestandorte, Flottenstatus, Routen und letzte Updates in Echtzeit in einer klaren Kartenansicht.",
  },
  features: [
    {
      label: "Baustellenverwaltung",
      title: "Zentralisieren Sie Kunden, Baustellen, Angebote und Rechnungen",
      mesh: "mesh-blue",
      visual: "profile",
      points: [
        { title: "Strukturierte Baustellen", body: "Verfolgen Sie Kunde, Adresse, Termine, Budget, Fortschritt, Team, Gerate, Aufgaben, Angebote und Rechnungen." },
        { title: "Angebote und Rechnungen", body: "Erstellen Sie Dokumente mit MwSt., Nummerierung, Logo, Bedingungen, Zahlungsstatus und Umwandlung von Angebot zu Rechnung." },
        { title: "Vollstandige Historie", body: "Bewahren Sie Kunden-, Interessenten-, Baustellen-, Notiz-, Angebots- und Rechnungshistorie an einem Ort auf." },
      ],
      visualTitle: "Gerateinventar",
      visualMeta: "Maschinen | Werkzeuge | Fahrzeuge | Verfugbarkeit",
      visualItems: ["Verfugbare Gerate", "Wartungsstatus", "Zugeordnetes Depot"],
    },
    {
      label: "Feld und Ressourcen",
      title: "Organisieren Sie Teams, Planung, Gerate und Lager",
      mesh: "mesh-green",
      visual: "chat",
      points: [
        { title: "Operative Planung", body: "Planen Sie Tag, Woche oder Monat mit Mitarbeiterzuweisung, Geratereservierung, Lieferungen und Wartung." },
        { title: "Wiederverwendbare Gerate", body: "Verwalten Sie Werkzeuge, Maschinen, Fahrzeuge, Lagerorte, Zustand, Zuweisungen, Wartung und manuelle Position." },
        { title: "Verbrauchsmaterial", body: "Verwalten Sie Mengen, Einheiten, Mindestbestande, Lieferanten, Bewegungen, Warnungen und Verbrauch pro Baustelle." },
      ],
      visualTitle: "Warnung niedriger Lagerbestand",
      visualMeta: "Elektrokabel | Hauptlager",
      visualItems: ["Gerat reserviert", "Mitarbeiter zugewiesen", "Konflikt erkannt"],
    },
    {
      label: "Anpassung",
      title: "Passen Sie die Plattform an Ihre Prozesse an",
      mesh: "mesh-orange",
      visual: "input",
      points: [
        { title: "Module nach Bedarf", body: "Aktivieren Sie nur was Sie brauchen: Dashboard, Kunden, Baustellen, Team, Planung, Gerate, Lager, Aufgaben, Berichte oder Einstellungen." },
        { title: "Rollen und Rechte", body: "Konfigurieren Sie Admins, Manager, Mitarbeiter, Buchhaltung oder Lagerleitung mit Modulzugriff und Bearbeitungsrechten." },
        { title: "Dokumente und Status", body: "Passen Sie Logos, Vorlagen, MwSt., Prefixe, Nummerierung und Status fur Kunden, Baustellen, Gerate, Lager und Aufgaben an." },
      ],
      visualTitle: "Unternehmenseinstellungen",
      visualMeta: "MwSt. | IBAN | Rollen | Nummerierung",
      visualItems: ["Firmenlogo", "Berechtigungen", "Fachstatus"],
    },
  ],
  onboarding: {
    title: "Eine komplette Einrichtung, nicht nur Softwarezugang",
    subtitle:
      "Wir analysieren Ihre Ablaufe, konfigurieren Ihren Bereich, importieren Ihre Daten und schulen Ihre Teams, damit die Plattform von Anfang an nutzbar ist.",
    cta: "Analyse anfragen",
    steps: [
      { number: "1.", title: "Audit und Umfang", body: "Wir analysieren Prozesse, Probleme, sinnvolle Module, Rollen und vorzubereitende Daten." },
      { number: "2.", title: "Individuelle Konfiguration", body: "Wir erstellen den Unternehmensbereich und konfigurieren Nutzer, MwSt., Nummerierung, Status, Dokumente, Logo und Dashboard." },
      { number: "3.", title: "Import, Schulung und Support", body: "Wir importieren Daten aus Excel, CSV oder Altsoftware und schulen Admins, Manager und Feldteams." },
    ],
    mockup: {
      eyebrow: "Unternehmensbereich",
      title: "Konfiguration & Daten",
      status: "Bereit",
      cards: ["Kunden und Interessenten", "Gerate und Fahrzeuge", "Lager und Lieferanten"],
      codeLabel: "Premium-Optionen",
      code: "API keys\nGPS-Tracking\nQR-Codes fur Gerate\nBuchhaltungsintegrationen",
    },
  },
  benefits: {
    title: "Digitalisieren Sie den Bau, ohne Tools zu vervielfachen",
    subtitle: "Ersetzen Sie Excel, WhatsApp, Papier, Anrufe und verstreute Software durch eine Plattform fur Ihre Ablaufe.",
    cards: [
      { title: "Einsatzbereit", body: "Komplette Einrichtung, Unternehmenskonfiguration, Module, Dokumente, Dashboard, Hosting, Backups und Updates." },
      { title: "An Ihr Gewerk angepasst", body: "Bau, Renovierung, Elektro, Sanitar, HVAC, Tiefbau, Strassenbau oder Gebaudewartung." },
      { title: "Skalierbar", body: "Erweitern Sie mit API, Webhooks, GPS-Tracking, QR-Codes, Kundenportal, Buchhaltungsschnittstellen oder mobiler Feld-App." },
    ],
  },
  testimonials: [
    { quote: "Wir bieten nicht nur Software. Wir implementieren ein komplettes Managementsystem fur Bauunternehmen.", name: "Tigries Global Trading", role: "Bau-SaaS-Anbieter", initials: "TG" },
    { quote: "Eine All-in-one-SaaS-Plattform fur Baustellen, Teams, Rechnungen, Lager und Gerate aus einem Dashboard.", name: "Tigries Global Trading", role: "Operative Losung", initials: "TG" },
  ],
  carousel: { previous: "Vorherige Referenz", next: "Nachste Referenz" },
  faq: {
    title: "Haufige Fragen",
    items: [
      { question: "Welche Module sind enthalten?", answer: "Die Plattform umfasst Dashboard, Kunden, Baustellen, Angebote, Rechnungen, Team, Planung, Gerate, Lager, Aufgaben, Berichte und Unternehmenseinstellungen." },
      { question: "Ist die Plattform anpassbar?", answer: "Ja. Module, Rollen, Rechte, Status, Dokumente, MwSt., Nummerierung, Dashboard-Widgets und Fachfelder konnen angepasst werden." },
      { question: "Konnt ihr bestehende Daten importieren?", answer: "Ja. Wir unterstutzen Importe aus Excel, CSV, Altsoftware, Kundenlisten, Geratelisten, Lagerlisten, Angeboten und Rechnungen." },
      { question: "Welche Services sind im Abo enthalten?", answer: "Das Abo enthalt Hosting, Backups, Updates, Bugfixes, Nutzersupport, Sicherheit und kontinuierliche Verbesserung." },
      { question: "Gibt es Premium-Optionen?", answer: "Ja. API keys, erweitertes GPS-Tracking, QR-Codes fur Gerate, Webhooks, Buchhaltungsintegrationen, Kundenportal und mobile App konnen erganzt werden." },
      { question: "Wie sieht das Angebot aus?", answer: "Das empfohlene Pro-Angebot umfasst ein komplettes Setup fur 5000 EUR zzgl. MwSt. und ein Abo von 500 EUR zzgl. MwSt. pro Monat, empfohlen mit 12 Monaten Laufzeit." },
    ],
  },
  finalCta: { title: "Digitalisieren Sie die komplette Verwaltung Ihres Bauunternehmens", cta: "Demo planen" },
  requestDemo: {
    eyebrow: "Demo-Anfrage",
    title: "Lassen Sie uns uber Ihre Bauablaufe sprechen",
    subtitle:
      "Teilen Sie einige Informationen zu Ihrem Unternehmen. Wir bereiten eine Demo vor, die zu Baustellen, Teams, Geraten, Rechnungen und bestehenden Daten passt.",
    formTitle: "Kontaktdaten",
    fields: {
      name: "Vollstandiger Name",
      company: "Unternehmen",
      email: "Geschaftliche E-Mail",
      phone: "Telefon",
      trade: "Haupttatigkeit",
      message: "Ihr Kontext",
    },
    submit: "Anfrage senden",
    asideTitle: "Was wir im Gesprach klaren",
    asideItems: ["Sinnvolle Module", "Zu importierende Daten", "Rollen und Rechte", "Angebote, Rechnungen und MwSt.", "Planung, Gerate und Lager"],
    backHome: "Zuruck zur Website",
  },
  footer: {
    disclaimer:
      "Tigries Global Trading bietet eine anpassbare Bau-SaaS-Losung. Module, Optionen, Preise und Integrationen konnen je nach Kundenprojekt variieren.",
    columns: [
      { title: "Services", links: ["Kundenportal", "APIs", "Schulung"] },
      { title: "Rechtliches", links: ["Legal Notice", "Imprint"] },
    ],
  },
};
