import React from 'react';
import portrait from '../../images/image_sans_backround-removebg-preview.png';
import { useLang } from '../../i18n';
import HeroStory from './HeroStory';
import './intro.css';

const Intro = () => {
  const { ui } = useLang();

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

        <div className="hero-stage">
          <HeroStory />
        </div>
      </div>
    </section>
  );
};

export default Intro;
