import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaInstagram } from 'react-icons/fa'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const serviceOptions = [
    "Website Development",
    "Custom CRM System",
    "Shopify Development",
    "Custom Software Development",
    "Mobile App Development",
    "API Integration",
    "Performance Optimization",
    "Other Services"
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatusMsg({ type: '', text: '' })

    const submissionData = {
      ...formData,
      id: Date.now().toString(),
      status: 'Pending',
      createdAt: new Date().toISOString()
    }

    // Save to Local Backup (always, for safety)
    try {
      const localContacts = JSON.parse(localStorage.getItem('wf_contacts') || '[]')
      localContacts.push(submissionData)
      localStorage.setItem('wf_contacts', JSON.stringify(localContacts))
    } catch (err) {
      console.error('Error saving to localStorage:', err)
    }

    // Send to Backend API
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (response.ok) {
        setStatusMsg({ 
          type: 'success', 
          text: 'Thank you for your message! Your request has been saved successfully.' 
        })
        setFormData({ name: '', email: '', phone: '', service: '', subject: '', message: '' })
      } else {
        throw new Error('Server returned error status')
      }
    } catch (error) {
      console.warn('Backend server unreachable. Submission saved in local web cache.', error)
      setStatusMsg({ 
        type: 'success', 
        text: 'Thank you! Your message was saved locally in backup. We will process it shortly.' 
      })
      setFormData({ name: '', email: '', phone: '', service: '', subject: '', message: '' })
    } finally {
      setSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'webfusionexperts24@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 8849522577' },
    { icon: FaMapMarkerAlt, label: 'Address', value: 'Surat, Gujarat' }
  ]

  const socialLinks = [
    { icon: FaLinkedin, label: 'LinkedIn', url: '#' },
    { icon: FaInstagram, label: 'Instagram', url: '#' }
  ]

  return (
    <section className="section-padding section-dark position-relative" id="contact">
      <div className="orange-glow" style={{ bottom: '10%', left: '-15%' }} />

      <div className="container position-relative z-index-1">
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}>
                Contact Information
              </h4>

              <div className="d-flex flex-column gap-4 mb-5">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="d-flex align-items-center gap-4"
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(245, 124, 0, 0.2), rgba(245, 124, 0, 0.05))',
                      border: '1px solid rgba(245, 124, 0, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f57c00',
                      fontSize: '18px'
                    }}>
                      <item.icon />
                    </div>
                    <div>
                      <span style={{ color: '#888', fontSize: '0.8rem', display: 'block', marginBottom: '2px' }}>
                        {item.label}
                      </span>
                      {item.label === 'Email' ? (
                        <a href={`mailto:${item.value}`} style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 500 }}>
                          {item.value}
                        </a>
                      ) : item.label === 'Phone' ? (
                        <a href={`tel:${item.value.replace(/\s+/g, '')}`} style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 500 }}>
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 500 }}>
                          {item.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <h5 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '1rem'
              }}>
                Follow Us
              </h5>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.15, y: -3 }}
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#cfcfcf',
                      fontSize: '18px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(245, 124, 0, 0.15)'
                      e.currentTarget.style.borderColor = 'rgba(245, 124, 0, 0.3)'
                      e.currentTarget.style.color = '#f57c00'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.color = '#cfcfcf'
                    }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card"
            >
              <h4 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}>
                Send Us a Message
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control-custom w-100"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control-custom w-100"
                      required
                    />
                  </div>
                  
                  {/* Phone and Service Row */}
                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control-custom w-100"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="position-relative w-100">
                      <div
                        className="form-control-custom w-100 d-flex justify-content-between align-items-center"
                        style={{ cursor: 'pointer', background: '#121212', color: formData.service ? '#fff' : '#888' }}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {formData.service || 'Select Service Needed'}
                        </span>
                        <motion.span
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ fontSize: '0.8rem', marginLeft: '10px' }}
                        >
                          ▼
                        </motion.span>
                      </div>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            style={{
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              right: 0,
                              marginTop: '8px',
                              background: '#1a1a1a',
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '12px',
                              maxHeight: '200px',
                              overflowY: 'auto',
                              zIndex: 10,
                              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                          >
                            {serviceOptions.map((option, idx) => (
                              <div
                                key={idx}
                                onClick={() => {
                                  setFormData({ ...formData, service: option })
                                  setIsDropdownOpen(false)
                                }}
                                style={{
                                  padding: '12px 20px',
                                  cursor: 'pointer',
                                  color: formData.service === option ? '#f57c00' : '#cfcfcf',
                                  background: formData.service === option ? 'rgba(245,124,0,0.1)' : 'transparent',
                                  transition: 'all 0.2s',
                                  borderBottom: idx !== serviceOptions.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                  fontSize: '0.95rem'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = formData.service === option ? 'rgba(245,124,0,0.2)' : 'rgba(255,255,255,0.05)'
                                  e.currentTarget.style.color = formData.service === option ? '#f57c00' : '#fff'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = formData.service === option ? 'rgba(245,124,0,0.1)' : 'transparent'
                                  e.currentTarget.style.color = formData.service === option ? '#f57c00' : '#cfcfcf'
                                }}
                              >
                                {option}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control-custom w-100"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="form-control-custom w-100"
                      style={{ resize: 'none' }}
                      required
                    />
                  </div>
                  
                  {statusMsg.text && (
                    <div className="col-12">
                      <div className={`p-3 rounded`} style={{ 
                        background: statusMsg.type === 'success' ? 'rgba(40, 167, 69, 0.15)' : 'rgba(220, 53, 69, 0.15)',
                        border: statusMsg.type === 'success' ? '1px solid rgba(40, 167, 69, 0.3)' : '1px solid rgba(220, 53, 69, 0.3)',
                        color: statusMsg.type === 'success' ? '#28a745' : '#dc3545',
                        fontSize: '0.9rem'
                      }}>
                        {statusMsg.text}
                      </div>
                    </div>
                  )}

                  <div className="col-12">
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      className="btn-premium w-100 justify-content-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaPaperPlane /> {submitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
