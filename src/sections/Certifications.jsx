import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolioData';

/**
 * Certifications section displaying a grid of achievement cards.
 */
export default function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <SectionHeading
          label="Certifications"
          title="Licenses & Certifications"
          description="Additional qualifications and continuous learning."
        />

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="certification-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="certification-card__icon">
                <Award size={24} className="accent-text" />
              </div>
              
              <div className="certification-card__content">
                <h3 className="certification-card__title">{cert.title}</h3>
                <div className="certification-card__issuer">
                  <span className="certification-card__platform">{cert.platform}</span>
                  {cert.institution && (
                    <>
                      <span className="certification-card__separator">•</span>
                      <span className="certification-card__institution">
                        {cert.institution}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-card__link"
                  aria-label={`View credential for ${cert.title}`}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
