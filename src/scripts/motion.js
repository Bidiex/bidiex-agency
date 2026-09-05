/**
 * Bidiex Studio — Motion Library
 *
 * Every capability card ships a self-contained SVG whose whole timeline lives
 * in CSS @keyframes (see "10.1 Motion Library" in global.css). This module only
 * decides *when* those timelines run: `.is-inview` flips them to `running`, and
 * leaving the viewport pauses them, so off-screen cards cost nothing.
 */
export const MotionLibrary = (function() {

    const init = () => {
        const containers = document.querySelectorAll('.motion-lib-container');
        if (!containers.length) return;

        // With reduced motion the keyframes are disabled in CSS; pin the cards
        // to their resting state so the illustration still reads as finished.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            containers.forEach(el => el.classList.add('is-inview'));
            return;
        }

        if (!('IntersectionObserver' in window)) {
            containers.forEach(el => el.classList.add('is-inview'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('is-inview', entry.isIntersecting);
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });

        containers.forEach(el => observer.observe(el));
    };

    return { init };
})();
