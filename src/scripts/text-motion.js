/**
 * Bidiex Studio — Scroll-driven text motion (GSAP + ScrollTrigger).
 *
 * Three effects, all opt-in from markup and all deliberately small:
 *
 *   [data-motion="heading"] — the heading rises a few pixels and fades in
 *     once, as it enters. The element moves as a whole: splitting a
 *     .gradient-text heading into words would break its background-clip, which
 *     paints the ramp across the element, not across each word.
 *
 *   [data-motion="words"] — a paragraph is split into words that brighten one
 *     after another, scrubbed to the scroll position, so the reader's pace
 *     sets the reveal. Every word stays legible at its dimmest.
 *
 *   The hero copy drifts up and softens as the hero scrolls away.
 *
 * With reduced motion nothing here runs and the text stays at rest. A split
 * paragraph is rebuilt when the language changes, because the i18n runtime
 * replaces its text — and the word spans with it.
 */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/** Opacity of a word before the scroll reaches it. */
const DIM = 0.22;

function splitWords(el) {
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    return words.map((word, i) => {
        if (i > 0) el.append(' ');
        const span = document.createElement('span');
        span.className = 'tm-word';
        span.textContent = word;
        el.append(span);
        return span;
    });
}

function wordsTween(el) {
    return gsap.fromTo(splitWords(el),
        { opacity: DIM },
        {
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                end: 'bottom 60%',
                scrub: 0.6,
            },
        });
}

function headingTween(el) {
    gsap.fromTo(el,
        { y: 28, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
}

function heroDrift() {
    const hero = document.querySelector('.hero');
    const content = hero?.querySelector('.hero-content');
    if (!content) return;

    gsap.to(content, {
        y: -70,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        },
    });
}

export const TextMotion = (() => {
    const init = () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll('[data-motion="heading"]').forEach(headingTween);

        const split = new Map();
        document.querySelectorAll('[data-motion="words"]').forEach(el => {
            split.set(el, wordsTween(el));
        });

        heroDrift();

        document.addEventListener('bidiex:langchange', () => {
            split.forEach((tween, el) => {
                tween.scrollTrigger?.kill();
                tween.kill();
                split.set(el, wordsTween(el));
            });
            ScrollTrigger.refresh();
        });

        document.fonts?.ready.then(() => ScrollTrigger.refresh());
    };

    return { init };
})();
