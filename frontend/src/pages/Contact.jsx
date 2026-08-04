import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ContactSection from '../components/ContactSection'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | WebFusion Experts</title>
        <meta name="description" content="Get in touch with WebFusion Experts for your next digital project." />
      </Helmet>

      <section className="page-header-bg" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1423662055905-ec3d126c6d2d?auto=format&fit=crop&w=1920&q=80')`
      }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Contact</div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p style={{
              color: '#cfcfcf',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Have a project in mind? We'd love to hear from you. Reach out and let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

export default Contact
