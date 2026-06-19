import React from 'react';
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const socials = [
    { icon: <FaGithub size={18} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com/in/vparthiban065', label: 'LinkedIn' },
    { icon: <FaDribbble size={18} />, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <FiMail size={18} />, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=parthibanv065@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="footer container">
      <div className="footer-divider"></div>
      <div className="footer-content">
        <div className="footer-social">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
        <p className="footer-credit font-mono">
          Designed & Built by <span className="text-gradient">Parthiban</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
