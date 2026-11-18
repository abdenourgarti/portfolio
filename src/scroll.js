import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP);

export const lenis = new Lenis({ autoRaf: true, anchors: { offset: -96 } });
// Lenis drives the scroll: keep the scrubbed scenes in step with it.
lenis.on('scroll', ScrollTrigger.update);

export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// shortcut: read once at load, so resizing across 860px keeps the first mode until reload.
const compact = window.matchMedia('(max-width: 860px)').matches;

// 3D entrance tied to the scroll position: each element settles into place as it rises into view.
// It pivots on its bottom edge, so a positive rotateX tips the top away and never widens the page.
// On single-column layouts the blocks are taller than the screen and would still be tilted while
// being read, so they get a short fade-up that finishes as soon as they enter instead.
export const scrubIn = (targets, from) => {
  if (reducedMotion) return;
  gsap.utils.toArray(targets).forEach((el, i) =>
    compact
      ? gsap.from(el, {
          autoAlpha: 0,
          y: 32,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        })
      : gsap.from(el, {
      transformOrigin: '50% 100%',
      ...(typeof from === 'function' ? from(i) : from),
      transformPerspective: 1100,
      ease: 'power1.out',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 62%', scrub: 0.8 },
    })
  );
};

export { gsap, ScrollTrigger, useGSAP };
