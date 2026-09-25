/**
 * Bidiex Studio — Main JavaScript
 * Modular, dependency-free. Bundled by Astro as an ES module, so each
 * module below stays a private IIFE exposing only `init()`.
 */
import { I18n, getLang, t } from './i18n.js';
import { MotionLibrary } from './motion.js';
import { Showcase } from './showcase.js';
import { TextMotion } from './text-motion.js';
import { projectsById, localizeProject } from '../data/projects.js';
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

    // Scroll distance that counts as a change of direction, so the jitter of
    // a trackpad or a momentum scroll does not flicker the bar.
    const DIRECTION_THRESHOLD = 8;
    let lastY = window.scrollY;

    const updateVisibility = () => {
        const y = window.scrollY;
        const menuOpen = navLinksContainer?.classList.contains('active');

        // Always shown near the top and while the mobile menu is open.
        if (y <= navbar.offsetHeight || menuOpen) {
            navbar.classList.remove('is-hidden');
            lastY = y;
            return;
        }

        const delta = y - lastY;
        if (Math.abs(delta) < DIRECTION_THRESHOLD) return;

        navbar.classList.toggle('is-hidden', delta > 0);
        lastY = y;
    };

    const init = () => {
        if (!navbar) return;
        // Scroll behavior
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
            updateVisibility();
            updateActiveSection();
        }, { passive: true });

        // A keyboard user tabbing into the bar must be able to see it.
        navbar.addEventListener('focusin', () => navbar.classList.remove('is-hidden'));

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

        // The links carry the home path in front of the hash (so they work
        // from a capability page too), hence comparing the parts.
        navLinks.forEach(link => {
            const here = link.pathname === location.pathname && link.hash === `#${current}`;
            link.classList.toggle('active', here);
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
            
            // The chip's visible label rather than its value, which is fixed
            // in Spanish: an English message should name the service in English.
            const serviceLabel = serviceElement?.closest('.radio-chip')?.querySelector('span');
            const unspecified = t('contact.unspecified', 'No especificado');
            const service = serviceLabel ? serviceLabel.textContent.trim() : unspecified;
            const budget = budgetElement ? budgetElement.value : unspecified;

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

// 9. Projects Module — the detail dialog. The list itself is src/scripts/showcase.js.
const Projects = (() => {

  // ── Project data — single source in src/data/projects.js ──
  const data = projectsById;

  // ── DOM refs ──────────────────────────────────
  const modal    = document.getElementById('projectModal');
  const overlay  = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

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
           title="${t(`project.${p.id}.preview`, p.name)}" loading="lazy" tabindex="-1"
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

  /** Key of the project on screen, so a language switch can refill it. */
  let openKey = null;

  /** Fills every text slot of the dialog in the active language. */
  const fillText = (p) => {
    // Keeps the base class: overwriting className outright dropped the pill
    // styling, and `status-badge` was never a rule. The label is looked up
    // rather than taken from the data, which only carries Spanish, and the
    // attribute keeps it swapping with the language toggle afterwards.
    const statusEl = document.getElementById('modalStatus');
    statusEl.className = `project-modal__status status-${p.status}`;
    statusEl.setAttribute('data-i18n', `status.${p.status}`);
    statusEl.textContent = t(`status.${p.status}`, p.statusLabel);
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
    const ctaKey = p.hasUrl ? 'project.visit' : 'project.soon';
    if (ctaTextEl) {
      ctaTextEl.setAttribute('data-i18n', ctaKey);
      ctaTextEl.textContent = t(ctaKey);
    }
    if (p.hasUrl) {
      ctaEl.href = p.url;
      ctaEl.classList.remove('disabled');
    } else {
      ctaEl.removeAttribute('href');
      ctaEl.classList.add('disabled');
    }
  };

  const openModal = (key) => {
    const p = data[key] && localizeProject(data[key], getLang());
    if (!p || !modal) return;
    openKey = key;

    renderPreview(p);
    fillText(p);

    modal.removeAttribute('hidden');
    // The panel scrolls, so a second project has to start from its own top.
    modal.querySelector('.project-modal__panel')?.scrollTo({ top: 0 });
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const closeModal = () => {
    if (!modal || openKey === null) return;
    openKey = null;
    modal.setAttribute('hidden', '');
    // Drop the embed so the third-party app stops running in the background.
    const preview = document.getElementById('modalPreview');
    if (preview) preview.innerHTML = '';
    document.body.style.overflow = '';
  };

  const initModal = () => {
    // One click handler per row covers both paths: a pointer anywhere on the
    // row, and the row's own button, whose native Enter and Space produce a
    // click that bubbles up to here. No keydown branch of its own — the row is
    // not focusable, so it would never have fired.
    document.querySelectorAll('[data-project]').forEach(row => {
      row.addEventListener('click', () => {
        openModal(row.dataset.project);
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

    // The dialog is filled from data, not from [data-i18n] nodes, so a switch
    // while it is open has to refill it — the preview is left running.
    document.addEventListener('bidiex:langchange', (e) => {
      if (openKey === null) return;
      fillText(localizeProject(data[openKey], e.detail.lang));
    });
  };

  // ── Init ──────────────────────────────────────
  const init = () => {
    initModal();
  };

  return { init };
})();

// 10. Capability cards — the soft glow follows the pointer
const CardGlow = (function() {
  const init = () => {
    // Touch has no hover to follow; the CSS keeps the glow centred there.
    if (!window.matchMedia('(hover: hover)').matches) return;

    document.querySelectorAll('.bento-card').forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
      }, { passive: true });
    });
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
    Showcase.init();
    Contact.init();
    MotionLibrary.init();
    CardGlow.init();
    TextMotion.init();
    FooterYear.init();
});
