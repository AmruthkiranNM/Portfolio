import { motion } from 'framer-motion';

/**
 * Reusable section heading component with label, title, and optional description.
 * Includes scroll-reveal animation via Framer Motion.
 */
export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {label && <span className="section-heading__label">{label}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && (
        <p className="section-heading__desc">{description}</p>
      )}
    </motion.div>
  );
}
