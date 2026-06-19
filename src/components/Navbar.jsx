import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#work' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <nav className="container navbar">
        <motion.div 
          className="logo font-mono text-gradient"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Zap size={18} className="text-gradient" />
            </motion.div>
            <span>Profile</span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="nav-links desktop-nav">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name}
              href={link.href}
              className="font-mono nav-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="nav-number">0{i + 1}.</span> {link.name}
            </motion.a>
          ))}
          <motion.a 
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn font-mono"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Resume
          </motion.a>
          <motion.button
            onClick={toggleTheme}
            className="theme-toggle"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ marginLeft: '0.75rem' }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-mono mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="nav-number">0{i + 1}.</span> {link.name}
            </a>
          ))}
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="resume-btn font-mono" style={{ marginTop: '1rem', display: 'inline-block' }}>
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;