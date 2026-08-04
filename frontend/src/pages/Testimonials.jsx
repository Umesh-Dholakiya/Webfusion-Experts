import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import TestimonialsSection from '../components/TestimonialsSection'

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | WebFusion Experts</title>
        <meta name="description" content="Read what our clients say about working with WebFusion Experts." />
      </Helmet>

      <section className="page-header-bg" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1920&q=80')`
      }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Testimonials</div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Client <span className="gradient-text">Reviews</span>
            </h1>
            <p style={{
              color: '#cfcfcf',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Hear from businesses that have transformed their digital presence with our services.
            </p>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection hideHeader={true} />
    </>
  )
}

export default Testimonials
