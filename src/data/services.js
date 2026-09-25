/**
 * Bidiex Studio — Capabilities (Services section + one page per capability).
 *
 * `span` maps to the .bento-span-* classes of the 12-column bento grid:
 *   row 1 → 5 + 7 · row 2 → 4 + 4 + 4 · row 3 → 5 + 7
 * `slug` is the capability's page under /servicios/.
 *
 * Every piece of copy lives here in both languages. The Spanish text is what
 * the build renders; src/scripts/translations.js walks this file to derive the
 * srv.* and srvp.* keys, so the i18n runtime can swap each node without a
 * second hand-synced copy of the prose.
 *
 * Page shape, per language:
 *   lead     — the one-paragraph promise under the title
 *   body     — two paragraphs of context: what the work is and why it matters
 *   offer    — four concrete things we deliver
 *   process  — four steps, in the order they happen
 *   fit      — signals that this is the right service for the reader
 */
export const services = [
    {
        id: 'design',
        slug: 'diseno-ui-ux',
        span: 5,
        icon: 'pen-tool',
        title: 'Diseño UI/UX',
        desc: 'Diseñamos interfaces claras y sistemas de diseño consistentes que reducen la fricción y hacen que cada interacción se sienta obvia.',
        en: {
            title: 'UI/UX Design',
            desc: 'We design clear interfaces and consistent design systems that cut friction and make every interaction feel obvious.',
        },
        page: {
            es: {
                lead: 'Convertimos procesos confusos en interfaces que la gente entiende a la primera: menos clics, menos dudas y menos tickets de soporte.',
                body: [
                    'Diseñar no es decorar pantallas. Antes de abrir Figma entendemos quién usa el producto, qué intenta lograr y en qué punto se atasca hoy. Con eso definimos la arquitectura de la información y los flujos, y solo entonces pasamos a lo visual.',
                    'El resultado no es un archivo bonito que se queda en una carpeta, sino un sistema de diseño con componentes, estados y reglas que el equipo de desarrollo puede construir sin adivinar, y que sigue siendo coherente cuando el producto crece.',
                ],
                offer: [
                    { title: 'Investigación y flujos', desc: 'Entrevistas, mapas de recorrido y wireframes para validar la estructura antes de invertir en el detalle.' },
                    { title: 'Interfaces de alta fidelidad', desc: 'Pantallas finales para web y móvil, con todos sus estados: vacío, carga, error y éxito.' },
                    { title: 'Sistemas de diseño', desc: 'Tokens, componentes y guías de uso documentados para que el producto escale sin perder consistencia.' },
                    { title: 'Prototipos interactivos', desc: 'Prototipos navegables para probar con usuarios reales y alinear a todo el equipo antes de programar.' },
                ],
                process: [
                    { title: 'Descubrir', desc: 'Entendemos el negocio, los usuarios y los puntos de fricción actuales.' },
                    { title: 'Estructurar', desc: 'Definimos la arquitectura de la información y los flujos clave en baja fidelidad.' },
                    { title: 'Diseñar', desc: 'Llevamos los flujos a alta fidelidad sobre un sistema de componentes.' },
                    { title: 'Validar y entregar', desc: 'Probamos con usuarios, iteramos y entregamos todo listo para desarrollo.' },
                ],
                fit: [
                    'Tu producto funciona, pero los usuarios se pierden o abandonan a mitad de camino.',
                    'Vas a construir algo nuevo y quieres validar la idea antes de invertir en código.',
                    'Cada pantalla de tu producto parece hecha por un equipo distinto.',
                    'Tu equipo de desarrollo necesita especificaciones claras en vez de capturas sueltas.',
                ],
            },
            en: {
                lead: 'We turn confusing processes into interfaces people understand the first time: fewer clicks, fewer doubts and fewer support tickets.',
                body: [
                    'Design is not decorating screens. Before opening Figma we learn who uses the product, what they are trying to achieve and where they get stuck today. From there we define the information architecture and the flows, and only then move on to the visuals.',
                    'The outcome is not a pretty file that sits in a folder, but a design system of components, states and rules that developers can build without guessing, and that stays coherent as the product grows.',
                ],
                offer: [
                    { title: 'Research and flows', desc: 'Interviews, journey maps and wireframes to validate the structure before investing in detail.' },
                    { title: 'High-fidelity interfaces', desc: 'Final screens for web and mobile, with every state covered: empty, loading, error and success.' },
                    { title: 'Design systems', desc: 'Documented tokens, components and usage guidelines so the product scales without losing consistency.' },
                    { title: 'Interactive prototypes', desc: 'Clickable prototypes to test with real users and align the whole team before writing code.' },
                ],
                process: [
                    { title: 'Discover', desc: 'We learn the business, the users and today’s friction points.' },
                    { title: 'Structure', desc: 'We define the information architecture and key flows in low fidelity.' },
                    { title: 'Design', desc: 'We take the flows to high fidelity on top of a component system.' },
                    { title: 'Validate and hand off', desc: 'We test with users, iterate and deliver everything ready for development.' },
                ],
                fit: [
                    'Your product works, but users get lost or drop off halfway.',
                    'You are about to build something new and want to validate it before investing in code.',
                    'Every screen of your product looks like it was made by a different team.',
                    'Your developers need clear specs instead of loose screenshots.',
                ],
            },
        },
    },
    {
        id: 'dev',
        slug: 'desarrollo-de-software',
        span: 7,
        icon: 'code-xml',
        title: 'Desarrollo de Software',
        desc: 'Construimos aplicaciones robustas y escalables adaptadas para resolver problemas empresariales complejos con arquitecturas modernas.',
        en: {
            title: 'Software Development',
            desc: 'We build robust, scalable applications tailored to solve complex business problems with modern architectures.',
        },
        page: {
            es: {
                lead: 'Software a la medida de tu operación: productos SaaS, apps móviles y sistemas internos construidos para durar, no para salir del paso.',
                body: [
                    'Cuando una hoja de cálculo o una herramienta genérica ya no alcanza, el negocio necesita software propio. Diseñamos la arquitectura pensando en dónde estará tu empresa en dos años, no solo en el lanzamiento, y la construimos con un stack moderno y probado en producción.',
                    'Trabajamos en entregas cortas y visibles: cada semana ves avances funcionando, no promesas en un documento. El código queda versionado, probado y documentado, para que el producto sea un activo de la empresa y no una caja negra que depende de una sola persona.',
                ],
                offer: [
                    { title: 'Productos SaaS', desc: 'Plataformas multiusuario con autenticación, roles, pagos y paneles de administración.' },
                    { title: 'Apps móviles', desc: 'Aplicaciones para iOS y Android desde una sola base de código con React Native y Expo.' },
                    { title: 'Backends y APIs', desc: 'Bases de datos, lógica de negocio e integraciones seguras con servicios de terceros.' },
                    { title: 'Evolución y soporte', desc: 'Mantenimiento, monitoreo y nuevas funcionalidades una vez el producto está en producción.' },
                ],
                process: [
                    { title: 'Definir', desc: 'Traducimos el problema de negocio en un alcance, una arquitectura y un plan de entregas.' },
                    { title: 'Construir', desc: 'Desarrollamos en ciclos cortos con demos frecuentes y prioridades claras.' },
                    { title: 'Probar', desc: 'Pruebas automáticas y revisión manual antes de cada salida a producción.' },
                    { title: 'Lanzar y escalar', desc: 'Desplegamos, medimos el uso real y seguimos mejorando el producto.' },
                ],
                fit: [
                    'Tu operación depende de hojas de cálculo que ya no dan abasto.',
                    'Tienes una idea de producto digital y necesitas un equipo técnico para llevarla a producción.',
                    'Las herramientas genéricas te obligan a adaptar tu proceso a ellas.',
                    'Heredaste un sistema que nadie quiere tocar y necesitas estabilizarlo.',
                ],
            },
            en: {
                lead: 'Software shaped around your operation: SaaS products, mobile apps and internal systems built to last, not just to get by.',
                body: [
                    'When a spreadsheet or an off-the-shelf tool is no longer enough, the business needs software of its own. We design the architecture around where your company will be in two years, not just at launch, and build it on a modern stack proven in production.',
                    'We work in short, visible increments: every week you see working progress, not promises in a document. The code is versioned, tested and documented, so the product is a company asset rather than a black box that depends on a single person.',
                ],
                offer: [
                    { title: 'SaaS products', desc: 'Multi-user platforms with authentication, roles, payments and admin dashboards.' },
                    { title: 'Mobile apps', desc: 'iOS and Android apps from a single codebase with React Native and Expo.' },
                    { title: 'Backends and APIs', desc: 'Databases, business logic and secure integrations with third-party services.' },
                    { title: 'Evolution and support', desc: 'Maintenance, monitoring and new features once the product is live.' },
                ],
                process: [
                    { title: 'Define', desc: 'We turn the business problem into a scope, an architecture and a delivery plan.' },
                    { title: 'Build', desc: 'We develop in short cycles with frequent demos and clear priorities.' },
                    { title: 'Test', desc: 'Automated tests and manual review before every release.' },
                    { title: 'Launch and scale', desc: 'We deploy, measure real usage and keep improving the product.' },
                ],
                fit: [
                    'Your operation runs on spreadsheets that can no longer keep up.',
                    'You have a digital product idea and need a technical team to take it to production.',
                    'Generic tools force you to bend your process around them.',
                    'You inherited a system nobody wants to touch and need to stabilise it.',
                ],
            },
        },
    },
    {
        id: 'web',
        slug: 'aplicaciones-web',
        span: 4,
        icon: 'layout-dashboard',
        title: 'Aplicaciones Web',
        desc: 'Desarrollamos plataformas web que funcionan igual de bien en escritorio que en móvil, con datos en tiempo real y rendimiento medible.',
        en: {
            title: 'Web Applications',
            desc: 'We develop web platforms that work just as well on desktop as on mobile, with real-time data and measurable performance.',
        },
        page: {
            es: {
                lead: 'Plataformas que viven en el navegador: paneles, portales de clientes y herramientas internas que tu equipo abre desde cualquier dispositivo, sin instalar nada.',
                body: [
                    'Una aplicación web elimina la fricción de las tiendas de apps y llega a tus usuarios con un simple enlace. La diseñamos mobile-first, porque es ahí donde ocurre la mayoría del uso, y la hacemos rápida porque cada segundo de carga se paga en usuarios que se van.',
                    'Conectamos la aplicación con tus datos en tiempo real, para que un pedido, una reserva o un cambio de estado se vea al instante en todas las pantallas, y medimos el rendimiento con métricas reales en vez de impresiones.',
                ],
                offer: [
                    { title: 'Paneles y dashboards', desc: 'Indicadores, reportes y gestión operativa en una sola vista, actualizados en tiempo real.' },
                    { title: 'Portales de clientes', desc: 'Espacios donde tus clientes consultan, compran, reservan o hacen seguimiento por su cuenta.' },
                    { title: 'Herramientas internas', desc: 'Aplicaciones a la medida que reemplazan procesos manuales de tu equipo.' },
                    { title: 'Web apps instalables', desc: 'Progressive Web Apps que se instalan en el celular y funcionan incluso con conexión inestable.' },
                ],
                process: [
                    { title: 'Mapear', desc: 'Identificamos usuarios, roles y los datos que deben fluir entre ellos.' },
                    { title: 'Prototipar', desc: 'Validamos las pantallas críticas antes de construir.' },
                    { title: 'Desarrollar', desc: 'Frontend y backend en paralelo, con entregas funcionales cada semana.' },
                    { title: 'Optimizar', desc: 'Medimos velocidad, accesibilidad y uso real, y afinamos.' },
                ],
                fit: [
                    'Necesitas que tu equipo o tus clientes accedan desde cualquier dispositivo.',
                    'Quieres ver la información de tu negocio en tiempo real, no en un reporte de fin de mes.',
                    'Publicar una app en las tiendas es una barrera que no necesitas.',
                    'Tu herramienta actual es lenta y la gente evita usarla.',
                ],
            },
            en: {
                lead: 'Platforms that live in the browser: dashboards, customer portals and internal tools your team opens from any device, with nothing to install.',
                body: [
                    'A web application removes the friction of app stores and reaches your users with a simple link. We design it mobile-first, because that is where most of the usage happens, and we make it fast because every second of loading is paid for in users who leave.',
                    'We connect the application to your data in real time, so an order, a booking or a status change shows up instantly on every screen, and we measure performance with real metrics rather than impressions.',
                ],
                offer: [
                    { title: 'Dashboards', desc: 'KPIs, reports and day-to-day operations in a single view, updated in real time.' },
                    { title: 'Customer portals', desc: 'Spaces where your customers look up, buy, book or track on their own.' },
                    { title: 'Internal tools', desc: 'Tailored applications that replace your team’s manual processes.' },
                    { title: 'Installable web apps', desc: 'Progressive Web Apps that install on the phone and work even on a shaky connection.' },
                ],
                process: [
                    { title: 'Map', desc: 'We identify users, roles and the data that must flow between them.' },
                    { title: 'Prototype', desc: 'We validate the critical screens before building.' },
                    { title: 'Develop', desc: 'Frontend and backend in parallel, with working releases every week.' },
                    { title: 'Optimise', desc: 'We measure speed, accessibility and real usage, and fine-tune.' },
                ],
                fit: [
                    'Your team or your customers need access from any device.',
                    'You want to see your business data in real time, not in a month-end report.',
                    'Publishing an app to the stores is a barrier you do not need.',
                    'Your current tool is slow and people avoid using it.',
                ],
            },
        },
    },
    {
        id: 'auto',
        slug: 'automatizacion',
        span: 4,
        icon: 'workflow',
        title: 'Automatización',
        desc: 'Conectamos tus herramientas y eliminamos el trabajo manual repetitivo con flujos que se ejecutan solos y sin errores.',
        en: {
            title: 'Automation',
            desc: 'We connect your tools and remove repetitive manual work with flows that run on their own, without errors.',
        },
        page: {
            es: {
                lead: 'Tu equipo no debería pasar el día copiando datos entre herramientas. Conectamos tus sistemas para que las tareas repetitivas se hagan solas.',
                body: [
                    'Cada proceso manual es una fuente de errores y un costo que crece con el negocio: pedidos que se transcriben a mano, reportes que alguien arma cada lunes, clientes que esperan una respuesta que depende de que alguien esté conectado.',
                    'Mapeamos esos procesos, detectamos cuáles se pueden automatizar y construimos flujos que conectan tu CRM, tu facturación, WhatsApp, tus hojas de cálculo y tus bases de datos. Cuando tiene sentido, sumamos inteligencia artificial para clasificar, resumir o responder.',
                ],
                offer: [
                    { title: 'Integraciones', desc: 'Conectamos las herramientas que ya usas para que compartan datos sin intervención manual.' },
                    { title: 'Flujos de trabajo', desc: 'Aprobaciones, notificaciones y seguimiento de tareas que avanzan solos.' },
                    { title: 'Reportes automáticos', desc: 'Indicadores que se generan y se envían a tiempo, sin armar hojas de cálculo.' },
                    { title: 'Asistentes con IA', desc: 'Clasificación de mensajes, respuestas sugeridas y extracción de datos de documentos.' },
                ],
                process: [
                    { title: 'Auditar', desc: 'Documentamos cómo trabaja hoy tu equipo y cuánto tiempo consume cada tarea.' },
                    { title: 'Priorizar', desc: 'Elegimos las automatizaciones con mayor retorno y menor riesgo.' },
                    { title: 'Construir', desc: 'Implementamos los flujos con registro de errores y alertas.' },
                    { title: 'Medir', desc: 'Verificamos las horas ahorradas y ajustamos lo que haga falta.' },
                ],
                fit: [
                    'Tu equipo repite las mismas tareas de copiar y pegar todos los días.',
                    'Los errores de transcripción te cuestan dinero o clientes.',
                    'Tus herramientas no se hablan entre sí.',
                    'Quieres crecer sin tener que contratar al mismo ritmo.',
                ],
            },
            en: {
                lead: 'Your team should not spend the day copying data between tools. We connect your systems so repetitive tasks run on their own.',
                body: [
                    'Every manual process is a source of errors and a cost that grows with the business: orders retyped by hand, reports someone assembles every Monday, customers waiting on a reply that depends on someone being online.',
                    'We map those processes, find which ones can be automated and build flows that connect your CRM, invoicing, WhatsApp, spreadsheets and databases. Where it makes sense, we add artificial intelligence to classify, summarise or respond.',
                ],
                offer: [
                    { title: 'Integrations', desc: 'We connect the tools you already use so they share data without manual work.' },
                    { title: 'Workflows', desc: 'Approvals, notifications and task tracking that move forward on their own.' },
                    { title: 'Automated reports', desc: 'KPIs generated and delivered on time, with no spreadsheets to assemble.' },
                    { title: 'AI assistants', desc: 'Message triage, suggested replies and data extraction from documents.' },
                ],
                process: [
                    { title: 'Audit', desc: 'We document how your team works today and how long each task takes.' },
                    { title: 'Prioritise', desc: 'We pick the automations with the highest return and lowest risk.' },
                    { title: 'Build', desc: 'We implement the flows with error logging and alerts.' },
                    { title: 'Measure', desc: 'We verify the hours saved and adjust whatever needs it.' },
                ],
                fit: [
                    'Your team repeats the same copy-and-paste tasks every day.',
                    'Transcription errors cost you money or customers.',
                    'Your tools do not talk to each other.',
                    'You want to grow without hiring at the same pace.',
                ],
            },
        },
    },
    {
        id: 'brand',
        slug: 'identidad-de-marca',
        span: 4,
        icon: 'palette',
        title: 'Identidad de Marca',
        desc: 'Construimos identidades visuales coherentes: marca, paleta, tipografía y tono aplicados de forma consistente en cada punto de contacto.',
        en: {
            title: 'Brand Identity',
            desc: 'We build coherent visual identities: mark, palette, typography and tone applied consistently across every touchpoint.',
        },
        page: {
            es: {
                lead: 'Una marca que se reconoce en un vistazo y se ve igual de sólida en una app, en una red social y en un empaque.',
                body: [
                    'La identidad es la primera promesa que hace tu negocio. Si el logo, los colores y el tono cambian de un canal a otro, el cliente percibe improvisación aunque tu producto sea excelente.',
                    'Construimos la identidad desde la estrategia: a quién le hablas, qué te diferencia y cómo quieres que te recuerden. De ahí salen el logotipo, la paleta, la tipografía y el tono de voz, reunidos en un manual pensado para que cualquier persona los aplique bien.',
                ],
                offer: [
                    { title: 'Estrategia de marca', desc: 'Posicionamiento, personalidad y mensajes clave que guían cada decisión visual.' },
                    { title: 'Logotipo y sistema visual', desc: 'Marca principal, variantes, iconografía, paleta de color y tipografía.' },
                    { title: 'Manual de marca', desc: 'Reglas claras de uso para que la identidad se mantenga coherente en manos de cualquiera.' },
                    { title: 'Aplicaciones', desc: 'Plantillas para redes sociales, presentaciones, papelería y producto digital.' },
                ],
                process: [
                    { title: 'Entender', desc: 'Investigamos tu mercado, tu competencia y tu audiencia.' },
                    { title: 'Definir', desc: 'Acordamos el posicionamiento y la personalidad de la marca.' },
                    { title: 'Crear', desc: 'Exploramos rutas visuales y refinamos la elegida.' },
                    { title: 'Desplegar', desc: 'Entregamos el manual y las aplicaciones listas para usar.' },
                ],
                fit: [
                    'Estás lanzando un negocio y quieres empezar con una imagen profesional.',
                    'Tu marca creció de forma improvisada y ya no representa lo que eres.',
                    'Cada pieza que publicas se ve distinta a la anterior.',
                    'Quieres competir con marcas más grandes sin parecer más pequeño.',
                ],
            },
            en: {
                lead: 'A brand recognised at a glance, and just as solid in an app, on social media or on packaging.',
                body: [
                    'Identity is the first promise your business makes. If the logo, colours and tone change from one channel to the next, customers sense improvisation even when your product is excellent.',
                    'We build the identity from strategy: who you speak to, what sets you apart and how you want to be remembered. From there come the logo, palette, typography and tone of voice, gathered in a guide designed so anyone can apply them correctly.',
                ],
                offer: [
                    { title: 'Brand strategy', desc: 'Positioning, personality and key messages that guide every visual decision.' },
                    { title: 'Logo and visual system', desc: 'Primary mark, variants, iconography, colour palette and typography.' },
                    { title: 'Brand guidelines', desc: 'Clear usage rules so the identity stays coherent in anyone’s hands.' },
                    { title: 'Applications', desc: 'Templates for social media, presentations, stationery and digital product.' },
                ],
                process: [
                    { title: 'Understand', desc: 'We research your market, your competitors and your audience.' },
                    { title: 'Define', desc: 'We agree on the brand’s positioning and personality.' },
                    { title: 'Create', desc: 'We explore visual routes and refine the chosen one.' },
                    { title: 'Roll out', desc: 'We deliver the guidelines and applications ready to use.' },
                ],
                fit: [
                    'You are launching a business and want to start with a professional image.',
                    'Your brand grew on the fly and no longer represents who you are.',
                    'Every piece you publish looks different from the last.',
                    'You want to compete with bigger brands without looking smaller.',
                ],
            },
        },
    },
    {
        id: 'landing',
        slug: 'landing-pages',
        span: 5,
        icon: 'layout-template',
        title: 'Landing Pages',
        desc: 'Creamos páginas rápidas y enfocadas en conversión, optimizadas para SEO y listas para sostener tus campañas.',
        en: {
            title: 'Landing Pages',
            desc: 'We craft fast, conversion-focused pages, optimized for SEO and ready to carry your campaigns.',
        },
        page: {
            es: {
                lead: 'Páginas con un solo objetivo: que el visitante que llega por un anuncio o una búsqueda termine escribiéndote, comprando o registrándose.',
                body: [
                    'Una landing page no es una versión corta de tu sitio web. Es una pieza de venta: cada sección responde una objeción, cada elemento empuja hacia una acción y todo lo que distrae se elimina.',
                    'La escribimos, la diseñamos y la desarrollamos para que cargue en menos de dos segundos, se vea impecable en el celular y esté preparada para buscadores y analítica, de modo que sepas exactamente cuánto te cuesta cada cliente.',
                ],
                offer: [
                    { title: 'Copy orientado a conversión', desc: 'Mensajes que explican el valor en segundos y responden las dudas del cliente.' },
                    { title: 'Diseño y desarrollo', desc: 'Páginas a la medida, rápidas y responsivas, sin plantillas genéricas.' },
                    { title: 'SEO técnico', desc: 'Estructura semántica, metadatos y rendimiento optimizados para buscadores.' },
                    { title: 'Analítica y pruebas', desc: 'Medición de conversiones y pruebas A/B para mejorar con datos.' },
                ],
                process: [
                    { title: 'Objetivo', desc: 'Definimos la acción que debe tomar el visitante y cómo la mediremos.' },
                    { title: 'Mensaje', desc: 'Escribimos la estructura y el copy antes del diseño.' },
                    { title: 'Construcción', desc: 'Diseñamos y desarrollamos la página con foco en velocidad.' },
                    { title: 'Optimización', desc: 'Lanzamos, medimos y mejoramos con base en resultados.' },
                ],
                fit: [
                    'Vas a lanzar un producto, un servicio o una campaña.',
                    'Inviertes en publicidad pero las visitas no se convierten.',
                    'Tu sitio actual es lento o no se ve bien en el celular.',
                    'Necesitas validar una idea rápido con usuarios reales.',
                ],
            },
            en: {
                lead: 'Pages with a single goal: the visitor who arrives from an ad or a search ends up messaging you, buying or signing up.',
                body: [
                    'A landing page is not a short version of your website. It is a sales piece: every section answers an objection, every element pushes towards an action and anything that distracts is removed.',
                    'We write, design and build it to load in under two seconds, look flawless on mobile and be ready for search engines and analytics, so you know exactly what each customer costs you.',
                ],
                offer: [
                    { title: 'Conversion copywriting', desc: 'Messages that explain the value in seconds and answer the customer’s doubts.' },
                    { title: 'Design and development', desc: 'Tailored, fast and responsive pages, no generic templates.' },
                    { title: 'Technical SEO', desc: 'Semantic structure, metadata and performance optimised for search engines.' },
                    { title: 'Analytics and testing', desc: 'Conversion tracking and A/B tests to improve with data.' },
                ],
                process: [
                    { title: 'Goal', desc: 'We define the action the visitor should take and how we will measure it.' },
                    { title: 'Message', desc: 'We write the structure and copy before the design.' },
                    { title: 'Build', desc: 'We design and develop the page with a focus on speed.' },
                    { title: 'Optimise', desc: 'We launch, measure and improve based on results.' },
                ],
                fit: [
                    'You are launching a product, a service or a campaign.',
                    'You invest in advertising but visits do not convert.',
                    'Your current site is slow or looks poor on mobile.',
                    'You need to validate an idea quickly with real users.',
                ],
            },
        },
    },
    {
        id: 'consulting',
        slug: 'consultoria-tecnica',
        span: 7,
        icon: 'compass',
        title: 'Consultoría Técnica',
        desc: 'Auditamos tu arquitectura y tu stack para detectar cuellos de botella y trazar un plan técnico que sostenga tu crecimiento.',
        en: {
            title: 'Technical Consulting',
            desc: 'We audit your architecture and stack to surface bottlenecks and lay out a technical plan that supports your growth.',
        },
        page: {
            es: {
                lead: 'Una mirada externa y técnica sobre tu producto: qué está frenando tu crecimiento, qué riesgos corres y en qué orden conviene resolverlos.',
                body: [
                    'Con el tiempo, todo producto acumula decisiones apresuradas: dependencias desactualizadas, consultas lentas, costos de infraestructura que nadie revisa. Mientras el negocio es pequeño no se notan; cuando crece, se convierten en caídas, lentitud y facturas inesperadas.',
                    'Revisamos tu código, tu arquitectura, tu infraestructura y tu forma de trabajar, y te entregamos un diagnóstico claro con una hoja de ruta priorizada. Hablamos en términos de negocio: impacto, riesgo y costo, no solo jerga técnica.',
                ],
                offer: [
                    { title: 'Auditoría de código', desc: 'Calidad, seguridad, deuda técnica y mantenibilidad de tu base de código.' },
                    { title: 'Revisión de arquitectura', desc: 'Escalabilidad, puntos únicos de falla y costos de infraestructura.' },
                    { title: 'Selección de stack', desc: 'Acompañamiento para elegir tecnologías y proveedores antes de construir.' },
                    { title: 'Hoja de ruta técnica', desc: 'Un plan priorizado de mejoras con esfuerzo e impacto estimados.' },
                ],
                process: [
                    { title: 'Contexto', desc: 'Entendemos tus objetivos de negocio y los problemas que ya percibes.' },
                    { title: 'Análisis', desc: 'Revisamos código, infraestructura, métricas y procesos.' },
                    { title: 'Diagnóstico', desc: 'Documentamos hallazgos con su nivel de riesgo e impacto.' },
                    { title: 'Plan', desc: 'Presentamos la hoja de ruta y te acompañamos en su ejecución.' },
                ],
                fit: [
                    'Tu producto se volvió lento o inestable a medida que creció.',
                    'Vas a levantar inversión o a escalar y necesitas una base técnica confiable.',
                    'No tienes un CTO y necesitas criterio técnico para decidir.',
                    'Tus costos de infraestructura crecen más rápido que tus usuarios.',
                ],
            },
            en: {
                lead: 'An outside, technical look at your product: what is holding back your growth, what risks you are running and in what order to fix them.',
                body: [
                    'Over time every product piles up hurried decisions: outdated dependencies, slow queries, infrastructure costs nobody reviews. While the business is small they go unnoticed; as it grows, they turn into outages, slowness and unexpected bills.',
                    'We review your code, architecture, infrastructure and ways of working, and hand you a clear diagnosis with a prioritised roadmap. We speak in business terms —impact, risk and cost— not just technical jargon.',
                ],
                offer: [
                    { title: 'Code audit', desc: 'Quality, security, technical debt and maintainability of your codebase.' },
                    { title: 'Architecture review', desc: 'Scalability, single points of failure and infrastructure costs.' },
                    { title: 'Stack selection', desc: 'Guidance on choosing technologies and vendors before you build.' },
                    { title: 'Technical roadmap', desc: 'A prioritised improvement plan with estimated effort and impact.' },
                ],
                process: [
                    { title: 'Context', desc: 'We understand your business goals and the problems you already notice.' },
                    { title: 'Analysis', desc: 'We review code, infrastructure, metrics and processes.' },
                    { title: 'Diagnosis', desc: 'We document findings with their risk and impact.' },
                    { title: 'Plan', desc: 'We present the roadmap and support you in carrying it out.' },
                ],
                fit: [
                    'Your product became slow or unstable as it grew.',
                    'You are about to raise funding or scale and need a reliable technical foundation.',
                    'You do not have a CTO and need technical judgement to decide.',
                    'Your infrastructure costs are growing faster than your users.',
                ],
            },
        },
    },
];

/**
 * Flattens one service's copy into i18n keys for a language. Used by the
 * dictionary so the pages and the cards can keep their data-i18n hooks.
 */
export function serviceKeys(service, lang) {
    const base = lang === 'es' ? service : { ...service, ...service[lang] };
    const page = service.page[lang];
    const k = `srvp.${service.id}`;
    const out = {
        [`srv.${service.id}.title`]: base.title,
        [`srv.${service.id}.desc`]: base.desc,
        [`${k}.doctitle`]: `${base.title} — Bidiex`,
        [`${k}.lead`]: page.lead,
    };
    page.body.forEach((p, i) => { out[`${k}.body${i}`] = p; });
    page.offer.forEach((o, i) => {
        out[`${k}.offer${i}.title`] = o.title;
        out[`${k}.offer${i}.desc`] = o.desc;
    });
    page.process.forEach((s, i) => {
        out[`${k}.step${i}.title`] = s.title;
        out[`${k}.step${i}.desc`] = s.desc;
    });
    page.fit.forEach((f, i) => { out[`${k}.fit${i}`] = f; });
    return out;
}
