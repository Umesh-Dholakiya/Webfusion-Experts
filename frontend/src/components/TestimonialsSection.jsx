import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaCommentDots, FaBullseye, FaChartLine } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import clientExperienceBg from '../assets/client-experience-bg.jpg';

const features = [
  {
    id: 1,
    title: 'Clear Communication',
    description: 'We keep project requirements, progress, and feedback clear throughout the development process.',
    icon: FaCommentDots,
    number: '01'
  },
  {
    id: 2,
    title: 'Requirement-Focused',
    description: 'We build solutions around your business needs rather than using a one-size-fits-all approach.',
    icon: FaBullseye,
    number: '02'
  },
  {
    id: 3,
    title: 'Long-Term Thinking',
    description: 'We aim to create digital solutions that are easy to maintain, improve, and grow with your business.',
    icon: FaChartLine,
    number: '03'
  }
];

const TestimonialsSection = ({ hideHeader = false }) => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="position-relative overflow-hidden"
      style={{
        padding: '65px 0',
        backgroundImage: `url(${clientExperienceBg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      id="client-experience"
    >
      <style>{`
        .client-card {
          background: rgba(14, 14, 14, 0.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 2px solid rgba(245, 124, 0, 0.45);
          border-radius: 18px;
          padding: 1.6rem 1.4rem;
          height: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
        }
        .client-card:hover {
          transform: translateY(-4px);
          background: rgba(20, 20, 20, 0.9);
          border-color: rgba(245, 124, 0, 0.5);
          box-shadow: 0 16px 36px rgba(245, 124, 0, 0.14);
        }
        .client-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(245, 124, 0, 0.2), rgba(245, 124, 0, 0.05));
          border: 1px solid rgba(245, 124, 0, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.1rem;
          box-shadow: 0 0 15px rgba(245, 124, 0, 0.12);
        }
        .client-icon {
          color: #f57c00;
          font-size: 19px;
        }
        .client-bg-number {
          position: absolute;
          top: 14px;
          right: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 2.2rem;
          color: rgba(245, 124, 0, 0.08);
          line-height: 1;
          pointer-events: none;
        }
        .commitment-banner {
          background: rgba(16, 16, 16, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(245, 124, 0, 0.28);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          max-width: 820px;
          margin: 0 auto;
          border-radius: 50px;
          padding: 8px 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          transition: all 0.3s ease;
        }
        .commitment-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #f57c00;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          white-space: nowrap;
          background: rgba(245, 124, 0, 0.1);
          border: 1px solid rgba(245, 124, 0, 0.28);
          padding: 3px 10px;
          border-radius: 20px;
          flex-shrink: 0;
        }
        .commitment-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f57c00;
          box-shadow: 0 0 6px #f57c00;
        }
        .commitment-text {
          color: #d0d0d0;
          font-size: 0.88rem;
          line-height: 1.5;
          margin: 0;
        }
        @media (max-width: 768px) {
          .client-card {
            padding: 1.4rem 1.2rem;
          }
          .commitment-banner {
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            padding: 16px 14px;
            gap: 10px;
            width: 100%;
            max-width: 100%;
            text-align: center;
          }
          .commitment-text {
            font-size: 0.85rem;
            line-height: 1.55;
            color: #d6d6d6;
          }
        }
      `}</style>

      {/* Seamless Smooth Dark Gradient Overlay (blends softly into previous and next sections) */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background: 'linear-gradient(to bottom, #0b0b0b 0%, rgba(10, 10, 10, 0.84) 18%, rgba(10, 10, 10, 0.75) 50%, rgba(10, 10, 10, 0.84) 82%, #0b0b0b 100%)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          zIndex: 1
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        {!hideHeader && (
          <div className="mb-4 text-center">
            <div 
              className="d-inline-block px-3 py-1 mb-2 rounded-pill" 
              style={{
                background: 'rgba(245, 124, 0, 0.1)',
                border: '1px solid rgba(245, 124, 0, 0.25)',
                color: '#f57c00',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '1.4px',
                textTransform: 'uppercase'
              }}
            >
              CLIENT EXPERIENCE
            </div>
            <h2 
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '10px'
              }}
            >
              Built Around Your <span style={{ color: '#f57c00' }}>Needs</span>
            </h2>
            <p 
              style={{
                color: '#b0b0b0',
                maxWidth: '580px',
                margin: '0 auto',
                fontSize: '0.96rem',
                lineHeight: '1.6'
              }}
            >
              We focus on understanding your requirements and building digital solutions that are clear, responsive, and aligned with your goals.
            </p>
          </div>
        )}

        {/* Features Compact Cards Grid */}
        <div className="row g-3 justify-content-center">
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className="col-lg-4 col-md-6 col-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <div className="client-card">
                  <div className="client-bg-number">{feature.number}</div>
                  <div className="client-icon-wrapper">
                    <IconComponent className="client-icon" />
                  </div>
                  <h4 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '1.15rem',
                    color: '#fff',
                    marginBottom: '0.5rem'
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{ color: '#bfbfbf', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Commitment Banner (Compact, Sleek & Fully Responsive) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-4 text-center px-2 px-md-0"
        >
          <div className="commitment-banner">
            <span className="commitment-tag">
              <span className="commitment-dot" />
              OUR COMMITMENT
            </span>
            <p className="commitment-text">
              We value clear communication, strong execution, and long-term relationships over unnecessary promises.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
