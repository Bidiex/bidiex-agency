/**
 * Bidiex Studio — Main Javascript
 * Modular, vanilla JS without global pollution.
 */

(function() {
    'use strict';
    
    // Global state
    let currentLang = 'es';

    // ============================================
    // MODULE: i18n — Internationalization
    // ============================================
    const I18n = (() => {
        const translations = {
            es: {
                // Navbar
                "nav.about": "Nosotros",
                "nav.projects": "Proyectos",
                "nav.services": "Servicios",
                "nav.founder": "Fundador",
                "nav.cta": "Iniciar Proyecto",
                "lang.es": "Cambiar a Español",
                "lang.en": "Switch to English",
                
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
                "project.traego.tagline": "Plataforma SaaS B2B2C de gestión integral de gastronegocios",
                "project.albumcorp.tagline": "Plataforma SaaS B2B de álbumes de colección estilo Panini para empresas",
                "project.invio.tagline": "Servicio B2C de invitaciones digitales para todo tipo de eventos",
                "project.sellogo.tagline": "Plataforma SaaS B2B2C de tarjetas de fidelización digitales",
                "project.carcopilot.tagline": "App B2C de gestión inteligente de gastos vehiculares potenciada con IA",
                "project.visit": "Visitar sitio",
                "project.view": "Ver proyecto",
                "project.soon": "Próximamente",
                
                // Services
                "services.label": "[ Estudio ]",
                "services.title": "Nuestras Capacidades",
                "srv.dev.title": "Desarrollo de Software",
                "srv.dev.desc": "Construimos aplicaciones robustas y escalables adaptadas para resolver problemas empresariales complejos con arquitecturas modernas.",
                "srv.design.title": "Diseño UI/UX",
                "srv.web.title": "Aplicaciones Web",
                "srv.auto.title": "Automatización",
                "srv.brand.title": "Identidad de Marca",
                "srv.landing.title": "Landing Pages",
                "srv.consulting.title": "Consultoría Técnica",
                
                // Stack
                "stack.label":   "[ Stack ]",
                "stack.title":   "Construido con las herramientas correctas",
                "stack.subtitle":"Cada proyecto se desarrolla sobre una base tecnológica moderna, escalable y probada en producción.",
                "stack.js":      "Lenguaje principal del ecosistema. Usado tanto en frontend como en lógica de negocio del lado del servidor.",
                "stack.html":    "Estructura semántica, accesible y optimizada para SEO en cada interfaz que construimos.",
                "stack.css":     "Diseño visual preciso, animaciones fluidas y experiencias responsivas sin depender de frameworks pesados.",
                "stack.react":   "Desarrollo de aplicaciones móviles nativas para iOS y Android desde una sola base de código.",
                "stack.supabase":"Backend como servicio: base de datos PostgreSQL, autenticación, almacenamiento y Edge Functions en un solo lugar.",
                "stack.expo":    "Plataforma que acelera el desarrollo móvil con React Native, simplificando builds y distribución.",
                "stack.vite":    "Herramienta de build ultrarrápida. Arquitectura MPA que estructura proyectos web modernos y escalables.",
                "stack.node":    "Entorno de ejecución para servicios backend, scripts de automatización y Edge Functions serverless.",
                
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
                "project.traego.tagline": "B2B2C SaaS platform for full restaurant business management",
                "project.albumcorp.tagline": "B2B SaaS platform for Panini-style corporate sticker albums",
                "project.invio.tagline": "B2C digital invitation service for all types of events",
                "project.sellogo.tagline": "B2B2C SaaS platform for digital loyalty cards",
                "project.carcopilot.tagline": "AI-powered B2C app for intelligent vehicle expense tracking",
                "project.visit": "Visit site",
                "project.view": "View project",
                "project.soon": "Coming soon",
                
                // Services
                "services.label": "[ Studio ]",
                "services.title": "Our Capabilities",
                "srv.dev.title": "Software Development",
                "srv.dev.desc": "We build robust, scalable applications tailored to solve complex business problems with modern architectures.",
                "srv.design.title": "UI/UX Design",
                "srv.web.title": "Web Applications",
                "srv.auto.title": "Automation",
                "srv.brand.title": "Brand Identity",
                "srv.landing.title": "Landing Pages",
                "srv.consulting.title": "Technical Consulting",
                
                // Stack
                "stack.label":   "[ Stack ]",
                "stack.title":   "Built with the right tools",
                "stack.subtitle":"Every project is built on a modern, scalable technology foundation proven in production.",
                "stack.js":      "Core language of the ecosystem. Used in both frontend interfaces and server-side business logic.",
                "stack.html":    "Semantic, accessible, SEO-optimized structure in every interface we build.",
                "stack.css":     "Precise visual design, fluid animations and responsive experiences without heavy frameworks.",
                "stack.react":   "Native mobile app development for iOS and Android from a single codebase.",
                "stack.supabase":"Backend as a service: PostgreSQL database, authentication, storage and Edge Functions in one place.",
                "stack.expo":    "Platform that accelerates React Native mobile development, simplifying builds and distribution.",
                "stack.vite":    "Ultra-fast build tool. MPA architecture that structures modern, scalable web projects.",
                "stack.node":    "Runtime for backend services, automation scripts and serverless Edge Functions.",
                
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
                "404.title": "Page not found",
                "404.desc": "The page you are looking for doesn't exist or has been moved.",
                "404.btn": "Return Home"
            }
        };

        function apply(lang) {
            document.documentElement.lang = lang;
            currentLang = lang;
            const dict = translations[lang];

            // 1. Text content
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key]) {
                    el.textContent = dict[key];
                }
            });

            // 2. Placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (dict[key]) {
                    el.placeholder = dict[key];
                }
            });

            // 3. ARIA labels
            document.querySelectorAll('[data-i18n-aria]').forEach(el => {
                const key = el.getAttribute('data-i18n-aria');
                if (dict[key]) {
                    el.setAttribute('aria-label', dict[key]);
                }
            });
            
            // Update UI buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                if (btn.getAttribute('data-lang') === lang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        function toggle(lang) {
            if (currentLang === lang) return;
            localStorage.setItem('bidiex-lang', lang);
            apply(lang);
        }

        function init() {
            // Check persistence
            const savedLang = localStorage.getItem('bidiex-lang');
            const defaultLang = savedLang || 'es';
            apply(defaultLang);

            // Bind events
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.getAttribute('data-lang');
                    toggle(lang);
                });
                
                // Keyboard accessibility
                btn.addEventListener('keydown', (e) => {
                    if(e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const lang = btn.getAttribute('data-lang');
                        toggle(lang);
                    }
                });
            });
        }

        return { init };
    })();

    // 1. Loading — entrance animation
    const Loading = (function() {
        const loader = document.getElementById('loader');
        
        const init = () => {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    if (loader) loader.classList.add('hidden');
                }, 500); 
            });
        };
        
        return { init };
    })();

    // 2. Navbar — scroll behavior, active section, mobile menu
    const Navbar = (function() {
        const navbar = document.getElementById('navbar');
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const navLinksContainer = document.getElementById('navLinks');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

        const init = () => {
            if (!navbar) return;
            // Scroll behavior
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                updateActiveSection();
            }, { passive: true });

            // Mobile menu
            if (mobileToggle) {
                mobileToggle.addEventListener('click', () => {
                    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
                    mobileToggle.setAttribute('aria-expanded', !isExpanded);
                    navLinksContainer.classList.toggle('active');
                    
                    const spans = mobileToggle.querySelectorAll('span');
                    if (!isExpanded) {
                        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
                        spans[1].style.opacity = '0';
                        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
                        document.body.style.overflow = 'hidden';
                    } else {
                        spans[0].style.transform = 'none';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = 'none';
                        document.body.style.overflow = '';
                    }
                });
            }

            // Close mobile menu on link click
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinksContainer.classList.contains('active')) {
                        mobileToggle.click();
                    }
                });
            });
        };

        const updateActiveSection = () => {
            let current = '';
            const scrollY = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };

        return { init };
    })();

    // 3. ScrollReveal — IntersectionObserver for all sections
    const ScrollReveal = (function() {
        const reveals = document.querySelectorAll('.reveal, .reveal-delay');

        const init = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        if (entry.target.classList.contains('timeline-step')) {
                            const marker = entry.target.querySelector('.step-marker');
                            if(marker) marker.style.borderColor = 'var(--accent)';
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            });

            reveals.forEach(reveal => observer.observe(reveal));
        };

        return { init };
    })();

    // 4. Parallax (Disabled per user request for hero visual removal, but kept for background)
    const Parallax = (function() {
        const bgLayers = document.getElementById('parallaxBg');
        const glowBlue = document.querySelector('.blue-glow');
        const glowPurple = document.querySelector('.purple-glow');

        const init = () => {
            if (window.innerWidth > 768 && bgLayers && glowBlue && glowPurple) {
                document.addEventListener('mousemove', (e) => {
                    const x = e.clientX / window.innerWidth;
                    const y = e.clientY / window.innerHeight;
                    
                    requestAnimationFrame(() => {
                        glowBlue.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
                        glowPurple.style.transform = `translate(${x * -40}px, ${y * -40}px)`;
                    });
                }, { passive: true });
            }
        };

        return { init };
    })();

    // 5. Ripple — button click effect
    const Ripple = (function() {
        const buttons = document.querySelectorAll('.ripple');

        const init = () => {
            buttons.forEach(button => {
                button.addEventListener('mousedown', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const circle = document.createElement('span');
                    circle.classList.add('ripple-effect');
                    circle.style.left = `${x}px`;
                    circle.style.top = `${y}px`;

                    this.appendChild(circle);

                    setTimeout(() => {
                        circle.remove();
                    }, 600);
                });
            });
        };

        return { init };
    })();

    // 6. ScrollProgress — top progress bar
    const ScrollProgress = (function() {
        const progressBar = document.getElementById('scrollProgress');

        const init = () => {
            if (!progressBar) return;
            
            window.addEventListener('scroll', () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height);
                progressBar.style.transform = `scaleX(${scrolled})`;
            }, { passive: true });
        };

        return { init };
    })();

    // 7. BackToTop — button visibility + scroll
    const BackToTop = (function() {
        const btn = document.getElementById('backToTop');

        const init = () => {
            if (!btn) return;

            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    btn.classList.add('is-visible');
                } else {
                    btn.classList.remove('is-visible');
                }
            }, { passive: true });

            btn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        };

        return { init };
    })();

    // 8. Contact — WhatsApp URL builder
    const Contact = (function() {
        const form = document.getElementById('contactForm');
        const phone = '573123174919';

        const init = () => {
            if (!form) return;

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = document.getElementById('name').value.trim();
                const company = document.getElementById('company').value.trim();
                const email = document.getElementById('email').value.trim();
                const userPhone = document.getElementById('phone').value.trim();
                const project = document.getElementById('project').value.trim();
                const source = document.getElementById('source').value.trim();
                
                // Get selected radios
                const serviceElement = document.querySelector('input[name="service"]:checked');
                const budgetElement = document.querySelector('input[name="budget"]:checked');
                
                const service = serviceElement ? serviceElement.value : 'No especificado';
                const budget = budgetElement ? budgetElement.value : 'No especificado';

                let text = '';
                
                if (currentLang === 'es') {
                    text = `Hola, mi nombre es ${name}.\n\n` +
                           (company ? `🏢 *Compañía:* ${company}\n` : '') +
                           `✉️ *Correo:* ${email}\n` +
                           `📱 *Teléfono:* ${userPhone}\n\n` +
                           `✨ *Servicio de interés:* ${service}\n` +
                           `💰 *Presupuesto mensual:* ${budget}\n\n` +
                           (project ? `📝 *Sobre el proyecto:*\n${project}\n\n` : '') +
                           (source ? `🔍 *Nos encontró por:* ${source}` : '');
                } else {
                    text = `Hello, my name is ${name}.\n\n` +
                           (company ? `🏢 *Company:* ${company}\n` : '') +
                           `✉️ *Email:* ${email}\n` +
                           `📱 *Phone:* ${userPhone}\n\n` +
                           `✨ *Service of interest:* ${service}\n` +
                           `💰 *Monthly budget:* ${budget}\n\n` +
                           (project ? `📝 *About the project:*\n${project}\n\n` : '') +
                           (source ? `🔍 *Found us through:* ${source}` : '');
                }
                
                const encodedText = encodeURIComponent(text);
                const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedText}`;
                
                window.open(url, '_blank');
            });
        };

        return { init };
    })();

    // 9. Motion Library
    const MotionLibrary = (function() {
        const softwareContainer = document.getElementById('motion-software');
        
        let softwareTimer;
        
        const runSoftwareSequence = () => {
            if (!softwareContainer) return;
            
            // Clean up old classes
            softwareContainer.classList.remove('step-1', 'step-2', 'step-3', 'step-4', 'step-5');
            
            // Step 1: Fade in editor and lines (0.5s)
            setTimeout(() => {
                softwareContainer.classList.add('step-1');
            }, 500);
            
            // Step 2: Cursor appears and blinks (2.5s)
            setTimeout(() => {
                softwareContainer.classList.add('step-2');
            }, 2500);
            
            // Step 3: Type new block (3.5s)
            setTimeout(() => {
                softwareContainer.classList.add('step-3');
            }, 3500);
            
            // Step 4: Highlight sweeps (5.5s)
            setTimeout(() => {
                softwareContainer.classList.add('step-4');
            }, 5500);
            
            // Step 5: Check pops in, glow increases (6.5s)
            setTimeout(() => {
                softwareContainer.classList.add('step-5');
            }, 6500);
            
            // Reset (9s)
            setTimeout(() => {
                softwareContainer.classList.remove('step-1', 'step-2', 'step-3', 'step-4', 'step-5');
            }, 9000);
        };

        const init = () => {
            // Check for reduced motion
            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReduced) return;
            
            if (softwareContainer) {
                runSoftwareSequence();
                setInterval(runSoftwareSequence, 10000); // 10s loop
            }
        };

        return { init };
    })();

    // 9. Projects Module
    const Projects = (() => {

      // ── Project data ──────────────────────────────
      const data = {
        traego: {
          name: 'TraeGo',
          status: 'active',
          statusLabel: 'En producción',
          tagline: 'Plataforma SaaS B2B2C de gestión integral de gastronegocios',
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
        albumcorp: {
          name: 'AlbumCorp',
          status: 'active',
          statusLabel: 'En producción',
          tagline: 'Plataforma SaaS B2B de álbumes de colección estilo Panini para empresas',
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
        invio: {
          name: 'Invio',
          status: 'dev',
          statusLabel: 'En desarrollo',
          tagline: 'Servicio B2C de invitaciones digitales para todo tipo de eventos',
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
        sellogo: {
          name: 'SelloGo',
          status: 'dev',
          statusLabel: 'En desarrollo',
          tagline: 'Plataforma SaaS B2B2C de tarjetas de fidelización digitales',
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
        carcopilot: {
          name: 'CarCopilot',
          status: 'dev',
          statusLabel: 'En desarrollo',
          tagline: 'App B2C de gestión inteligente de gastos vehiculares potenciada con IA',
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
      };

      // ── DOM refs ──────────────────────────────────
      const track    = document.getElementById('projectsCarousel');
      const prevBtn  = document.getElementById('projectsPrev');
      const nextBtn  = document.getElementById('projectsNext');
      const modal    = document.getElementById('projectModal');
      const overlay  = document.getElementById('modalOverlay');
      const closeBtn = document.getElementById('modalClose');

      // ── Carousel ──────────────────────────────────
      const getStep = () => {
        const card = track?.querySelector('.project-card');
        if (!card) return 580;
        return card.offsetWidth + 20;
      };

      const updateArrows = () => {
        if (!track || !prevBtn || !nextBtn) return;
        const max = track.scrollWidth - track.clientWidth;
        prevBtn.disabled = track.scrollLeft <= 1;
        nextBtn.disabled = track.scrollLeft >= max - 1;
      };

      const initCarousel = () => {
        if (!track) return;

        prevBtn?.addEventListener('click', () => {
          track.scrollBy({ left: -getStep(), behavior: 'smooth' });
        });

        nextBtn?.addEventListener('click', () => {
          track.scrollBy({ left: getStep(), behavior: 'smooth' });
        });

        track.addEventListener('scroll', updateArrows, { passive: true });
        updateArrows();

        // Drag to scroll on desktop
        let isDown = false, startX = 0, scrollStart = 0;

        track.addEventListener('mousedown', e => {
          isDown = true;
          track.style.cursor = 'grabbing';
          startX = e.pageX - track.offsetLeft;
          scrollStart = track.scrollLeft;
        });

        ['mouseleave','mouseup'].forEach(evt => {
          track.addEventListener(evt, () => {
            isDown = false;
            track.style.cursor = 'grab';
          });
        });

        track.addEventListener('mousemove', e => {
          if (!isDown) return;
          e.preventDefault();
          const x    = e.pageX - track.offsetLeft;
          const walk = (x - startX) * 1.5;
          track.scrollLeft = scrollStart - walk;
        });
      };

      // ── Modal ──────────────────────────────────────
      const openModal = (key) => {
        const p = data[key];
        if (!p || !modal) return;

        document.getElementById('modalStatus').className =
          `status-badge status-${p.status}`;
        document.getElementById('modalStatus').textContent = p.statusLabel;
        document.getElementById('modalProjectName').textContent = p.name;
        document.getElementById('modalTagline').textContent    = p.tagline;

        const tagsEl = document.getElementById('modalTags');
        tagsEl.innerHTML = p.tags
          .map(t => `<span class="project-modal__tag">${t}</span>`)
          .join('');

        const featuresEl = document.getElementById('modalFeatures');
        featuresEl.innerHTML = p.features
          .map(f => `<li>${f}</li>`)
          .join('');

        const ctaEl = document.getElementById('modalCta');
        const ctaTextEl = document.getElementById('modalCtaText');
        if (p.hasUrl) {
          ctaEl.href = p.url;
          if(ctaTextEl) {
            ctaTextEl.setAttribute('data-i18n', 'project.visit');
            ctaTextEl.textContent = currentLang === 'en' ? 'Visit site' : 'Visitar sitio';
          }
          ctaEl.classList.remove('disabled');
        } else {
          ctaEl.removeAttribute('href');
          if(ctaTextEl) {
            ctaTextEl.setAttribute('data-i18n', 'project.soon');
            ctaTextEl.textContent = currentLang === 'en' ? 'Coming soon' : 'Próximamente';
          }
          ctaEl.classList.add('disabled');
        }

        modal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        closeBtn?.focus();
      };

      const closeModal = () => {
        if (!modal) return;
        modal.setAttribute('hidden', '');
        document.body.style.overflow = '';
      };

      const initModal = () => {
        // Open on card click or Enter/Space
        document.querySelectorAll('.project-card').forEach(card => {
          card.addEventListener('click', () => {
            openModal(card.dataset.project);
          });
          card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openModal(card.dataset.project);
            }
          });
        });

        // Close
        closeBtn?.addEventListener('click', closeModal);
        overlay?.addEventListener('click', closeModal);
        document.addEventListener('keydown', e => {
          if (e.key === 'Escape') closeModal();
        });
      };

      // ── Init ──────────────────────────────────────
      const init = () => {
        initCarousel();
        initModal();
      };

      return { init };
    })();

    // 10. Stack Carousel
    const Stack = (function() {
      const init = () => {
        const stackGrid = document.querySelector('.stack-grid');
        const stackCards = document.querySelectorAll('.stack-card');
        
        if (!stackGrid || stackCards.length === 0) return;

        const observerOptions = {
          root: stackGrid,
          rootMargin: '0px',
          threshold: 0.6
        };

        const cardObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-active');
            } else {
              entry.target.classList.remove('is-active');
            }
          });
        }, observerOptions);

        const checkObserver = () => {
          if (window.innerWidth <= 991) {
            stackCards.forEach(card => cardObserver.observe(card));
          } else {
            stackCards.forEach(card => {
              cardObserver.unobserve(card);
              card.classList.remove('is-active');
            });
          }
        };

        window.addEventListener('resize', checkObserver, { passive: true });
        checkObserver();
      };
      
      return { init };
    })();

    // 11. Footer — dynamic year
    const FooterYear = (function() {
        const yearSpan = document.getElementById('currentYear');
        
        const init = () => {
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        };

        return { init };
    })();

    // 11. Init — run all modules
    document.addEventListener('DOMContentLoaded', () => {
        I18n.init();
        Loading.init();
        Navbar.init();
        ScrollReveal.init();
        Parallax.init();
        Ripple.init();
        ScrollProgress.init();
        BackToTop.init();
        Projects.init();
        Contact.init();
        MotionLibrary.init();
        Stack.init();
        FooterYear.init();
    });

})();
