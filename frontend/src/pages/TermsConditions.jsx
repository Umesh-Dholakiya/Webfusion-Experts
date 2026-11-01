import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | WebFusion Experts</title>
        <meta
          name="description"
          content="Read the Terms and Conditions governing the use of the WebFusion Experts website and our digital services."
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
              Terms & <span className="gradient-text">Conditions</span>
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
                  These Terms & Conditions ("Terms") govern your use of the
                  WebFusion Experts website and the digital services provided by
                  WebFusion Experts ("we", "our", or "us").
                </p>

                <p className="mb-5">
                  By accessing our website or engaging our services, you agree
                  to these Terms. If you do not agree with these Terms, please
                  discontinue use of the website and services.
                </p>

                <h5 style={headingStyle}>
                  1. Website Use
                </h5>

                <p className="mb-4">
                  You may use this website for lawful purposes only. You agree
                  not to misuse the website, attempt to gain unauthorized access,
                  interfere with its operation, introduce malicious code, or use
                  the website in a way that may damage our systems or other users.
                </p>

                <h5 style={headingStyle}>
                  2. Our Services
                </h5>

                <p className="mb-3">
                  WebFusion Experts provides digital development and technology
                  services that may include:
                </p>

                <ul className="mb-4">
                  <li>Website and web application development.</li>
                  <li>Mobile application development.</li>
                  <li>Desktop application development.</li>
                  <li>Custom CRM systems.</li>
                  <li>Custom software development.</li>
                  <li>Website redesign and improvement.</li>
                  <li>E-commerce and digital solutions.</li>
                  <li>Technology and development consulting.</li>
                </ul>

                <p className="mb-4">
                  The exact services, features, deliverables, timelines, pricing,
                  revisions, and responsibilities for a specific project will be
                  defined in the applicable proposal, quotation, statement of
                  work, or separate agreement.
                </p>

                <h5 style={headingStyle}>
                  3. Project Scope and Requirements
                </h5>

                <p className="mb-4">
                  Project scope is based on the requirements agreed upon before
                  development begins. Changes to requirements, features, content,
                  integrations, or functionality after approval may affect the
                  project timeline and cost and may require separate approval.
                </p>

                <h5 style={headingStyle}>
                  4. Client Responsibilities
                </h5>

                <p className="mb-3">
                  Clients are responsible for providing accurate and timely:
                </p>

                <ul className="mb-4">
                  <li>Project information and requirements.</li>
                  <li>Content, images, branding assets, and other materials.</li>
                  <li>Required approvals and feedback.</li>
                  <li>Access credentials or third-party service information where necessary.</li>
                </ul>

                <p className="mb-4">
                  Delays in providing required information, content, approvals,
                  or access may affect the agreed project timeline.
                </p>

                <h5 style={headingStyle}>
                  5. Pricing and Payments
                </h5>

                <p className="mb-4">
                  Project pricing and payment schedules are determined on a
                  project-by-project basis and are communicated in the applicable
                  proposal, quotation, invoice, or agreement. Any applicable
                  deposit, milestone payment, final payment, or additional work
                  charges will be based on the agreed project terms.
                </p>

                <h5 style={headingStyle}>
                  6. Revisions and Additional Work
                </h5>

                <p className="mb-4">
                  The number of included revisions, where applicable, will be
                  defined in the project agreement or proposal. Requests outside
                  the agreed scope may be treated as additional work and may
                  involve additional charges or delivery time.
                </p>

                <h5 style={headingStyle}>
                  7. Intellectual Property
                </h5>

                <p className="mb-4">
                  Website content, branding, source code, designs, graphics,
                  documents, and other materials created specifically for a
                  client project will be handled according to the applicable
                  project agreement and payment terms.
                </p>

                <p className="mb-4">
                  Unless otherwise agreed in writing, WebFusion Experts retains
                  ownership of its pre-existing tools, reusable components,
                  frameworks, development methods, libraries, templates, and
                  general technical know-how.
                </p>

                <h5 style={headingStyle}>
                  8. Client-Provided Materials
                </h5>

                <p className="mb-4">
                  Clients are responsible for ensuring that they have the
                  necessary rights, permissions, and licenses for any content,
                  images, logos, trademarks, software, or other materials they
                  provide to us for use in a project.
                </p>

                <h5 style={headingStyle}>
                  9. Third-Party Services
                </h5>

                <p className="mb-4">
                  Projects may depend on third-party services, APIs, hosting
                  providers, payment gateways, software platforms, plugins, or
                  other external technologies. Availability, pricing, policies,
                  and functionality of such third-party services are outside
                  our direct control.
                </p>

                <h5 style={headingStyle}>
                  10. Portfolio and Showcase Work
                </h5>

                <p className="mb-4">
                  Our website may display selected visual showcases, concept work,
                  demonstrations, or project examples to communicate our design
                  and development capabilities. A showcase displayed on the
                  website should not automatically be interpreted as an active
                  client engagement or endorsement unless explicitly stated.
                </p>

                <h5 style={headingStyle}>
                  11. Service Availability and Warranties
                </h5>

                <p className="mb-4">
                  We aim to deliver reliable and functional digital solutions
                  according to the agreed project scope. However, we do not
                  guarantee that every website, application, integration, or
                  service will always be completely uninterrupted, error-free,
                  or compatible with every third-party environment.
                </p>

                <h5 style={headingStyle}>
                  12. Limitation of Liability
                </h5>

                <p className="mb-4">
                  To the extent permitted by applicable law, WebFusion Experts
                  will not be responsible for indirect, incidental, special,
                  consequential, or business losses arising from the use of our
                  website or services, including losses resulting from third-party
                  services, service interruptions, unauthorized access, or events
                  outside our reasonable control.
                </p>

                <h5 style={headingStyle}>
                  13. Website Content and Intellectual Property
                </h5>

                <p className="mb-4">
                  Unless otherwise stated, the WebFusion Experts name, branding,
                  website design, original text, graphics, and other materials
                  published on this website are owned by or used by WebFusion
                  Experts with appropriate rights and may not be copied,
                  reproduced, modified, or redistributed without permission.
                </p>

                <h5 style={headingStyle}>
                  14. Termination
                </h5>

                <p className="mb-4">
                  We reserve the right to suspend or terminate access to our
                  website or services where reasonably necessary, including in
                  cases of misuse, unlawful activity, breach of these Terms, or
                  failure to meet agreed project obligations.
                </p>

                <h5 style={headingStyle}>
                  15. Changes to These Terms
                </h5>

                <p className="mb-4">
                  We may update these Terms from time to time. Changes will be
                  published on this page along with an updated "Last updated"
                  date. Your continued use of the website after changes are
                  published constitutes acceptance of the updated Terms to the
                  extent permitted by applicable law.
                </p>

                <h5 style={headingStyle}>
                  16. Governing Law
                </h5>

                <p className="mb-4">
                  These Terms are intended to be interpreted in accordance with
                  applicable laws. Any dispute relating to a specific project
                  will be handled according to the applicable project agreement
                  and the laws and jurisdiction specified in that agreement.
                </p>

                <h5 style={headingStyle}>
                  17. Contact Us
                </h5>

                <p>
                  If you have any questions about these Terms & Conditions,
                  please contact us at{' '}
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

export default TermsConditions