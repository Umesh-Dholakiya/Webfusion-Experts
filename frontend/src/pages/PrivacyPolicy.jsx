import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | WebFusion Experts</title>
        <meta name="description" content="WebFusion Experts Privacy Policy - Learn how we protect your data." />
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
              Privacy <span className="gradient-text">Policy</span>
            </h1>

            <div className="glass-card" style={{ maxWidth: '800px' }}>
              <div style={{ color: '#cfcfcf', lineHeight: 1.8 }}>
                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  1. Information We Collect
                </h5>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you fill out our contact form, 
                  subscribe to our newsletter, or communicate with us. This may include your name, email address, 
                  phone number, and any other information you choose to provide.
                </p>

                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  2. How We Use Your Information
                </h5>
                <p className="mb-4">
                  We use the information we collect to respond to your inquiries, send you updates about our services, 
                  improve our website and services, and comply with legal obligations.
                </p>

                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  3. Information Sharing
                </h5>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may share information with trusted service providers who assist us in operating our website 
                  and conducting our business.
                </p>

                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  4. Data Security
                </h5>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized 
                  access, alteration, disclosure, or destruction.
                </p>

                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  5. Your Rights
                </h5>
                <p className="mb-4">
                  You have the right to access, correct, or delete your personal information. 
                  To exercise these rights, please contact us at hello@webfusionexperts.com.
                </p>

                <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff', marginBottom: '1rem' }}>
                  6. Changes to This Policy
                </h5>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by 
                  posting the new policy on this page and updating the effective date.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
