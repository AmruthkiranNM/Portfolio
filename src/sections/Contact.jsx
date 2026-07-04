import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, CheckCircle, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';
import { contactInfo, personalInfo } from '../data/portfolioData';

/**
 * Contact section with contact details, copy email interaction, and a frontend-only form.
 */
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only mock submission
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionHeading
          label="Contact"
          title={contactInfo.heading}
          description={contactInfo.description}
        />

        <div className="contact__grid">
          {/* Left: Contact Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact__card glass-card">
              <div className="contact__detail">
                <div className="contact__icon-wrapper">
                  <Mail size={20} className="accent-text" />
                </div>
                <div className="contact__detail-text">
                  <span className="contact__detail-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact__detail-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  className="contact__copy-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copied ? <CheckCircle size={16} className="text-success" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="contact__detail">
                <div className="contact__icon-wrapper">
                  <Phone size={20} className="accent-text" />
                </div>
                <div className="contact__detail-text">
                  <span className="contact__detail-label">Phone</span>
                  <a href={`tel:${personalInfo.phone}`} className="contact__detail-value">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__icon-wrapper">
                  <MapPin size={20} className="accent-text" />
                </div>
                <div className="contact__detail-text">
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">{personalInfo.location}</span>
                </div>
              </div>

              <div className="contact__socials-wrapper">
                <span className="contact__socials-label">Connect with me</span>
                <SocialLinks size={22} className="contact__socials" />
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="contact__form-wrapper glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Hello" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required placeholder="Your message here..."></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={formStatus !== 'idle'}
              >
                {formStatus === 'submitting' ? (
                  <span className="animate-spin">⏳</span>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle size={18} />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
