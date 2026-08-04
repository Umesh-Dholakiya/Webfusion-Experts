import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaRocket, FaEye, FaBullseye, FaHistory } from 'react-icons/fa';
import SectionHeader from './SectionHeader';


const AboutSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });


  const stats = [
    { icon: FaRocket, value: '10+', label: 'Projects Completed' },
    { icon: FaEye, value: '100%', label: 'Client Satisfaction' },
    { icon: FaBullseye, value: '5', label: 'Technologies Used' },
    { icon: FaHistory, value: '1', label: 'Years Experience' }
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#0b0b0b' }}
      id="about"
    >
      {/* Background Glow */}
      <div
        className="position-absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(245, 124, 0, 0.08) 0%, transparent 70%)',
          top: '20%',
          right: '-10%',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <SectionHeader
          label="About Us"
          title="Who We Are"
          subtitle="A modern digital agency focused on creating high-quality digital solutions for startups, brands, and growing businesses."
        />

        {/* Company Intro */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '2rem',
                  color: '#fff',
                  marginBottom: '1.5rem'
                }}
              >
                Crafting Digital Solutions Since 2026
              </h3>
              <p style={{ color: '#cfcfcf', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                WebFusion Experts is a digital agency specializing in modern websites, web applications, e-commerce solutions, and custom development. Our goal is to help businesses establish a strong online presence with fast, scalable, and user-friendly digital products.
              </p>
              <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '2rem' }}>
                We combine clean design, modern technologies, and performance-driven development to create experiences that are responsive, SEO-friendly, and future-ready.
              </p>

              {/* Mission & Vision */}
              <div className="row g-3">
                <div className="col-md-6">
                  <div
                    className="p-4"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.05)',
                      height: '100%'
                    }}
                  >
                    <FaBullseye size={24} style={{ color: '#f57c00', marginBottom: '1rem' }} />
                    <h5 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
                      Mission
                    </h5>
                    <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>
                      To help businesses grow online through modern design, innovative technologies, and scalable digital solutions.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="p-4"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.05)',
                      height: '100%'
                    }}
                  >
                    <FaEye size={24} style={{ color: '#f57c00', marginBottom: '1rem' }} />
                    <h5 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
                      Vision
                    </h5>
                    <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>
                      To become a trusted digital partner known for delivering premium user experiences and reliable web solutions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="col-lg-6">
            <div className="row g-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="col-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div
                    className="text-center p-4"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.05)',
                      height: '100%',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(245, 124, 0, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <stat.icon size={28} style={{ color: '#f57c00', marginBottom: '1rem' }} />
                    <div
                      style={{
                        fontFamily: 'Space Grotesk',
                        fontWeight: 700,
                        fontSize: '2rem',
                        color: '#fff',
                        marginBottom: '0.3rem'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ color: '#888', fontSize: '0.85rem' }}>{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
