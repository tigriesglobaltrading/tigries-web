import type { Locale } from "./fr";

export const es: Locale = {
  meta: { title: "Tigries Global Trading | SaaS para construccion" },
  brand: { name: "Tigries", legalName: "Tigries Global Trading", mark: "T", homeAria: "Inicio de Tigries" },
  nav: {
    announcement: "100.000 EUR recaudados para acelerar la plataforma SaaS de construccion. Descubrir la oferta",
    links: [
      { label: "Plataforma", href: "#product" },
      { label: "Modulos", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    getStarted: "Pedir demo",
    signIn: "Acceso",
    open: "Abrir navegacion",
    close: "Cerrar navegacion",
  },
  hero: {
    title: "Dirige toda tu empresa de construccion desde un solo dashboard",
    subtitle:
      "Tigries implementa una plataforma SaaS completa para gestionar clientes, obras, presupuestos, facturas, equipos, planificacion, maquinaria, stock, tareas e informes.",
    cta: "Ver la demo",
    commandPlaceholder: "Buscar una obra, factura, herramienta o alerta de stock bajo...",
    cards: ["Obras activas", "Facturas pendientes", "Maquinaria disponible"],
  },
  logos: ["Reformas", "HVAC", "Electricidad", "Fontaneria", "Movimiento de tierras", "Mantenimiento"],
  proof: {
    stats: [
      { value: "12", label: "modulos para centralizar la gestion operativa" },
      { value: "1", label: "dashboard profesional adaptado a tus prioridades" },
      { value: "0", label: "archivos dispersos entre Excel, WhatsApp, papel y llamadas" },
    ],
    quote:
      "Tigries no entrega solo un software. El equipo configura un sistema completo adaptado a nuestras obras, equipos, maquinaria y facturacion.",
    authorName: "Cliente BTP",
    authorRole: "Direccion operativa",
    authorInitials: "CB",
  },
  product: {
    label: "Plataforma SaaS para construccion",
    title: "Tu gestion operativa en accion",
    subtitle:
      "Un espacio de empresa listo para usar, configurado con tus roles, estados, documentos, datos y los modulos utiles para tu actividad.",
    cta: "Solicitar presentacion",
    pills: ["Configuracion de empresa", "Importacion de datos", "Dashboard personalizado"],
    cardLabel: "Tracking en vivo",
    cardText: "Sigue posiciones de equipos, estado de flota, rutas y ultimas actualizaciones en tiempo real desde un mapa claro.",
  },
  features: [
    {
      label: "Gestion de obras",
      title: "Centraliza clientes, obras, presupuestos y facturas",
      mesh: "mesh-blue",
      visual: "profile",
      points: [
        { title: "Obras estructuradas", body: "Sigue cliente, direccion, fechas, presupuesto, avance, equipo asignado, maquinaria, tareas, presupuestos y facturas." },
        { title: "Presupuestos y facturas", body: "Crea documentos con IVA, numeracion, logo, condiciones, estados de pago y conversion de presupuesto a factura." },
        { title: "Historial completo", body: "Conserva historial de clientes, prospectos, obras, notas internas, presupuestos emitidos y facturas vinculadas." },
      ],
      visualTitle: "Inventario de equipos",
      visualMeta: "Maquinas | herramientas | vehiculos | disponibilidad",
      visualItems: ["Equipo disponible", "Estado mantenimiento", "Almacen asignado"],
    },
    {
      label: "Campo y recursos",
      title: "Organiza equipos, planificacion, maquinaria y stock",
      mesh: "mesh-green",
      visual: "chat",
      points: [
        { title: "Planificacion operativa", body: "Planifica por dia, semana o mes con asignacion de empleados, reservas de equipos, entregas y mantenimiento." },
        { title: "Maquinaria reutilizable", body: "Sigue herramientas, maquinas, vehiculos, almacenes, estado, asignaciones, mantenimiento y ubicacion manual." },
        { title: "Stock consumible", body: "Gestiona cantidades, unidades, minimos, proveedores, movimientos, alertas de stock bajo y consumo por obra." },
      ],
      visualTitle: "Alerta de stock bajo",
      visualMeta: "Cables electricos | almacen principal",
      visualItems: ["Equipo reservado", "Empleado asignado", "Conflicto detectado"],
    },
    {
      label: "Personalizacion",
      title: "Adapta la plataforma a tus procesos",
      mesh: "mesh-orange",
      visual: "input",
      points: [
        { title: "Modulos a medida", body: "Activa solo lo necesario: dashboard, clientes, obras, equipo, planificacion, maquinaria, stock, tareas, informes o ajustes." },
        { title: "Roles y permisos", body: "Configura admin, manager, employee, accountant o warehouse manager con accesos por modulo y derechos de edicion." },
        { title: "Documentos y estados", body: "Personaliza logos, plantillas, IVA, prefijos, numeracion y estados de clientes, obras, maquinaria, stock y tareas." },
      ],
      visualTitle: "Ajustes de empresa",
      visualMeta: "IVA | IBAN | roles | numeracion",
      visualItems: ["Logo empresa", "Permisos", "Estados internos"],
    },
  ],
  onboarding: {
    title: "Una implementacion completa, no solo acceso al software",
    subtitle:
      "Analizamos tus procesos, configuramos tu espacio, importamos tus datos y formamos a tus equipos para que la plataforma sea util desde el inicio.",
    cta: "Solicitar diagnostico",
    steps: [
      { number: "1.", title: "Auditoria y alcance", body: "Analizamos procesos, problemas, modulos utiles, roles y datos a preparar." },
      { number: "2.", title: "Configuracion personalizada", body: "Creamos el espacio de empresa y configuramos usuarios, IVA, numeracion, estados, documentos, logo y dashboard." },
      { number: "3.", title: "Importacion, formacion y soporte", body: "Importamos datos desde Excel, CSV o herramientas antiguas, y formamos administradores, managers y equipos de campo." },
    ],
    mockup: {
      eyebrow: "Espacio empresa",
      title: "Configuracion y datos",
      status: "Listo",
      cards: ["Clientes y prospectos", "Maquinaria y vehiculos", "Stock y proveedores"],
      codeLabel: "Opciones premium",
      code: "API keys\nTracking GPS\nCodigos QR maquinaria\nIntegraciones contables",
    },
  },
  benefits: {
    title: "Digitaliza la construccion sin multiplicar herramientas",
    subtitle: "Sustituye Excel, WhatsApp, papel, llamadas y software disperso por una unica plataforma operativa.",
    cards: [
      { title: "Listo para usar", body: "Setup completo, configuracion de empresa, modulos, documentos, dashboard, hosting, copias de seguridad y actualizaciones." },
      { title: "Adaptado a tu oficio", body: "Construccion, reformas, electricidad, fontaneria, HVAC, movimiento de tierras, vias o mantenimiento de edificios." },
      { title: "Escalable", body: "Anade API, webhooks, tracking GPS, codigos QR, portal cliente, integraciones contables o app movil de campo." },
    ],
  },
  testimonials: [
    { quote: "No proponemos solo un software. Implementamos un sistema completo de gestion para empresas de construccion.", name: "Tigries Global Trading", role: "Editor SaaS BTP", initials: "TG" },
    { quote: "Una plataforma SaaS todo en uno para controlar obras, equipos, facturas, stock y maquinaria desde un solo dashboard.", name: "Tigries Global Trading", role: "Solucion operativa", initials: "TG" },
  ],
  carousel: { previous: "Testimonio anterior", next: "Testimonio siguiente" },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { question: "Que modulos estan incluidos?", answer: "La plataforma cubre dashboard, clientes, obras, presupuestos, facturas, equipo, planificacion, maquinaria, stock, tareas, informes y ajustes de empresa." },
      { question: "La plataforma se personaliza?", answer: "Si. Modulos, roles, permisos, estados, documentos, IVA, numeracion, widgets del dashboard y campos de negocio pueden adaptarse." },
      { question: "Podeis importar nuestros datos?", answer: "Si. Podemos acompanar la importacion desde Excel, CSV, software antiguo, listas de clientes, maquinaria, stock, presupuestos y facturas." },
      { question: "Que incluye la suscripcion?", answer: "Incluye hosting, copias de seguridad, actualizaciones, correcciones, soporte usuario, seguridad y mejora continua." },
      { question: "Hay opciones premium?", answer: "Si. API keys, tracking GPS avanzado, codigos QR para maquinaria, webhooks, integraciones contables, portal cliente y app movil pueden anadirse." },
      { question: "Cual es la oferta comercial?", answer: "La oferta Pro recomendada incluye setup completo por 5000 EUR sin IVA y suscripcion de 500 EUR sin IVA al mes, con compromiso recomendado de 12 meses." },
    ],
  },
  finalCta: { title: "Digitaliza la gestion completa de tu empresa de construccion", cta: "Planificar una demo" },
  requestDemo: {
    eyebrow: "Solicitud de demo",
    title: "Hablemos de tus operaciones de construccion",
    subtitle:
      "Comparte algunos datos sobre tu empresa. Prepararemos una demo adaptada a tus obras, equipos, maquinaria, facturacion y datos existentes.",
    formTitle: "Informacion de contacto",
    fields: {
      name: "Nombre completo",
      company: "Empresa",
      email: "Email profesional",
      phone: "Telefono",
      trade: "Actividad principal",
      message: "Tu contexto",
    },
    submit: "Enviar solicitud",
    asideTitle: "Lo que definimos durante la llamada",
    asideItems: ["Modulos utiles", "Datos a importar", "Roles y permisos", "Presupuestos, facturas e IVA", "Planificacion, maquinaria y stock"],
    backHome: "Volver al sitio",
  },
  footer: {
    disclaimer:
      "Tigries Global Trading edita una solucion SaaS BTP personalizable. Los modulos, opciones, precios e integraciones pueden variar segun el proyecto cliente.",
    columns: [
      { title: "Servicios", links: ["Portal cliente", "APIs", "Formacion"] },
      { title: "Legal", links: ["Aviso legal", "Imprint"] },
    ],
  },
};
