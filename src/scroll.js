import Lenis from 'lenis';

// One smooth-scroll instance for the whole page. `anchors` animates the #section links;
// the offset keeps headings clear of the fixed navbar. Reduced motion is respected by Lenis.
export const lenis = new Lenis({ autoRaf: true, anchors: { offset: -96 } });
