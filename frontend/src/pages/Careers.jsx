import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCheck } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import { careers } from '../data/careers'

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | WebFusion Experts</title>
        <meta name="description" content="Join the WebFusion Experts team. Explore current job openings and career opportunities." />
      </Helmet>

      <section className="page-header-bg" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b904737c88?auto=format&fit=crop&w=1920&q=80')`
      }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Careers</div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p style={{
              color: '#cfcfcf',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              We're always looking for talented individuals who are passionate about creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container">
          <SectionHeader
            label="Open Positions"
            title="Current <span>Opportunities</span>"
            subtitle="Find your perfect role and help us build the future of digital experiences."
          />

          <div className="row g-4 mt-2">
            {careers.map((job, index) => (
              <motion.div
                key={job.id}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card h-100">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <FaBriefcase style={{ color: '#f57c00' }} />
                    <span style={{ color: '#f57c00', fontSize: '0.85rem', fontWeight: 600 }}>
                      {job.type}
                    </span>
                  </div>

                  <h5 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>
                    {job.title}
                  </h5>

                  <div className="d-flex align-items-center gap-2 mb-3">
                    <FaMapMarkerAlt style={{ color: '#666', fontSize: '12px' }} />
                    <span style={{ color: '#888', fontSize: '0.85rem' }}>{job.location}</span>
                  </div>

                  <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    {job.description}
                  </p>

                  <div className="mb-3">
                    <span style={{ color: '#666', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                      Requirements:
                    </span>
                    <div className="d-flex flex-wrap gap-2">
                      {job.requirements.map((req, i) => (
                        <span key={i} style={{
                          padding: '4px 10px',
                          background: 'rgba(255,255,255,0.05)',
                          borderRadius: '4px',
                          color: '#888',
                          fontSize: '0.75rem'
                        }}>
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="btn-premium w-100" style={{ padding: '10px', fontSize: '0.9rem' }}>
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Careers
