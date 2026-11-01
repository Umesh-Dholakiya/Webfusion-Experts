import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const PageHeader = ({
  badge = "WEBFUSION EXPERTS",
  breadcrumb = "",
  title = (
    <>
      We Build <span style={{ color: '#f57c00' }}>Digital</span> Experiences That Matter
    </>
  ),
  subtitle = "Modern websites, web applications, e-commerce solutions, and custom digital products built for growth.",
  highlights = [],
  showGrid = true,
  showGlow = true,
  className = "",
  style = {}
}) => {
  return (
    <section 
      className={`position-relative text-center overflow-hidden ${className}`}
      style={{
        backgroundColor: '#090909',
        paddingTop: '165px',
        paddingBottom: highlights && highlights.length > 0 ? '70px' : '90px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        ...style
      }}
    >
      {/* 1. Cyber Ambient Grid Background with Radial Mask */}
      {showGrid && (
        <div 
          className="position-absolute w-100 h-100 pointer-events-none"
          style={{
            top: 0,
            left: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 65% at 50% 35%, #000 25%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 35%, #000 25%, transparent 95%)',
            zIndex: 0
          }}
        />
      )}

      {/* 2. Ambient Orange Aura Spotlight Glow - Positioned safely below Navbar around Content */}
      {showGlow && (
        <div 
          className="position-absolute pointer-events-none"
          style={{
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '750px',
            height: '420px',
            background: 'radial-gradient(ellipse at 50% 40%, rgba(245, 124, 0, 0.16) 0%, rgba(245, 124, 0, 0.04) 50%, transparent 75%)',
            filter: 'blur(50px)',
            zIndex: 0
          }}
        />
      )}


      {/* 3. Floating Micro-Glow Particles */}
      <motion.div
        className="position-absolute pointer-events-none"
        animate={{
          y: [0, -18, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: '25%',
          left: '18%',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(245, 124, 0, 0.1) 0%, transparent 70%)',
          filter: 'blur(35px)',
          zIndex: 0
        }}
      />
      <motion.div
        className="position-absolute pointer-events-none"
        animate={{
          y: [0, 18, 0],
          opacity: [0.15, 0.45, 0.15]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          top: '30%',
          right: '18%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(245, 124, 0, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Breadcrumb Navigation (if provided) */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="d-flex align-items-center justify-content-center gap-2 mb-3"
            style={{ fontSize: '0.85rem' }}
          >
            <Link to="/" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}>
              Home
            </Link>
            <FaChevronRight size={10} style={{ color: 'rgba(245, 124, 0, 0.6)' }} />
            <span style={{ color: '#f57c00', fontWeight: 500 }}>
              {breadcrumb}
            </span>
          </motion.div>
        )}

        {/* Pulsing Active Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill"
            style={{
              background: 'rgba(245, 124, 0, 0.08)',
              border: '1px solid rgba(245, 124, 0, 0.25)',
              boxShadow: '0 0 25px rgba(245, 124, 0, 0.15)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
          >
            {/* Radar Pulse Dot */}
            <span className="position-relative d-inline-flex" style={{ width: '8px', height: '8px' }}>
              <span 
                className="position-absolute w-100 h-100 rounded-circle"
                style={{
                  background: '#f57c00',
                  opacity: 0.75,
                  animation: 'pulse 1.8s cubic-bezier(0, 0, 0.2, 1) infinite'
                }}
              />
              <span 
                className="position-relative rounded-circle"
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#f57c00'
                }}
              />
            </span>
            <span style={{
              color: '#f57c00',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              {badge}
            </span>
          </motion.div>
        )}

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.4rem, 5.2vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.5px',
            color: '#ffffff',
            maxWidth: '920px',
            margin: '0 auto 1.25rem'
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle / Description */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: '#cfcfcf',
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              lineHeight: 1.8,
              maxWidth: '780px',
              margin: '0 auto'
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Highlights Bar ("At a Glance" Interactive Cards) */}
        {highlights && highlights.length > 0 && (
          <div className="mt-5 pt-4">
            <div className="row g-3 justify-content-center">
              {highlights.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={index}
                    className={`col-12 col-sm-6 ${highlights.length <= 3 ? 'col-lg-4' : 'col-lg-3'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
                    whileHover={{ y: -4 }}
                  >
                    <div 
                      className="h-100 p-4 rounded-4 text-start position-relative overflow-hidden"
                      style={{
                        background: 'rgba(18, 18, 18, 0.65)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.07)',
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.45)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        {IconComp ? (
                          <div style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '12px',
                            background: 'rgba(245, 124, 0, 0.1)',
                            border: '1px solid rgba(245, 124, 0, 0.25)',
                            color: '#f57c00',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px'
                          }}>
                            <IconComp />
                          </div>
                        ) : (
                          <span style={{
                            color: '#f57c00',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '1px'
                          }}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        )}
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'rgba(245, 124, 0, 0.5)',
                          boxShadow: '0 0 8px rgba(245, 124, 0, 0.8)'
                        }} />
                      </div>

                      <h4 style={{
                        color: '#ffffff',
                        fontSize: '1.08rem',
                        fontWeight: 600,
                        marginBottom: '0.45rem',
                        fontFamily: "'Space Grotesk', sans-serif"
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        color: '#9e9e9e',
                        fontSize: '0.88rem',
                        lineHeight: 1.55,
                        margin: 0
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
