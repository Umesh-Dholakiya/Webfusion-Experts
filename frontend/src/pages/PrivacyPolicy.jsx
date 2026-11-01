import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | WebFusion Experts</title>
        <meta
          name="description"
          content="Learn how WebFusion Experts collects, uses, protects, and manages information submitted through our website."
        />
      </Helmet>

      <section
        style={{
          background: '#0b0b0b',
          paddingTop: '120px',
          paddingBottom: '80px'
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Legal</div>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              Privacy <span className="gradient-text">Policy</span>
            </h1>

            <p
              style={{
                color: '#888',
                marginBottom: '2rem',
                fontSize: '0.95rem'
              }}
            >
              Last updated: October 6, 2026
            </p>

            <div className="glass-card">
              <div style={{ color: '#cfcfcf', lineHeight: 1.8 }}>

                <p className="mb-4">
                  WebFusion Experts ("WebFusion Experts", "we", "our", or "us")
                  respects your privacy and is committed to handling personal
                  information responsibly. This Privacy Policy explains what
                  information we may collect through our website, how we use it,
                  and the choices available to you.
                </p>

                <p className="mb-5">
                  By using our website or voluntarily providing information to us,
                  you acknowledge the practices described in this Privacy Policy.
                </p>

                <h5 style={headingStyle}>
                  1. Information We Collect
                </h5>

                <p className="mb-3">
                  We may collect information that you voluntarily provide when
                  you contact us, request information about our services, or
                  otherwise communicate with us through our website.
                </p>

                <p className="mb-4">
                  Depending on how you interact with our website, this may include
                  your name, email address, phone number, company or business
                  details, project requirements, and any other information you
                  choose to provide.
                </p>

                <h5 style={headingStyle}>
                  2. Information Collected Automatically
                </h5>

                <p className="mb-4">
                  When you visit our website, certain technical information may
                  be collected automatically by the website or by third-party
                  services we use. This may include browser type, device type,
                  general usage information, pages visited, and basic technical
                  information required to operate and secure the website.
                </p>

                <h5 style={headingStyle}>
                  3. How We Use Your Information
                </h5>

                <p className="mb-3">
                  We may use the information we collect to:
                </p>

                <ul className="mb-4">
                  <li>Respond to inquiries and project requests.</li>
                  <li>Understand your business and project requirements.</li>
                  <li>Communicate with you about requested services.</li>
                  <li>Provide, maintain, and improve our website.</li>
                  <li>Improve our services and user experience.</li>
                  <li>Protect our website against misuse, fraud, or security threats.</li>
                  <li>Meet applicable legal or regulatory requirements.</li>
                </ul>

                <h5 style={headingStyle}>
                  4. Contact and Project Information
                </h5>

                <p className="mb-4">
                  Information submitted through our contact or project inquiry
                  forms is used primarily to understand your requirements and
                  communicate with you regarding potential or ongoing services.
                  We do not use submitted information for unrelated purposes
                  without a valid reason or applicable permission.
                </p>

                <h5 style={headingStyle}>
                  5. Sharing of Information
                </h5>

                <p className="mb-4">
                  We do not sell or rent your personal information. We may share
                  information with trusted service providers where reasonably
                  necessary to operate our website, communicate with you, provide
                  our services, maintain technical infrastructure, or comply with
                  legal obligations.
                </p>

                <h5 style={headingStyle}>
                  6. Third-Party Services
                </h5>

                <p className="mb-4">
                  Our website may use third-party services for hosting, website
                  infrastructure, forms, communication, analytics, security, or
                  other technical functionality. These providers may process
                  information according to their own privacy policies and
                  applicable terms.
                </p>

                <h5 style={headingStyle}>
                  7. Cookies and Similar Technologies
                </h5>

                <p className="mb-4">
                  Our website may use cookies or similar technologies where
                  necessary for website functionality, security, performance,
                  preferences, or analytics. The use of such technologies may
                  depend on the services and integrations enabled on the website.
                </p>

                <h5 style={headingStyle}>
                  8. Data Security
                </h5>

                <p className="mb-4">
                  We take reasonable technical and organizational measures to
                  protect information against unauthorized access, misuse,
                  alteration, disclosure, or loss. However, no internet-based
                  service can guarantee absolute security.
                </p>

                <h5 style={headingStyle}>
                  9. Data Retention
                </h5>

                <p className="mb-4">
                  We retain information only for as long as reasonably necessary
                  for the purposes described in this policy, to provide requested
                  services, maintain business records, resolve disputes, or meet
                  applicable legal obligations.
                </p>

                <h5 style={headingStyle}>
                  10. Your Privacy Choices
                </h5>

                <p className="mb-4">
                  Depending on applicable law, you may have rights relating to
                  your personal information, including requesting access,
                  correction, or deletion of information. Requests can be made
                  using the contact details provided below.
                </p>

                <h5 style={headingStyle}>
                  11. Third-Party Links
                </h5>

                <p className="mb-4">
                  Our website may contain links to third-party websites or
                  platforms. We are not responsible for the privacy practices,
                  content, or security of websites that we do not control.
                  We recommend reviewing their privacy policies before providing
                  personal information.
                </p>

                <h5 style={headingStyle}>
                  12. Children's Privacy
                </h5>

                <p className="mb-4">
                  Our services are intended for businesses, organizations, and
                  general users and are not specifically directed toward children.
                  We do not knowingly request personal information from children
                  for purposes unrelated to providing our services.
                </p>

                <h5 style={headingStyle}>
                  13. Changes to This Privacy Policy
                </h5>

                <p className="mb-4">
                  We may update this Privacy Policy from time to time to reflect
                  changes to our website, services, technology, or applicable
                  requirements. Any updated version will be published on this page
                  with a revised "Last updated" date.
                </p>

                <h5 style={headingStyle}>
                  14. Contact Us
                </h5>

                <p>
                  If you have questions about this Privacy Policy or wish to
                  contact us regarding your personal information, please email us
                  at{' '}
                  <a
                    href="mailto:webfusionexperts24@gmail.com"
                    style={{ color: '#ff8a00' }}
                  >
                    webfusionexperts24@gmail.com
                  </a>
                  .
                </p>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

const headingStyle = {
  fontFamily: "'Space Grotesk', sans-serif",
  color: '#fff',
  marginBottom: '1rem'
}

export default PrivacyPolicy