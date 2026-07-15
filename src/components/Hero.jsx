import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import lottie from 'lottie-web';
import animationData from './anime.json';
import './Hero.css';
import './Button.css';

const Hero = () => {
  const nameChars = Array.from("Parthiban");
  const subtitleWords = ["I", "build", "&", "design", "things", "for", "the", "web."];
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
      return () => anim.destroy();
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const nameContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1
      }
    }
  };

  const charItem = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const subtitleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5
      }
    }
  };

  const wordItem = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="hero" className="hero-section container">
      <div className="hero-layout">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
            <span className="hero-badge font-mono">Fresher</span>
          </motion.div>

          <motion.p variants={itemVariants} className="font-mono text-gradient hero-intro">
            Hi, I am
          </motion.p>
          
          <motion.h1 
            className="hero-title"
            variants={nameContainer}
            initial="hidden"
            animate="visible"
          >
            {nameChars.map((char, index) => (
              <motion.span 
                key={index} 
                variants={charItem} 
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span 
              variants={charItem} 
              className="accent-dot" 
              style={{ display: 'inline-block' }}
            >
              .
            </motion.span>
          </motion.h1>

          <motion.h2 
            className="hero-subtitle"
            variants={subtitleContainer}
            initial="hidden"
            animate="visible"
          >
            {subtitleWords.map((word, index) => {
              const isHighlight = word === 'build' || word === 'design';
              return (
                <motion.span 
                  key={index} 
                  variants={wordItem} 
                  className={isHighlight ? "highlight" : ""}
                  style={{ display: 'inline-block', marginRight: '0.45rem' }}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-desc">
            I'm a computer science engineering graduate with a deep passion for UI design and development. 
            <br /><br />
            I specialize in building exceptional, highly interactive digital experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-cta">
            <a href="#work" className="btn btn-primary font-mono">
              <span className="btn-text">View my work</span>
              <span className="btn-icon"><ArrowRight size={18} /></span>
            </a>
            <a href={`${import.meta.env.BASE_URL}Certificates/Parthiban V.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-outline font-mono">
              <span className="btn-icon-left"><Download size={16} /></span>
              <span className="btn-text">Resume</span>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-status">
            <span className="status-dot"></span>
            Available for opportunities
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-animation"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div ref={containerRef} style={{ width: '100%', maxWidth: '550px', height: 'auto' }} />
        </motion.div>
      </div>

      <div className="aurora-bg">
        <div className="aurora-orb aurora-orb-1"></div>
        <div className="aurora-orb aurora-orb-2"></div>
        <div className="aurora-orb aurora-orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;
