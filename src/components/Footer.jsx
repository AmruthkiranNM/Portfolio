import { ArrowUp } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { personalInfo } from '../data/portfolioData';

/**
 * Minimal professional footer with credits, social links, and back-to-top button.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <p className="footer__credit">
            Designed & Built by{' '}
            <span className="accent-text">{personalInfo.name}</span>
          </p>
          <p className="footer__year">© {currentYear} All rights reserved.</p>
        </div>

        <SocialLinks size={18} className="footer__socials" />

        <button
          className="footer__top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
