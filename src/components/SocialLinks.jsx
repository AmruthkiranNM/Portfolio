import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

/**
 * Reusable social links component used in Hero, Contact, and Footer.
 */
export default function SocialLinks({ size = 20, className = '' }) {
  const links = [
    {
      icon: <FiGithub size={size} />,
      href: personalInfo.github,
      label: 'GitHub Profile',
    },
    {
      icon: <FiLinkedin size={size} />,
      href: personalInfo.linkedin,
      label: 'LinkedIn Profile',
    },
    {
      icon: <FiMail size={size} />,
      href: `mailto:${personalInfo.email}`,
      label: 'Send Email',
    },
  ];

  return (
    <div className={`social-links ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('mailto') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="social-links__item"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
