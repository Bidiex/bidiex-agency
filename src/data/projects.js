/**
 * Bidiex Studio — Projects.
 *
 * Single source for both the carousel cards (rendered at build time by
 * Projects.astro) and the detail modal (filled at runtime by main.js), which
 * used to keep two hand-synced copies of the same content.
 *
 * `meta` is the small dotted line at the bottom of a card. Taglines are swapped
 * by i18n through project.<id>.tagline.
 *
 * `preview` drives the card and modal visual:
 *   { type: 'embed', src }  — live iframe of the real product's hero.
 *   { type: 'image', src }  — static screenshot resolved against /public.
 * Use 'embed' only for sites that allow framing. A site that answers with
 * `X-Frame-Options` or a `frame-ancestors` CSP renders as a blank box, so it
 * has to fall back to an image — TraeGo currently sends SAMEORIGIN.
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
        url: null,
        hasUrl: false
    }
];

/** Keyed lookup used by the modal, which resolves cards by data-project. */
export const projectsById = Object.fromEntries(projects.map(p => [p.id, p]));
