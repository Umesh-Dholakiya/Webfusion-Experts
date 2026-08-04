import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setSubmitting(true)
    setStatusMsg('')

    const subscription = {
      id: Date.now().toString(),
      email: newsletterEmail,
      createdAt: new Date().toISOString()
    }

    // Save locally
    try {
      const localNewsletter = JSON.parse(localStorage.getItem('wf_newsletter') || '[]')
      localNewsletter.push(subscription)
      localStorage.setItem('wf_newsletter', JSON.stringify(localNewsletter))
    } catch (err) {
      console.error('Error saving local subscription:', err)
    }

    // Post to API
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
      const response = await fetch(`${apiUrl}/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription)
      })

      if (response.ok) {
        setStatusMsg('Thank you for subscribing!')
        setNewsletterEmail('')
      } else {
        throw new Error('Server error')
      }
    } catch (err) {
      console.warn('Backend server offline. Subscription saved in web cache.', err)
      setStatusMsg('Subscribed! (Saved in local cache)')
      setNewsletterEmail('')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <footer style={{
      background: '#0b0b0b',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      paddingTop: '80px'
    }}>
      <div className="container">
        <div className="row g-5">
          {/* Brand Column */}
          <div className="col-lg-4">
            <Link to="/" className="d-flex align-items-center gap-2 mb-4">
              <img 
                src="/header_logo.png" 
                alt="WebFusion Experts" 
                style={{ height: '60px', width: 'auto' }}
              />
            </Link>
            <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '320px' }}>
              WebFusion Experts is a modern digital agency focused on building premium websites, 
              scalable applications, and powerful digital experiences for startups and businesses worldwide.
            </p>
            <div className="d-flex gap-3 mt-4">
              {[
                { Icon: FaLinkedin, url: '#' },
                { Icon: FaInstagram, url: '#' }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  whileHover={{ scale: 1.2, color: '#f57c00' }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cfcfcf',
                    fontSize: '18px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <item.Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4">
            <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Quick Links
            </h5>
            <ul className="list-unstyled" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    style={{ color: '#888', fontSize: '0.9rem', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.target.style.color = '#f57c00'}
                    onMouseLeave={(e) => e.target.style.color = '#888'}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4">
            <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Services
            </h5>
            <ul className="list-unstyled" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Web Development', 'Shopify Development', 'Custom CRM Systems', 'Mobile App Development', 'SEO Optimization'].map((item) => (
                <li key={item}>
                  <span style={{ color: '#888', fontSize: '0.9rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-4">
            <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Newsletter
            </h5>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Subscribe for the latest updates and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="d-flex flex-column gap-2">
              <div className="d-flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="form-control-custom flex-grow-1"
                  style={{ fontSize: '0.85rem', padding: '10px 14px' }}
                  required
                />
                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="btn-premium" 
                  style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                >
                  {submitting ? '...' : 'Join'}
                </button>
              </div>
              {statusMsg && (
                <span style={{ color: '#f57c00', fontSize: '0.8rem', paddingLeft: '2px' }}>
                  {statusMsg}
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between py-4 mt-5" style={{
          borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
          <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} WebFusion Experts. All rights reserved.
          </p>
          <div className="d-flex gap-4 mt-3 mt-md-0">
            <Link to="/privacy-policy" style={{ color: '#666', fontSize: '0.85rem' }}>Privacy Policy</Link>
            <Link to="/terms-conditions" style={{ color: '#666', fontSize: '0.85rem' }}>Terms</Link>
            <Link to="/careers" style={{ color: '#666', fontSize: '0.85rem' }}>Careers</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'fixed',
            bottom: '95px',
            right: '35px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f57c00, #e65100)',
            border: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 998,
            boxShadow: '0 4px 20px rgba(245, 124, 0, 0.3)'
          }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  )
}

export default Footer
