/**
 * Bidiex Studio — i18n dictionary (ES / EN)
 * Keys are referenced from markup via data-i18n / data-i18n-placeholder /
 * data-i18n-aria / data-i18n-title.
 *
 * Project and capability copy is not typed here: it lives, in both languages,
 * in src/data/, and the keys for it are derived at the bottom of this file.
 */
import { projects, localizeProject } from '../data/projects.js';
import { services, serviceKeys } from '../data/services.js';

export const translations = {
    es: {
        // Navbar
        "nav.about": "Nosotros",
        "nav.projects": "Proyectos",
        "nav.services": "Servicios",
        "nav.founder": "Fundador",
        "nav.cta": "Iniciar Proyecto",
        "lang.es": "Cambiar a Español",
        "lang.en": "Switch to English",
        "nav.home": "Bidiex, ir al inicio",
        "nav.menu": "Abrir menú",
        
        // Hero
        "hero.badge": "✦ Estudio Independiente de Software",
        "hero.title": "Construimos Productos Digitales que Impulsan Negocios.",
        "hero.subtitle": "Ingeniería de software, diseño de producto y automatización combinados para crear soluciones digitales escalables que resuelven problemas reales y generan valor a largo plazo.",
        "hero.ctaPrimary": "Ver Proyectos",
        "hero.ctaSecondary": "Contáctanos",
        
        // Capabilities
        "cap.1": "Desarrollo de Software",
        "cap.2": "Branding",
        "cap.3": "Automatización",
        "cap.4": "Productos Digitales",
        "cap.5": "Inteligencia Artificial",
        
        // About
        "about.label": "[ Nosotros ]",
        "about.title": "Quiénes somos",
        "about.p1": "Bidiex es un estudio independiente de productos digitales enfocado en crear software, soluciones de automatización, experiencias digitales y herramientas escalables para emprendedores y empresas.",
        "about.p2": "Creemos en la precisión por encima de la decoración. Cada producto que construimos está diseñado para ser funcional, hermoso y fundamentalmente robusto.",
        
        // Projects
        "projects.label": "[ Proyectos ]",
        "projects.title": "Nuestros Proyectos",
        "status.active": "En producción",
        "status.dev": "En desarrollo",
        "project.visit": "Visitar sitio",
        "project.view": "Ver proyecto",
        "project.soon": "Próximamente",

        // Project modal
        "modal.challenge": "El reto",
        "modal.solution": "La solución",
        "modal.impact": "Lo que cambia",
        "modal.includes": "Qué incluye",
        "modal.stack": "Construido con",
        "modal.similar": "Quiero algo así",
        "modal.close": "Cerrar",
        
        // Services
        "services.label": "[ Estudio ]",
        "services.title": "Nuestras Capacidades",
        "services.more": "Conocer más",

        // Capability pages
        "srvpage.eyebrow": "Capacidad",
        "srvpage.back": "Todas las capacidades",
        "srvpage.what": "Qué hacemos",
        "srvpage.how": "Cómo trabajamos",
        "srvpage.fit": "Es para ti si…",
        "srvpage.others": "Otras capacidades",
        
        // Stack
        "stack.label":   "[ Stack ]",
        "stack.title":   "Construido con las herramientas correctas",
        
        // Process
        "process.label": "[ Proceso ]",
        "process.title": "Cómo Construimos",
        "process.s1.title": "Descubrimiento",
        "process.s1.desc": "Entender tu negocio, tus objetivos y el espacio del problema antes de escribir una sola línea de código.",
        "process.s2.title": "Planificación",
        "process.s2.desc": "Arquitectar la solución, definir el stack tecnológico y trazar el recorrido del usuario.",
        "process.s3.title": "Diseño",
        "process.s3.desc": "Crear una interfaz y experiencia de usuario premium que se alinee con tu identidad de marca.",
        "process.s4.title": "Desarrollo",
        "process.s4.desc": "Construir el producto con código escalable, mantenible y de alto rendimiento.",
        "process.s5.title": "Lanzamiento",
        "process.s5.desc": "Desplegar el software, asegurar métricas de rendimiento y gestionar la salida a producción.",
        "process.s6.title": "Soporte",
        "process.s6.desc": "Proveer mantenimiento continuo, optimizaciones y escalar la infraestructura a medida que creces.",
        
        // Why Us
        "why.label": "[ Ventaja ]",
        "why.title": "Por qué elegirnos.",
        "why.c1.title": "Tecnologías Modernas",
        "why.c1.desc": "Aprovechamos los stacks tecnológicos más resilientes y actuales.",
        "why.c2.title": "Arquitectura Escalable",
        "why.c2.desc": "Construido para manejar el crecimiento desde el primer día.",
        "why.c3.title": "Comunicación Rápida",
        "why.c3.desc": "Acceso directo, sin burocracia corporativa.",
        "why.c4.title": "Atención al Detalle",
        "why.c4.desc": "Ejecución de diseño perfecta al pixel.",
        "why.c5.title": "Visión a Largo Plazo",
        "why.c5.desc": "Hacemos ingeniería pensada para el futuro.",
        
        // Contact
        "contact.label": "[ Consultas ]",
        "contact.title": "Construyamos algo.",
        "contact.subtitle": "Inicia una conversación directamente vía WhatsApp.",
        "contact.service": "¿Qué servicio te interesa?*",
        "contact.service.opt1": "Tecnología",
        "contact.service.opt2": "Marketing Digital",
        "contact.service.opt3": "Diseño",
        "contact.budget": "Presupuesto mensual*",
        "contact.budget.opt1": "200.000 COP - 400.000 COP",
        "contact.budget.opt2": "400.000 COP - 800.000 COP",
        "contact.budget.opt3": "800.000 COP - 1.000.000 COP",
        "contact.budget.opt4": ">1.000.000 COP",
        "contact.name": "Nombre*",
        "contact.name.placeholder": "Ej. Juan Pérez",
        "contact.company": "Compañía",
        "contact.company.placeholder": "Ej. Acme Corp",
        "contact.email": "Correo*",
        "contact.email.placeholder": "juan@ejemplo.com",
        "contact.phone": "Teléfono*",
        "contact.phone.title": "El teléfono debe tener 10 dígitos y empezar por 3",
        "contact.unspecified": "No especificado",
        "contact.project": "Cuéntanos sobre tu proyecto",
        "contact.project.placeholder": "Describe brevemente lo que quieres construir...",
        "contact.source": "¿Donde escuchaste sobre nosotros?",
        "contact.source.placeholder": "Ej. Google, LinkedIn, Referencia",
        "contact.terms": "He leído y acepto la ",
        "contact.terms.link": "Política de Tratamiento de Datos Personales",
        "contact.submit": "Enviar",
        
        // Footer & Utils
        "footer.tag": "Agencia Digital",
        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos",
        "footer.contact": "Contacto",
        "footer.rights": "Todos los derechos reservados.",
        "btn.totop": "Volver arriba",
        
        // 404
        "404.doctitle": "404 — Página No Encontrada | Bidiex",
        "404.title": "Página no encontrada",
        "404.desc": "La página que estás buscando no existe o ha sido movida.",
        "404.btn": "Volver al Inicio"
    },
    en: {
        // Navbar
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.services": "Services",
        "nav.founder": "Founder",
        "nav.cta": "Start Project",
        "lang.es": "Cambiar a Español",
        "lang.en": "Switch to English",
        "nav.home": "Bidiex, go to home",
        "nav.menu": "Open menu",
        
        // Hero
        "hero.badge": "✦ Independent Software Studio",
        "hero.title": "We Build Digital Products that Drive Businesses.",
        "hero.subtitle": "Software engineering, product design, and automation combined to create scalable digital solutions that solve real problems and generate long-term value.",
        "hero.ctaPrimary": "View Projects",
        "hero.ctaSecondary": "Contact Us",
        
        // Capabilities
        "cap.1": "Software Development",
        "cap.2": "Branding",
        "cap.3": "Automation",
        "cap.4": "Digital Products",
        "cap.5": "Artificial Intelligence",
        
        // About
        "about.label": "[ About ]",
        "about.title": "Who we are",
        "about.p1": "Bidiex is an independent digital product studio focused on creating software, automation solutions, digital experiences and scalable tools for entrepreneurs and businesses.",
        "about.p2": "We believe in precision over decoration. Every product we build is designed to be functional, beautiful, and fundamentally robust.",
        
        // Projects
        "projects.label": "[ Projects ]",
        "projects.title": "Our projects",
        "status.active": "Live",
        "status.dev": "In development",
        "project.visit": "Visit site",
        "project.view": "View project",
        "project.soon": "Coming soon",

        // Project modal
        "modal.challenge": "The challenge",
        "modal.solution": "The solution",
        "modal.impact": "What changes",
        "modal.includes": "What's included",
        "modal.stack": "Built with",
        "modal.similar": "I want something like this",
        "modal.close": "Close",
        
        // Services
        "services.label": "[ Studio ]",
        "services.title": "Our Capabilities",
        "services.more": "Learn more",

        // Capability pages
        "srvpage.eyebrow": "Capability",
        "srvpage.back": "All capabilities",
        "srvpage.what": "What we do",
        "srvpage.how": "How we work",
        "srvpage.fit": "This is for you if…",
        "srvpage.others": "Other capabilities",
        
        // Stack
        "stack.label":   "[ Stack ]",
        "stack.title":   "Built with the right tools",
        
        // Process
        "process.label": "[ Process ]",
        "process.title": "How We Build",
        "process.s1.title": "Discovery",
        "process.s1.desc": "Understanding your business, goals, and the problem space before writing a single line of code.",
        "process.s2.title": "Planning",
        "process.s2.desc": "Architecting the solution, defining the tech stack, and mapping out user journeys.",
        "process.s3.title": "Design",
        "process.s3.desc": "Crafting a premium user interface and experience that aligns with your brand identity.",
        "process.s4.title": "Development",
        "process.s4.desc": "Building the product with scalable, maintainable, and highly performant code.",
        "process.s5.title": "Launch",
        "process.s5.desc": "Deploying the software, ensuring performance metrics, and managing the rollout.",
        "process.s6.title": "Support",
        "process.s6.desc": "Providing ongoing maintenance, optimizations, and scaling infrastructure as you grow.",
        
        // Why Us
        "why.label": "[ Advantage ]",
        "why.title": "Why partner with us.",
        "why.c1.title": "Modern Technologies",
        "why.c1.desc": "We leverage the latest resilient tech stacks.",
        "why.c2.title": "Scalable Architecture",
        "why.c2.desc": "Built to handle growth from day one.",
        "why.c3.title": "Fast Communication",
        "why.c3.desc": "Direct access, zero corporate bloat.",
        "why.c4.title": "Attention to Detail",
        "why.c4.desc": "Pixel-perfect design execution.",
        "why.c5.title": "Long-term Vision",
        "why.c5.desc": "We engineer for the future.",
        
        // Contact
        "contact.label": "[ Inquiries ]",
        "contact.title": "Let's build something.",
        "contact.subtitle": "Start a conversation directly via WhatsApp.",
        "contact.service": "What service are you interested in?*",
        "contact.service.opt1": "Technology",
        "contact.service.opt2": "Digital Marketing",
        "contact.service.opt3": "Design",
        "contact.budget": "Monthly budget*",
        "contact.budget.opt1": "200.000 COP - 400.000 COP",
        "contact.budget.opt2": "400.000 COP - 800.000 COP",
        "contact.budget.opt3": "800.000 COP - 1.000.000 COP",
        "contact.budget.opt4": ">1.000.000 COP",
        "contact.name": "Name*",
        "contact.name.placeholder": "e.g. John Doe",
        "contact.company": "Company",
        "contact.company.placeholder": "e.g. Acme Corp",
        "contact.email": "Email*",
        "contact.email.placeholder": "john@example.com",
        "contact.phone": "Phone*",
        "contact.phone.title": "The phone number must have 10 digits and start with 3",
        "contact.unspecified": "Not specified",
        "contact.project": "Tell us about your project",
        "contact.project.placeholder": "Briefly describe what you want to build...",
        "contact.source": "Where did you hear about us?",
        "contact.source.placeholder": "e.g. Google, LinkedIn, Referral",
        "contact.terms": "I have read and accept the ",
        "contact.terms.link": "Personal Data Processing Policy",
        "contact.submit": "Submit",
        
        // Footer & Utils
        "footer.tag": "Digital Agency",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms",
        "footer.contact": "Contact",
        "footer.rights": "All rights reserved.",
        "btn.totop": "Back to top",
        
        // 404
        "404.doctitle": "404 — Page Not Found | Bidiex",
        "404.title": "Page not found",
        "404.desc": "The page you are looking for doesn't exist or has been moved.",
        "404.btn": "Return Home"
    }
};

// Derived keys — one source for the prose, whichever language renders it.
for (const lang of ['es', 'en']) {
    const dict = translations[lang];
    for (const project of projects) {
        const p = localizeProject(project, lang);
        dict[`project.${p.id}.tagline`] = p.tagline;
        dict[`project.${p.id}.sector`] = p.tags[p.tags.length - 1];
        dict[`project.${p.id}.preview`] = (lang === 'es' ? 'Vista previa de ' : 'Preview of ') + p.name;
    }
    for (const service of services) {
        Object.assign(dict, serviceKeys(service, lang));
    }
}
