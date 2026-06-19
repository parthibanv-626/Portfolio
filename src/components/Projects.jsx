import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiFolder } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Blood Connect',
      stream: 'Web Development',
      description: 'A web-based blood donation management system that connects patients in need with suitable donors in real time. Features location-based donor matching and emergency blood requests to reduce critical response delays.',
      techStack: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/parthibanv-626/Blood_connect',
      external: '#',
      color: '--accent-1',
    },
    {
      title: 'KREDR',
      stream: 'Mobile App Development',
      description: 'A modern, cross-platform mobile application built using the Flutter framework. Features high performance, clean patterns, and a responsive UI/UX across Android and iOS.',
      techStack: ['Flutter', 'Dart'],
      github: 'https://github.com/parthibanv-626/KREDR',
      external: '#',
      color: '--accent-4',
    },
    {
      title: 'Portfolio',
      stream: 'Web Development',
      description: 'A premium, highly interactive portfolio website built using React, Framer Motion, and CSS Custom Properties. Features interactive glassmorphism components, dark/light theme options, and custom micro-animations.',
      techStack: ['React', 'Vite', 'CSS3'],
      github: 'https://github.com/parthibanv-626/Portfolio.git',
      external: '#',
      color: '--accent-2',
    }
  ];

  return (
    <section id="work" className="projects-section container">
      <div className="section-heading">
        <motion.p 
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          03 — Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Featured projects
        </motion.h2>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <motion.article 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
          >
            <div className="card-header">
              <FiFolder className="card-folder-icon" size={24} />
              <div className="card-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
              </div>
            </div>
            <p className="card-role font-mono">{project.stream}</p>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-desc">{project.description}</p>
            <ul className="card-tech font-mono">
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
