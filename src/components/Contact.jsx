import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <motion.div 
        className="contact-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="contact-badge font-mono">
          <span className="contact-badge-dot"></span>
          Let's connect
        </div>
        <h2 className="contact-title">
          Got an idea?<br />
          <span className="text-gradient">Let's talk.</span>
        </h2>
        <p className="contact-desc">
          Although I'm not currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="contact-ctas">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=parthibanv065@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg font-mono">
            <span className="btn-icon-left"><Mail size={18} /></span>
            <span className="btn-text">Say Hello</span>
          </a>
          <a href="tel:+916380228547" className="btn btn-outline btn-lg font-mono">
            <span className="btn-icon-left"><Phone size={18} /></span>
            <span className="btn-text">+91 63802 28547</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
