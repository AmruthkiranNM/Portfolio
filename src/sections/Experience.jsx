import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolioData';

/**
 * Experience section with timeline-style professional experience cards.
 */
export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <SectionHeading
          label="Experience"
          title="Professional Experience"
          description="Real-world software development work."
        />

        <div className="experience__timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="experience__card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="experience__dot" />

              {/* Header */}
              <div className="experience__header">
                <div className="experience__title-row">
                  <Briefcase size={20} className="accent-text" />
                  <h3 className="experience__role">{exp.role}</h3>
                </div>
                <h4 className="experience__org">{exp.organization}</h4>
                <div className="experience__meta">
                  <span className="experience__meta-item">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                  <span className="experience__meta-item">
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="experience__description">
                {exp.description.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>

              {/* Tech stack */}
              <div className="experience__tech">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Feature Highlights */}
              <div className="experience__highlights">
                {exp.highlights.map((highlight) => (
                  <span key={highlight} className="experience__highlight">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
