import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { aboutMe } from '../data/portfolioData';

const iconMap = {
  Degree: GraduationCap,
  CGPA: Award,
  Location: MapPin,
  Graduation: Calendar,
};

/**
 * About Me section with bio text, quick info cards, and statistics row.
 */
export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          description="A snapshot of my background and what drives me."
        />

        <div className="about__grid">
          {/* Left — Bio text */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            {aboutMe.paragraphs.map((p, i) => (
              <p key={i} className="about__paragraph">
                {p}
              </p>
            ))}
          </motion.div>

          {/* Right — Quick Info Cards */}
          <motion.div
            className="about__info-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {aboutMe.quickInfo.map((info, i) => {
              const Icon = iconMap[info.label] || Award;
              return (
                <div key={i} className="about__info-card glass-card">
                  <Icon size={20} className="accent-text" />
                  <div>
                    <span className="about__info-label">{info.label}</span>
                    <span className="about__info-value">{info.value}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="about__stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {aboutMe.stats.map((stat, i) => (
            <div key={i} className="about__stat">
              <span className="about__stat-value accent-gradient-text">
                {stat.value}
              </span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
