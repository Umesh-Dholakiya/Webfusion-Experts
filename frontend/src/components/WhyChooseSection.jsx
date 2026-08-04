import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaBolt, FaCode, FaMobileAlt, FaSearch, FaPaintBrush, FaHeadset } from 'react-icons/fa';
import SectionHeader from './SectionHeader';


const WhyChooseUs = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const reasons = [
    {
      icon: FaBolt,
      title: 'Fast Delivery',
      desc: 'Efficient development processes that ensure timely project delivery while maintaining quality and attention to detail.'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      desc: 'Maintainable and scalable code built with modern technologies and industry best practices.'
    },
    {
      icon: FaMobileAlt,
      title: 'Responsive Design',
      desc: 'Pixel-perfect layouts optimized for mobile, tablet, and desktop devices to ensure a seamless experience.'
    },
    {
      icon: FaSearch,
      title: 'SEO Friendly',
      desc: 'Structured and optimized websites designed to improve visibility and help businesses grow online.'
    },
    {
      icon: FaPaintBrush,
      title: 'Premium UI/UX',
      desc: 'Modern and intuitive interfaces crafted to provide better engagement and user experience.'
    },
    {
      icon: FaHeadset,
      title: 'Dedicated Support',
      desc: 'Reliable assistance and continuous support throughout the project journey and beyond.'
    }
  ];


  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#121212' }}
    >
      {/* Background Glow */}
      <div
        className="position-absolute"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(245, 124, 0, 0.06) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <SectionHeader
          label="Why Us"
          title="Why Choose <span>WebFusion Experts</span>"
          subtitle="We combine technical excellence with creative innovation to deliver digital products that stand out."
        />

        {/* Reasons Grid */}
        <div className="row g-4">
          {reasons.map((reason, i) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={i}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <div
                  className="h-100 p-4"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(245, 124, 0, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Number */}
                  <div
                    className="position-absolute"
                    style={{
                      top: '20px',
                      right: '20px',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 800,
                      fontSize: '3rem',
                      color: 'rgba(245, 124, 0, 0.1)',
                      lineHeight: 1
                    }}
                  >
                    0{i + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className="d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: 55,
                      height: 55,
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(245, 124, 0, 0.15), rgba(245, 124, 0, 0.05))',
                      border: '1px solid rgba(245, 124, 0, 0.2)'
                    }}
                  >
                    <IconComponent size={24} style={{ color: '#f57c00' }} />
                  </div>

                  <h4
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      color: '#fff',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {reason.title}
                  </h4>
                  <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    {reason.desc}
                  </p>
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
