import React, { useEffect, useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import logo from '../../images/logo.png';
import { LANGS, useLang } from '../../i18n';
import './navbar.css';

const LINKS = ['about', 'experience', 'education', 'skills', 'projects'];

const LangSwitch = () => {
  const { lang, setLang, ui } = useLang();
  return (
    <div className="lang-switch" role="group" aria-label={ui.language}>
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          lang={l.code}
          title={l.label}
          aria-pressed={lang === l.code}
          onClick={() => setLang(l.code)}
        >
          <span aria-hidden="true">{l.short}</span>
          <span className="visually-hidden">{l.label}</span>
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { ui } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Highlights the link of the section crossing the middle of the screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['home', ...LINKS, 'contact'].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const link = (id) => (
    <a href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>
      {ui.nav[id]}
    </a>
  );

  return (
    <header className="nav">
      <nav className="nav-bar container">
        <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Abdenour Garti" width="44" height="44" />
        </a>

        <ul className="nav-links">
          {LINKS.map((id) => (
            <li key={id}>{link(id)}</li>
          ))}
        </ul>

        <div className="nav-actions">
          <LangSwitch />
          <a href="#contact" className="btn btn-primary nav-cta">
            {ui.nav.contact}
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-panel"
            aria-label={open ? ui.menu.close : ui.menu.open}
            onClick={() => setOpen(!open)}
          >
            {open ? <HiXMark aria-hidden="true" /> : <HiBars3 aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="nav-panel" className="nav-panel container" hidden={!open}>
        <ul>
          {['home', ...LINKS, 'contact'].map((id) => (
            <li key={id}>{link(id)}</li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
