import React, { useEffect, useRef, useState } from 'react';
import { HiArrowTopRightOnSquare, HiChevronLeft, HiChevronRight, HiXMark } from 'react-icons/hi2';
import { useLang } from '../../i18n';
import { lenis } from '../../scroll';
import './ProjectModal.css';

// Native scroll-snap track: swipe works on touch, arrows and dots scroll it.
// Kept left-to-right in every language so "next" always means the next capture.
const Carousel = ({ images, title }) => {
  const { ui } = useLang();
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = (i) => {
    const el = track.current;
    el.scrollTo({ left: ((i + count) % count) * el.clientWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    if (count < 2) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(index + 1);
      if (e.key === 'ArrowLeft') go(index - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div className="carousel" dir="ltr">
      <div
        className="carousel-track"
        ref={track}
        onScroll={(e) => setIndex(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
      >
        {images.map((src, i) => (
          <img key={src} src={src} alt={`${title}, ${ui.projects.capture} ${i + 1}/${count}`} draggable="false" />
        ))}
      </div>

      {count > 1 && (
        <>
          <button type="button" className="carousel-arrow is-prev" onClick={() => go(index - 1)} aria-label={ui.projects.prev}>
            <HiChevronLeft aria-hidden="true" />
          </button>
          <button type="button" className="carousel-arrow is-next" onClick={() => go(index + 1)} aria-label={ui.projects.next}>
            <HiChevronRight aria-hidden="true" />
          </button>
          <div className="carousel-dots">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`${ui.projects.goTo} ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Native <dialog>: focus trap, Escape to close and focus return come from the browser.
const ProjectModal = ({ project, onClose }) => {
  const { ui, t } = useLang();
  const dialog = useRef(null);

  useEffect(() => {
    if (!project) return;
    const el = dialog.current;
    el.showModal();
    lenis.stop();
    return () => {
      el.close();
      lenis.start();
    };
  }, [project]);

  return (
    <dialog
      ref={dialog}
      className="pmodal"
      aria-labelledby="pmodal-title"
      data-lenis-prevent
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {project && (
        <div className="pmodal-panel">
          <button type="button" className="pmodal-close" onClick={onClose} aria-label={ui.projects.close}>
            <HiXMark aria-hidden="true" />
          </button>
          <Carousel key={project.folder} images={project.images} title={t(project.title)} />
          <div className="pmodal-body">
            <h3 id="pmodal-title">{t(project.title)}</h3>
            <p>{t(project.description)}</p>
            {project.url && (
              <a className="btn btn-primary" href={project.url} target="_blank" rel="noopener noreferrer">
                {ui.projects.visit}
                <HiArrowTopRightOnSquare aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
};

export default ProjectModal;
