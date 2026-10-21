import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import aboutMeImage1 from "../../images/aboutme.jpeg";
import aboutMeImage2 from "../../images/aboutme1.jpeg";
import aboutMeImage3 from "../../images/aboutme2.jpeg";
import { useLang } from "../../i18n";
import { gsap, reducedMotion, useGSAP } from "../../scroll";
import tilt from "../../tilt";
import Reveal from "../Reveal";
import "./Aboutme.css";

const images = [aboutMeImage1, aboutMeImage2, aboutMeImage3];
const STEP = 360 / images.length;

const AboutMe = () => {
  const { ui } = useLang();
  // turn only moves one step at a time, so the photos always orbit the short way round.
  const [turn, setTurn] = useState(0);
  const paused = useRef(false);
  const ring = useRef(null);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => !paused.current && setTurn((n) => n + 1), 3500);
    return () => clearInterval(id);
  }, []);

  // The whole carousel swings in space as the section scrolls past.
  useGSAP(() => {
    if (reducedMotion) return;
    gsap.fromTo(
      ring.current,
      { rotateY: -24 },
      { rotateY: 24, ease: "none", scrollTrigger: { trigger: ring.current, start: "top bottom", end: "bottom top", scrub: 0.8 } },
    );
  });

  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal className="about-media">
          <div
            className="about-frame tilt"
            {...tilt}
            onPointerEnter={() => (paused.current = true)}
            onPointerLeave={(e) => {
              paused.current = false;
              tilt.onPointerLeave(e);
            }}
          >
            <div className="about-glow" aria-hidden="true" />
            <div className="about-ring" ref={ring}>
              {images.map((img, i) => {
                // 0 is the sharp photo in front, 1 waits behind on one side, the last one on the other.
                const slot = (((i - turn) % images.length) + images.length) % images.length;
                const face = slot === 1 ? -26 : slot === images.length - 1 ? 26 : 0;
                return (
                  <img
                    key={img}
                    src={img}
                    alt={slot === 0 ? "Abdenour Garti" : ""}
                    className={`about-slide${slot === 0 ? " is-front" : ""}`}
                    style={{ "--a": `${(i - turn) * STEP}deg`, "--face": `${face}deg` }}
                    onClick={() => slot && setTurn((n) => n + (slot === 1 ? 1 : -1))}
                    draggable="false"
                  />
                );
              })}
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
