import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    { 
      title: "HCL GUVI Certification", 
      issuer: "GUVI & HCL", 
      date: "2024",
      file: "/Certificates/HCL_GUVI_Certification.png"
    },
    { 
      title: "ICT Academy Certification", 
      issuer: "ICT Academy", 
      date: "2024",
      file: "/Certificates/ICT_Academy.pdf"
    },
    { 
      title: "Foundation Course on IR 4.0 Technologies", 
      issuer: "Naan Mudhalvan / TNSDC", 
      date: "2023",
      file: "/Certificates/Foundation_Course_IR40_Technologies.pdf"
    },
    { 
      title: "Tamil AI Hackathon Certification", 
      issuer: "Tamil AI", 
      date: "2024",
      file: "/Certificates/Tamil_AI_Hackathon.pdf"
    },
    { 
      title: "UI/UX Design Certification", 
      issuer: "Udemy", 
      date: "2023",
      file: "/Certificates/UIUX_Certification_Udemy.png"
    },
    { 
      title: "Digital Skills: User Experience", 
      issuer: "Accenture & FutureLearn", 
      date: "2023",
      file: "/Certificates/Accenture_User_Experience.pdf"
    },
    { 
      title: "Figma Design Tool Certification", 
      issuer: "Udemy", 
      date: "2023",
      file: "/Certificates/Figma_Design_Tool.pdf"
    },
    { 
      title: "Novitech Certification", 
      issuer: "Novitech R&D", 
      date: "2023",
      file: "/Certificates/Novitech_Certification.pdf"
    },
    { 
      title: "UX Rescue Showdown (ASTHRA 2K25)", 
      issuer: "Meenakshi Sundararajan Eng College", 
      date: "2025",
      file: "/Certificates/Meenakshi_Sundararajan_College.jpg"
    },
    { 
      title: "Intermediate Typing Certification", 
      issuer: "typing.com", 
      date: "2024",
      file: "/Certificates/Type_Intermediate.pdf"
    },
    { 
      title: "UI / UX for Beginners", 
      issuer: "Great Learning Academy", 
      date: "2024",
      file: "/Certificates/Great_Learning.pdf"
    }
  ];

  const duplicatedCerts = [...certs, ...certs, ...certs];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-heading">
          <motion.p 
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            04 — Certifications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Credentials & learning
          </motion.h2>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {duplicatedCerts.map((cert, index) => (
            <a 
              key={index} 
              href={cert.file} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cert-card"
            >
              <div className="cert-icon-wrap">
                <Award size={20} />
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer font-mono">{cert.issuer}</p>
              </div>
              <span className="cert-date font-mono">{cert.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
