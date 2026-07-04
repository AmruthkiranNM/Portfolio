import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

/**
 * Project card with image, description, features, tech pills, and action buttons.
 * Gracefully handles missing project images with a fallback.
 */
export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.article
      className={`project-card glass-card ${isEven ? '' : 'project-card--reversed'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      {/* Image / Visual */}
      <div className="project-card__visual">
        {!imgError && project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            onError={() => setImgError(true)}
            className="project-card__image"
          />
        ) : (
          <div className="project-card__placeholder" style={{ flexDirection: 'column', gap: '1rem' }}>
            <div className="project-card__placeholder-text" style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
              Place your image at<br/>
              public{project.image}
            </div>
          </div>
        )}
        {project.featured && (
          <span className="project-card__badge">Featured</span>
        )}
      </div>

      {/* Content */}
      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__number">
            Project {String(project.id).padStart(2, '0')}
          </span>
          {project.duration && (
            <span className="project-card__duration">{project.duration}</span>
          )}
        </div>

        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>

        {/* Key Features */}
        <div className="project-card__features">
          {project.features.slice(0, 6).map((feature) => (
            <span key={feature} className="project-card__feature">
              {feature}
            </span>
          ))}
          {project.features.length > 6 && (
            <span className="project-card__feature project-card__feature--more">
              +{project.features.length - 6} more
            </span>
          )}
        </div>

        {/* Tech stack */}
        <div className="project-card__tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-card__actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <FiGithub size={16} />
              Source Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label={`View ${project.name} live demo`}
            >
              <ExternalLink size={16} />
              Live Demo
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
