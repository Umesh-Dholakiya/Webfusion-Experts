import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaRocket, FaEye, FaBullseye, FaLayerGroup } from 'react-icons/fa';
import SectionHeader from './SectionHeader';


const AboutSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const stats = [
    { icon: FaRocket, value: '10+', label: 'Projects Completed' },
    { icon: FaEye, value: '90%', label: 'Client Satisfaction' },
    { icon: FaBullseye, value: '9+', label: 'Technologies Used' },
    { icon: FaLayerGroup, value: '2-in-1', label: 'Design & Development' },];

  const glassStyle = {
    background: 'rgba(255,255,255,0.02)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    border: '1px solid rgba(255,255,255,0.05)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    overflow: 'hidden'
  };

  const hoverStyle = (e) => {
    e.currentTarget.style.borderColor = 'rgba(245, 124, 0, 0.3)';
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
  };

  const leaveStyle = (e) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#080808' }}
      id="about"
    >
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
          filter: 'blur(100px)'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <SectionHeader
          label="About Us"
          title="Who We Are"
          subtitle="A digital solutions studio focused on building modern websites, web applications, and e-commerce experiences for startups and businesses."
        />

        {/* Bento Box Grid */}
        <div className="row g-4 mt-2">

          {/* Intro Card - Spans 8 cols */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-100"
            >
              <div
                style={{ ...glassStyle, padding: '1.5rem' }}
                className="h-100 d-flex flex-column justify-content-center"
                onMouseEnter={hoverStyle} onMouseLeave={leaveStyle}
              >
                {/* Decorative Element */}
                <div className="position-absolute" style={{ top: '-20%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(245, 124, 0, 0.1) 0%, transparent 70%)', borderRadius: '50%' }} />

                <h3
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    fontSize: '2.5rem',
                    color: '#fff',
                    marginBottom: '1.5rem',
                    lineHeight: 1.2
                  }}
                >
                  Crafting Digital Solutions <span style={{ color: '#f57c00' }}>Since 2026</span>
                </h3>
                <p style={{ color: '#cfcfcf', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  WebFusion Experts is a growing digital solutions studio specializing in modern websites, web applications, e-commerce solutions, and custom web development. We focus on creating responsive, user-friendly digital experiences that help businesses build a strong online presence.                </p>
                <p style={{ color: '#888', fontSize: '1rem', lineHeight: 1.8, marginBottom: 0 }}>
                  Our approach combines thoughtful design, modern technologies, and reliable development to create websites and web solutions that are fast, responsive, and easy to use.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats 1 & 2 - Stacked in 4 cols */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4 h-100">
              {[stats[0], stats[1]].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  className="flex-fill"
                >
                  <div
                    style={{ ...glassStyle, padding: '2rem' }}
                    className="h-100 d-flex align-items-center justify-content-between"
                    onMouseEnter={hoverStyle} onMouseLeave={leaveStyle}
                  >
                    <div>
                      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '3rem', lineHeight: 1, background: 'linear-gradient(135deg, #fff, #f57c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>
                        {stat.value}
                      </div>
                      <div style={{ color: '#aaa', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>
                        {stat.label}
                      </div>
                    </div>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(245,124,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <stat.icon size={28} color="#f57c00" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mission Card - Spans 4 cols */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-100"
            >
              <div
                style={{ ...glassStyle, padding: '3rem 2.5rem' }}
                className="h-100"
                onMouseEnter={hoverStyle} onMouseLeave={leaveStyle}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #f57c00, #ff9800)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <FaBullseye size={24} color="#fff" />
                </div>
                <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>
                  Our Mission
                </h4>
                <p style={{ color: '#888', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                  To help businesses grow online through modern design, innovative technologies, and scalable digital solutions that drive real results.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Vision Card - Spans 4 cols */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-100"
            >
              <div
                style={{ ...glassStyle, padding: '3rem 2.5rem' }}
                className="h-100"
                onMouseEnter={hoverStyle} onMouseLeave={leaveStyle}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <FaEye size={24} color="#f57c00" />
                </div>
                <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>
                  Our Vision
                </h4>
                <p style={{ color: '#888', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                  To become a globally trusted digital partner known for delivering premium user experiences and highly reliable web solutions.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats 3 & 4 - Stacked in 4 cols */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4 h-100">
              {[stats[2], stats[3]].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                  className="flex-fill"
                >
                  <div
                    style={{ ...glassStyle, padding: '2rem' }}
                    className="h-100 d-flex align-items-center justify-content-between"
                    onMouseEnter={hoverStyle} onMouseLeave={leaveStyle}
                  >
                    <div>
                      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '3rem', lineHeight: 1, color: '#fff', marginBottom: '0.5rem' }}>
                        {stat.value}
                      </div>
                      <div style={{ color: '#aaa', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>
                        {stat.label}
                      </div>
                    </div>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <stat.icon size={28} color="#888" />
                    </div>
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
