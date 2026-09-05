/**
 * Bidiex Studio — Projects.
 *
 * Single source for both the carousel cards (rendered at build time by
 * Projects.astro) and the detail modal (filled at runtime by main.js), which
 * used to keep two hand-synced copies of the same content.
 *
 * `image` is resolved against /public. `meta` is the small dotted line at the
 * bottom of a card. Taglines are swapped by i18n through project.<id>.tagline.
 */
export const projects = [
    {
        id: 'traego',
        name: 'TraeGo',
        status: 'active',
        statusLabel: 'En producción',
        tagline: 'Plataforma SaaS B2B2C de gestión integral de gastronegocios',
        image: '/traego.webp',
        tech: ['React', 'Node.js', 'Supabase'],
        meta: ['2026', 'SaaS', 'B2B2C'],
        tags: ['Web App', 'Gestión de gastronegocios'],
        features: [
            'Catálogo / Menú digital',
            'Módulo de domiciliarios',
            'Facturación',
            'Seguimiento de comanda',
            'Personalización de marca',
            'Página de enlaces',
            'KPIs'
        ],
        url: 'https://www.traego.app',
        hasUrl: true
    },
    {
        id: 'albumcorp',
        name: 'AlbumCorp',
        status: 'active',
        statusLabel: 'En producción',
        tagline: 'Plataforma SaaS B2B de álbumes de colección estilo Panini para empresas',
        image: '/albumcorp.webp',
        tech: ['React', 'TypeScript', 'PostgreSQL'],
        meta: ['2025', 'SaaS B2B', 'Platform'],
        tags: ['Web App', 'Entretenimiento', 'Cultura organizacional'],
        features: [
            'Creación personalizada de álbum',
            'Intercambio de laminitas',
            'Obtención de medallas y logros',
            'Ranking de coleccionistas',
            'Parametrización de entrega de sobres',
            '3 tipos de láminas',
            'Autenticación por usuario'
        ],
        url: 'https://albumcorp.vercel.app',
        hasUrl: true
    },
    {
        id: 'invio',
        name: 'Invio',
        status: 'dev',
        statusLabel: 'En desarrollo',
        tagline: 'Servicio B2C de invitaciones digitales para todo tipo de eventos',
        image: null,
        tech: ['Next.js', 'Tailwind', 'Stripe'],
        meta: ['2026', 'B2C', 'Web'],
        tags: ['Web', 'Eventos'],
        features: [
            'Confirmación de asistentes',
            'Galería de fotos',
            'Dress code',
            'Música personalizada',
            'Invitación animada',
            'Ubicación en Google Maps',
            'Cuenta regresiva al evento'
        ],
        url: null,
        hasUrl: false
    },
    {
        id: 'sellogo',
        name: 'SelloGo',
        status: 'dev',
        statusLabel: 'En desarrollo',
        tagline: 'Plataforma SaaS B2B2C de tarjetas de fidelización digitales',
        image: null,
        tech: ['React Native', 'Firebase'],
        meta: ['2026', 'App', 'B2B2C'],
        tags: ['Web App', 'Fidelización de clientes'],
        features: [
            'Escaneo por NFC o QR en punto de atención',
            'Multitarjetas de fidelización',
            'Registro de usuarios',
            'Activación antifraude de ventana de escaneo'
        ],
        url: null,
        hasUrl: false
    },
    {
        id: 'carcopilot',
        name: 'CarCopilot',
        status: 'dev',
        statusLabel: 'En desarrollo',
        tagline: 'App B2C de gestión inteligente de gastos vehiculares potenciada con IA',
        image: null,
        tech: ['Expo', 'Node.js', 'OpenAI'],
        meta: ['2026', 'AI', 'App B2C'],
        tags: ['App', 'Seguimiento de gastos'],
        features: [
            'Asistente activo de IA',
            'Historial y seguimiento de gastos',
            'Seguimiento del estado del vehículo',
            'Alertas de vencimiento de impuestos',
            'Indicadores de rendimiento',
            'Soporte para vehículos de combustión y eléctricos'
        ],
        url: null,
        hasUrl: false
    }
];

/** Keyed lookup used by the modal, which resolves cards by data-project. */
export const projectsById = Object.fromEntries(projects.map(p => [p.id, p]));
