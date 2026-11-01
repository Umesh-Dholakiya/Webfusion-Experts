import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaLaptopCode, FaMobileAlt, FaShoppingCart, FaCogs, FaRocket,
  FaCheckCircle, FaStar, FaCompressArrowsAlt, FaChartLine
} from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import OurStorySection from '../components/OurStorySection';
import CTASection from '../components/CTASection';
import studioVisualImg from '../assets/about-studio-visual.jpg';
import growthBgImg from '../assets/growth-banner-bg.jpg';
import withPageHeader from '../hoc/withPageHeader';

const About = () => {

  return (
    <div style={{ background: '#0b0b0b', color: '#fff' }}>
      <Helmet>
        <title>About Us | WebFusion Experts</title>
        <meta name="description" content="WebFusion Experts is a digital development studio focused on building modern websites, web applications, e-commerce solutions, and custom digital products." />
      </Helmet>


      {/* 3. WHO WE ARE */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="d-inline-block px-3 py-1 mb-3 rounded-pill" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '0.8rem',
                letterSpacing: '1px'
              }}>
                WHO WE ARE
              </div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '2.0rem',
                fontWeight: 700,
                marginBottom: '1.5rem'
              }}>
                Building With Purpose
              </h2>
              <div style={{ color: '#cfcfcf', fontSize: '1.05rem', lineHeight: 1.8 }}>
                <p>
                  WebFusion Experts is a modern digital development studio focused on creating thoughtful, reliable, and user-friendly digital experiences.
                </p>
                <p>
                  We work with startups, entrepreneurs, and growing businesses to turn ideas and requirements into practical digital solutions.
                </p>
                <p className="mb-0">
                  Our focus is not simply on building something that looks good. We aim to create digital products that are clear, responsive, scalable, and aligned with the needs of the business.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="position-relative rounded-4 overflow-hidden" style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
              }}>
                {/* Ambient glow behind image */}
                <div className="position-absolute" style={{
                  top: '-20%', right: '-20%', width: '350px', height: '350px',
                  background: 'radial-gradient(circle, rgba(245,124,0,0.2) 0%, transparent 70%)',
                  filter: 'blur(50px)',
                  zIndex: 0
                }} />

                {/* Main Visual Image with subtle zoom on hover */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="position-relative overflow-hidden"
                  style={{ borderRadius: '16px', zIndex: 1 }}
                >
                  <img 
                    src={studioVisualImg} 
                    alt="WebFusion Experts Digital Development Studio" 
                    className="w-100 h-auto d-block"
                    style={{ 
                      objectFit: 'cover',
                      aspectRatio: '4/3',
                      filter: 'contrast(1.04) brightness(0.96)'
                    }} 
                  />
                  {/* Gradient Overlay at bottom for seamless dark theme integration */}
                  <div className="position-absolute w-100 h-100" style={{
                    top: 0, left: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.15) 45%, transparent 100%)',
                    pointerEvents: 'none'
                  }} />
                </motion.div>

                {/* Floating Top-Left Badge: Studio Status */}
                <div className="position-absolute" style={{
                  top: '18px', left: '18px',
                  background: 'rgba(15, 15, 15, 0.78)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '30px',
                  padding: '6px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  zIndex: 2,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.5)'
                }}>
                  <span style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    background: '#22c55e', 
                    boxShadow: '0 0 8px #22c55e' 
                  }} />
                  <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                    Digital Development Studio
                  </span>
                </div>

                {/* Floating Bottom-Right Card: Capability Highlight */}
                <div className="position-absolute" style={{
                  bottom: '18px', right: '18px',
                  background: 'rgba(17, 17, 17, 0.88)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(245, 124, 0, 0.3)',
                  borderRadius: '14px',
                  padding: '12px 18px',
                  zIndex: 2,
                  boxShadow: '0 12px 30px rgba(0,0,0,0.7)'
                }}>
                  <div style={{ color: '#f57c00', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                    Architecture & Code
                  </div>
                  <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600, marginTop: '2px' }}>
                    Modern, Scalable & Clean
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="section-padding" style={{ background: '#0f0f0f' }}>
        <div className="container">
          <SectionHeader
            label="WHAT WE DO"
            title="From Ideas to <span>Digital Products</span>"
            subtitle="We help businesses build and improve their digital presence through modern development, thoughtful design, and practical technology solutions."
          />

          <div className="row g-4 mt-4">
            {[
              { id: '01', title: 'Web Development', desc: 'Modern, responsive websites and web experiences built around business needs.', icon: FaLaptopCode },
              { id: '02', title: 'Web Applications', desc: 'Scalable web applications designed for real workflows, functionality, and usability.', icon: FaMobileAlt },
              { id: '03', title: 'E-Commerce Solutions', desc: 'Modern online stores focused on usability, product presentation, and smooth customer experiences.', icon: FaShoppingCart },
              { id: '04', title: 'Custom Software', desc: 'Purpose-built digital solutions designed around specific business requirements.', icon: FaCogs }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="h-100 p-4 rounded-4 custom-card" style={{
                  background: '#141414',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease'
                }}>
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div style={{
                      width: '48px', height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(245, 124, 0, 0.1)',
                      color: '#f57c00',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '20px'
                    }}>
                      <item.icon />
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.05)', fontSize: '1.5rem', fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.id}
                    </span>
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>{item.title}</h4>
                  <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR STORY TIMELINE */}
      <OurStorySection />

      {/* 6. OUR VALUES */}
      <section className="section-padding" style={{ background: '#0f0f0f' }}>
        <div className="container">
          <SectionHeader
            label="OUR VALUES"
            title="What <span>Drives Us</span>"
            subtitle="The principles that shape how we approach every project."
          />

          <div className="row g-4 mt-4">
            {[
              { title: 'Clarity', desc: 'Clear communication, practical planning, and straightforward collaboration.', icon: FaCheckCircle },
              { title: 'Quality', desc: 'Thoughtful design, clean implementation, and attention to important details.', icon: FaStar },
              { title: 'Flexibility', desc: 'Solutions adapted to different business needs, goals, and stages of growth.', icon: FaCompressArrowsAlt },
              { title: 'Continuous Improvement', desc: 'We keep learning, refining, and improving the way we build digital products.', icon: FaChartLine }
            ].map((val, i) => (
              <motion.div 
                key={i}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-center p-4 rounded-4 h-100 custom-card" style={{
                  background: '#141414', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '60px', height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(245, 124, 0, 0.05)',
                    color: '#f57c00',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '24px',
                    margin: '0 auto 1.5rem'
                  }}>
                    <val.icon />
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>{val.title}</h4>
                  <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY WEBFUSION EXPERTS */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            label="WHY WEBFUSION EXPERTS"
            title="Built Around Your <span>Needs</span>"
            subtitle="Every business has different requirements. We focus on understanding those requirements and building digital solutions that are practical, responsive, and easy to evolve."
          />
          
          <div className="row g-4 mt-4">
            {[
              { title: 'Modern Approach', desc: 'We use current development practices and technologies suited to the project.' },
              { title: 'Responsive Experience', desc: 'We build interfaces that work across desktop, tablet, and mobile devices.' },
              { title: 'Business-Focused', desc: 'We focus on solving real requirements rather than adding unnecessary complexity.' },
              { title: 'Long-Term Thinking', desc: 'We aim to create solutions that can grow and adapt as requirements change.' }
            ].map((point, i) => (
              <motion.div 
                key={i}
                className="col-md-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="p-4 rounded-4 custom-card" style={{
                  background: '#111', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease'
                }}>
                  <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>{point.title}</h4>
                  <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STARTUP POSITIONING - Sticky/Parallax Background Section */}
      <section 
        className="position-relative d-flex align-items-center justify-content-center text-center overflow-hidden" 
        style={{ 
          padding: '120px 0',
          backgroundImage: `url(${growthBgImg})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderTop: '1px solid rgba(245, 124, 0, 0.2)',
          borderBottom: '1px solid rgba(245, 124, 0, 0.2)'
        }}
      >
        {/* Dark Glass Overlay with subtle gradient for optimal text contrast */}
        <div 
          className="position-absolute w-100 h-100" 
          style={{
            top: 0,
            left: 0,
            background: 'linear-gradient(to bottom, rgba(11,11,11,0.85) 0%, rgba(11,11,11,0.65) 50%, rgba(11,11,11,0.88) 100%)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            zIndex: 1
          }} 
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              padding: '45px 35px',
              borderRadius: '24px',
              background: 'rgba(15, 15, 15, 0.65)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)'
            }}
          >
            <div className="d-inline-block px-3 py-1 mb-3 rounded-pill" style={{
              background: 'rgba(245, 124, 0, 0.15)',
              border: '1px solid rgba(245, 124, 0, 0.3)',
              color: '#f57c00',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              GROWTH & COMMITMENT
            </div>

            <h3 style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', 
              fontWeight: 700, 
              color: '#fff', 
              marginBottom: '1.25rem' 
            }}>
              Built to Grow <span style={{ color: '#f57c00' }}>With You</span>
            </h3>

            <p style={{ color: '#e0e0e0', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              WebFusion Experts is growing as a digital development studio, and every project is an opportunity to build something meaningful, useful, and reliable.
            </p>

            <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              We value clear communication, strong execution, and long-term relationships over unnecessary promises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <CTASection />

      <style>{`
        .custom-card:hover {
          border-color: rgba(245, 124, 0, 0.3) !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(245, 124, 0, 0.05);
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.05) !important;
        }
      `}</style>
    </div>
  );
};

export default withPageHeader(About, {
  badge: "ABOUT WEBFUSION EXPERTS",
  breadcrumb: "About Us",
  title: (
    <>
      We Build <span style={{ color: '#f57c00' }}>Digital</span><br />
      Experiences That Matter
    </>
  ),
  subtitle: "WebFusion Experts is a digital development studio focused on building modern websites, web applications, e-commerce solutions, and custom digital products for startups and growing businesses.",
  highlights: [
    { title: "Digital Solutions", desc: "Websites, applications & custom software", icon: FaLaptopCode },
    { title: "Responsive by Design", desc: "Optimized for desktop, tablet & mobile", icon: FaMobileAlt },
    { title: "Modern Technology", desc: "Built with current and reliable technologies", icon: FaCogs },
    { title: "Startup Focused", desc: "Flexible solutions for growing businesses", icon: FaRocket }
  ]
});
