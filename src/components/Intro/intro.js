import React, { Component, Suspense, lazy, useEffect, useRef, useState } from 'react';
import portrait from '../../images/image_sans_backround-removebg-preview.png';
import projects from '../../data/projects';
import { useLang } from '../../i18n';
import './intro.css';

// three.js is heavy: loaded in its own chunk so the text shows first.
const HeroScene = lazy(() => import('./HeroScene'));

// Without WebGL (old GPU, disabled by policy) the hero simply shows no 3D instead of crashing the page.
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const Intro = ({ onOpenProject }) => {
  const { ui } = useLang();
  const stage = useRef(null);
  const [inView, setInView] = useState(true);

  // Pause the 3D render loop when the hero is scrolled away.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(stage.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="hero-id">
            <img src={portrait} alt="" width="56" height="56" />
            <p>
              <strong>Abdenour Garti</strong>
              <span>{ui.hero.role}</span>
            </p>
          </div>
          <h1>{ui.hero.title}</h1>
          <p className="hero-lead">{ui.hero.lead}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              {ui.hero.projects}
            </a>
            <a href="#contact" className="btn btn-ghost">
              {ui.hero.contact}
            </a>
          </div>
          <p className="hero-status">
            <span className="hero-pulse" aria-hidden="true" />
            {ui.hero.status}
          </p>
        </div>

        <div className="hero-stage" ref={stage}>
          <div className="hero-canvas-wrap" aria-hidden="true">
            <SceneBoundary>
              <Suspense fallback={null}>
                <HeroScene projects={projects.slice(0, 6)} onOpen={onOpenProject} active={inView} />
              </Suspense>
            </SceneBoundary>
          </div>
          <p className="hero-hint">{ui.hero.hint}</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
