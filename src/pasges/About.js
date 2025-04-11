import React from 'react';
import '../styles/About.css';
import myPhoto from '../assets/my-photo.jpg';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const skills = [
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
      <motion.img
          src={myPhoto}
          alt="My Portrait"
          className="hero-photo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <h1>Võ Sỹ Hiếu</h1>
        <h2>Front-End Developer</h2>
        <p>
          Tôi là một lập trình viên front-end yêu thích việc xây dựng giao diện hiện đại, trực quan và hiệu quả. Tôi
          chuyên về React, CSS, và tối ưu hóa trải nghiệm người dùng.
        </p>
      </div>

      <h3 className="skills-title">Kỹ năng</h3>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
