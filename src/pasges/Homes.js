import '../styles/Home.css';
import myPhoto from '../assets/my-photo.jpg';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function Home() {
  const fullName = "👋 Tôi là Võ Sỹ Hiếu";
  const roles = [
    "Frontend Developer",
    "React Enthusiast",
    "UI/UX Lover"
  ];

  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect for name
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index));
      index++;
      if (index > fullName.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Typing and deleting effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && charIndex <= currentRole.length) {
      setTypedRole(currentRole.slice(0, charIndex));
      timer = setTimeout(() => setCharIndex(charIndex + 1), 100);
    } else if (isDeleting && charIndex >= 0) {
      setTypedRole(currentRole.slice(0, charIndex));
      timer = setTimeout(() => setCharIndex(charIndex - 1), 50);
    } else {
      if (!isDeleting) {
        timer = setTimeout(() => setIsDeleting(true), 1000);
      } else {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="home">
        <div className="hero-container">
        {/* Left side: text content */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="hero-title">
            {typedName}<span className="cursor">|</span>
          </h2>

          <p className="hero-subtitle">
            {typedRole}<span className="cursor">|</span>
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="hero-cta">🚀 See My Work</a>
            <a
              href="https://static.topcv.vn/topcv-cv-uploads/12d041d8071a4ca0b4337b425b2e5cf8.pdf"
              target="_blank"
              rel="noreferrer"
              className="cv-button"
            >
              <FaFileAlt className="cv-icon" /> View My CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/SyxHieu" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hi%E1%BA%BFu-v%C3%B5-s%E1%BB%B9-835691345/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </motion.div>

        {/* Right side: profile photo */}
        <motion.div
             className="hero-photo-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="photo-wrapper">
            <img src={myPhoto} alt="My Portrait" className="hero-photo" />
            <div className="photo-glow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;