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

// 3D entrance tied to the scroll position: each element settles into place as it rises into view.
// It pivots on its bottom edge, so a positive rotateX tips the top away and never widens the page.
export const scrubIn = (targets, from) => {
  if (reducedMotion) return;
  gsap.utils.toArray(targets).forEach((el, i) =>
    gsap.from(el, {
      transformOrigin: '50% 100%',
      ...(typeof from === 'function' ? from(i) : from),
      transformPerspective: 1100,
      ease: 'power1.out',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 62%', scrub: 0.8 },
    })
  );
};

export { gsap, ScrollTrigger, useGSAP };
