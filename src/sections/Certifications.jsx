import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, Image as ImageIcon, MapPin, Calendar, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certifications, workshops } from '../data/portfolioData';

/**
 * Certifications section displaying technical certifications and workshop participation.
 */
export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const modalRef = useRef(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };
    if (selectedCertificate) {
      document.addEventListener('keydown', handleEsc);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertificate]);

  // Handle click outside modal content
  const handleModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedCertificate(null);
    }
  };

  // Get base URL for public assets if deployed under a subdirectory
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  const getAssetUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    // Strip leading slash from path to prevent double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${baseUrl}${cleanPath}`;
  };

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <SectionHeading
          label="Certifications & Workshops"
          title="Licenses & Certifications"
          description="Additional qualifications, continuous learning, and structured workshops."
        />

        {/* --- TECHNICAL CERTIFICATIONS --- */}
        <div className="certifications-group">
          <h3 className="certifications-group__title">Technical Certifications</h3>
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

        {/* --- WORKSHOPS --- */}
        {workshops && workshops.length > 0 && (
          <div className="certifications-group mt-xl">
            <h3 className="certifications-group__title">Workshops</h3>
            <div className="workshops__grid">
              {workshops.map((workshop, i) => (
                <motion.div
                  key={workshop.id || i}
                  className="workshop-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="workshop-card__content">
                    <span className="workshop-card__badge">{workshop.type}</span>
                    <h3 className="workshop-card__title">{workshop.title}</h3>
                    
                    <div className="workshop-card__details">
                      <div className="workshop-card__detail">
                        <MapPin size={16} className="accent-text" />
                        <span>{workshop.issuer}</span>
                      </div>
                      <div className="workshop-card__detail">
                        <Calendar size={16} className="accent-text" />
                        <span>{workshop.duration} • {workshop.date}</span>
                      </div>
                      <div className="workshop-card__detail">
                        <Users size={16} className="accent-text" />
                        <span>Organized by {workshop.organizer} in association with {workshop.association}</span>
                      </div>
                    </div>
                    
                    <p className="workshop-card__desc">{workshop.description}</p>
                    
                    {workshop.certificateUrl ? (
                      <a 
                        href={workshop.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="workshop-card__btn"
                        aria-label="View Workshop Certificate Externally"
                      >
                        <ExternalLink size={18} />
                        View Certificate
                      </a>
                    ) : workshop.certificateImage ? (
                      <button 
                        onClick={() => setSelectedCertificate(getAssetUrl(workshop.certificateImage))}
                        className="workshop-card__btn"
                        aria-label="View Workshop Certificate"
                      >
                        <ImageIcon size={18} />
                        View Certificate
                      </button>
                    ) : (
                      <button 
                        disabled
                        className="workshop-card__btn workshop-card__btn--disabled"
                        aria-disabled="true"
                      >
                        Certificate Unavailable
                      </button>
                    )}
                  </div>
                  
                  {/* Optional preview on the right for wide layout */}
                  {workshop.certificateImage && (
                    <div 
                      className="workshop-card__preview"
                      onClick={() => {
                        if (workshop.certificateUrl) {
                          window.open(workshop.certificateUrl, '_blank', 'noopener,noreferrer');
                        } else {
                          setSelectedCertificate(getAssetUrl(workshop.certificateImage));
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label="Preview Workshop Certificate"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          if (workshop.certificateUrl) {
                            window.open(workshop.certificateUrl, '_blank', 'noopener,noreferrer');
                          } else {
                            setSelectedCertificate(getAssetUrl(workshop.certificateImage));
                          }
                        }
                      }}
                    >
                      <div className="workshop-card__preview-overlay">
                        {workshop.certificateUrl ? <ExternalLink size={32} /> : <ImageIcon size={32} />}
                        <span>Click to View</span>
                      </div>
                      <img 
                        src={getAssetUrl(workshop.certificateImage)} 
                        alt={`Certificate preview for ${workshop.title}`}
                        className="workshop-card__preview-img"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('workshop-card__preview--error');
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* --- CERTIFICATE MODAL --- */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClick}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate View"
          >
            <motion.div
              className="certificate-modal-content"
              ref={modalRef}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button 
                className="certificate-modal-close"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate modal"
              >
                <X size={24} />
              </button>
              
              <img 
                src={selectedCertificate} 
                alt="Full certificate view"
                className="certificate-modal-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('certificate-modal-content--error');
                }}
              />
              <div className="certificate-modal-error-msg">
                Certificate image could not be loaded.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
