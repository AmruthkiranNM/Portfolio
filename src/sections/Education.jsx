import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/portfolioData';

/**
 * Education section with horizontal timeline layout on desktop,
 * stacked vertical cards on mobile.
 */
export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="My educational journey."
        />

        <div className="education__timeline">
          {/* Horizontal connecting line (desktop only) */}
          <div className="education__line" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="education__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Timeline node */}
              <div className="education__node">
                <GraduationCap size={20} />
              </div>

              {/* Card */}
              <div className="education__card glass-card">
                <span className="education__duration">{edu.duration}</span>
                <h3 className="education__institution">{edu.institution}</h3>
                <p className="education__degree">{edu.degree}</p>
                <span className="education__result accent-text">
                  {edu.result}
                </span>
                {edu.current && (
                  <span className="education__current-badge">Current</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
