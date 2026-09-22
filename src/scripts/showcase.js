/**
 * Bidiex Studio — Projects showcase.
 *
 * Two effects that have to agree on one thing: which row is the one being
 * read. ScrollTrigger decides that once per row and everything else follows
 * from the index — the rolling name and the dimming — rather than each effect
 * running its own observer with its own idea of where the reading band is.
 *
 * GSAP earns its place here for the rolling name: the transform has to be
 * interruptible mid-flight when a reader scrolls three rows at once, and
 * `overwrite: true` retargets the tween in place instead of queueing or
 * snapping. ScrollTrigger is bundled with GSAP and free under its standard
 * licence.
 *
 * Nothing below is required for the section to read correctly: the resting CSS
 * leaves every row at full strength with the first name in the window, so a
 * failed script degrades to a plain list.
 */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/** Resting opacity of the rows that are not being read. */
const DIM = 0.45;

/** Fraction of the viewport height that marks the reading line. */
const READ_LINE = '55%';

export const Showcase = (() => {

  const init = () => {
    const list = document.getElementById('projectsList');
    const roll = document.getElementById('projectsRoll');
    if (!list || !roll) return;

    const items = Array.from(list.querySelectorAll('.showcase__item'));
    if (items.length === 0) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.registerPlugin(ScrollTrigger);

    let active = -1;

    const setActive = (index) => {
      if (index === active) return;
      active = index;

      // The track is one line tall and stacked in reverse, so name 0 already
      // sits in the window and each step down is exactly one whole line.
      gsap.to(roll, {
        yPercent: index * 100,
        duration: reduced ? 0 : 0.7,
        ease: 'power3.out',
        overwrite: true
      });

      items.forEach((item, i) => {
        gsap.to(item, {
          opacity: i === index ? 1 : DIM,
          duration: reduced ? 0 : 0.4,
          overwrite: 'auto'
        });
      });
    };

    items.forEach((item, i) => {
      // The rows are contiguous, so exactly one of them covers the reading
      // line at any scroll position — which is what makes "the active row"
      // a single unambiguous answer instead of "every row on screen".
      ScrollTrigger.create({
        trigger: item,
        start: `top ${READ_LINE}`,
        end: `bottom ${READ_LINE}`,
        onToggle: (self) => {
          if (self.isActive) setActive(i);
        }
      });

      // A row reached by Tab becomes the one being read, so keyboard users are
      // never left looking at a dimmed row they cannot brighten by scrolling.
      // `focusin` rather than `focus` because the focus lands on the button
      // inside the row, not on the row itself.
      item.addEventListener('focusin', () => setActive(i));
    });

    setActive(0);

    // ScrollTrigger measures on its own for load and resize, but not for a font
    // swap: Ranade arrives with `font-display: swap`, and the new metrics change
    // every row's height after the positions were already recorded.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    if (reduced) return;

    // The frame itself stays put — only its contents drift, so the border and
    // the corner radius are not scaled along with the image.
    items.forEach((item) => {
      const media = item.querySelector('.showcase__shot, .showcase__plate');
      if (!media) return;

      gsap.fromTo(media,
        { scale: 1.06 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: `top ${READ_LINE}`,
            scrub: true
          }
        }
      );
    });
  };

  return { init };
})();
