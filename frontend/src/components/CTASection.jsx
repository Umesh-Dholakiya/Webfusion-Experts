import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = ({
  badge = "LET'S WORK TOGETHER",
  title = "Have an Idea in Mind?",
  description = "Tell us what you are building, what you need, or what you want to improve. We can discuss the requirements and explore the right digital solution for your business.",
  primaryButtonText = "Start a Project →",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Our Work",
  secondaryButtonLink = "/portfolio"
}) => {
  return (
    <section className="section-padding position-relative" style={{ backgroundColor: '#080808' }}>
      <div className="container">
        <div className="glass-card text-center position-relative overflow-hidden mx-auto" style={{ 
          padding: '2rem 0.5rem', 
          borderRadius: '24px',
          maxWidth: '1000px',
          backgroundColor: '#0c0c0c',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}>
          {/* Background Glow */}
          <div className="orange-glow" style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: '500px', 
            height: '500px', 
            opacity: 0.4,
            zIndex: 0 
          }} />
          
          <div className="position-relative" style={{ zIndex: 1 }}>
            {badge && (
              <span style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: 'rgba(245, 124, 0, 0.08)',
                borderRadius: '30px',
                color: '#f57c00',
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.5rem'
              }}>
                {badge}
              </span>
            )}
            
            <h2 style={{ 
              fontSize: '1.7rem', 
              fontWeight: '700', 
              color: '#fff', 
              marginBottom: '1.25rem' 
            }}>
              {title}
            </h2>
            
            <p style={{ 
              color: '#cfcfcf', 
              fontSize: '0.9rem', 
              marginBottom: '2.5rem', 
              maxWidth: '650px', 
              margin: '0 auto 2.5rem',
              lineHeight: '1.7'
            }}>
              {description}
            </p>
            
            <div className="d-flex justify-content-center gap-2">
              <Link to={primaryButtonLink} className="btn-premium" style={{ padding: '12px 22px', fontSize: '0.75rem' }}>
                {primaryButtonText}
              </Link>
              <Link to={secondaryButtonLink} className="btn-outline-premium" style={{ padding: '12px 32px', fontSize: '0.85rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                {secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
