import { motion } from 'framer-motion';
import { Trophy, Award, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  const scrollToProject = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <SectionHeading
          label="ACHIEVEMENTS"
          title="Recognition & Milestones"
          description="Recognition earned through project development, problem-solving, and technical innovation."
        />

        <div className="achievements__grid">
          {/* Achievement 1: Primary (LINKOPS) */}
          <motion.div
            className="achievements__card achievements__card--primary glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="achievements__content">
              <div className="achievements__header">
                <span className="tag">{achievements[0].category}</span>
                <Trophy size={20} className="accent-text" />
              </div>
              
              <div className="achievements__highlight-wrapper">
                <span className="achievements__highlight">{achievements[0].highlight}</span>
                <span className="achievements__highlight-label">PRIZE</span>
              </div>

              <h3 className="achievements__title">{achievements[0].title}</h3>
              <p className="achievements__event">
                {achievements[0].event} <br/> 
                <span className="text-muted">{achievements[0].organization}</span>
              </p>
              
              <p className="achievements__description">
                {achievements[0].description}
              </p>

              <button 
                onClick={(e) => scrollToProject(e, 'project-linkops')}
                className="btn btn-secondary achievements__action"
              >
                View LINKOPS Project <ArrowUpRight size={16} />
              </button>
            </div>
            {/* Background glow decoration */}
            <div className="achievements__glow"></div>
          </motion.div>

          {/* Achievement 2: Secondary (VEXSTORM) */}
          <motion.div
            className="achievements__card achievements__card--secondary glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="achievements__content">
              <div className="achievements__header">
                <span className="tag">{achievements[1].category}</span>
                <Award size={20} className="accent-text" />
              </div>

              <div className="achievements__highlight-wrapper achievements__highlight-wrapper--secondary">
                <span className="achievements__highlight-label">PHASE</span>
                <span className="achievements__highlight">{achievements[1].highlight.split(' ')[1]}</span>
              </div>

              <h3 className="achievements__title">{achievements[1].title}</h3>
              <p className="achievements__event">{achievements[1].event}</p>
              
              <p className="achievements__description">
                {achievements[1].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
