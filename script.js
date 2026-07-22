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
                "hero.title": "Construyendo Productos Digitales que Ayudan a las Empresas a Crecer.",
                "hero.subtitle": "Ingeniería de precisión y diseño premium combinados para construir software, soluciones de automatización y herramientas escalables.",
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
                "projects.title": "Trabajo Seleccionado",
                "status.active": "Activo",
                "status.development": "En Desarrollo",
                "status.planning": "En Planificación",
                "status.research": "Investigación",
                "project.explore": "Explorar →",
                "project.traego.desc": "Plataforma digital enfocada en la optimización de procesos empresariales.",
                "project.traego.aria": "Ver proyecto TraeGo",
                "project.carcopilot.desc": "Plataforma de gestión de gastos para vehículos.",
                "project.carcopilot.aria": "Ver proyecto CarCopilot",
                "project.invio.desc": "Plataforma de invitaciones digitales.",
                "project.invio.aria": "Ver proyecto Invio",
                "project.sellogo.desc": "Plataforma de lealtad digital para negocios locales.",
                "project.sellogo.aria": "Ver proyecto SelloGo",
                "tag.webapp": "Web App",
                "tag.optimization": "Optimización",
                "tag.mobileapp": "Mobile App",
                "tag.management": "Gestión",
                "tag.platform": "Plataforma",
                "tag.events": "Eventos",
                "tag.loyalty": "Lealtad",
                "tag.localbiz": "Negocio Local",
                
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
                
                // Founder
                "founder.label": "[ Fundador ]",
                "founder.role1": "Desarrollador de Software",
                "founder.role2": "Diseñador",
                "founder.role3": "Creador de Productos Digitales",
                "founder.bio": "Tengo una profunda pasión por construir software útil y bellamente diseñado. Me enfoco en cerrar la brecha entre una experiencia de usuario excepcional y una arquitectura técnica robusta.",
                "founder.skill3": "Diseño UI",
                "founder.skill4": "Branding",
                "founder.skill5": "Estrategia de Producto",
                "founder.skill6": "Automatización IA",
                "founder.email": "Correo",
                "founder.social.email": "Correo Electrónico",
                
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
                "contact.name": "Nombre",
                "contact.name.placeholder": "Juan Pérez",
                "contact.company": "Empresa",
                "contact.company.placeholder": "Acme Corp",
                "contact.projectType": "Tipo de Proyecto",
                "contact.select.default": "Selecciona una opción",
                "contact.select.opt1": "Aplicación Web",
                "contact.select.opt2": "Aplicación Móvil",
                "contact.select.opt3": "Landing Page",
                "contact.select.opt4": "Diseño UI/UX",
                "contact.select.opt5": "Automatización",
                "contact.select.opt6": "Otro",
                "contact.message": "Mensaje",
                "contact.message.placeholder": "Cuéntanos sobre tu proyecto...",
                "contact.submit": "Iniciar Conversación →",
                
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
                "hero.title": "Building Digital Products That Help Businesses Grow.",
                "hero.subtitle": "Precision engineering and premium design combined to build software, automation solutions, and scalable tools.",
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
                "projects.title": "Selected Work",
                "status.active": "Active",
                "status.development": "Development",
                "status.planning": "Planning",
                "status.research": "Research",
                "project.explore": "Explore →",
                "project.traego.desc": "Digital platform focused on business process optimization.",
                "project.traego.aria": "View TraeGo project",
                "project.carcopilot.desc": "Vehicle expense management platform.",
                "project.carcopilot.aria": "View CarCopilot project",
                "project.invio.desc": "Digital invitation platform.",
                "project.invio.aria": "View Invio project",
                "project.sellogo.desc": "Digital loyalty platform for local businesses.",
                "project.sellogo.aria": "View SelloGo project",
                "tag.webapp": "Web App",
                "tag.optimization": "Optimization",
                "tag.mobileapp": "Mobile App",
                "tag.management": "Management",
                "tag.platform": "Platform",
                "tag.events": "Events",
                "tag.loyalty": "Loyalty",
                "tag.localbiz": "Local Biz",
                
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
                
                // Founder
                "founder.label": "[ Founder ]",
                "founder.role1": "Software Developer",
                "founder.role2": "Designer",
                "founder.role3": "Digital Product Builder",
                "founder.bio": "I have a deep passion for building useful, beautifully designed software. I focus on bridging the gap between exceptional user experience and robust technical architecture.",
                "founder.skill3": "UI Design",
                "founder.skill4": "Branding",
                "founder.skill5": "Product Strategy",
                "founder.skill6": "AI Automation",
                "founder.email": "Email",
                "founder.social.email": "Email",
                
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
                "contact.name": "Name",
                "contact.name.placeholder": "John Doe",
                "contact.company": "Company",
                "contact.company.placeholder": "Acme Corp",
                "contact.projectType": "Project Type",
                "contact.select.default": "Select an option",
                "contact.select.opt1": "Web Application",
                "contact.select.opt2": "Mobile App",
                "contact.select.opt3": "Landing Page",
                "contact.select.opt4": "UI/UX Design",
                "contact.select.opt5": "Automation",
                "contact.select.opt6": "Other",
                "contact.message": "Message",
                "contact.message.placeholder": "Tell us about your project...",
                "contact.submit": "Start Conversation →",
                
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
        const phone = '573180779665';

        const init = () => {
            if (!form) return;

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = document.getElementById('name').value.trim();
                const company = document.getElementById('company').value.trim();
                
                // Get the display text of the selected option, not the value, so it matches the language
                const selectEl = document.getElementById('projectType');
                const projectType = selectEl.options[selectEl.selectedIndex].text;
                
                const message = document.getElementById('message').value.trim();

                let text = '';
                
                if (currentLang === 'es') {
                    text = `Hola Andrés,\n\nMi nombre es ${name}.\n\nEmpresa: ${company}\nProyecto: ${projectType}\n\nMensaje:\n${message}\n\nEncontré Bidiex a través de su sitio web y me gustaría hablar sobre un proyecto.`;
                } else {
                    text = `Hello Andrés,\n\nMy name is ${name}.\n\nCompany: ${company}\nProject: ${projectType}\n\nMessage:\n${message}\n\nI found Bidiex through your website and would like to discuss a project.`;
                }
                
                const encodedText = encodeURIComponent(text);
                const url = `https://wa.me/${phone}?text=${encodedText}`;
                
                window.open(url, '_blank');
            });
        };

        return { init };
    })();

    // 9. Projects Carousel Controls
    const ProjectsCarousel = (function() {
        const carousel = document.getElementById('projectsCarousel');
        const prevBtn = document.getElementById('projectsPrev');
        const nextBtn = document.getElementById('projectsNext');

        const updateButtonState = () => {
            if (!carousel || !prevBtn || !nextBtn) return;
            prevBtn.disabled = carousel.scrollLeft <= 0;
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            // Use Math.ceil to avoid floating point issues
            nextBtn.disabled = Math.ceil(carousel.scrollLeft) >= maxScroll;
        };

        const scrollByCard = (direction) => {
            const card = carousel.querySelector('.project-card');
            if (card) {
                const gap = 16;
                const amount = (card.offsetWidth + gap) * direction;
                carousel.scrollBy({ left: amount, behavior: 'smooth' });
            }
        };

        const init = () => {
            if (!carousel) return;

            if (prevBtn && nextBtn) {
                prevBtn.addEventListener('click', () => scrollByCard(-1));
                nextBtn.addEventListener('click', () => scrollByCard(1));
                carousel.addEventListener('scroll', updateButtonState);
                window.addEventListener('resize', updateButtonState);
                setTimeout(updateButtonState, 100);
            }

            let isDown = false;
            let startX;
            let scrollLeft;

            carousel.addEventListener('mousedown', (e) => {
                isDown = true;
                carousel.style.cursor = 'grabbing';
                startX = e.pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
            });

            carousel.addEventListener('mouseleave', () => {
                isDown = false;
                carousel.style.cursor = 'grab';
            });

            carousel.addEventListener('mouseup', () => {
                isDown = false;
                carousel.style.cursor = 'grab';
            });

            carousel.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 1.5;
                carousel.scrollLeft = scrollLeft - walk;
            });
        };

        return { init };
    })();

    // 10. Footer — dynamic year
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
        ProjectsCarousel.init();
        Contact.init();
        FooterYear.init();
    });

})();
