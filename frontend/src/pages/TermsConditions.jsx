import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | WebFusion Experts</title>
        <meta name="description" content="WebFusion Experts Terms and Conditions - Read our service terms." />
      </Helmet>

      <section style={{
        background: '#0b0b0b',
        paddingTop: '120px',
        paddingBottom: '80px'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Legal</div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              marginBottom: '2rem'
            }}>
              Terms & <span className="gradient-text">Conditions</span>
            </h1>

            <div className="glass-card" style={{ maxWidth: '800px' }}>
              <div style={{ color: '#cfcfcf', lineHeight: 1.8 }}>
                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  1. Acceptance of Terms
                </h5>
                <p className="mb-4">
                  By accessing and using our website and services, you agree to be bound by these Terms and Conditions. 
                  If you do not agree with any part of these terms, please do not use our services.
                </p>

                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  2. Services
                </h5>
                <p className="mb-4">
                  WebFusion Experts provides digital services including web development, design, 
                  e-commerce solutions, and related consulting services. All services are subject to 
                  separate agreements and project scopes.
                </p>

                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  3. Intellectual Property
                </h5>
                <p className="mb-4">
                  All content on this website, including text, graphics, logos, and software, is the property 
                  of WebFusion Experts and protected by intellectual property laws. Client projects are governed 
                  by individual project agreements.
                </p>

                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  4. Payment Terms
                </h5>
                <p className="mb-4">
                  Payment terms are outlined in individual project proposals. Typically, we require a deposit 
                  before commencing work, with the balance due upon project completion.
                </p>

                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  5. Limitation of Liability
                </h5>
                <p className="mb-4">
                  WebFusion Experts shall not be liable for any indirect, incidental, special, or consequential 
                  damages arising from the use of our services or website.
                </p>

                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  6. Governing Law
                </h5>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                  in which WebFusion Experts operates, without regard to its conflict of law provisions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TermsConditions
