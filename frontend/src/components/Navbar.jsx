import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useScrollPosition } from '../hooks/useScrollPosition'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const location = useLocation()

  const isScrolled = scrollPosition > 50
  const isHome = location.pathname === '/'

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    // Removed Tech and Reviews
    { path: '/contact', label: 'Contact' }
  ]

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? '12px 0' : '18px 0',
          background: isScrolled 
            ? 'rgba(10, 10, 10, 0.92)' 
            : 'rgba(9, 9, 9, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* Logo */}
            <Link to="/" className="d-flex align-items-center gap-2">
              <img 
                src="/header_logo.png" 
                alt="WebFusion Experts" 
                style={{ height: '60px', width: 'auto' }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="d-none d-lg-flex align-items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="nav-link-item"
                  style={{
                    padding: '8px 16px',
                    color: location.pathname === link.path ? '#f57c00' : '#cfcfcf',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-underline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        background: '#f57c00',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              ))}

              <Link to="/contact" className="btn-premium ms-3" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
                Start Project
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="d-lg-none"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '300px',
              background: 'rgba(18, 18, 18, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 999,
              padding: '100px 30px 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              <FaTimes />
            </button>

            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    color: location.pathname === link.path ? '#f57c00' : '#fff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: '20px' }}
            >
              <Link to="/contact" className="btn-premium w-100 text-center">
                Start Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
