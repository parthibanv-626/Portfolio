import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const engineeringSkills = ['Python', 'HTML/CSS', 'MY SQL', 'C', 'JAVASCRIPT'];
  const designSkills = ['Figma', 'Adobe XD', 'Canva', 'User Research'];
  const otherSkills = ['Git and Github', 'MS Office Tools'];

  const fullLines = [
    { indent: 0, parts: [{ text: "const ", type: "keyword" }, { text: "dev = {", type: "variable" }] },
    { indent: 1, parts: [{ text: "name", type: "property" }, { text: ": ", type: "plain" }, { text: "'Parthiban'", type: "string" }, { text: ",", type: "plain" }] },
    { indent: 1, parts: [{ text: "role", type: "property" }, { text: ": ", type: "plain" }, { text: "'Builder & Designer'", type: "string" }, { text: ",", type: "plain" }] },
    { indent: 1, parts: [{ text: "focus", type: "property" }, { text: ": ", type: "plain" }, { text: "'Creative UI/UX'", type: "string" }] },
    { indent: 0, parts: [{ text: "};", type: "plain" }] }
  ];

  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [visibleChars, setVisibleChars] = useState(0);
  const [userInput, setUserInput] = useState('');

  const totalChars = fullLines.reduce((acc, line) => {
    const lineLen = line.parts.reduce((pAcc, part) => pAcc + part.text.length, 0);
    return acc + lineLen;
  }, 0);
  const isTypingComplete = visibleChars >= totalChars;

  useEffect(() => {
    if (isInView) {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setVisibleChars(count);
        if (count >= totalChars) {
          clearInterval(interval);
        }
      }, 30); // 30ms typing speed
      return () => clearInterval(interval);
    }
  }, [isInView, totalChars]);

  let globalCount = 0;
  const lineRenders = fullLines.map((line, lineIdx) => {
    let lineTextToShow = [];
    let isLineTyping = false;
    let hasCharsInLine = false;

    for (let part of line.parts) {
      const partLen = part.text.length;
      const remaining = visibleChars - globalCount;

      if (remaining <= 0) {
        break;
      }

      const sliceLen = Math.min(partLen, remaining);
      globalCount += sliceLen;
      hasCharsInLine = true;

      const text = part.text.slice(0, sliceLen);
      lineTextToShow.push(
        <span key={part.text + sliceLen} className={part.type}>
          {text}
        </span>
      );

      if (sliceLen < partLen) {
        isLineTyping = true;
        break;
      }
    }

    let isCursorHere = false;
    if (!isTypingComplete) {
      if (isLineTyping) {
        isCursorHere = true;
      } else if (globalCount === visibleChars && hasCharsInLine) {
        isCursorHere = true;
      } else if (visibleChars === 0 && lineIdx === 0) {
        isCursorHere = true;
      }
    }

    return (
      <div key={lineIdx} className={`code-line ${line.indent ? 'indent' : ''}`}>
        {lineTextToShow}
        {isCursorHere && <span className="typing-cursor">|</span>}
      </div>
    );
  });

  return (
    <section id="about" className="about-section container">
      <div className="section-heading">
        <motion.p 
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          01 — About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Get to know me
        </motion.h2>
      </div>

      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p>
            Hello! My name is Parthiban and I enjoy creating things that live on the internet. 
            My interest in web development started back in high school when I decided to try editing 
            custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about design and structure!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of studying Computer Science Engineering 
            while cultivating a deep love for UI/UX design. My main focus these days is building accessible, 
            inclusive products and digital experiences that look as good as they function.
          </p>

          <div className="skills-container">
            <div className="skills-column">
              <h3>Development</h3>
              <div className="skills-grid">
                {engineeringSkills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag font-mono"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="skills-column">
              <h3>Design</h3>
              <div className="skills-grid">
                {designSkills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag font-mono"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="skills-column">
              <h3>Other Tools</h3>
              <div className="skills-grid">
                {otherSkills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag font-mono"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="visual-card" ref={cardRef}>
            <div className="visual-inner">
              <div className="window-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-body font-mono">
                {lineRenders}
                {isTypingComplete && (
                  <div className="code-line terminal-input-line">
                    <span className="terminal-prompt">~</span>
                    <input 
                      type="text" 
                      className="terminal-input"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      spellCheck="false"
                      autoFocus
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
