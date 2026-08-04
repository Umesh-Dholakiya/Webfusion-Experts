import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import ServicesSection from '../components/ServicesSection'
import { services } from '../data/services'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | WebFusion Experts</title>
        <meta name="description" content="Explore our comprehensive digital services including web development, Shopify, React.js, UI/UX design, and SEO optimization." />
      </Helmet>

      {/* Hero */}
      <section className="page-header-bg" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')`
      }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Services</div>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              Premium <span className="gradient-text">Digital Services</span>
            </h1>
            <p style={{
              color: '#cfcfcf',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              From concept to launch, we provide end-to-end digital solutions that drive growth and deliver results.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection hideHeader={true} />

      {/* Process */}
      <section className="section-padding section-dark">
        <div className="container">
          <SectionHeader
            label="Our Process"
            title="How We <span>Work</span>"
            subtitle="A proven workflow that ensures every project is delivered with excellence."
          />

          <div className="row g-4 mt-2">
            {[
              { step: '01', title: 'Discover', desc: 'Understanding business goals and project requirements through in-depth consultation.' },
              { step: '02', title: 'Planning', desc: 'Creating scalable architecture and strategic roadmap for your project.' },
              { step: '03', title: 'Design', desc: 'Crafting premium UI/UX experiences that captivate and convert.' },
              { step: '04', title: 'Development', desc: 'Building responsive and optimized digital products with clean code.' },
              { step: '05', title: 'Launch', desc: 'Testing, deployment, and optimization for peak performance.' },
              { step: '06', title: 'Support', desc: 'Ongoing updates, maintenance, and continuous improvement.' }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card h-100" style={{ padding: '2rem' }}>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'rgba(245, 124, 0, 0.2)',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>
                    {process.step}
                  </span>
                  <h5 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}>
                    {process.title}
                  </h5>
                  <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {process.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
