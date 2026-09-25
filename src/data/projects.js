/**
 * Bidiex Studio — Projects.
 *
 * Single source for both the showcase rows (rendered at build time by
 * Projects.astro) and the detail modal (filled at runtime by main.js), which
 * used to keep two hand-synced copies of the same content.
 *
 * `meta[0]` is the year shown at the right of a row; the rest of `meta` is no
 * longer rendered. Taglines are swapped by i18n through
 * project.<id>.tagline, and are the row's headline.
 *
 * `preview` drives both the row and the modal visual:
 *   { type: 'embed', src }  — live iframe of the real product's hero.
 *   { type: 'image', src }  — static screenshot resolved against /public.
 *   null                    — nothing to show yet: the row sets the project's
 *                             name in the frame instead of leaving a hole.
 * Use 'embed' only for sites that allow framing. A site that answers with
 * `X-Frame-Options` or a `frame-ancestors` CSP renders as a blank box, so it
 * has to fall back to an image — TraeGo currently sends SAMEORIGIN.
 *
 * `en` carries the English copy of every prose field (see localizeProject);
 * the i18n dictionary derives the row keys from it, so there is no second copy.
 *
 * `problem` / `solution` / `outcome` carry the modal's sales narrative. The
 * order is deliberate: the reader meets the cost of the status quo, then the
 * approach, then what changes. `features` stays as the supporting detail,
 * because a list of capabilities persuades nobody who is not already sold.
 */
export const projects = [
    {
        id: 'traego',
        name: 'TraeGo',
        status: 'active',
        statusLabel: 'En producción',
        tagline: 'Plataforma SaaS B2B2C de gestión integral de gastronegocios',
        preview: { type: 'image', src: '/traego.webp' },
        tech: ['React', 'Node.js', 'Supabase'],
        meta: ['2026', 'SaaS', 'B2B2C'],
        tags: ['Web App', 'Gestión de gastronegocios'],
        problem: 'Las plataformas de domicilios se quedan con una tajada de cada venta y, peor aún, con la relación con el cliente. El restaurante pequeño termina trabajando para la plataforma y sin datos propios.',
        solution: 'Un catálogo digital propio: el comensal pide desde el navegador, el pedido llega formateado a WhatsApp y el negocio conserva la venta, el margen y el contacto.',
        outcome: [
            'Cero comisiones por pedido: las ganancias se quedan en el negocio',
            'Menos errores de cocina, porque el pedido llega estructurado y no dictado por chat',
            'El cliente no instala nada: todo ocurre en el navegador del celular',
            'Domiciliarios, facturación y KPIs en un solo panel'
        ],
        features: [
            'Catálogo / Menú digital',
            'Módulo de domiciliarios',
            'Facturación',
            'Seguimiento de comanda',
            'Personalización de marca',
            'Página de enlaces',
            'KPIs'
        ],
        en: {
            statusLabel: 'Live',
            tagline: 'B2B2C SaaS platform for full restaurant business management',
            tags: ['Web App', 'Restaurant management'],
            problem: 'Delivery platforms take a cut of every sale and, worse, they keep the customer relationship. The small restaurant ends up working for the platform, with no data of its own.',
            solution: 'A catalogue the restaurant owns: diners order from the browser, the order lands formatted in WhatsApp and the business keeps the sale, the margin and the contact.',
            outcome: [
                'Zero per-order commissions: the profit stays in the business',
                'Fewer kitchen mistakes, because orders arrive structured instead of dictated over chat',
                'Customers install nothing: everything happens in their phone browser',
                'Couriers, invoicing and KPIs in a single dashboard'
            ],
            features: [
                'Digital catalogue / menu',
                'Courier module',
                'Invoicing',
                'Order tracking',
                'Brand customisation',
                'Link-in-bio page',
                'KPIs'
            ]
        },
        url: 'https://www.traego.app',
        hasUrl: true
    },
    {
        id: 'invio',
        name: 'Invio',
        status: 'dev',
        statusLabel: 'En desarrollo',
        tagline: 'Servicio B2C de invitaciones digitales para todo tipo de eventos',
        preview: { type: 'embed', src: 'https://invio-invitaciones-digitales.vercel.app/' },
        tech: ['Next.js', 'Tailwind', 'Stripe'],
        meta: ['2026', 'B2C', 'Web'],
        tags: ['Web', 'Eventos'],
        problem: 'Una invitación en PDF o imagen no confirma asistencia, no se actualiza si algo cambia y obliga al anfitrión a perseguir respuestas una por una por WhatsApp.',
        solution: 'Una invitación web que se comporta como una aplicación —animada, con cuenta regresiva, mapa, música y galería— acompañada de un panel donde el anfitrión ve las confirmaciones en tiempo real.',
        outcome: [
            'Confirmaciones en tiempo real, sin perseguir invitados',
            'Un solo enlace que viaja por WhatsApp, Instagram, correo o código QR',
            'El invitado no instala nada: abre y responde en el navegador',
            'Tres niveles de experiencia, del esencial al luxury'
        ],
        features: [
            'Confirmación de asistentes',
            'Galería de fotos',
            'Dress code',
            'Música personalizada',
            'Invitación animada',
            'Ubicación en Google Maps',
            'Cuenta regresiva al evento'
        ],
        en: {
            statusLabel: 'In development',
            tagline: 'B2C digital invitation service for all types of events',
            tags: ['Web', 'Events'],
            problem: 'A PDF or image invitation cannot confirm attendance, cannot update when plans change and leaves the host chasing replies one by one on WhatsApp.',
            solution: 'A web invitation that behaves like an app —animated, with a countdown, map, music and gallery— paired with a dashboard where the host sees confirmations in real time.',
            outcome: [
                'Real-time RSVPs, without chasing guests',
                'One link that travels over WhatsApp, Instagram, email or QR code',
                'Guests install nothing: they open and reply in the browser',
                'Three experience tiers, from essential to luxury'
            ],
            features: [
                'Guest RSVP',
                'Photo gallery',
                'Dress code',
                'Custom music',
                'Animated invitation',
                'Google Maps location',
                'Event countdown'
            ]
        },
        url: 'https://invio-invitaciones-digitales.vercel.app/',
        hasUrl: true
    },
    {
        id: 'albumcorp',
        name: 'AlbumCorp',
        status: 'active',
        statusLabel: 'En producción',
        tagline: 'Plataforma SaaS B2B de álbumes de colección estilo Panini para empresas',
        preview: { type: 'embed', src: 'https://albumcorp.vercel.app' },
        tech: ['React', 'TypeScript', 'PostgreSQL'],
        meta: ['2025', 'SaaS B2B', 'Platform'],
        tags: ['Web App', 'Entretenimiento', 'Cultura organizacional'],
        problem: 'En equipos grandes, híbridos o repartidos en varias sedes la gente no llega a conocerse, y las iniciativas de cultura terminan siendo correos que nadie abre.',
        solution: 'Un álbum de láminas digital hecho con el equipo real de la empresa: sobres periódicos, intercambio entre compañeros, medallas por área y ranking de coleccionistas.',
        outcome: [
            'Participación voluntaria: el juego logra lo que no logra un comunicado interno',
            'Los colaboradores se descubren entre áreas y sedes',
            'Puesta en marcha en tres pasos: registro, carga del equipo y enlace de acceso',
            'Láminas legendarias y retos que sostienen el interés en el tiempo'
        ],
        features: [
            'Creación personalizada de álbum',
            'Intercambio de laminitas',
            'Obtención de medallas y logros',
            'Ranking de coleccionistas',
            'Parametrización de entrega de sobres',
            '3 tipos de láminas',
            'Autenticación por usuario'
        ],
        en: {
            statusLabel: 'Live',
            tagline: 'B2B SaaS platform for Panini-style corporate sticker albums',
            tags: ['Web App', 'Entertainment', 'Company culture'],
            problem: 'In large, hybrid or multi-site teams people never get to know each other, and culture initiatives end up as emails nobody opens.',
            solution: 'A digital sticker album made with the company’s real team: periodic packs, trading between colleagues, team badges and a collectors’ leaderboard.',
            outcome: [
                'Voluntary engagement: the game achieves what an internal memo cannot',
                'Employees discover each other across teams and offices',
                'Up and running in three steps: sign-up, team upload and access link',
                'Legendary stickers and challenges that keep interest alive over time'
            ],
            features: [
                'Custom album creation',
                'Sticker trading',
                'Badges and achievements',
                'Collectors’ leaderboard',
                'Configurable pack delivery',
                '3 sticker types',
                'Per-user authentication'
            ]
        },
        url: 'https://albumcorp.vercel.app',
        hasUrl: true
    },
    {
        id: 'sellogo',
        name: 'SelloGo',
        status: 'dev',
        statusLabel: 'En desarrollo',
        tagline: 'Plataforma SaaS B2B2C de tarjetas de fidelización digitales',
        preview: null,
        tech: ['React Native', 'Firebase'],
        meta: ['2026', 'App', 'B2B2C'],
        tags: ['Web App', 'Fidelización de clientes'],
        problem: 'La tarjeta de sellos de cartón se pierde, se falsifica y no deja un solo dato sobre el cliente que sí vuelve.',
        solution: 'Fidelización digital: el cliente acumula sellos con NFC o QR en el punto de atención, y el negocio ve quién regresa, cada cuánto y después de qué.',
        outcome: [
            'Todas las tarjetas del cliente viven en un mismo lugar',
            'Ventana antifraude en el escaneo, para que el sello se gane en el punto',
            'Datos reales de recurrencia en vez de intuición'
        ],
        features: [
            'Escaneo por NFC o QR en punto de atención',
            'Multitarjetas de fidelización',
            'Registro de usuarios',
            'Activación antifraude de ventana de escaneo'
        ],
        en: {
            statusLabel: 'In development',
            tagline: 'B2B2C SaaS platform for digital loyalty cards',
            tags: ['Web App', 'Customer loyalty'],
            problem: 'The cardboard stamp card gets lost, gets forged and leaves not a single data point about the customer who does come back.',
            solution: 'Digital loyalty: customers collect stamps via NFC or QR at the counter, and the business sees who returns, how often and after what.',
            outcome: [
                'All of a customer’s cards live in one place',
                'Anti-fraud scan window, so a stamp is earned at the counter',
                'Real repeat-visit data instead of gut feeling'
            ],
            features: [
                'NFC or QR scanning at the point of sale',
                'Multiple loyalty cards',
                'User registration',
                'Anti-fraud scan window'
            ]
        },
        url: null,
        hasUrl: false
    },
    {
        id: 'carcopilot',
        name: 'CarCopilot',
        status: 'dev',
        statusLabel: 'En desarrollo',
        tagline: 'App B2C de gestión inteligente de gastos vehiculares potenciada con IA',
        preview: null,
        tech: ['Expo', 'Node.js', 'OpenAI'],
        meta: ['2026', 'AI', 'App B2C'],
        tags: ['App', 'Seguimiento de gastos'],
        problem: 'El gasto real de un vehículo vive repartido entre fotos de recibos, memoria y grupos de WhatsApp: casi nadie sabe cuánto le cuesta de verdad su carro.',
        solution: 'Una app con asistente de IA que registra los gastos, sigue el estado del vehículo y avisa antes de que venzan impuestos y mantenimientos.',
        outcome: [
            'Costo real por kilómetro, medido y no estimado',
            'Alertas antes del vencimiento, no después de la multa',
            'Vehículos de combustión y eléctricos en el mismo seguimiento'
        ],
        features: [
            'Asistente activo de IA',
            'Historial y seguimiento de gastos',
            'Seguimiento del estado del vehículo',
            'Alertas de vencimiento de impuestos',
            'Indicadores de rendimiento',
            'Soporte para vehículos de combustión y eléctricos'
        ],
        en: {
            statusLabel: 'In development',
            tagline: 'AI-powered B2C app for intelligent vehicle expense tracking',
            tags: ['App', 'Expense tracking'],
            problem: 'The real cost of a vehicle is scattered across receipt photos, memory and WhatsApp groups: almost nobody knows what their car truly costs them.',
            solution: 'An app with an AI assistant that logs expenses, tracks the vehicle’s condition and warns you before taxes and maintenance fall due.',
            outcome: [
                'Real cost per kilometre, measured rather than estimated',
                'Alerts before the deadline, not after the fine',
                'Combustion and electric vehicles in the same tracker'
            ],
            features: [
                'Proactive AI assistant',
                'Expense history and tracking',
                'Vehicle condition tracking',
                'Tax due-date alerts',
                'Performance indicators',
                'Support for combustion and electric vehicles'
            ]
        },
        url: null,
        hasUrl: false
    }
];

/**
 * The project in one language. Spanish lives at the top level because it is
 * what the build renders; `en` only overrides the fields that carry prose, so
 * names, URLs and stacks stay in one place.
 */
export const localizeProject = (project, lang = 'es') =>
    project[lang] ? { ...project, ...project[lang] } : project;

/** Keyed lookup used by the modal, which resolves cards by data-project. */
export const projectsById = Object.fromEntries(projects.map(p => [p.id, p]));
