import { motion } from 'framer-motion';
import { Trophy, Award, ArrowUpRight, ExternalLink } from 'lucide-react';
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

        <div className="achievements__list">
          {/* Achievement 1: Primary (LINKOPS) */}
          <motion.div
            className="achievement-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            {/* LEFT VISUAL PANEL */}
            <div className="achievement-item__visual achievement-item__visual--primary">
              <div className="achievement-item__highlight-wrapper">
                <span className="achievement-item__highlight">{achievements[0].highlight}</span>
                <span className="achievement-item__highlight-label">PRIZE</span>
              </div>
              <div className="achievement-item__icon">
                <Trophy size={28} className="accent-text" />
              </div>
              <div className="achievement-item__glow"></div>
            </div>

            {/* RIGHT CONTENT PANEL */}
            <div className="achievement-item__content">
              <span className="tag">{achievements[0].category}</span>
              
              <h3 className="achievement-item__title">{achievements[0].title}</h3>
              <p className="achievement-item__event">{achievements[0].event}</p>
              <p className="achievement-item__institution">{achievements[0].organization}</p>
              
              <div className="achievement-item__project">
                <span className="achievement-item__project-label">Awarded Project:</span>
                <span className="achievement-item__project-name">{achievements[0].project}</span>
              </div>
              
              <p className="achievement-item__description">
                {achievements[0].description}
              </p>

              <div className="achievement-item__actions">
                <button 
                  onClick={(e) => scrollToProject(e, 'project-linkops')}
                  className="btn btn-secondary achievement-item__action"
                >
                  View LINKOPS Project <ArrowUpRight size={16} />
                </button>
                {achievements[0].certificateUrl && (
                  <a 
                    href={achievements[0].certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary achievement-item__action"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Achievement 2: Secondary (VEXSTORM) */}
          <motion.div
            className="achievement-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* LEFT VISUAL PANEL */}
            <div className="achievement-item__visual achievement-item__visual--secondary">
              <div className="achievement-item__highlight-wrapper">
                <span className="achievement-item__highlight-label">PHASE</span>
                <span className="achievement-item__highlight">{achievements[1].highlight.split(' ')[1]}</span>
              </div>
              <div className="achievement-item__icon">
                <Award size={28} className="accent-text" />
              </div>
            </div>

            {/* RIGHT CONTENT PANEL */}
            <div className="achievement-item__content">
              <span className="tag">{achievements[1].category}</span>
              
              <h3 className="achievement-item__title">{achievements[1].title}</h3>
              <p className="achievement-item__event">{achievements[1].event}</p>
              
              <p className="achievement-item__description">
                {achievements[1].description}
              </p>

              {achievements[1].certificateUrl && (
                <div className="achievement-item__actions">
                  <a 
                    href={achievements[1].certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary achievement-item__action"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
