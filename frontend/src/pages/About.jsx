import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaRocket, FaEye, FaBullseye, FaAward, FaUsers, FaLightbulb } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import StatsSection from '../components/StatsSection'
import TeamSection from '../components/TeamSection'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | WebFusion Experts</title>
        <meta name="description" content="Learn about WebFusion Experts - our mission, vision, and the team behind premium digital experiences." />
      </Helmet>

      {/* Hero */}
      <section className="page-header-bg" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')`
      }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">About Company</div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              We Are <span className="gradient-text">WebFusion Experts</span>
            </h1>
            <p style={{
              color: '#cfcfcf',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              A modern digital agency specializing in premium websites, scalable web applications, 
              e-commerce solutions, and custom software development.
            </p>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      {/* Mission & Vision */}
      <section className="section-padding section-darker">
        <div className="container">
          <div className="row g-4">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(245, 124, 0, 0.2), rgba(245, 124, 0, 0.05))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f57c00',
                    fontSize: '20px'
                  }}>
                    <FaBullseye />
                  </div>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    margin: 0
                  }}>
                    Our Mission
                  </h3>
                </div>
                <p style={{ color: '#888', lineHeight: 1.8, fontSize: '1rem' }}>
                  To help businesses grow digitally through modern design, innovative technology, 
                  and scalable web solutions that create real business impact. We believe every business 
                  deserves a strong digital presence that drives growth and success.
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
              <div className="glass-card h-100">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(245, 124, 0, 0.2), rgba(245, 124, 0, 0.05))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f57c00',
                    fontSize: '20px'
                  }}>
                    <FaEye />
                  </div>
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    margin: 0
                  }}>
                    Our Vision
                  </h3>
                </div>
                <p style={{ color: '#888', lineHeight: 1.8, fontSize: '1rem' }}>
                  To become a globally trusted digital agency known for premium user experiences, 
                  innovative development, and high-performance digital products. We aim to set 
                  new standards in digital excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-dark">
        <div className="container">
          <SectionHeader
            label="Our Values"
            title="What Drives <span>Us</span>"
            subtitle="The core principles that guide every project we undertake."
          />

          <div className="row g-4 mt-2">
            {[
              { icon: FaLightbulb, title: 'Innovation', desc: 'Pushing boundaries with cutting-edge solutions.' },
              { icon: FaAward, title: 'Excellence', desc: 'Delivering nothing short of exceptional quality.' },
              { icon: FaUsers, title: 'Collaboration', desc: 'Working closely with clients as partners.' },
              { icon: FaRocket, title: 'Growth', desc: 'Focused on driving measurable business results.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center p-4">
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(245, 124, 0, 0.15), rgba(245, 124, 0, 0.05))',
                    border: '1px solid rgba(245, 124, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: '#f57c00',
                    fontSize: '24px'
                  }}>
                    <value.icon />
                  </div>
                  <h5 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>
                    {value.title}
                  </h5>
                  <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  )
}

export default About
