/**
 * Bidiex Studio — Internationalization
 * Swaps every [data-i18n*] node between the ES and EN dictionaries and
 * persists the choice in localStorage.
 */
import { translations } from './translations.js';

let currentLang = 'es';

export const getLang = () => currentLang;

/**
 * One string from the active dictionary, for text that is built in JavaScript
 * after `apply()` has already run over the document — a [data-i18n] attribute
 * alone would only be picked up the next time the language changes.
 */
export const t = (key, fallback = '') => translations[currentLang]?.[key] ?? fallback;

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

    // 4. Native tooltips / validation hints
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key]) {
            el.title = dict[key];
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

    // Text built in JavaScript (the project dialog, the split headings) has no
    // attribute to be found by, so its owners re-render on this event.
    document.dispatchEvent(new CustomEvent('bidiex:langchange', { detail: { lang } }));
}

function toggle(lang) {
    if (currentLang === lang) return;
    try { localStorage.setItem('bidiex-lang', lang); } catch { /* storage blocked */ }
    apply(lang);
}

function init() {
    // Check persistence
    let savedLang = null;
    try { savedLang = localStorage.getItem('bidiex-lang'); } catch { /* storage blocked */ }
    const defaultLang = translations[savedLang] ? savedLang : 'es';
    apply(defaultLang);

    // Bind events
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            toggle(lang);
        });

        // Keyboard accessibility
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang');
                toggle(lang);
            }
        });
    });
}

export const I18n = { init, apply, toggle };
