import { motion } from 'framer-motion';
import { Code2, Globe, Database, Wrench, Users } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  Database: Database,
  Wrench: Wrench,
  Users: Users,
};

/**
 * Skill category card displaying a title, icon, and skill pills.
 */
export default function SkillCard({ category, icon, items, index }) {
  const IconComponent = iconMap[icon] || Code2;

  return (
    <motion.div
      className="skill-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className="skill-card__header">
        <div className="skill-card__icon">
          <IconComponent size={22} />
        </div>
        <h3 className="skill-card__title">{category}</h3>
      </div>
      <div className="skill-card__pills">
        {items.map((skill) => (
          <span key={skill} className="tag">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
