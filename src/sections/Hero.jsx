import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, MapPin } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import { personalInfo, roles } from '../data/portfolioData';

/**
 * Hero section with animated role typewriter, CTAs, social links,
 * and a developer-themed visual element.
 */
export default function Hero() {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    const typeSpeed = isDeleting ? 30 : 60;
    const pauseTime = isDeleting ? 200 : 1800;

    if (!isDeleting && charIndex === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, typeSpeed);
    }

    setCurrentRole(current.substring(0, charIndex));

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero section">
      <div className="container hero__container">
        {/* Left Content */}
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__status" variants={itemVariants}>
            <span className="status-dot" />
            <span>{personalInfo.status}</span>
          </motion.div>

          <motion.p className="hero__greeting" variants={itemVariants}>
            {personalInfo.greeting}
          </motion.p>

          <motion.h1 className="hero__name" variants={itemVariants}>
            {personalInfo.name}
          </motion.h1>

          <motion.div className="hero__role-wrapper" variants={itemVariants}>
            <span className="hero__role" aria-live="polite">
              {currentRole}
              <span className="typewriter-cursor" aria-hidden="true" />
            </span>
          </motion.div>

          <motion.p className="hero__intro" variants={itemVariants}>
            {personalInfo.introText}
          </motion.p>

          <motion.div className="hero__cta" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              <ArrowDown size={16} />
              View My Work
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div className="hero__footer" variants={itemVariants}>
            <SocialLinks size={20} />
            <div className="hero__location">
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual — Developer-themed card */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="hero__terminal">
            <div className="hero__terminal-bar">
              <span className="hero__terminal-dot hero__terminal-dot--red" />
              <span className="hero__terminal-dot hero__terminal-dot--yellow" />
              <span className="hero__terminal-dot hero__terminal-dot--green" />
              <span className="hero__terminal-title">portfolio.jsx</span>
            </div>
            <div className="hero__terminal-body">
              <code>
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">developer</span> = {'{\n'}
                {'  '}<span className="code-key">name</span>:{' '}
                <span className="code-string">"{personalInfo.firstName}"</span>,{'\n'}
                {'  '}<span className="code-key">stack</span>:{' '}
                <span className="code-string">"MERN"</span>,{'\n'}
                {'  '}<span className="code-key">focus</span>: [
                {'\n'}
                {'    '}<span className="code-string">"Full Stack"</span>,{'\n'}
                {'    '}<span className="code-string">"AI & Analytics"</span>,{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="code-key">passion</span>:{' '}
                <span className="code-string">"Building Impact"</span>{'\n'}
                {'}'};
              </code>
            </div>
            {/* Floating tech labels */}
            <div className="hero__float-tags">
              {['React', 'Node.js', 'Python', 'MongoDB', 'Docker'].map(
                (tag, i) => (
                  <span
                    key={tag}
                    className="hero__float-tag animate-float"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
