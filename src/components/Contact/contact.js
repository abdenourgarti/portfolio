import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { useLang } from '../../i18n';
import { scrubIn, useGSAP } from '../../scroll';
import Phone from './Phone';
import './contact.css';

const EMAIL = 'garti.abdenour@gmail.com';

const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/abdenour-garti-19177b192/', Icon: FaLinkedinIn },
  { label: 'GitHub', url: 'https://github.com/abdenourgarti', Icon: FaGithub },
  { label: 'X', url: 'https://x.com/GartiAbdenour', Icon: FaXTwitter },
];

const Contact = () => {
  const { ui } = useLang();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const section = useRef(null);

  // The panel tips up from below like a card being lifted.
  useGSAP(() => scrubIn('.contact-panel', { y: 100, rotateX: 20, scale: 0.92, autoAlpha: 0.2 }), { scope: section });

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xzzpvkkq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error(`Formspree answered ${response.status}`);
      form.reset();
      setStatus('sent');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact" ref={section}>
      <div className="container">
        <div className="contact-panel">
          <div className="contact-intro">
            <h2>{ui.contact.title}</h2>
            <p>{ui.contact.lead}</p>
            <a href={`mailto:${EMAIL}`} className="contact-mail">
              <HiOutlineEnvelope aria-hidden="true" />
              <span dir="ltr">{EMAIL}</span>
            </a>
            <ul className="contact-socials">
              {socials.map(({ label, url, Icon }) => (
                <li key={label}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Phone />

          <form className="contact-form" onSubmit={sendEmail}>
            <label>
              <span>{ui.contact.name}</span>
              <input type="text" name="from_name" autoComplete="name" required />
            </label>
            <label>
              <span>{ui.contact.email}</span>
              <input type="email" name="your-email" autoComplete="email" required />
            </label>
            <label>
              <span>{ui.contact.tel}</span>
              <input type="tel" name="phone" autoComplete="tel" inputMode="tel" dir="ltr" />
            </label>
            <label>
              <span>{ui.contact.message}</span>
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? ui.contact.sending : ui.contact.send}
            </button>
            <p className={`form-status is-${status}`} role="status">
              {status === 'sent' && ui.contact.sent}
              {status === 'error' && ui.contact.error}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
