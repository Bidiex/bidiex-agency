/**
 * Bidiex Studio — Main JavaScript
 * Modular, dependency-free. Bundled by Astro as an ES module, so each
 * module below stays a private IIFE exposing only `init()`.
 */
import { I18n, getLang } from './i18n.js';
import { MotionLibrary } from './motion.js';
import { projectsById } from '../data/projects.js';
import { withBase } from '../utils/url.js';

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
            
            if (getLang() === 'es') {
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

// 9. Projects Module
const Projects = (() => {

  // ── Project data — single source in src/data/projects.js ──
  const data = projectsById;

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

  /**
   * Rebuilds the preview on every open, and is cleared on close, so a live
   * embed only runs while its project is on screen instead of leaving several
   * third-party apps executing behind the page.
   */
  const renderPreview = (p) => {
    const el = document.getElementById('modalPreview');
    if (!el) return;

    if (!p.preview) {
      el.innerHTML = '';
      el.hidden = true;
      return;
    }
    el.hidden = false;

    let host = '';
    try { host = p.url ? new URL(p.url).host : ''; } catch { host = ''; }

    const media = p.preview.type === 'embed'
      ? `<iframe class="browser-frame__embed" src="${p.preview.src}"
           title="Vista previa de ${p.name}" loading="lazy" tabindex="-1"
           aria-hidden="true" scrolling="no" referrerpolicy="no-referrer"
           sandbox="allow-scripts allow-same-origin"></iframe>`
      : `<img class="browser-frame__shot" src="${withBase(p.preview.src)}" alt="${p.name}" loading="lazy">`;

    el.innerHTML = `
      <div class="browser-frame">
        <div class="browser-frame__bar">
          <span class="browser-frame__dots" aria-hidden="true"><i></i><i></i><i></i></span>
          ${host ? `<span class="browser-frame__url">${host}</span>` : ''}
        </div>
        <div class="browser-frame__viewport">${media}</div>
      </div>`;
  };

  const openModal = (key) => {
    const p = data[key];
    if (!p || !modal) return;

    renderPreview(p);

    document.getElementById('modalStatus').className =
      `status-badge status-${p.status}`;
    document.getElementById('modalStatus').textContent = p.statusLabel;
    document.getElementById('modalProjectName').textContent = p.name;
    document.getElementById('modalTagline').textContent    = p.tagline;
    document.getElementById('modalProblem').textContent    = p.problem;
    document.getElementById('modalSolution').textContent   = p.solution;

    const tagsEl = document.getElementById('modalTags');
    tagsEl.innerHTML = p.tags
      .map(t => `<span class="project-modal__tag">${t}</span>`)
      .join('');

    const outcomeEl = document.getElementById('modalOutcome');
    outcomeEl.innerHTML = p.outcome
      .map(o => `<li>${o}</li>`)
      .join('');

    const featuresEl = document.getElementById('modalFeatures');
    featuresEl.innerHTML = p.features
      .map(f => `<li>${f}</li>`)
      .join('');

    const techEl = document.getElementById('modalTech');
    techEl.innerHTML = p.tech
      .map(t => `<span class="tech-pill">${t}</span>`)
      .join('');

    const ctaEl = document.getElementById('modalCta');
    const ctaTextEl = document.getElementById('modalCtaText');
    if (p.hasUrl) {
      ctaEl.href = p.url;
      if(ctaTextEl) {
        ctaTextEl.setAttribute('data-i18n', 'project.visit');
        ctaTextEl.textContent = getLang() === 'en' ? 'Visit site' : 'Visitar sitio';
      }
      ctaEl.classList.remove('disabled');
    } else {
      ctaEl.removeAttribute('href');
      if(ctaTextEl) {
        ctaTextEl.setAttribute('data-i18n', 'project.soon');
        ctaTextEl.textContent = getLang() === 'en' ? 'Coming soon' : 'Próximamente';
      }
      ctaEl.classList.add('disabled');
    }

    modal.removeAttribute('hidden');
    // The panel scrolls, so a second project has to start from its own top.
    modal.querySelector('.project-modal__panel')?.scrollTo({ top: 0 });
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    // Drop the embed so the third-party app stops running in the background.
    const preview = document.getElementById('modalPreview');
    if (preview) preview.innerHTML = '';
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

    // "Quiero algo así" closes the dialog first so the anchor can reach #contact.
    document.getElementById('modalContactCta')
      ?.addEventListener('click', closeModal);

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
