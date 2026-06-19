import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const education = [
    {
      title: 'B.E Computer Science and Engineering',
      company: 'Chettinad College of Engineering and Technology, Karur', 
      date: '2022 — 2026',
      description: 'Completed with 8.2 CGPA.',
    },
    {
      title: 'Higher Secondary Education',
      company: 'Rani Meyammai Higher Secondary School,Puliyur',
      date: '2022',
      description: 'Completed with 74%.',
    },
    {
      title: 'SSLC',
      company: 'Annai Indira Memorial Higher Secondary School',
      date: '2020',
      description: 'Completed with 96%.',
    }
  ];

  return (
    <section id="education" className="experience-section container">
      <div className="section-heading">
        <motion.p 
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          02 — Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Where I've studied
        </motion.h2>
      </div>

      <div className="exp-timeline">
        {education.map((exp, index) => (
          <motion.div 
            key={index} 
            className="exp-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="exp-marker">
              <div className="exp-dot"></div>
            </div>
            <div className="exp-card">
              <div className="exp-card-header">
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-company font-mono text-gradient">{exp.company}</p>
                </div>
                <span className="exp-date font-mono">{exp.date}</span>
              </div>
              <p className="exp-desc">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
