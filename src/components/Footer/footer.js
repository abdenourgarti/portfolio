import React from 'react';
import { HiArrowUp } from 'react-icons/hi2';
import logo from '../../images/logo.png';
import { useLang } from '../../i18n';
import './footer.css';

const Footer = () => {
  const { ui } = useLang();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src={logo} alt="" width="40" height="40" />
        <p>
          © {new Date().getFullYear()} Abdenour Garti. {ui.footer.rights}
        </p>
        <a href="#home" className="footer-top">
          {ui.footer.top}
          <HiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
