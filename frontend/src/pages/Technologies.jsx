import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import TechStackSection from '../components/TechStackSection'

const Technologies = () => {
  return (
    <>
      <Helmet>
        <title>Technologies | WebFusion Experts</title>
        <meta name="description" content="Discover the cutting-edge technologies we use to build premium digital solutions." />
      </Helmet>

      <section className="page-header-bg" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80')`
      }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Tech Stack</div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Our <span className="gradient-text">Technologies</span>
            </h1>
            <p style={{
              color: '#cfcfcf',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              We leverage the latest technologies to build powerful, scalable, and future-proof digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <TechStackSection hideHeader={true} />
    </>
  )
}

export default Technologies
