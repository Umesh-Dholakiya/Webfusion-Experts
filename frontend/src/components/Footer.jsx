import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram, 
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile Apps', path: '/services' },
    { name: 'Custom CRM Systems', path: '/services' },
    { name: 'Website Redesign', path: '/services' }
  ];

  const technologies = [
    { name: 'React & Next.js', path: '/technologies' },
    { name: 'Flutter & Mobile', path: '/technologies' },
    { name: 'Node.js & Express', path: '/technologies' },
  ];

  const industries = [
    { name: 'Healthcare & Wellness', path: '/portfolio' },
    { name: 'E-Commerce & Retail', path: '/portfolio' },
    { name: 'Real Estate & Hospitality', path: '/portfolio' },
    { name: 'Finance & FinTech', path: '/portfolio' },
    { name: 'SaaS & Startups', path: '/portfolio' },
    { name: 'Manufacturing', path: '/portfolio' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/webfusion-experts-4831b13b0/' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/WFXExperts' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/webfusion_experts' }
  ];

  return (
    <footer 
      style={{
        backgroundColor: '#0b0b0b',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '75px',
        paddingBottom: '30px',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Warm Amber Ambient Top Glow matching the site theme */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: '250px',
          background: 'radial-gradient(ellipse at top, rgba(245, 124, 0, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <style>{`
        .footer-heading {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1.6px;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 20px;
          font-family: 'Space Grotesk', sans-serif;
        }

        .footer-link-item {
          color: #888888;
          font-size: 0.92rem;
          text-decoration: none;
          transition: all 0.25s ease;
          display: inline-block;
          line-height: 1.5;
        }

        .footer-link-item:hover {
          color: #f57c00;
          transform: translateX(3px);
        }

        .footer-contact-item {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #cfcfcf;
          font-size: 0.92rem;
          text-decoration: none;
          transition: all 0.25s ease;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
        }

        .footer-contact-item:hover {
          color: #f57c00;
          background: rgba(245, 124, 0, 0.08);
          border-color: rgba(245, 124, 0, 0.3);
          transform: translateY(-2px);
        }

        .footer-contact-icon {
          color: #f57c00;
          font-size: 15px;
          flex-shrink: 0;
        }

        .social-square-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #141414;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888888;
          font-size: 15px;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .social-square-btn:hover {
          background: rgba(245, 124, 0, 0.1);
          border-color: #f57c00;
          color: #f57c00;
          transform: translateY(-2px);
        }

        .legal-link {
          color: #888888;
          font-size: 0.88rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-link:hover {
          color: #f57c00;
        }

        .footer-hr {
          border-color: rgba(255, 255, 255, 0.06);
          margin: 32px 0 38px 0;
        }
      `}</style>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* TOP ROW: Brand Info & Contact Details (2 Columns) */}
        <div className="row g-4 align-items-center justify-content-between pb-4">
          {/* Part 1: Brand Logo & Tagline */}
          <div className="col-lg-6 col-md-6">
            <Link to="/" className="d-inline-block mb-3 text-decoration-none">
              <img 
                src="/header_logo_1.png" 
                alt="WebFusion Experts" 
                style={{ height: '42px', width: 'auto' }}
              />
            </Link>

            <div>
              <p style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>
                Your Vision, Our Code.
              </p>
              <p style={{ color: '#888888', fontSize: '0.9rem', margin: '4px 0 0 0' }}>
                Crafting Your Digital Success.
              </p>
            </div>
          </div>

          {/* Part 2: Contact Details */}
          <div className="col-lg-6 col-md-6">
            <div className="d-flex flex-column gap-2 align-items-start align-items-md-end">
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>Surat, Gujarat, India</span>
              </div>
              <a href="mailto:webfusionexperts24@gmail.com" className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" />
                <span>webfusionexperts24@gmail.com</span>
              </a>
              <a href="tel:+918849522577" className="footer-contact-item">
                <FaPhoneAlt className="footer-contact-icon" />
                <span>+91 8849522577</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider 1 */}
        <hr className="footer-hr" />

        {/* MIDDLE ROW: 4 Column Navigation Links */}
        <div className="row g-4 pb-2">
          {/* Services */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-heading">SERVICES</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="footer-link-item">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-heading">TECHNOLOGIES</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {technologies.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="footer-link-item">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-heading">INDUSTRIES</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {industries.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="footer-link-item">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-heading">COMPANY</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="footer-link-item">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider 2 */}
        <hr className="footer-hr" style={{ marginTop: '30px', marginBottom: '25px' }} />

        {/* BOTTOM ROW: Copyright, Social Icons, Legal Links */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 pt-1">
          {/* Copyright */}
          <p style={{ color: '#777777', fontSize: '0.86rem', margin: 0, order: 1 }}>
            &copy; {new Date().getFullYear()} WebFusion Experts. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="d-flex gap-2" style={{ order: 2 }}>
            {socialLinks.map((social, idx) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-square-btn"
                  aria-label={social.name}
                >
                  <SocialIcon />
                </a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="d-flex gap-4" style={{ order: 3 }}>
            <Link to="/privacy-policy" className="legal-link">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'fixed',
            bottom: '95px',
            right: '35px',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f57c00, #ff9800)',
            border: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 998,
            boxShadow: '0 4px 20px rgba(245, 124, 0, 0.4)'
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
