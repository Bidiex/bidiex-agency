/**
 * Bidiex Studio — Internationalization
 * Swaps every [data-i18n*] node between the ES and EN dictionaries and
 * persists the choice in localStorage.
 */
import { translations } from './translations.js';

let currentLang = 'es';

export const getLang = () => currentLang;

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
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang');
                toggle(lang);
            }
        });
    });
}

export const I18n = { init, apply, toggle };
