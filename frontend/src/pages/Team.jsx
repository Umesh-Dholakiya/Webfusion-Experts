import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import TeamSection from '../components/TeamSection'

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Team | WebFusion Experts</title>
        <meta name="description" content="Meet the talented team behind WebFusion Experts." />
      </Helmet>

      <section className="page-header-bg" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b8130581f59a?auto=format&fit=crop&w=1920&q=80')`
      }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Our Team</div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Meet The <span className="gradient-text">Team</span>
            </h1>
            <p style={{
              color: '#cfcfcf',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              A passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <TeamSection hideHeader={true} />
    </>
  )
}

export default Team
