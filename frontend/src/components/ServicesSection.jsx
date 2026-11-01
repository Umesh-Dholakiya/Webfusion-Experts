import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGlobe,
  FaMobileAlt,
  FaDesktop,
  FaRobot,
  FaCogs,
  FaGamepad,
  FaDatabase,
  FaCloud,
  FaLightbulb,
  FaUsersCog,
  FaLaptopCode
} from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import { services } from '../data/services'

const iconMap = {
  FaGlobe,
  FaMobileAlt,
  FaDesktop,
  FaRobot,
  FaCogs,
  FaGamepad,
  FaDatabase,
  FaCloud,
  FaLightbulb,
  FaUsersCog,
  FaLaptopCode
}

const ServicesSection = ({ hideHeader = false }) => {
  return (
    <section className="section-padding section-darker position-relative">
      <div className="orange-glow" style={{ top: '20%', right: '-15%' }} />

      <div className="container position-relative z-index-1">
        {!hideHeader && (
          <SectionHeader
            label="What We Do"
            title="Our <span>Services</span>"
            subtitle="We build modern digital solutions that help businesses establish a strong and effective online presence."
          />
        )}

        <div className="row g-4 mt-2">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card h-100" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <div className="d-flex align-items-center justify-content-center mb-4" style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(245, 124, 0, 0.2), rgba(245, 124, 0, 0.05))',
                    border: '1px solid rgba(245, 124, 0, 0.2)'
                  }}>
                    <IconComponent style={{ color: '#f57c00', fontSize: '24px' }} />
                  </div>

                  <h5 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}>
                    {service.title}
                  </h5>

                  <p style={{
                    color: '#888',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    marginBottom: '1rem',
                    flexGrow: 1
                  }}>
                    {service.description}
                  </p>

                  <div className="d-flex flex-wrap gap-1">
                    {service.features.map((feature, i) => (
                      <span key={i} style={{
                        padding: '3px 8px',
                        background: 'rgba(245, 124, 0, 0.1)',
                        borderRadius: '20px',
                        color: '#f57c00',
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        whiteSpace: 'nowrap'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
