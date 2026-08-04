import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { stats } from '../data/stats'

const StatsSection = () => {
  return (
    <section style={{
      background: '#0b0b0b',
      padding: '60px 0',
      borderTop: '1px solid rgba(255,255,255,0.03)',
      borderBottom: '1px solid rgba(255,255,255,0.03)'
    }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-3 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#f57c00',
                marginBottom: '0.5rem'
              }}>
                <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
              </h3>
              <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
