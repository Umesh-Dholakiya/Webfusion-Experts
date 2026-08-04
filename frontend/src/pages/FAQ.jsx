import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import FAQSection from '../components/FAQSection'

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | WebFusion Experts</title>
        <meta name="description" content="Find answers to frequently asked questions about WebFusion Experts services." />
      </Helmet>

      <section className="page-header-bg" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1920&q=80')`
      }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">FAQ</div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p style={{
              color: '#cfcfcf',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQSection hideHeader={true} />
    </>
  )
}

export default FAQ
