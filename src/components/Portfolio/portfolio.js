import React, { useState } from 'react';
import projects from '../../data/projects';
import { useLang } from '../../i18n';
import tilt from '../../tilt';
import Reveal from '../Reveal';
import './portfolio.css';

const INITIAL_COUNT = 6;

const hostOf = (url) => url && new URL(url).hostname.replace(/^www\./, '');

const Portfolio = ({ onOpenProject }) => {
  const { ui, t } = useLang();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <h2>{ui.projects.title}</h2>
          <p>{ui.projects.lead}</p>
        </Reveal>

        <ul className="project-grid">
          {visible.map((project, i) => (
            <Reveal as="li" key={project.folder} delay={(i % 3) * 90}>
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
            </Reveal>
          ))}
        </ul>

        {!showAll && projects.length > INITIAL_COUNT && (
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
