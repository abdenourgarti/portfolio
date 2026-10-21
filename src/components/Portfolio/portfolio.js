import React, { Component, Suspense, lazy, useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiCursorArrowRays } from 'react-icons/hi2';
import projects from '../../data/projects';
import { useLang } from '../../i18n';
import { ScrollTrigger, scrubIn, useGSAP } from '../../scroll';
import tilt from '../../tilt';
import Reveal from '../Reveal';
import './portfolio.css';

// three.js is heavy: its chunk only loads when the section gets close.
const ProjectRing = lazy(() => import('./ProjectRing'));

// Without WebGL (old GPU, disabled by policy) the ring simply doesn't show instead of crashing the page.
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const INITIAL_COUNT = 6;
// Below this width the grid is a single column: it becomes a swipeable carousel with every project.
const COMPACT = '(max-width: 720px)';

const hostOf = (url) => url && new URL(url).hostname.replace(/^www\./, '');

const Portfolio = ({ onOpenProject }) => {
  const { ui, t, lang } = useLang();
  const [showAll, setShowAll] = useState(false);
  const [near, setNear] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [compact, setCompact] = useState(() => window.matchMedia(COMPACT).matches);
  const [current, setCurrent] = useState(0);
  const section = useRef(null);
  const ring = useRef(null);
  const track = useRef(null);
  const visible = compact || showAll ? projects : projects.slice(0, INITIAL_COUNT);

  useEffect(() => {
    const query = window.matchMedia(COMPACT);
    const update = () => setCompact(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  // Carousel: one step is the distance between two cards; in Arabic the cards run right to left.
  const step = () => {
    const [first, second] = track.current.children;
    return Math.abs(second.offsetLeft - first.offsetLeft);
  };
  const go = (i) => track.current.scrollTo({ left: i * step() * (lang === 'ar' ? -1 : 1), behavior: 'smooth' });
  const onTrackScroll = (e) => compact && setCurrent(Math.round(Math.abs(e.currentTarget.scrollLeft) / step()));

  // Load the ring as it comes near, and only render frames while it is around the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setNear(entry.isIntersecting);
        if (entry.isIntersecting) setLoaded(true);
      },
      { rootMargin: '300px 0px' }
    );
    observer.observe(ring.current);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (compact) scrubIn('.project-grid', { autoAlpha: 0, y: 70, rotateX: 18 });
      else scrubIn('.project-grid > li', (i) => ({ autoAlpha: 0, y: 90, z: -160, rotateX: 28, rotateY: ((i % 3) - 1) * -14 }));
      // The page height just changed: triggers further down must be measured again.
      ScrollTrigger.refresh();
    },
    { scope: section, dependencies: [showAll, compact], revertOnUpdate: true }
  );

  return (
    <section id="projects" className="section projects" ref={section}>
      <div className="container">
        <div className="projects-top">
          <Reveal className="section-head">
            <h2>{ui.projects.title}</h2>
            <p>{ui.projects.lead}</p>
            <p className="projects-hint">
              <HiCursorArrowRays aria-hidden="true" />
              {ui.projects.hint}
            </p>
          </Reveal>
          <div className="projects-ring" ref={ring} aria-hidden="true">
            {loaded && (
              <SceneBoundary>
                <Suspense fallback={null}>
                  <ProjectRing projects={projects.slice(0, 6)} onOpen={onOpenProject} active={near} />
                </Suspense>
              </SceneBoundary>
            )}
          </div>
        </div>

        <ul className="project-grid" ref={track} onScroll={onTrackScroll}>
          {visible.map((project) => (
            <li key={project.folder}>
              <article className="project-card tilt" {...tilt}>
                <div className="project-browser">
                  <div className="project-bar" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <span dir="ltr">{hostOf(project.url)}</span>
                  </div>
                  <div className="project-shot">
                    <img src={project.images[0]} alt="" loading="lazy" />
                    <span className="project-peek" aria-hidden="true">
                      {ui.projects.open}
                    </span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>
                    <button type="button" className="project-link" onClick={() => onOpenProject(project)}>
                      {t(project.title)}
                    </button>
                  </h3>
                  <p>{t(project.description)}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {compact && (
          <div className="projects-nav">
            <button type="button" onClick={() => go(current - 1)} disabled={current === 0} aria-label={ui.projects.prevProject}>
              <HiChevronLeft aria-hidden="true" />
            </button>
            <p>
              <strong>{current + 1}</strong> / {projects.length}
            </p>
            <button
              type="button"
              onClick={() => go(current + 1)}
              disabled={current === projects.length - 1}
              aria-label={ui.projects.nextProject}
            >
              <HiChevronRight aria-hidden="true" />
            </button>
          </div>
        )}

        {!compact && !showAll && projects.length > INITIAL_COUNT && (
          <div className="projects-more">
            <button type="button" className="btn btn-ghost" onClick={() => setShowAll(true)}>
              {ui.projects.more} ({projects.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
