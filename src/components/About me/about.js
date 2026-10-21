import React, { useEffect, useState } from 'react';
import { HiOutlineMapPin } from 'react-icons/hi2';
import aboutMeImage1 from '../../images/aboutme.jpg';
import aboutMeImage2 from '../../images/aboutme2.jpg';
import aboutMeImage3 from '../../images/aboutme3.jpg';
import { useLang } from '../../i18n';
import tilt from '../../tilt';
import Reveal from '../Reveal';
import './Aboutme.css';

const images = [aboutMeImage1, aboutMeImage2, aboutMeImage3];

const AboutMe = () => {
  const { ui } = useLang();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setCurrent((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal className="about-media">
          <div className="about-frame tilt" {...tilt}>
            <div className="about-backdrop" aria-hidden="true" />
            <div className="about-photos">
              {images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={index === current ? 'Abdenour Garti' : ''}
                  className={index === current ? 'is-active' : ''}
                />
              ))}
            </div>
            <p className="about-badge">
              <HiOutlineMapPin aria-hidden="true" />
              {ui.about.facts[0][1]}
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal className="section-head">
            <h2>{ui.about.title}</h2>
          </Reveal>
          <Reveal className="about-text" delay={100}>
            {ui.about.text.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal as="dl" className="about-facts" delay={200}>
            {ui.about.facts.map(([label, value], i) => (
              <div key={i}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
