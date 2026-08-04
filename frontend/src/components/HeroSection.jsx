import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPlay } from 'react-icons/fa'

const HeroSection = () => {

  const floatingCards = [
    { icon: '⚡', label: 'Fast Performance', delay: 0 },
    { icon: '🎨', label: 'Premium Design', delay: 0.5 },
    { icon: '🚀', label: 'Scalable Apps', delay: 1 },
    { icon: '📱', label: 'Responsive', delay: 1.5 }
  ];

  return (
    <section
      className="hero-section position-relative overflow-hidden d-flex align-items-center"
      style={{
        minHeight: '100vh',
        background: '#0b0b0b',
        paddingTop: '100px'
      }}
    >
      {/* Animated Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(245, 124, 0, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245, 124, 0, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none'
      }} />

      {/* Orange Glow Effects */}
      <div className="orange-glow" style={{ top: '10%', left: '-10%', width: '500px', height: '500px' }} />
      <div className="orange-glow" style={{ bottom: '10%', right: '-10%', width: '400px', height: '400px' }} />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="animate-float"
          style={{
            position: 'absolute',
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            borderRadius: '50%',
            background: 'rgba(245, 124, 0, 0.3)',
            top: `${15 + i * 12}%`,
            left: `${10 + i * 14}%`,
            animationDelay: `${i * 0.5}s`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      <div className="container position-relative z-index-1">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="section-label mb-3">
                Premium Digital Agency
              </div>

              <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '1.5rem'
              }}>
                Building{' '}
                <span className="gradient-text">Premium</span>
                <br />
                Digital Experiences
              </h1>

              <p style={{
                color: '#cfcfcf',
                fontSize: '1.15rem',
                maxWidth: '540px',
                lineHeight: 1.8,
                marginBottom: '2rem'
              }}>
                We help startups and businesses build modern websites, scalable web applications, and e-commerce solutions with a focus on performance, user experience, and long-term growth.
              </p>

              <div className="d-flex flex-row gap-2 gap-md-3 w-100">
                <Link to="/contact" className="btn-premium flex-fill text-center d-flex align-items-center justify-content-center gap-1 px-1 px-md-4 py-2 py-md-3" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 1rem)', whiteSpace: 'nowrap' }}>
                  Start Project <FaArrowRight size={10} />
                </Link>
                <Link to="/portfolio" className="btn-outline-premium flex-fill text-center d-flex align-items-center justify-content-center gap-1 px-1 px-md-4 py-2 py-md-3" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 1rem)', whiteSpace: 'nowrap' }}>
                  <FaPlay size={10} /> View Portfolio
                </Link>
              </div>

              {/* Stats Row */}
              <div className="d-flex justify-content-around justify-content-lg-start gap-lg-5 w-100 mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {[
                  { number: '10+', label: 'Projects' },
                  { number: '100%', label: 'Responsive' },
                  { number: '24/7', label: 'Support' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.2 }}
                  >
                    <h4 style={{
                      color: '#f57c00',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      marginBottom: '4px'
                    }}>
                      {stat.number}
                    </h4>
                    <span style={{ color: '#888', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)' }}>{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Floating Cards */}
          <div className="col-lg-5 d-none d-lg-block position-relative" style={{ height: '500px' }}>
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                className="glass-card position-absolute"
                style={{
                  padding: '20px 24px',
                  borderRadius: '16px',
                  top: `${15 + i * 22}%`,
                  left: i % 2 === 0 ? '10%' : '40%',
                  width: '200px'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                transition={{
                  opacity: { delay: 0.5 + i * 0.2, duration: 0.5 },
                  scale: { delay: 0.5 + i * 0.2, duration: 0.5 },
                  y: { delay: 1 + i * 0.3, duration: 3, repeat: Infinity, ease: 'easeInOut' }
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(245, 124, 0, 0.2), rgba(245, 124, 0, 0.05))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem'
                    }}
                  >
                    {card.icon}
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>
                    {card.label}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Central Mockup Card */}
            <motion.div
              className="position-absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '280px',
                height: '180px',
                background: 'linear-gradient(135deg, rgba(245, 124, 0, 0.1), rgba(255,255,255,0.02))',
                borderRadius: '20px',
                border: '1px solid rgba(245, 124, 0, 0.2)',
                padding: '24px'
              }}
              initial={{ opacity: 0, rotateY: -15 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="d-flex gap-2 mb-3">
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <div style={{ height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4, width: '80%', marginBottom: 8 }} />
              <div style={{ height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 4, width: '60%', marginBottom: 8 }} />
              <div style={{ height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 4, width: '70%' }} />
              <div className="mt-3 d-flex gap-2">
                <div style={{ height: 30, background: 'rgba(245, 124, 0, 0.3)', borderRadius: 6, width: '40%' }} />
                <div style={{ height: 30, background: 'rgba(255,255,255,0.05)', borderRadius: 6, width: '40%' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
