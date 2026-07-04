import { motion } from 'framer-motion';
import { Users, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { leadership } from '../data/portfolioData';

/**
 * Leadership section highlighting organizational roles and community engagement.
 */
export default function Leadership() {
  return (
    <section id="leadership" className="leadership section">
      <div className="container">
        <SectionHeading
          label="Leadership"
          title="Community & Leadership"
          description="My involvement in student organizations and community initiatives."
        />

        <motion.div
          className="leadership__card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="leadership__header">
            <div className="leadership__icon-wrapper">
              <Users size={24} className="accent-text" />
            </div>
            <div>
              <h3 className="leadership__role">{leadership.role}</h3>
              <h4 className="leadership__org">{leadership.organization}</h4>
              <span className="leadership__duration">{leadership.duration}</span>
            </div>
          </div>

          <div className="leadership__content">
            <div className="leadership__description">
              {leadership.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="leadership__highlights">
              <h5 className="leadership__highlights-title">Key Areas:</h5>
              <ul className="leadership__list">
                {leadership.highlights.map((item, i) => (
                  <li key={i} className="leadership__list-item">
                    <CheckCircle size={16} className="accent-text" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
