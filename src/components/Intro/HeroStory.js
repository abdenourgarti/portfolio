import React, { useRef, useState } from 'react';
import { HiLockClosed, HiOutlineEnvelope, HiPaperAirplane } from 'react-icons/hi2';
import { useLang } from '../../i18n';
import { gsap, reducedMotion, ScrollTrigger, useGSAP } from '../../scroll';
import tilt from '../../tilt';
import './heroStory.css';

const SKIN = '#eab68d';
const HAIR = '#1b2335';
const SHIRT = '#1f5bff';
const SLEEVE = '#1442cc';

// The client: 'think' has a hand on the chin, 'cheer' raises both arms.
const Person = ({ pose, className = 'person', viewBox = '0 0 200 230' }) => (
  <svg className={className} viewBox={viewBox}>
    {pose === 'cheer' && (
      <g>
        <path d="M46 196c-16-30-20-64-12-96M154 196c16-30 20-64 12-96" stroke={SHIRT} strokeWidth="22" strokeLinecap="round" fill="none" />
        <circle cx="34" cy="94" r="12" fill={SKIN} />
        <circle cx="166" cy="94" r="12" fill={SKIN} />
      </g>
    )}
    <rect x="87" y="118" width="26" height="36" rx="10" fill={SKIN} />
    <path d="M24 230c0-52 34-82 76-82s76 30 76 82z" fill={SHIRT} />
    <path d="M84 150l16 22 16-22z" fill="#fff" />
    <circle cx="63" cy="94" r="9" fill={SKIN} />
    <circle cx="137" cy="94" r="9" fill={SKIN} />
    <ellipse cx="100" cy="90" rx="37" ry="42" fill={SKIN} />
    <path d="M60 94c-6-40 16-60 42-60 27 0 45 20 38 60-4-18-16-30-38-30-14 0-26 6-32 16-4-2-8 4-10 14z" fill={HAIR} />
    <g className="person-eyes" fill={HAIR}>
      <ellipse cx="86" cy="96" rx="4" ry="5" />
      <ellipse cx="114" cy="96" rx="4" ry="5" />
    </g>
    <path d="M78 84q8-6 16 0M106 84q8-6 16 0" stroke={HAIR} strokeWidth="3" strokeLinecap="round" fill="none" />
    {pose === 'cheer' ? (
      <path d="M86 111q14 18 28 0z" fill="#fff" stroke={HAIR} strokeWidth="3" strokeLinejoin="round" />
    ) : (
      <path d="M92 115q8 4 16 0" stroke={HAIR} strokeWidth="3" strokeLinecap="round" fill="none" />
    )}
    {pose === 'think' && (
      <g>
        <path d="M152 230l-14-38-22-54" stroke={SLEEVE} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="114" cy="134" r="12" fill={SKIN} />
      </g>
    )}
  </svg>
);

const Cursor = () => (
  <svg className="story-cursor" viewBox="0 0 24 24">
    <path d="M5 2.5v17l4.6-4.3 3 6.6 3-1.4-3-6.4h6.2z" fill="#0a1a33" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const Star = () => (
  <svg className="star" viewBox="0 0 24 24">
    <path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.8L12 17.6 6 21l1.3-6.8-5-4.7 6.8-.8z" fill="#ffc531" />
  </svg>
);

// Pre-highlighted code, typed line by line.
const CODE = [
  [['kw', 'import'], ['', ' { '], ['fn', 'createApp'], ['', ' } '], ['kw', 'from'], ['str', " './studio'"], ['', ';']],
  [],
  [['kw', 'const'], ['', ' app = '], ['fn', 'createApp'], ['', '({']],
  [['', '  dev: '], ['str', "'Abdenour GARTI'"], ['', ',']],
  [['', '  stack: ['], ['str', "'Laravel'"], ['', ', '], ['str', "'React'"], ['', '],']],
  [['', '  responsive: '], ['kw', 'true'], ['', ',']],
  [['', '});']],
  [],
  [['kw', 'await'], ['', ' app.'], ['fn', 'deploy'], ['', '(); '], ['cm', '// live!']],
];

// Where el's centre sits inside box, in % so it holds at any size. Offsets ignore transforms, and the
// values are read when the tween starts, once fonts have settled. scrolled() is the page scroll in px.
const spot = (el, box, scrolled = () => 0) => {
  const offset = () => {
    let x = el.offsetWidth / 2;
    let y = el.offsetHeight / 2 - scrolled();
    for (let n = el; n && n !== box; n = n.offsetParent) {
      x += n.offsetLeft;
      y += n.offsetTop;
    }
    return { x: (100 * x) / box.offsetWidth, y: (100 * y) / box.offsetHeight };
  };
  return { left: () => `${offset().x}%`, top: () => `${offset().y}%` };
};

const HeroStory = () => {
  const { ui, lang } = useLang();
  const s = ui.hero.story;
  const root = useRef(null);
  const bar = useRef(null);
  const controls = useRef(null);
  const [step, setStep] = useState(0);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const scenes = q('.scene');
      const dir = lang === 'ar' ? -1 : 1;
      const tl = gsap.timeline({ repeat: -1, defaults: { duration: 0.5, ease: 'power2.out' } });
      const pop = { autoAlpha: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(2)' };

      // Scenes swap like faces of a cube turning in space.
      const show = (i) => {
        if (i > 0) leave(scenes[i - 1]);
        tl.addLabel(`s${i}`, i > 0 ? '<0.45' : 0).fromTo(
          scenes[i],
          { autoAlpha: 0, rotateY: 70 * dir, z: -300, xPercent: 10 * dir },
          { autoAlpha: 1, rotateY: 0, z: 0, xPercent: 0, duration: 1.1, ease: 'power3.out' },
          `s${i}`
        );
      };
      const leave = (scene) =>
        tl.to(scene, { autoAlpha: 0, rotateY: -70 * dir, z: -300, xPercent: -10 * dir, duration: 0.9, ease: 'power3.in' });
      const done = (i, hold) => tl.addLabel(`d${i}`).to({}, { duration: hold });
      const type = (el, text, speed = 0.045) =>
        tl
          .set(el, { '--caret': 1 })
          .to(el, { text, duration: text.length * speed, ease: 'none' })
          .set(el, { '--caret': 0 }, '+=0.25');
      const click = (cursor) => tl.to(cursor, { scale: 0.75, duration: 0.1, repeat: 1, yoyo: true });
      const glide = (cursor, target, duration = 0.7) => tl.to(cursor, { ...target, autoAlpha: 1, duration, ease: 'power2.inOut' });

      // 1. The client gets an idea.
      show(0);
      tl.fromTo(q('.thought i'), { autoAlpha: 0, scale: 0 }, { ...pop, duration: 0.3, stagger: 0.2 }, '-=0.3')
        .fromTo(q('.idea-bulb'), { autoAlpha: 0, scale: 0, rotate: -30 }, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.9, ease: 'elastic.out(1, 0.45)' })
        .fromTo(q('.idea-rays'), { autoAlpha: 0, scale: 0.4, svgOrigin: '32 28' }, { autoAlpha: 1, scale: 1 }, '<0.15')
        .fromTo(q('.idea-bubble'), { autoAlpha: 0, scale: 0.6, y: 10 }, pop, '<0.2');
      done(0, 1.4);

      // 2. They write to Abdenour GARTI and send the message.
      show(1);
      const mail = scenes[1];
      const [to, subject, body] = mail.querySelectorAll('.typed');
      const send = mail.querySelector('.mail-send');
      const mailCursor = mail.querySelector('.story-cursor');
      tl.fromTo(mail.querySelector('.mail-avatar'), { autoAlpha: 0, scale: 0 }, pop, '-=0.4');
      type(to, 'Abdenour GARTI');
      type(subject, s.subjectText);
      type(body, s.message, 0.028);
      tl.set(mailCursor, { left: '96%', top: '100%' });
      glide(mailCursor, spot(send, mail), 0.8);
      click(mailCursor);
      tl.addLabel('sent')
        .to(send.querySelector('.send-idle'), { autoAlpha: 0, duration: 0.2 }, 'sent')
        .to(send.querySelector('.send-done'), { autoAlpha: 1, duration: 0.2 }, 'sent+=0.1')
        .to(send, { backgroundColor: '#16a34a', duration: 0.3 }, 'sent')
        .fromTo(
          send.querySelector('.mail-plane'),
          { autoAlpha: 1, xPercent: 0, yPercent: 0, scale: 0.6, rotate: 0 },
          { autoAlpha: 0, xPercent: 700 * dir, yPercent: -900, scale: 1.4, rotate: -15 * dir, duration: 1.2, ease: 'power2.in' },
          'sent'
        )
        .to(mailCursor, { autoAlpha: 0, duration: 0.3 }, 'sent+=0.4');
      done(1, 1);

      // 3. Design: wireframe and database schema.
      show(2);
      tl.fromTo(q('.wire i'), { autoAlpha: 0, scaleX: 0 }, { autoAlpha: 1, scaleX: 1, duration: 0.4, stagger: 0.12 }, '-=0.4')
        .fromTo(q('.schema .draw'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.6, stagger: 0.18, ease: 'power1.inOut' }, '-=0.3')
        .fromTo(q('.schema text'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, stagger: 0.04 }, '-=0.6')
        .fromTo(q('.board-sticky'), { autoAlpha: 0, scale: 1.8, rotate: -24 }, { autoAlpha: 1, scale: 1, rotate: -6, duration: 0.55, ease: 'back.out(2.2)' });
      done(2, 1.3);

      // 4. Development: the code types itself, then builds.
      show(3);
      q('.code-text').forEach((line, i) => {
        const n = line.textContent.length;
        if (!n) return;
        tl.set(line, { '--caret': 1 }, i === 0 ? '-=0.3' : '>')
          .fromTo(line, { width: '0ch' }, { width: `${n}ch`, duration: n * 0.028, ease: `steps(${n})` })
          .set(line, { '--caret': 0 });
      });
      tl.fromTo(q('.editor-term p'), { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.35 }, '+=0.2');
      done(3, 1.3);

      // 5. The site is live: browse the pages, fill the form, send it.
      show(4);
      const site = scenes[4];
      const view = site.querySelector('.browser-view');
      const nav = site.querySelector('.site-nav');
      const links = nav.querySelectorAll('span');
      const page = site.querySelector('.site-page');
      const [, cards, form] = page.children;
      const siteCursor = site.querySelector('.story-cursor');
      const scrollFor = (section) => Math.min(section.offsetTop - nav.offsetHeight, page.offsetHeight - view.offsetHeight);
      const visit = (i, section) =>
        tl
          .set(links, { backgroundColor: 'rgba(31, 91, 255, 0)', color: '#5a6b85' })
          .set(links[i], { backgroundColor: '#1f5bff', color: '#ffffff' })
          .to(page, { yPercent: () => (-100 * scrollFor(section)) / page.offsetHeight, duration: 1, ease: 'power2.inOut' });
      const inForm = (el) => spot(el, site, () => scrollFor(form));
      const [name, email] = form.querySelectorAll('.typed');

      tl.fromTo(q('.site-load'), { autoAlpha: 1, scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power1.inOut' }, '-=0.4')
        .to(q('.site-load'), { autoAlpha: 0, duration: 0.2 })
        .fromTo(q('.site-hero > *'), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1 }, '<')
        .set(siteCursor, { left: '92%', top: '100%' });
      glide(siteCursor, spot(links[1], site), 0.8);
      click(siteCursor);
      visit(1, cards);
      tl.fromTo(cards.querySelectorAll('.site-card'), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.12 }, '<0.4');
      glide(siteCursor, spot(links[2], site), 0.6);
      click(siteCursor);
      visit(2, form);
      glide(siteCursor, inForm(name.parentNode), 0.6);
      click(siteCursor);
      type(name, 'Karim B.');
      glide(siteCursor, inForm(email.parentNode), 0.4);
      type(email, 'karim@mail.dz', 0.035);
      glide(siteCursor, inForm(form.querySelector('.site-submit')), 0.5);
      click(siteCursor);
      tl.fromTo(q('.site-toast'), { autoAlpha: 0, scale: 0.85, y: 16 }, pop).to(siteCursor, { autoAlpha: 0, duration: 0.3 }, '<0.4');
      done(4, 1.4);

      // 6. A happy client, then the cycle starts again.
      show(5);
      const spread = () => root.current.offsetWidth;
      tl.fromTo(q('.scene-happy .person'), { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.5')
        .fromTo(q('.star'), { autoAlpha: 0, scale: 0, rotate: -90 }, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.45, stagger: 0.12, ease: 'back.out(3)' })
        .fromTo(q('.happy-bubble'), { autoAlpha: 0, scale: 0.6, y: 10 }, pop, '<0.3')
        .fromTo(
          q('.confetti i'),
          { autoAlpha: 1, x: 0, y: 0, rotate: 0 },
          {
            autoAlpha: 0,
            x: () => gsap.utils.random(-0.42, 0.42) * spread(),
            y: () => gsap.utils.random(-0.38, 0.1) * spread(),
            rotate: () => gsap.utils.random(-360, 360),
            duration: 1.8,
            stagger: 0.015,
            ease: 'power3.out',
          },
          '<'
        );
      done(5, 1.5);
      leave(scenes[5]);

      // Step bar: --p is "scene index + progress inside it".
      const starts = scenes.map((_, i) => tl.labels[`s${i}`]);
      const update = () => {
        const t = tl.time();
        let i = starts.length - 1;
        while (i > 0 && t < starts[i]) i -= 1;
        const end = i < starts.length - 1 ? starts[i + 1] : tl.duration();
        bar.current.style.setProperty('--p', i + (t - starts[i]) / (end - starts[i]));
        setStep(i);
      };
      tl.eventCallback('onUpdate', update);
      controls.current = { tl, update };

      if (reducedMotion) {
        tl.pause('d1');
        update();
        return;
      }
      // Only run while the hero is on screen, and let the stage sink back as the page scrolls on.
      ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => (self.isActive ? tl.resume() : tl.pause()),
      });
      gsap.to(root.current, {
        rotateX: 24,
        scale: 0.86,
        yPercent: 6,
        opacity: 0.35,
        transformPerspective: 1400,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top 12%', end: 'bottom top', scrub: 0.6 },
      });
    },
    { scope: root, dependencies: [lang], revertOnUpdate: true }
  );

  const jump = (i) => {
    const { tl, update } = controls.current;
    if (reducedMotion) tl.pause(`d${i}`);
    else tl.play(`s${i}`);
    update();
  };

  return (
    <figure className="story" ref={root} {...tilt}>
      <div className="story-world" aria-hidden="true">
        <div className="scene scene-idea">
          <span className="halo" />
          <Person pose="think" />
          <span className="thought">
            <i />
            <i />
            <i />
          </span>
          <svg className="idea-bulb" viewBox="-14 -16 92 100">
            <path
              className="idea-rays"
              d="M32-3v-9M53.9 6.1l6.4-6.4M63 28h9M53.9 49.9l6.4 6.4M10.1 49.9l-6.4 6.4M1 28h-9M10.1 6.1L3.7-.3"
              stroke="#ffb703"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path d="M32 4a24 24 0 0 0-14 43.5c3 2.4 5 6 5 9.5v3h18v-3c0-3.5 2-7.1 5-9.5A24 24 0 0 0 32 4z" fill="#ffd54a" />
            <path d="M26 42l6 8 6-8" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <rect x="23" y="62" width="18" height="6" rx="2" fill="#94a3b8" />
            <rect x="25" y="70" width="14" height="6" rx="2" fill="#94a3b8" />
          </svg>
          <p className="bubble idea-bubble">{s.idea}</p>
        </div>

        <div className="scene scene-contact">
          <div className="mail">
            <span className="mail-avatar">
              <Person viewBox="50 34 100 100" />
            </span>
            <p className="mail-title">
              <HiOutlineEnvelope />
              {s.mail}
            </p>
            <p className="mail-row">
              <span>{s.to}</span>
              <b className="typed" dir="ltr" />
            </p>
            <p className="mail-row">
              <span>{s.subject}</span>
              <b className="typed" />
            </p>
            <p className="mail-body">
              <span className="typed" />
            </p>
            <span className="mail-send">
              <span className="send-idle">
                {s.send} <HiPaperAirplane />
              </span>
              <span className="send-done">✓ {s.sent}</span>
              <svg className="mail-plane" viewBox="0 0 24 24">
                <path d="M2.5 11.2 21.5 3l-6.2 18-3.6-7.4z" fill="#fff" stroke="#1f5bff" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M11.7 13.6 21.5 3" stroke="#1f5bff" strokeWidth="1.5" />
              </svg>
            </span>
          </div>
          <Cursor />
        </div>

        <div className="scene scene-design">
          <div className="board">
            <div>
              <p className="board-tag">{s.wireframe}</p>
              <div className="wire">
                <i className="w-nav" />
                <i className="w-hero" />
                <i className="w-btn" />
                <span className="w-cards">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>
            <div>
              <p className="board-tag">{s.schema}</p>
              <svg className="schema" viewBox="0 0 160 150" direction="ltr">
                <g fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round">
                  <path className="draw" pathLength="1" d="M6 6h64v42H6z" />
                  <path className="draw" pathLength="1" d="M90 54h64v42H90z" />
                  <path className="draw" pathLength="1" d="M6 102h64v42H6z" />
                  <path className="draw" pathLength="1" d="M70 27h10v48h10" />
                  <path className="draw" pathLength="1" d="M122 96v27H70" />
                </g>
                <g fill="#fff" fontSize="9" fontFamily="ui-monospace, Consolas, monospace">
                  <text x="12" y="19" fontWeight="700">users</text>
                  <text x="12" y="32">id</text>
                  <text x="12" y="43">email</text>
                  <text x="96" y="67" fontWeight="700">projects</text>
                  <text x="96" y="80">user_id</text>
                  <text x="96" y="91">title</text>
                  <text x="12" y="115" fontWeight="700">tasks</text>
                  <text x="12" y="128">project_id</text>
                  <text x="12" y="139">status</text>
                </g>
              </svg>
            </div>
            <p className="board-sticky">✓ {s.approved}</p>
          </div>
        </div>

        <div className="scene scene-code">
          <div className="editor" dir="ltr">
            <div className="editor-bar">
              <i />
              <i />
              <i />
              <span>app.js</span>
            </div>
            <pre className="editor-code">
              {CODE.map((tokens, i) => (
                <span className="code-line" key={i}>
                  <span className="code-ln">{i + 1}</span>
                  <span className="code-text">
                    {tokens.map(([kind, text], j) => (
                      <span key={j} className={kind}>
                        {text}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </pre>
            <div className="editor-term">
              <p>
                <span className="term-prompt">$</span> npm run build
              </p>
              <p className="ok">✓ Compiled successfully</p>
              <p className="ok">✓ Deployed to production</p>
            </div>
          </div>
        </div>

        <div className="scene scene-site">
          <div className="browser">
            <div className="browser-bar">
              <i />
              <i />
              <i />
              <span className="browser-url" dir="ltr">
                <HiLockClosed />
                {s.domain}
              </span>
            </div>
            <div className="browser-view">
              <span className="site-load" />
              <div className="site-nav">
                <b className="site-logo" />
                {s.nav.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              <div className="site-page">
                <section className="site-hero">
                  <strong>{s.site}</strong>
                  <i className="site-line" />
                  <i className="site-line is-short" />
                  <i className="site-cta" />
                </section>
                <section className="site-cards">
                  <b>{s.nav[1]}</b>
                  <div>
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="site-card">
                        <i />
                        <i />
                        <i />
                      </span>
                    ))}
                  </div>
                </section>
                <section className="site-form">
                  <b>{s.nav[2]}</b>
                  <span className="site-input">
                    <span className="typed" dir="ltr" />
                  </span>
                  <span className="site-input">
                    <span className="typed" dir="ltr" />
                  </span>
                  <span className="site-input is-area" />
                  <em className="site-submit">{s.send}</em>
                </section>
                <span className="site-foot" />
              </div>
              <span className="site-toast">✓ {s.toast}</span>
            </div>
          </div>
          <Cursor />
        </div>

        <div className="scene scene-happy">
          <span className="halo" />
          <Person pose="cheer" />
          <div className="stars">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="bubble happy-bubble">{s.review}</p>
          <div className="confetti">
            {Array.from({ length: 18 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
        </div>

        <span className="story-chip chip-a" dir="ltr">
          {'</>'}
        </span>
        <span className="story-chip chip-b" dir="ltr">
          SQL
        </span>
      </div>

      <figcaption className="story-ui">
        <p className="story-caption">
          <span>0{step + 1}</span>
          {s.steps[step]}
        </p>
        <ol className="story-steps" ref={bar}>
          {s.steps.map((label, i) => (
            <li key={label}>
              <button
                type="button"
                style={{ '--i': i }}
                aria-label={label}
                aria-current={i === step ? 'step' : undefined}
                onClick={() => jump(i)}
              />
            </li>
          ))}
        </ol>
      </figcaption>
    </figure>
  );
};

export default HeroStory;
