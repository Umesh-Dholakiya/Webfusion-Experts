import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes, FaUser, FaPhone, FaCommentAlt, FaPaperPlane } from 'react-icons/fa'

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const WHATSAPP_NUMBER = '918849522577' // +91 8849522577

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const saveLead = async (leadData) => {
    // Save to localStorage (backup)
    try {
      const local = JSON.parse(localStorage.getItem('wf_whatsapp_leads') || '[]')
      local.push(leadData)
      localStorage.setItem('wf_whatsapp_leads', JSON.stringify(local))
    } catch (err) {
      console.error('localStorage error:', err)
    }

    // Save to backend API
    const endpoints = [
      '/api/whatsapp-lead',
      'https://webfusion-backend-j0fd.onrender.com/api/whatsapp-lead'
    ]

    for (const ep of endpoints) {
      try {
        const res = await fetch(ep, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData)
        })
        if (res && res.ok) break
      } catch (err) {
        // try next endpoint
      }
    }
  }

  const openWhatsApp = (msg) => {
    const defaultMsg = `Hello WebFusion Experts 👋\n\nI would like to inquire about your web development and digital solutions. Please let me know how we can connect!`
    const encodedMsg = encodeURIComponent(msg || defaultMsg)
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`

    const win = window.open(waUrl, '_blank', 'noopener,noreferrer')
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = waUrl
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) return

    setSubmitting(true)

    const leadData = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      sourcePage: window.location.pathname || '/',
      status: 'New',
      createdAt: new Date().toISOString()
    }

    // Save lead in background
    saveLead(leadData)

    // Build structured WhatsApp message including Name, Phone, and Details
    const waMsg = `Hello WebFusion Experts 👋

I would like to discuss a project with you:

👤 *Name:* ${formData.name.trim()}
📞 *Phone:* ${formData.phone.trim()}
💬 *Requirement:* ${formData.message.trim()}
🌐 *Source:* ${window.location.pathname || '/'}

Please let me know how we can proceed. Thank you!`

    // Open WhatsApp immediately with all structured details
    openWhatsApp(waMsg)

    setSubmitting(false)
    setShowPopup(false)
    setFormData({ name: '', phone: '', message: '' })
  }

  const handleSkip = () => {
    // Save anonymous lead
    const leadData = {
      id: Date.now().toString(),
      name: 'Direct Visitor',
      phone: 'Not Provided',
      message: 'Direct WhatsApp chat',
      sourcePage: window.location.pathname || '/',
      status: 'New',
      createdAt: new Date().toISOString()
    }
    saveLead(leadData)
    setShowPopup(false)
    setFormData({ name: '', phone: '', message: '' })
    openWhatsApp(
      `Hello WebFusion Experts 👋\n\nI would like to inquire about your web development and digital solutions. Please let me know how we can connect!`
    )
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => setShowPopup(true)}
        className="whatsapp-float-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        title="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '24px',
          boxShadow: '0 4px 24px rgba(37, 211, 102, 0.45)',
          zIndex: 999,
          cursor: 'pointer',
          outline: 'none'
        }}
      >
        <FaWhatsapp />
        {/* Pulsing ring */}
        <span style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'rgba(37,211,102,0.3)',
          animation: 'waPulse 2s ease-out infinite'
        }} />
      </motion.button>

      {/* WhatsApp Lead Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              key="wa-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.65)',
                backdropFilter: 'blur(6px)',
                zIndex: 1050
              }}
            />

            {/* Modal */}
            <motion.div
              key="wa-popup"
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
              style={{
                position: 'fixed',
                bottom: '95px',
                right: '24px',
                width: '320px',
                background: '#111',
                border: '1px solid rgba(37,211,102,0.25)',
                borderRadius: '20px',
                padding: '0',
                zIndex: 1060,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,211,102,0.1)'
              }}
            >
              {/* Popup Header */}
              <div style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                padding: '16px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', color: '#fff'
                  }}>
                    <FaWhatsapp />
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', fontFamily: 'Space Grotesk' }}>
                      Chat on WhatsApp
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>
                      Usually replies within minutes
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  style={{
                    background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff',
                    width: '28px', height: '28px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', fontSize: '12px'
                  }}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Popup Form Body */}
              <div style={{ padding: '18px 18px 20px' }}>
                <p style={{ color: '#888', fontSize: '0.82rem', marginBottom: '14px', lineHeight: 1.5 }}>
                  Share your details below to connect with us directly on WhatsApp! 🙌
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {/* Name */}
                  <div style={{ position: 'relative' }}>
                    <span style={{
                      position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
                      color: '#25D366', fontSize: '13px', pointerEvents: 'none'
                    }}><FaUser /></span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%', paddingLeft: '34px', paddingRight: '12px',
                        padding: '10px 12px 10px 34px',
                        background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px', color: '#fff', fontSize: '0.85rem', outline: 'none',
                        fontFamily: 'inherit', boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#25D366'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  {/* Phone */}
                  <div style={{ position: 'relative' }}>
                    <span style={{
                      position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
                      color: '#25D366', fontSize: '13px', pointerEvents: 'none'
                    }}><FaPhone /></span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 34px',
                        background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px', color: '#fff', fontSize: '0.85rem', outline: 'none',
                        fontFamily: 'inherit', boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#25D366'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ position: 'relative' }}>
                    <span style={{
                      position: 'absolute', left: '12px', top: '12px',
                      color: '#25D366', fontSize: '13px', pointerEvents: 'none'
                    }}><FaCommentAlt /></span>
                    <textarea
                      name="message"
                      placeholder="How can we help you? *"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 34px',
                        background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px', color: '#fff', fontSize: '0.85rem', outline: 'none',
                        fontFamily: 'inherit', resize: 'none', boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#25D366'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      width: '100%', padding: '11px',
                      background: 'linear-gradient(135deg, #25D366, #128C7E)',
                      border: 'none', borderRadius: '10px',
                      color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                      cursor: 'pointer', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', gap: '8px', fontFamily: 'Space Grotesk'
                    }}
                  >
                    <FaPaperPlane />
                    {submitting ? 'Connecting...' : 'Send on WhatsApp'}
                  </motion.button>

                  {/* Skip link */}
                  <button
                    type="button"
                    onClick={handleSkip}
                    style={{
                      background: 'none', border: 'none', color: '#555',
                      fontSize: '0.78rem', cursor: 'pointer', textDecoration: 'underline',
                      padding: '2px', fontFamily: 'inherit'
                    }}
                  >
                    Skip — Open WhatsApp directly
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Pulse Animation */}
      <style>{`
        @keyframes waPulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </>
  )
}

export default WhatsAppButton
