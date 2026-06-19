import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import './OpeningScreen.css';

const OpeningScreen = ({ onEnter, theme, toggleTheme }) => {
  return (
    <motion.div 
      className="opening-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="opening-bg-layer opening-bg-1"></div>
      <div className="opening-bg-layer opening-bg-2"></div>
      
      {/* Theme Toggle */}
      <motion.button
        className="opening-theme-toggle"
        onClick={toggleTheme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>

      <div className="opening-content">
        <motion.h1 
          className="opening-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome
        </motion.h1>
        <motion.p
          className="opening-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          To the nexus of design & code
        </motion.p>
        <motion.button 
          className="opening-btn"
          onClick={onEnter}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span>Explore Now</span>
          <ArrowRight size={18} className="opening-icon" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default OpeningScreen;
