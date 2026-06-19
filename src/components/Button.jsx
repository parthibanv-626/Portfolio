import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, variant = 'primary', href, onClick, className = '' }) => {
  const isPrimary = variant === 'primary';
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`btn btn-${variant} font-mono ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isPrimary && <span className="btn-glow"></span>}
      <span className="btn-content">{children}</span>
    </Component>
  );
};

export default Button;
