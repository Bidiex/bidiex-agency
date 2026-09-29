/**
 * Bidiex Studio — Capabilities (Services section + one page per capability).
 *
 * `span` maps to the .bento-span-* classes of the 12-column bento grid:
 *   row 1 → 5 + 7 · row 2 → 4 + 4 + 4 · row 3 → 5 + 7
 * `slug` is the capability's page under /servicios/.
 * `projects` lists ids from src/data/projects.js shown as proof on the page;
 * leave it empty rather than stretch a project that did not use the service.
 *
 * Every piece of copy lives here in both languages. The Spanish text is what
 * the build renders; serviceKeys() below flattens it into the srv.* and srvp.*
 * keys, so the i18n runtime can swap each node without a second copy.
 *
 * Page shape, per language, in the order the page reads:
 *   headline  — a claim, not a label; the service name rides in the eyebrow
 *   lead      — two sentences: what we build and what the reader gets
 *   pains     — scenes the reader recognises from their own week
 *   approach  — how we work, in plain terms, with the specifics that prove it
 *   offer     — four deliverables, each a thing you can hold, not a virtue
 *   process   — four steps; `output` is what exists at the end of each one
 *   notFit    — when to hire someone else, or nobody
 *   faq       — the questions a buyer asks before writing to us
 *
 * Writing rules for this file: short declarative sentences, concrete nouns
 * (WhatsApp, Figma, Excel) over adjectives (robust, seamless, scalable), no
 * "it isn't X, it's Y" turns, and no number we cannot stand behind.
 */
export const services = [
    {
        id: 'design',
        slug: 'diseno-ui-ux',
        span: 5,
        icon: 'pen-tool',
        projects: ['traego', 'invio'],
        title: 'Diseño UI/UX',
        desc: 'Interfaces para apps y plataformas web, diseñadas a partir de lo que tus usuarios intentan hacer y entregadas listas para desarrollo.',
        en: {
            title: 'UI/UX Design',
            desc: 'Interfaces for apps and web platforms, designed around what your users are trying to do and handed over ready to build.',
        },
        page: {
            es: {
                headline: 'Pantallas que se entienden sin manual.',
                lead: 'Diseñamos apps y plataformas web partiendo de lo que tus usuarios intentan hacer. Tu equipo de desarrollo recibe un sistema de componentes que puede construir tal cual.',
                pains: [
                    'Los usuarios te escriben por WhatsApp para preguntar cómo hacer algo que ya está en la app.',
                    'La mitad de la gente abandona el registro antes de terminarlo, y nadie sabe en qué paso.',
                    'Cada pantalla parece hecha por una persona distinta, porque lo fue.',
                    'Tus desarrolladores trabajan con capturas sueltas y adivinan lo que falta: el error, la versión móvil, la lista vacía.',
                ],
                approach: [
                    'Antes de dibujar pantallas, recorremos el producto con quienes lo usan y anotamos dónde se detienen. Ese recorrido decide el orden de las pantallas y qué va en cada una.',
                    'Después diseñamos en Figma sobre un sistema de componentes, con sus estados y variantes. La pantalla número cuarenta se ve como la primera, y quien desarrolla tiene una sola referencia.',
                ],
                offer: [
                    { title: 'Mapa de flujos', desc: 'Cada recorrido del usuario dibujado de principio a fin, con los puntos donde hoy se pierde.' },
                    { title: 'Pantallas en alta fidelidad', desc: 'Web y móvil, con los estados que casi nadie diseña: vacío, cargando, error y éxito.' },
                    { title: 'Sistema de diseño en Figma', desc: 'Color, tipografía, espaciado y componentes con sus variantes, documentados para el equipo.' },
                    { title: 'Prototipo navegable', desc: 'Un enlace que se prueba en el celular con usuarios reales antes de escribir código.' },
                ],
                process: [
                    { title: 'Recorrer', desc: 'Hablamos con usuarios y con tu equipo, y revisamos el producto actual o la idea.', output: 'Problemas priorizados' },
                    { title: 'Estructurar', desc: 'Ordenamos la información y dibujamos los flujos en baja fidelidad.', output: 'Wireframes de los flujos clave' },
                    { title: 'Diseñar', desc: 'Llevamos los flujos a alta fidelidad sobre el sistema de componentes.', output: 'Pantallas finales en Figma' },
                    { title: 'Probar y entregar', desc: 'Probamos el prototipo con usuarios, corregimos y preparamos la entrega.', output: 'Archivo listo para desarrollo' },
                ],
                notFit: [
                    'Solo quieres cambiar colores y tipografía a un producto que ya funciona bien.',
                    'Nadie en tu equipo puede construir lo que diseñemos. En ese caso conviene sumar desarrollo desde el inicio.',
                ],
                faq: [
                    { q: '¿Pueden diseñar sobre un producto que ya existe?', a: 'Sí, y es lo más común. Empezamos por lo que ya tienes y cambiamos primero las pantallas que más frenan a tus usuarios.' },
                    { q: '¿En qué herramienta trabajan?', a: 'En Figma. Tu equipo tiene acceso al archivo durante todo el proyecto y lo recibe completo al final.' },
                    { q: '¿También lo desarrollan?', a: 'Si quieres, sí. Puedes llevar el diseño a tu propio equipo o dejar que lo construyamos nosotros; en ese caso quien diseñó revisa que el resultado coincida con lo acordado.' },
                ],
            },
            en: {
                headline: 'Screens people understand without a manual.',
                lead: 'We design apps and web platforms around what your users are trying to do. Your developers get a component system they can build as it stands.',
                pains: [
                    'Users message you on WhatsApp to ask how to do something the app already does.',
                    'Half the people who start sign-up drop out before finishing, and nobody knows at which step.',
                    'Every screen looks like a different person made it, because one did.',
                    'Your developers work from loose screenshots and guess the rest: the error, the mobile layout, the empty list.',
                ],
                approach: [
                    'Before drawing screens, we walk through the product with the people who use it and note where they stall. That walk decides the order of the screens and what goes on each one.',
                    'Then we design in Figma on a component system, with its states and variants. Screen forty looks like screen one, and whoever builds it has a single reference.',
                ],
                offer: [
                    { title: 'Flow map', desc: 'Every user journey drawn end to end, marking where people get lost today.' },
                    { title: 'High-fidelity screens', desc: 'Web and mobile, with the states almost nobody designs: empty, loading, error and success.' },
                    { title: 'Figma design system', desc: 'Colour, type, spacing and components with their variants, documented for the team.' },
                    { title: 'Clickable prototype', desc: 'A link you can test on a phone with real users before any code is written.' },
                ],
                process: [
                    { title: 'Walk through', desc: 'We talk to users and your team, and review the current product or the idea.', output: 'Prioritised problems' },
                    { title: 'Structure', desc: 'We order the information and sketch the flows in low fidelity.', output: 'Wireframes of key flows' },
                    { title: 'Design', desc: 'We take the flows to high fidelity on the component system.', output: 'Final screens in Figma' },
                    { title: 'Test and hand off', desc: 'We test the prototype with users, fix what they trip on and prepare the handoff.', output: 'File ready for development' },
                ],
                notFit: [
                    'You only want new colours and fonts on a product that already works well.',
                    'Nobody on your team can build what we design. Then it pays to add development from the start.',
                ],
                faq: [
                    { q: 'Can you design on top of an existing product?', a: 'Yes, and that is the usual case. We start from what you have and change first the screens that slow your users down the most.' },
                    { q: 'Which tool do you work in?', a: 'Figma. Your team has access to the file throughout the project and receives it complete at the end.' },
                    { q: 'Do you build it too?', a: 'If you want. You can take the design to your own team or have us build it; then whoever designed it checks the result matches what we agreed.' },
                ],
            },
        },
    },
    {
        id: 'dev',
        slug: 'desarrollo-de-software',
        span: 7,
        icon: 'code-xml',
        projects: ['carcopilot', 'sellogo'],
        title: 'Desarrollo de Software',
        desc: 'Productos SaaS, apps para iOS y Android y sistemas internos, construidos en entregas semanales que puedes probar.',
        en: {
            title: 'Software Development',
            desc: 'SaaS products, iOS and Android apps and internal systems, built in weekly releases you can try.',
        },
        page: {
            es: {
                headline: 'Software propio para cuando Excel ya no alcanza.',
                lead: 'Construimos productos SaaS, apps móviles y sistemas internos. Cada semana ves avances funcionando, y el código queda documentado para que cualquier equipo pueda continuarlo.',
                pains: [
                    'La operación vive en un Excel que solo una persona entiende, y esa persona está de vacaciones.',
                    'Pagas tres herramientas distintas y ninguna hace exactamente lo que tu proceso necesita.',
                    'Tienes la idea del producto clara y un documento largo, pero nadie que la lleve a producción.',
                    'Heredaste un sistema que nadie quiere tocar porque cada cambio rompe otra cosa.',
                ],
                approach: [
                    'Empezamos por la versión más pequeña que ya resuelve el problema y la ponemos en manos de usuarios reales pronto. Lo que se construye después sale de cómo la usan.',
                    'Trabajamos en ciclos de una semana, y al final de cada uno tienes un enlace para probar lo nuevo. En web usamos React, Next.js, Node.js, Supabase y PostgreSQL; en móvil, React Native y Expo.',
                ],
                offer: [
                    { title: 'Productos SaaS', desc: 'Registro, roles y permisos, pagos recurrentes y un panel de administración para tu equipo.' },
                    { title: 'Apps móviles', desc: 'iOS y Android desde un solo código con React Native y Expo, publicadas en las tiendas.' },
                    { title: 'Backend y APIs', desc: 'Base de datos, reglas de negocio e integraciones con pasarelas de pago, WhatsApp o tu ERP.' },
                    { title: 'Mantenimiento', desc: 'Monitoreo, corrección de errores y nuevas funciones cuando el producto ya está en producción.' },
                ],
                process: [
                    { title: 'Definir alcance', desc: 'Convertimos la idea en una lista de funciones priorizada y decidimos qué entra en la primera versión.', output: 'Alcance y plan de entregas' },
                    { title: 'Construir', desc: 'Desarrollamos en ciclos semanales, con una demo al final de cada uno.', output: 'Una versión para probar cada semana' },
                    { title: 'Probar', desc: 'Pruebas automáticas y revisión manual antes de cada salida a producción.', output: 'Versión estable' },
                    { title: 'Lanzar', desc: 'Publicamos, medimos cómo se usa y decidimos contigo lo siguiente.', output: 'Producto en producción' },
                ],
                notFit: [
                    'Ya existe una herramienta que resuelve casi todo lo que necesitas. Te lo diremos, y te ahorrarás el desarrollo.',
                    'Necesitas el producto completo en dos semanas y el alcance no se puede recortar.',
                ],
                faq: [
                    { q: '¿Cuánto cuesta desarrollar una app o un SaaS?', a: 'Depende de las funciones de la primera versión. Después de una conversación te enviamos una propuesta escrita con alcance, plazo y precio.' },
                    { q: '¿Dónde queda el código?', a: 'En un repositorio al que tienes acceso desde el inicio, con la documentación necesaria para que otro equipo pueda continuarlo.' },
                    { q: '¿Qué pasa después del lanzamiento?', a: 'Podemos seguir con mantenimiento y nuevas funciones, o pasarle el proyecto a tu equipo interno con una transición ordenada.' },
                ],
            },
            en: {
                headline: 'Your own software, for when Excel stops keeping up.',
                lead: 'We build SaaS products, mobile apps and internal systems. Every week you see working progress, and the code is documented so any team can pick it up.',
                pains: [
                    'The operation runs on a spreadsheet only one person understands, and that person is on holiday.',
                    'You pay for three different tools and none of them does exactly what your process needs.',
                    'The product idea is clear and written up at length, but nobody is there to take it to production.',
                    'You inherited a system nobody wants to touch, because every change breaks something else.',
                ],
                approach: [
                    'We start with the smallest version that already solves the problem and put it in front of real users early. What we build next comes from how they use it.',
                    'We work in one-week cycles, and at the end of each you get a link to try what is new. On the web we use React, Next.js, Node.js, Supabase and PostgreSQL; on mobile, React Native and Expo.',
                ],
                offer: [
                    { title: 'SaaS products', desc: 'Sign-up, roles and permissions, recurring payments and an admin panel for your team.' },
                    { title: 'Mobile apps', desc: 'iOS and Android from a single codebase with React Native and Expo, published to the stores.' },
                    { title: 'Backend and APIs', desc: 'Database, business rules and integrations with payment gateways, WhatsApp or your ERP.' },
                    { title: 'Maintenance', desc: 'Monitoring, bug fixes and new features once the product is live.' },
                ],
                process: [
                    { title: 'Scope', desc: 'We turn the idea into a prioritised feature list and decide what goes into the first version.', output: 'Scope and release plan' },
                    { title: 'Build', desc: 'We develop in weekly cycles, with a demo at the end of each one.', output: 'A version to try every week' },
                    { title: 'Test', desc: 'Automated tests and manual review before every release.', output: 'Stable release' },
                    { title: 'Launch', desc: 'We ship, measure how it is used and decide the next step with you.', output: 'Product in production' },
                ],
                notFit: [
                    'A ready-made tool already covers almost everything you need. We will tell you, and you will save the build.',
                    'You need the whole product in two weeks and the scope cannot be cut.',
                ],
                faq: [
                    { q: 'How much does an app or a SaaS cost?', a: 'It depends on what the first version has to do. After a conversation we send you a written proposal with scope, timeline and price.' },
                    { q: 'Where does the code live?', a: 'In a repository you can access from day one, with the documentation another team would need to carry on.' },
                    { q: 'What happens after launch?', a: 'We can keep going with maintenance and new features, or hand the project to your in-house team with an orderly transition.' },
                ],
            },
        },
    },
    {
        id: 'web',
        slug: 'aplicaciones-web',
        span: 4,
        icon: 'layout-dashboard',
        projects: ['traego', 'albumcorp', 'citum'],
        title: 'Aplicaciones Web',
        desc: 'Paneles, portales de clientes y herramientas internas que funcionan en cualquier navegador, con los datos al día en todas las pantallas.',
        en: {
            title: 'Web Applications',
            desc: 'Dashboards, customer portals and internal tools that run in any browser, with the data current on every screen.',
        },
        page: {
            es: {
                headline: 'Tu operación, en una pestaña del navegador.',
                lead: 'Paneles, portales de clientes y herramientas internas que se abren desde un enlace, en el computador o en el celular. Nadie tiene que instalar nada.',
                pains: [
                    'Para saber cómo va el mes, alguien arma un reporte a mano cada lunes.',
                    'Tus clientes te escriben para preguntar el estado de su pedido porque no tienen dónde verlo.',
                    'La herramienta interna tarda tanto en cargar que el equipo prefiere anotar en papel.',
                    'Pensaste en una app, pero tus usuarios no van a descargar nada para usarlo dos veces al mes.',
                ],
                approach: [
                    'Diseñamos primero para el celular, que es donde ocurre la mayor parte del uso, y luego ampliamos al escritorio. La aplicación se comparte con un enlace y se puede instalar en la pantalla de inicio sin pasar por una tienda.',
                    'Conectamos los datos en tiempo real, así que un cambio de pedido, reserva o estado aparece en todas las pantallas a la vez. TraeGo funciona así: domiciliarios, facturación e indicadores del restaurante en un solo panel.',
                ],
                offer: [
                    { title: 'Paneles de control', desc: 'Ventas, pedidos o inventario en una sola vista, con filtros y exportación.' },
                    { title: 'Portales de clientes', desc: 'Tus clientes consultan, reservan, pagan o siguen su pedido por su cuenta.' },
                    { title: 'Herramientas internas', desc: 'Reemplazan hojas de cálculo y formularios sueltos por un flujo con roles y permisos.' },
                    { title: 'Apps instalables (PWA)', desc: 'Se instalan desde el navegador y siguen funcionando con mala conexión.' },
                ],
                process: [
                    { title: 'Mapear', desc: 'Identificamos quién usa la aplicación, qué ve cada rol y qué datos se mueven entre ellos.', output: 'Mapa de roles y datos' },
                    { title: 'Prototipar', desc: 'Diseñamos y validamos las pantallas críticas antes de programar.', output: 'Prototipo navegable' },
                    { title: 'Desarrollar', desc: 'Frontend y backend en paralelo, con una versión funcional cada semana.', output: 'Aplicación en entorno de pruebas' },
                    { title: 'Medir y afinar', desc: 'Después del lanzamiento medimos velocidad y uso real, y corregimos.', output: 'Aplicación en producción' },
                ],
                notFit: [
                    'Tu producto necesita funciones del teléfono que el navegador no ofrece. Ahí conviene una app nativa.',
                    'Solo necesitas una página que presente tu empresa. Para eso sirve un sitio o una landing page.',
                ],
                faq: [
                    { q: '¿Qué diferencia hay con una app móvil?', a: 'La aplicación web se abre con un enlace y se actualiza sin que el usuario haga nada. Una app móvil pasa por las tiendas y tiene más acceso al teléfono. Te ayudamos a elegir según cómo la van a usar.' },
                    { q: '¿Funciona sin internet?', a: 'En parte. Como PWA puede guardar datos y seguir funcionando con conexión inestable, y sincroniza cuando vuelve la señal.' },
                    { q: '¿Se conecta con lo que ya usamos?', a: 'Sí, si esas herramientas tienen una API o permiten exportar datos: pasarelas de pago, WhatsApp, hojas de cálculo, ERP o CRM.' },
                ],
            },
            en: {
                headline: 'Your operation, in one browser tab.',
                lead: 'Dashboards, customer portals and internal tools that open from a link, on a laptop or a phone. Nobody has to install anything.',
                pains: [
                    'To know how the month is going, someone builds a report by hand every Monday.',
                    'Customers message you to ask about their order because they have nowhere to check it.',
                    'The internal tool takes so long to load that the team would rather write things on paper.',
                    'You thought about an app, but your users will not download anything to use it twice a month.',
                ],
                approach: [
                    'We design for the phone first, where most of the use happens, then widen to desktop. The application is shared with a link and can be added to the home screen without going through a store.',
                    'We connect the data in real time, so a change to an order, booking or status shows on every screen at once. TraeGo works this way: couriers, invoicing and the restaurant’s KPIs in a single dashboard.',
                ],
                offer: [
                    { title: 'Dashboards', desc: 'Sales, orders or stock in a single view, with filters and export.' },
                    { title: 'Customer portals', desc: 'Your customers look up, book, pay or track their order on their own.' },
                    { title: 'Internal tools', desc: 'They replace spreadsheets and stray forms with one flow, with roles and permissions.' },
                    { title: 'Installable apps (PWA)', desc: 'Installed from the browser, and they keep working on a poor connection.' },
                ],
                process: [
                    { title: 'Map', desc: 'We identify who uses the application, what each role sees and which data moves between them.', output: 'Map of roles and data' },
                    { title: 'Prototype', desc: 'We design and validate the critical screens before coding.', output: 'Clickable prototype' },
                    { title: 'Develop', desc: 'Frontend and backend in parallel, with a working version every week.', output: 'Application on staging' },
                    { title: 'Measure and tune', desc: 'After launch we measure speed and real use, and fix what needs fixing.', output: 'Application in production' },
                ],
                notFit: [
                    'Your product needs phone features the browser does not offer. A native app is the better call there.',
                    'You only need a page that presents your company. A website or a landing page does that.',
                ],
                faq: [
                    { q: 'How is it different from a mobile app?', a: 'A web application opens from a link and updates without the user doing anything. A mobile app goes through the stores and gets deeper access to the phone. We help you choose based on how it will be used.' },
                    { q: 'Does it work offline?', a: 'Partly. As a PWA it can store data and keep working on a shaky connection, then sync when the signal returns.' },
                    { q: 'Will it connect to what we already use?', a: 'Yes, if those tools have an API or can export data: payment gateways, WhatsApp, spreadsheets, an ERP or a CRM.' },
                ],
            },
        },
    },
    {
        id: 'auto',
        slug: 'automatizacion',
        span: 4,
        icon: 'workflow',
        projects: ['traego', 'citum'],
        title: 'Automatización',
        desc: 'Conectamos WhatsApp, tu CRM, la facturación y tus hojas de cálculo para que los datos pasen solos de una herramienta a otra.',
        en: {
            title: 'Automation',
            desc: 'We connect WhatsApp, your CRM, invoicing and spreadsheets so data moves from one tool to the next on its own.',
        },
        page: {
            es: {
                headline: 'Que las tareas repetitivas se hagan solas.',
                lead: 'Conectamos las herramientas que ya usas, como WhatsApp, tu CRM, la facturación y tus hojas de cálculo. Los datos pasan de una a otra sin que nadie los copie.',
                pains: [
                    'Alguien de tu equipo pasa la mañana copiando pedidos de WhatsApp a una hoja de cálculo.',
                    'Un error al transcribir un precio o una dirección te costó un cliente el mes pasado.',
                    'El reporte semanal depende de que una persona se acuerde de armarlo.',
                    'Los clientes esperan respuesta hasta que alguien revisa el correo.',
                ],
                approach: [
                    'Primero observamos cómo trabaja tu equipo y medimos cuánto tiempo se va en cada tarea manual. Con eso elegimos qué automatizar: lo que más horas consume y menos riesgo tiene al cambiarlo.',
                    'Cada flujo lleva registro de errores y alertas, así te enteras cuando algo falla el mismo día. Si ayuda, sumamos IA para clasificar mensajes, leer documentos o sugerir respuestas.',
                ],
                offer: [
                    { title: 'Integraciones', desc: 'Un pedido nuevo crea la factura, avisa a bodega y actualiza el inventario, sin que nadie lo digite.' },
                    { title: 'Flujos de aprobación', desc: 'Solicitudes, aprobaciones y avisos que avanzan sin perseguir a nadie.' },
                    { title: 'Reportes automáticos', desc: 'Los indicadores llegan a tu correo o a WhatsApp a la hora que definas.' },
                    { title: 'Asistentes con IA', desc: 'Clasifican mensajes, extraen datos de facturas y documentos, y proponen respuestas.' },
                ],
                process: [
                    { title: 'Observar', desc: 'Documentamos cómo trabaja hoy tu equipo y cuánto tarda cada tarea.', output: 'Mapa de procesos con horas' },
                    { title: 'Priorizar', desc: 'Elegimos las automatizaciones con más retorno y menos riesgo.', output: 'Lista priorizada' },
                    { title: 'Construir', desc: 'Implementamos los flujos con registro de errores y alertas.', output: 'Flujos en funcionamiento' },
                    { title: 'Medir', desc: 'Comparamos las horas antes y después, y ajustamos lo que haga falta.', output: 'Horas ahorradas, medidas' },
                ],
                notFit: [
                    'El proceso todavía cambia cada semana. Automatizar algo sin definir solo hace los errores más rápidos.',
                    'La tarea ocurre dos veces al mes y toma diez minutos.',
                ],
                faq: [
                    { q: '¿Qué herramientas pueden conectar?', a: 'Cualquiera que tenga una API o permita importar y exportar datos: WhatsApp Business, Google Sheets, CRM, facturación, bases de datos y correo.' },
                    { q: '¿Qué pasa si una automatización falla?', a: 'Cada flujo registra lo que hace. Si algo falla, te llega una alerta con el detalle y el dato queda guardado para procesarlo de nuevo.' },
                    { q: '¿Tengo que cambiar las herramientas que uso?', a: 'Normalmente no. Partimos de lo que tu equipo ya usa y solo proponemos cambiar algo si la herramienta actual no lo permite.' },
                ],
            },
            en: {
                headline: 'Let the repetitive work run itself.',
                lead: 'We connect the tools you already use, like WhatsApp, your CRM, invoicing and spreadsheets. Data moves from one to the next without anybody copying it.',
                pains: [
                    'Someone on your team spends the morning copying WhatsApp orders into a spreadsheet.',
                    'A mistyped price or address cost you a customer last month.',
                    'The weekly report depends on one person remembering to build it.',
                    'Customers wait for a reply until someone checks the inbox.',
                ],
                approach: [
                    'First we watch how your team works and measure how much time each manual task takes. That tells us what to automate: whatever eats the most hours and is the least risky to change.',
                    'Every flow logs errors and raises alerts, so you learn about a failure the same day. Where it helps, we add AI to sort messages, read documents or suggest replies.',
                ],
                offer: [
                    { title: 'Integrations', desc: 'A new order creates the invoice, tells the warehouse and updates stock, with nobody typing it in.' },
                    { title: 'Approval flows', desc: 'Requests, approvals and notices that move forward without chasing anyone.' },
                    { title: 'Automated reports', desc: 'Your KPIs land in your inbox or on WhatsApp at the time you set.' },
                    { title: 'AI assistants', desc: 'They sort messages, pull data out of invoices and documents, and draft replies.' },
                ],
                process: [
                    { title: 'Observe', desc: 'We document how your team works today and how long each task takes.', output: 'Process map with hours' },
                    { title: 'Prioritise', desc: 'We pick the automations with the highest return and lowest risk.', output: 'Prioritised list' },
                    { title: 'Build', desc: 'We implement the flows with error logging and alerts.', output: 'Flows running' },
                    { title: 'Measure', desc: 'We compare hours before and after, and adjust what needs it.', output: 'Hours saved, measured' },
                ],
                notFit: [
                    'The process still changes every week. Automating something undefined only makes the mistakes faster.',
                    'The task happens twice a month and takes ten minutes.',
                ],
                faq: [
                    { q: 'Which tools can you connect?', a: 'Any tool with an API or data import and export: WhatsApp Business, Google Sheets, CRMs, invoicing, databases and email.' },
                    { q: 'What if an automation fails?', a: 'Every flow logs what it does. If something fails you get an alert with the details, and the data is kept so it can be processed again.' },
                    { q: 'Do I have to change the tools I use?', a: 'Usually not. We start from what your team already uses and only suggest a change when the current tool cannot do the job.' },
                ],
            },
        },
    },
    {
        id: 'brand',
        slug: 'identidad-de-marca',
        span: 4,
        icon: 'palette',
        projects: [],
        title: 'Identidad de Marca',
        desc: 'Logotipo, paleta, tipografía y tono de voz, reunidos en un manual que tu equipo puede aplicar en cada canal.',
        en: {
            title: 'Brand Identity',
            desc: 'Logo, palette, typography and tone of voice, gathered in a guide your team can apply on every channel.',
        },
        page: {
            es: {
                headline: 'Una marca que se ve igual en todas partes.',
                lead: 'Definimos cómo se ve y cómo habla tu negocio. Lo dejamos en un manual que cualquier persona de tu equipo puede aplicar.',
                pains: [
                    'Tu logo tiene tres versiones y nadie sabe cuál es la oficial.',
                    'Cada publicación en redes la hace alguien distinto, y se nota.',
                    'Tu producto es mejor que el de la competencia, pero su marca inspira más confianza.',
                    'Vas a lanzar y tienes un nombre y una idea, pero nada visual.',
                ],
                approach: [
                    'Empezamos por las preguntas de negocio: a quién le vendes, contra quién compites y qué quieres que la gente recuerde de ti. De esas respuestas salen las decisiones visuales, y por eso cada una tiene un porqué.',
                    'Exploramos varias rutas visuales, elegimos una contigo y la llevamos a las piezas que vas a usar de verdad: la app, el perfil de Instagram, la presentación comercial o el empaque.',
                ],
                offer: [
                    { title: 'Estrategia de marca', desc: 'Posicionamiento, personalidad y mensajes clave en un documento corto.' },
                    { title: 'Logotipo y sistema visual', desc: 'Marca principal, variantes, ícono, paleta de color y tipografía.' },
                    { title: 'Manual de marca', desc: 'Reglas de uso con ejemplos de lo que sí y lo que no.' },
                    { title: 'Plantillas', desc: 'Redes sociales, presentaciones, papelería y la interfaz de tu producto digital.' },
                ],
                process: [
                    { title: 'Investigar', desc: 'Revisamos tu mercado, tu competencia y a quién le hablas.', output: 'Resumen de posicionamiento' },
                    { title: 'Definir', desc: 'Acordamos personalidad, tono y mensajes.', output: 'Plataforma de marca' },
                    { title: 'Explorar', desc: 'Proponemos rutas visuales y refinamos la elegida.', output: 'Identidad aprobada' },
                    { title: 'Aplicar', desc: 'Llevamos la identidad a las piezas que vas a usar.', output: 'Manual y archivos finales' },
                ],
                notFit: [
                    'Solo necesitas un logo rápido para salir del paso.',
                    'No hay tiempo en tu equipo para revisar propuestas y opinar durante el proceso.',
                ],
                faq: [
                    { q: '¿Qué archivos recibo?', a: 'El logotipo en SVG, PNG y PDF, la paleta con sus códigos de color, las tipografías, el manual en PDF y las plantillas editables.' },
                    { q: '¿Pueden renovar una marca que ya existe?', a: 'Sí. Puede ser un ajuste que conserve lo que tus clientes ya reconocen, o una renovación completa si la marca actual te está frenando.' },
                    { q: '¿Incluye el diseño de la web o la app?', a: 'La identidad se aplica a la interfaz dentro de las plantillas. El diseño completo de un producto digital es parte de Diseño UI/UX.' },
                ],
            },
            en: {
                headline: 'A brand that looks the same everywhere.',
                lead: 'We define how your business looks and how it speaks. It all goes into a guide anyone on your team can apply.',
                pains: [
                    'Your logo exists in three versions and nobody knows which one is official.',
                    'Every social post is made by someone different, and it shows.',
                    'Your product is better than the competition’s, but their brand earns more trust.',
                    'You are about to launch with a name and an idea, and nothing visual.',
                ],
                approach: [
                    'We start with business questions: who you sell to, who you compete with and what you want people to remember. The visual decisions come from those answers, so each one has a reason behind it.',
                    'We explore several visual routes, choose one with you and apply it to the pieces you will actually use: the app, the Instagram profile, the sales deck or the packaging.',
                ],
                offer: [
                    { title: 'Brand strategy', desc: 'Positioning, personality and key messages in a short document.' },
                    { title: 'Logo and visual system', desc: 'Primary mark, variants, icon, colour palette and typography.' },
                    { title: 'Brand guidelines', desc: 'Usage rules with examples of what to do and what to avoid.' },
                    { title: 'Templates', desc: 'Social media, presentations, stationery and your digital product’s interface.' },
                ],
                process: [
                    { title: 'Research', desc: 'We look at your market, your competitors and who you speak to.', output: 'Positioning summary' },
                    { title: 'Define', desc: 'We agree on personality, tone and messages.', output: 'Brand platform' },
                    { title: 'Explore', desc: 'We propose visual routes and refine the chosen one.', output: 'Approved identity' },
                    { title: 'Apply', desc: 'We carry the identity into the pieces you will use.', output: 'Guidelines and final files' },
                ],
                notFit: [
                    'You just need a quick logo to get by.',
                    'Nobody on your team has time to review proposals and give feedback along the way.',
                ],
                faq: [
                    { q: 'Which files do I get?', a: 'The logo in SVG, PNG and PDF, the palette with its colour codes, the typefaces, the guidelines as a PDF and editable templates.' },
                    { q: 'Can you refresh an existing brand?', a: 'Yes. It can be a tune-up that keeps what your customers already recognise, or a full overhaul if the current brand is holding you back.' },
                    { q: 'Does it include designing the website or app?', a: 'The identity is applied to the interface within the templates. Designing a full digital product falls under UI/UX Design.' },
                ],
            },
        },
    },
    {
        id: 'landing',
        slug: 'landing-pages',
        span: 5,
        icon: 'layout-template',
        projects: ['invio'],
        title: 'Landing Pages',
        desc: 'Páginas para campañas y lanzamientos: texto, diseño y desarrollo, con carga rápida en el celular y medición de conversiones.',
        en: {
            title: 'Landing Pages',
            desc: 'Pages for campaigns and launches: copy, design and build, fast on mobile and measuring every conversion.',
        },
        page: {
            es: {
                headline: 'Una página con un solo trabajo: convertir.',
                lead: 'Escribimos, diseñamos y desarrollamos landing pages para campañas y lanzamientos. Cargan rápido en el celular y miden cada conversión desde el primer día.',
                pains: [
                    'Pagas anuncios que llevan a tu página de inicio, y la gente no encuentra qué hacer.',
                    'Tu página tarda varios segundos en cargar con datos móviles, y la mitad se va antes.',
                    'No sabes cuántas ventas empezaron en la página ni cuánto te costó cada una.',
                    'Lanzas la próxima semana y todavía no hay dónde enviar a la gente.',
                ],
                approach: [
                    'Escribimos el texto antes de diseñar. Cada sección responde una duda concreta del cliente: qué es, para quién, cuánto cuesta y por qué confiar. Lo que no ayuda a decidir, se quita.',
                    'La construimos sin plantillas pesadas para que cargue en menos de dos segundos, con SEO técnico y analítica conectados desde el lanzamiento. Así sabes qué funciona y qué cambiar.',
                ],
                offer: [
                    { title: 'Texto de conversión', desc: 'Titular, argumentos y respuestas a las objeciones de tu cliente.' },
                    { title: 'Diseño y desarrollo', desc: 'Una página hecha para tu oferta, rápida y bien resuelta en el celular.' },
                    { title: 'SEO técnico', desc: 'Estructura semántica, metadatos y rendimiento para que los buscadores la entiendan.' },
                    { title: 'Medición', desc: 'Eventos de conversión, píxeles de campañas y pruebas A/B.' },
                ],
                process: [
                    { title: 'Objetivo', desc: 'Definimos la acción que debe tomar el visitante y cómo la vamos a medir.', output: 'Objetivo y métrica' },
                    { title: 'Mensaje', desc: 'Escribimos la estructura y el texto completo.', output: 'Texto aprobado' },
                    { title: 'Construcción', desc: 'Diseñamos y desarrollamos con la velocidad como prioridad.', output: 'Página publicada' },
                    { title: 'Optimización', desc: 'Revisamos los datos y probamos variantes.', output: 'Cambios con datos detrás' },
                ],
                notFit: [
                    'Necesitas un sitio con muchas secciones, blog y catálogo. Eso es un sitio web completo.',
                    'Todavía no hay una oferta clara. Primero hay que definir qué vendes y a quién.',
                ],
                faq: [
                    { q: '¿Cuánto tarda?', a: 'Depende de si ya tienes el texto y la marca definidos. El plazo exacto va en la propuesta, antes de empezar.' },
                    { q: '¿Sirve para Google Ads y Meta Ads?', a: 'Sí. Conectamos los píxeles y eventos de conversión de cada plataforma para que las campañas optimicen sobre contactos o ventas reales.' },
                    { q: '¿Puedo cambiar los textos después?', a: 'Sí. Si vas a cambiar textos o precios a menudo, la conectamos a un editor sencillo para que no dependas de nosotros.' },
                ],
            },
            en: {
                headline: 'One page with one job: converting.',
                lead: 'We write, design and build landing pages for campaigns and launches. They load fast on mobile and measure every conversion from day one.',
                pains: [
                    'You pay for ads that land on your home page, and people cannot work out what to do.',
                    'Your page takes several seconds to load on mobile data, and half the visitors leave first.',
                    'You do not know how many sales started on the page or what each one cost.',
                    'You launch next week and there is still nowhere to send people.',
                ],
                approach: [
                    'We write the copy before designing. Each section answers one concrete question the customer has: what it is, who it is for, what it costs and why to trust you. Anything that does not help them decide comes out.',
                    'We build it without heavy templates so it loads in under two seconds, with technical SEO and analytics wired in from launch. That way you know what works and what to change.',
                ],
                offer: [
                    { title: 'Conversion copy', desc: 'Headline, arguments and answers to your customer’s objections.' },
                    { title: 'Design and build', desc: 'A page made for your offer, fast and well resolved on mobile.' },
                    { title: 'Technical SEO', desc: 'Semantic structure, metadata and performance search engines can read.' },
                    { title: 'Measurement', desc: 'Conversion events, campaign pixels and A/B tests.' },
                ],
                process: [
                    { title: 'Goal', desc: 'We define the action the visitor should take and how we will measure it.', output: 'Goal and metric' },
                    { title: 'Message', desc: 'We write the structure and the full copy.', output: 'Approved copy' },
                    { title: 'Build', desc: 'We design and develop with speed as the priority.', output: 'Page live' },
                    { title: 'Optimise', desc: 'We review the data and test variants.', output: 'Changes backed by data' },
                ],
                notFit: [
                    'You need a site with many sections, a blog and a catalogue. That is a full website.',
                    'There is no clear offer yet. First decide what you sell and to whom.',
                ],
                faq: [
                    { q: 'How long does it take?', a: 'It depends on whether your copy and brand are already defined. The exact timeline is in the proposal, before we start.' },
                    { q: 'Does it work with Google Ads and Meta Ads?', a: 'Yes. We wire up each platform’s pixels and conversion events so campaigns optimise for real leads or sales.' },
                    { q: 'Can I change the copy later?', a: 'Yes. If you will change copy or prices often, we connect it to a simple editor so you do not depend on us.' },
                ],
            },
        },
    },
    {
        id: 'consulting',
        slug: 'consultoria-tecnica',
        span: 7,
        icon: 'compass',
        projects: [],
        title: 'Consultoría Técnica',
        desc: 'Revisamos código, arquitectura e infraestructura, y te entregamos un plan priorizado por impacto, riesgo y costo.',
        en: {
            title: 'Technical Consulting',
            desc: 'We review code, architecture and infrastructure, and hand you a plan prioritised by impact, risk and cost.',
        },
        page: {
            es: {
                headline: 'Un diagnóstico técnico en términos de negocio.',
                lead: 'Revisamos tu código, tu arquitectura y tu infraestructura. Te decimos qué está frenando el crecimiento, qué riesgos corres y en qué orden resolverlos.',
                pains: [
                    'La aplicación se volvió lenta cuando llegaron más usuarios, y nadie sabe exactamente por qué.',
                    'La factura de la nube sube cada mes más rápido que tus ventas.',
                    'Vas a levantar inversión y te van a preguntar por la base técnica.',
                    'No tienes CTO, y cada decisión técnica la toma quien esté más cerca.',
                ],
                approach: [
                    'Leemos el código, revisamos la infraestructura y los costos, y hablamos con quien construye y mantiene el producto. Buscamos lo que hoy es un riesgo y lo que lo será cuando el negocio crezca.',
                    'El resultado es un documento corto con cada hallazgo explicado en impacto, riesgo y costo, y una hoja de ruta ordenada. Si quieres, después te acompañamos a ejecutarla con tu equipo o con el nuestro.',
                ],
                offer: [
                    { title: 'Auditoría de código', desc: 'Calidad, seguridad, dependencias desactualizadas y deuda técnica.' },
                    { title: 'Revisión de arquitectura', desc: 'Puntos únicos de falla, capacidad de crecer y costo de infraestructura.' },
                    { title: 'Elección de stack', desc: 'Criterio para escoger tecnologías y proveedores antes de construir.' },
                    { title: 'Hoja de ruta', desc: 'Mejoras priorizadas con esfuerzo e impacto estimados.' },
                ],
                process: [
                    { title: 'Contexto', desc: 'Entendemos tus objetivos de negocio y los problemas que ya notas.', output: 'Preguntas a responder' },
                    { title: 'Análisis', desc: 'Revisamos código, infraestructura, métricas y procesos.', output: 'Hallazgos documentados' },
                    { title: 'Diagnóstico', desc: 'Clasificamos cada hallazgo por riesgo e impacto.', output: 'Informe de diagnóstico' },
                    { title: 'Plan', desc: 'Presentamos la hoja de ruta a tu equipo y resolvemos dudas.', output: 'Hoja de ruta priorizada' },
                ],
                notFit: [
                    'Buscas que alguien valide una decisión ya tomada. Te diremos lo que encontremos, aunque no coincida.',
                    'No podemos tener acceso al código ni a la infraestructura.',
                ],
                faq: [
                    { q: '¿Necesitan acceso a nuestro código?', a: 'Sí, de solo lectura. Firmamos un acuerdo de confidencialidad antes de revisar cualquier cosa.' },
                    { q: '¿Qué recibo al final?', a: 'Un informe con los hallazgos clasificados por riesgo, una hoja de ruta priorizada y una sesión para presentarlo a tu equipo.' },
                    { q: '¿Pueden ejecutar las mejoras?', a: 'Sí. La hoja de ruta la puede ejecutar tu equipo, el nuestro o ambos juntos.' },
                ],
            },
            en: {
                headline: 'A technical diagnosis in business terms.',
                lead: 'We review your code, architecture and infrastructure. We tell you what is holding growth back, which risks you are running and in what order to fix them.',
                pains: [
                    'The application slowed down once more users arrived, and nobody knows exactly why.',
                    'Your cloud bill grows faster every month than your sales.',
                    'You are about to raise money and investors will ask about the technical foundation.',
                    'You have no CTO, so each technical decision is made by whoever is closest.',
                ],
                approach: [
                    'We read the code, review the infrastructure and costs, and talk to whoever builds and maintains the product. We look for what is a risk today and what will become one as the business grows.',
                    'You get a short document with each finding explained in impact, risk and cost, plus an ordered roadmap. If you want, we then help carry it out with your team or ours.',
                ],
                offer: [
                    { title: 'Code audit', desc: 'Quality, security, outdated dependencies and technical debt.' },
                    { title: 'Architecture review', desc: 'Single points of failure, room to grow and infrastructure cost.' },
                    { title: 'Stack selection', desc: 'Judgement for choosing technologies and vendors before you build.' },
                    { title: 'Roadmap', desc: 'Prioritised improvements with estimated effort and impact.' },
                ],
                process: [
                    { title: 'Context', desc: 'We learn your business goals and the problems you already notice.', output: 'Questions to answer' },
                    { title: 'Analysis', desc: 'We review code, infrastructure, metrics and processes.', output: 'Documented findings' },
                    { title: 'Diagnosis', desc: 'We rank every finding by risk and impact.', output: 'Diagnosis report' },
                    { title: 'Plan', desc: 'We present the roadmap to your team and answer questions.', output: 'Prioritised roadmap' },
                ],
                notFit: [
                    'You want someone to rubber-stamp a decision already made. We will report what we find, even if it disagrees.',
                    'We cannot get access to the code or the infrastructure.',
                ],
                faq: [
                    { q: 'Do you need access to our code?', a: 'Yes, read-only. We sign a non-disclosure agreement before reviewing anything.' },
                    { q: 'What do I get at the end?', a: 'A report with findings ranked by risk, a prioritised roadmap and a session to present it to your team.' },
                    { q: 'Can you carry out the improvements?', a: 'Yes. The roadmap can be carried out by your team, ours or both together.' },
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
        [`${k}.headline`]: page.headline,
        [`${k}.lead`]: page.lead,
    };
    page.pains.forEach((p, i) => { out[`${k}.pain${i}`] = p; });
    page.approach.forEach((p, i) => { out[`${k}.approach${i}`] = p; });
    page.offer.forEach((o, i) => {
        out[`${k}.offer${i}.title`] = o.title;
        out[`${k}.offer${i}.desc`] = o.desc;
    });
    page.process.forEach((s, i) => {
        out[`${k}.step${i}.title`] = s.title;
        out[`${k}.step${i}.desc`] = s.desc;
        out[`${k}.step${i}.output`] = s.output;
    });
    page.notFit.forEach((f, i) => { out[`${k}.notfit${i}`] = f; });
    page.faq.forEach((f, i) => {
        out[`${k}.faq${i}.q`] = f.q;
        out[`${k}.faq${i}.a`] = f.a;
    });
    return out;
}
