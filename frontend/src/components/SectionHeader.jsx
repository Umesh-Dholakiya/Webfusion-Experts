import React from 'react'
import { motion } from 'framer-motion'

const SectionHeader = ({ label, title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-5 ${centered ? 'text-center' : ''}`} data-aos="fade-up">
      {label && (
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {label}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 700,
          marginBottom: '1rem',
          color: light ? '#0b0b0b' : '#ffffff'
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: light ? '#555' : '#cfcfcf',
            fontSize: '1.05rem',
            maxWidth: '600px',
            lineHeight: 1.8,
            margin: centered ? '0 auto' : '0'
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeader
