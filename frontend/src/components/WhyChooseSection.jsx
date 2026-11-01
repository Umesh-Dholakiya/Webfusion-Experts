import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaCode, FaMobileAlt, FaPaintBrush, FaTachometerAlt, FaSearch, FaHeadset } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const reasons = [
  {
    id: 1,
    title: 'Modern Development',
    description: 'We build modern digital solutions using current web technologies and development practices.',
    icon: FaCode
  },
  {
    id: 2,
    title: 'Responsive by Design',
    description: 'We create responsive experiences that work smoothly across desktop, tablet, and mobile devices.',
    icon: FaMobileAlt
  },
  {
    id: 3,
    title: 'User-Focused Design',
    description: 'We focus on clean interfaces and simple user experiences that are easy to understand and use.',
    icon: FaPaintBrush
  },
  {
    id: 4,
    title: 'Performance Focused',
    description: 'We pay attention to website performance, structure, and a smooth browsing experience.',
    icon: FaTachometerAlt
  },
  {
    id: 5,
    title: 'SEO-Ready Structure',
    description: 'We follow SEO-friendly website structure and best practices to help your content stay search-engine ready.',
    icon: FaSearch
  },
  {
    id: 6,
    title: 'Ongoing Support',
    description: 'We provide support after delivery to help with updates, improvements, and project-related assistance.',
    icon: FaHeadset
  }
];

const WhyChooseUs = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#0b0b0b' }}
    >
      <style>{`
        .why-card {
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem 1rem;
          height: 100%;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .why-card:hover {
          transform: translateY(-4px);
          border-color: rgba(245, 124, 0, 0.5);
          box-shadow: 0 10px 30px rgba(245, 124, 0, 0.1);
          background: #141414;
        }
        .why-icon-container {
          width: 64px;
          height: 64px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(245, 124, 0, 0.15), rgba(245, 124, 0, 0.05));
          border: 1px solid rgba(245, 124, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .why-icon {
          color: #f57c00;
          font-size: 26px;
          transition: transform 0.3s ease;
        }
        .why-card:hover .why-icon {
          transform: scale(1.05);
        }
        .why-bg-number {
          position: absolute;
          top: 10px;
          right: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 4rem;
          color: rgba(245, 124, 0, 0.04);
          line-height: 1;
          pointer-events: none;
          transition: color 0.3s ease;
        }
        .why-card:hover .why-bg-number {
          color: rgba(245, 124, 0, 0.08);
        }
      `}</style>

      {/* Background Glow */}
      <div
        className="position-absolute"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(245, 124, 0, 0.05) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <SectionHeader
          label="WHY US"
          title="Why Choose <span>WebFusion Experts</span>"
          subtitle="We focus on building modern, responsive, and user-friendly digital solutions tailored to your business needs."
        />

        {/* Reasons Grid */}
        <div className="row g-4 mt-4">
          {reasons.map((reason, i) => {
            const IconComponent = reason.icon;
            const numberString = reason.id < 10 ? `0${reason.id}` : reason.id;
            
            return (
              <motion.div
                key={reason.id}
                className="col-lg-6 col-md-6 col-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="why-card">
                  {/* Background Number */}
                  <div className="why-bg-number">
                    {numberString}
                  </div>

                  <div className="d-flex align-items-start gap-4 position-relative" style={{ zIndex: 2 }}>
                    {/* Icon */}
                    <div className="why-icon-container">
                      <IconComponent className="why-icon" />
                    </div>

                    <div>
                      <h4
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: '1.2rem',
                          color: '#fff',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {reason.title}
                      </h4>
                      <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
