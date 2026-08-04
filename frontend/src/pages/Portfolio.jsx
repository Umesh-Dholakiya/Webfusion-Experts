import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PortfolioSection from '../components/PortfolioSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | WebFusion Experts</title>
        <meta name="description" content="View our portfolio of premium websites, web applications, e-commerce solutions, and digital products." />
      </Helmet>

      <section className="page-header-bg" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1541462608141-2ff580dd0e4e?auto=format&fit=crop&w=1920&q=80')`
      }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Portfolio</div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Our <span className="gradient-text">Work</span>
            </h1>
            <p style={{
              color: '#cfcfcf',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Explore our collection of premium digital products crafted with precision, creativity, and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      <PortfolioSection hideHeader={true} />
      
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

export default Portfolio
