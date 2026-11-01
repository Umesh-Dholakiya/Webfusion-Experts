import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaLock, FaEnvelope, FaClock, FaCheckCircle,
  FaTrash, FaDownload, FaSyncAlt, FaSignOutAlt,
  FaWhatsapp, FaPhone, FaSearch, FaFilter, FaBell, FaExclamationTriangle
} from 'react-icons/fa'

// ─── Custom Confirm Modal ─────────────────────────────────────────────────────
const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        key="confirm-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '20px'
        }}
        onClick={onCancel}
      >
        <motion.div
          key="confirm-box"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', damping: 22, stiffness: 320 }}
          style={{
            background: 'rgba(18,18,20,0.98)',
            border: '1px solid rgba(220,53,69,0.25)',
            borderRadius: '20px',
            padding: '2rem 2rem 1.6rem',
            maxWidth: '400px',
            width: '100%',
            boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
            textAlign: 'center',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Icon */}
          <div style={{
            width: '56px', height: '56px', borderRadius: '16px',
            background: 'rgba(220,53,69,0.12)', border: '1px solid rgba(220,53,69,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.2rem', color: '#dc3545', fontSize: '22px'
          }}>
            <FaExclamationTriangle />
          </div>

          {/* Title */}
          <div style={{
            fontFamily: 'Space Grotesk', fontSize: '1.1rem', fontWeight: 700,
            color: '#fff', marginBottom: '0.5rem'
          }}>
            Confirm Action
          </div>

          {/* Message */}
          <p style={{
            color: '#888', fontSize: '0.88rem', lineHeight: 1.6,
            marginBottom: '1.6rem', margin: '0 0 1.6rem'
          }}>
            {message}
          </p>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.4rem' }} />

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onCancel}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#aaa', borderRadius: '12px',
                padding: '11px 20px', cursor: 'pointer',
                fontSize: '0.88rem', fontWeight: 600,
                fontFamily: 'Space Grotesk',
              }}
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onConfirm}
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, #dc3545, #c82333)',
                border: 'none',
                color: '#fff', borderRadius: '12px',
                padding: '11px 20px', cursor: 'pointer',
                fontSize: '0.88rem', fontWeight: 700,
                fontFamily: 'Space Grotesk',
                boxShadow: '0 4px 16px rgba(220,53,69,0.35)'
              }}
            >
              Delete
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

// ─── Expandable Message Component ────────────────────────────────────────────
const ExpandableMessage = ({ text }) => {
  const [expanded, setExpanded] = useState(false)
  const maxLen = 120

  if (!text || text.length <= maxLen) {
    return <p style={{ color: '#888', fontSize: '0.8rem', margin: 0, wordBreak: 'break-word' }}>{text}</p>
  }

  return (
    <p style={{ color: '#888', fontSize: '0.8rem', margin: 0, wordBreak: 'break-word' }}>
      {expanded ? text : `${text.slice(0, maxLen)}...`}
      <button
        onClick={(e) => { e.preventDefault(); setExpanded(!expanded) }}
        style={{
          background: 'none', border: 'none', color: '#f57c00',
          cursor: 'pointer', padding: '0 5px', fontSize: '0.8rem',
          fontWeight: 600, textDecoration: 'underline', outline: 'none'
        }}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </button>
    </p>
  )
}

// ─── Status Badge ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status, type = 'contact' }) => {
  const waColors = {
    'New':       { bg: 'rgba(37,211,102,0.12)',  color: '#25D366',  border: 'rgba(37,211,102,0.3)' },
    'Replied':   { bg: 'rgba(0,188,212,0.12)',   color: '#00bcd4',  border: 'rgba(0,188,212,0.3)' },
    'Converted': { bg: 'rgba(40,167,69,0.15)',   color: '#28a745',  border: 'rgba(40,167,69,0.3)' },
    'Closed':    { bg: 'rgba(220,53,69,0.12)',   color: '#dc3545',  border: 'rgba(220,53,69,0.3)' },
  }
  const contactColors = {
    'Pending':     { bg: 'rgba(255,255,255,0.05)', color: '#cfcfcf', border: 'rgba(255,255,255,0.1)' },
    'Contacted':   { bg: 'rgba(0,188,212,0.12)',   color: '#00bcd4', border: 'rgba(0,188,212,0.3)' },
    'In Progress': { bg: 'rgba(255,152,0,0.12)',   color: '#ff9800', border: 'rgba(255,152,0,0.3)' },
    'Completed':   { bg: 'rgba(40,167,69,0.15)',   color: '#28a745', border: 'rgba(40,167,69,0.3)' },
    'Cancelled':   { bg: 'rgba(220,53,69,0.12)',   color: '#dc3545', border: 'rgba(220,53,69,0.3)' },
  }

  const palette = type === 'whatsapp' ? waColors : contactColors
  const c = palette[status] || palette['Pending'] || palette['New']

  return (
    <span style={{
      padding: '4px 10px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600,
      background: c.bg, color: c.color, border: `1px solid ${c.border}`,
      whiteSpace: 'nowrap', display: 'inline-block'
    }}>
      {status}
    </span>
  )
}

// ─── Main AdminDashboard ──────────────────────────────────────────────────────
const AdminDashboard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState('contacts')

  // ── Custom Confirm Modal State ──────────────────────────────────────────────
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, message: '', onConfirm: null })

  const showConfirm = (message) => new Promise((resolve) => {
    setConfirmModal({ isOpen: true, message, onConfirm: () => { setConfirmModal(s => ({ ...s, isOpen: false })); resolve(true) } })
  })

  const closeConfirm = () => {
    setConfirmModal(s => ({ ...s, isOpen: false }))
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [contacts, setContacts] = useState([])
  const [whatsappLeads, setWhatsappLeads] = useState([])
  const [loading, setLoading] = useState(false)
  const [syncStatus, setSyncStatus] = useState('')
  const [newLeadAlert, setNewLeadAlert] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')
  const [serviceFilter, setServiceFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  // ── Auth ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    const session = sessionStorage.getItem('wf_admin_auth')
    if (session === 'true') {
      setIsAuthenticated(true)
      fetchData()
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'WebFusion@Portal') {
      setIsAuthenticated(true)
      sessionStorage.setItem('wf_admin_auth', 'true')
      setLoginError('')
      fetchData()
    } else {
      setLoginError('Incorrect password. Please try again.')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('wf_admin_auth')
    setPassword('')
  }

  // ── Fetch Data ────────────────────────────────────────────────────────────
  const fetchData = async () => {
    setLoading(true)
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      const response = await fetch(`${apiUrl}/submissions`)
      if (response.ok) {
        const data = await response.json()

        // Clean deduplicate contacts by ID / _id
        const uniqueContacts = []
        const seenContacts = new Set()
        for (const c of (data.contacts || [])) {
          const key = c._id || c.id
          if (key && !seenContacts.has(key)) {
            seenContacts.add(key)
            uniqueContacts.push(c)
          }
        }

        // Clean deduplicate WhatsApp leads by ID / _id
        const uniqueWALeads = []
        const seenWA = new Set()
        for (const w of (data.whatsappLeads || [])) {
          const key = w._id || w.id
          if (key && !seenWA.has(key)) {
            seenWA.add(key)
            uniqueWALeads.push(w)
          }
        }

        setContacts(uniqueContacts)
        setWhatsappLeads(uniqueWALeads)
        localStorage.setItem('wf_contacts', JSON.stringify(uniqueContacts))
        localStorage.setItem('wf_whatsapp_leads', JSON.stringify(uniqueWALeads))

        // New lead alert: check if any WhatsApp lead is newer than last visit
        const lastVisit = localStorage.getItem('wf_admin_last_visit')
        if (lastVisit && uniqueWALeads.length > 0) {
          const hasNew = uniqueWALeads.some(l => new Date(l.createdAt) > new Date(lastVisit))
          if (hasNew) setNewLeadAlert(true)
        }
        localStorage.setItem('wf_admin_last_visit', new Date().toISOString())
      } else {
        throw new Error('API non-OK')
      }
    } catch (err) {
      console.warn('API unavailable. Falling back to localStorage.', err)
      setContacts(JSON.parse(localStorage.getItem('wf_contacts') || '[]'))
      setWhatsappLeads(JSON.parse(localStorage.getItem('wf_whatsapp_leads') || '[]'))
    } finally {
      setLoading(false)
    }
  }

  // ── Status Changes ─────────────────────────────────────────────────────────
  const handleContactStatusChange = async (id, newStatus) => {
    const updated = contacts.map(c => (c.id === id || c._id === id) ? { ...c, status: newStatus } : c)
    setContacts(updated)
    localStorage.setItem('wf_contacts', JSON.stringify(updated))
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      await fetch(`${apiUrl}/submissions/contact/${id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
    } catch (err) { console.warn('Server offline.', err) }
  }

  const handleWAStatusChange = async (id, newStatus) => {
    const updated = whatsappLeads.map(l => (l.id === id || l._id === id) ? { ...l, status: newStatus } : l)
    setWhatsappLeads(updated)
    localStorage.setItem('wf_whatsapp_leads', JSON.stringify(updated))
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      await fetch(`${apiUrl}/submissions/whatsapp/${id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
    } catch (err) { console.warn('Server offline.', err) }
  }

  // ── Deletes ────────────────────────────────────────────────────────────────
  const handleDeleteContact = async (id) => {
    const confirmed = await showConfirm('Are you sure you want to delete this inquiry? This action cannot be undone.')
    if (!confirmed) return
    const updated = contacts.filter(c => c.id !== id && c._id !== id)
    setContacts(updated)
    localStorage.setItem('wf_contacts', JSON.stringify(updated))
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      const res = await fetch(`${apiUrl}/submissions/contact/${id}`, { method: 'DELETE' })
      if (!res.ok) {
        console.error('Delete inquiry failed on server with status:', res.status)
      }
    } catch (err) { console.warn('Server offline.', err) }
  }

  const handleDeleteWA = async (id) => {
    const confirmed = await showConfirm('Are you sure you want to delete this WhatsApp lead? This action cannot be undone.')
    if (!confirmed) return
    const updated = whatsappLeads.filter(l => l.id !== id && l._id !== id)
    setWhatsappLeads(updated)
    localStorage.setItem('wf_whatsapp_leads', JSON.stringify(updated))
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      await fetch(`${apiUrl}/submissions/whatsapp/${id}`, { method: 'DELETE' })
    } catch (err) { console.warn('Server offline.', err) }
  }

  // ── Sync ───────────────────────────────────────────────────────────────────
  const syncToServer = async () => {
    setSyncStatus('Syncing with server...')
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      // 1. Fetch current server submissions
      const serverRes = await fetch(`${apiUrl}/submissions`)
      if (!serverRes.ok) throw new Error('Cannot reach server')
      const serverData = await serverRes.json()

      const serverContactIds = new Set((serverData.contacts || []).map(c => c.id || c._id))
      const serverWAIds = new Set((serverData.whatsappLeads || []).map(w => w.id || w._id))

      const localContacts = JSON.parse(localStorage.getItem('wf_contacts') || '[]')
      const localWA = JSON.parse(localStorage.getItem('wf_whatsapp_leads') || '[]')

      let syncedCount = 0

      // 2. Only push genuinely new local items that do not exist on the server
      for (const item of localContacts) {
        const id = item.id || item._id
        if (id && !serverContactIds.has(id)) {
          await fetch(`${apiUrl}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
          })
          syncedCount++
        }
      }

      for (const item of localWA) {
        const id = item.id || item._id
        if (id && !serverWAIds.has(id)) {
          await fetch(`${apiUrl}/whatsapp-lead`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
          })
          syncedCount++
        }
      }

      // 3. Refresh data from server to guarantee sync
      await fetchData()
      if (syncedCount > 0) {
        setSyncStatus(`✅ Synced ${syncedCount} item(s) to server.`)
      } else {
        setSyncStatus('✅ Everything is up to date!')
      }
    } catch (err) {
      console.error('Sync failed:', err)
      setSyncStatus('❌ Sync failed: backend unreachable.')
    } finally {
      setTimeout(() => setSyncStatus(''), 4000)
    }
  }

  // ── CSV Export ─────────────────────────────────────────────────────────────
  const exportToCSV = (data, filename) => {
    if (!data || !data.length) { alert('No data to export.'); return }
    const headers = Object.keys(data[0]).join(',')
    const rows = data.map(item =>
      Object.values(item).map(val => {
        const s = typeof val === 'object' ? JSON.stringify(val) : String(val)
        return `"${s.replace(/"/g, '""')}"`
      }).join(',')
    )
    const csv = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n')
    const link = document.createElement('a')
    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // ── Filters ────────────────────────────────────────────────────────────────
  const filteredContacts = contacts.filter(item => {
    const q = searchQuery.toLowerCase()
    const matchSearch =
      item.name?.toLowerCase().includes(q) ||
      item.email?.toLowerCase().includes(q) ||
      item.phone?.toLowerCase().includes(q) ||
      item.subject?.toLowerCase().includes(q) ||
      item.message?.toLowerCase().includes(q)
    const matchService = serviceFilter === 'All' || item.service === serviceFilter
    const matchStatus = statusFilter === 'All' || item.status === statusFilter
    return matchSearch && matchService && matchStatus
  })

  const filteredWA = whatsappLeads.filter(item => {
    const q = searchQuery.toLowerCase()
    return (
      item.name?.toLowerCase().includes(q) ||
      item.phone?.toLowerCase().includes(q) ||
      item.message?.toLowerCase().includes(q)
    )
  })

  // ── Stats ──────────────────────────────────────────────────────────────────
  const stats = {
    total: contacts.length,
    pending: contacts.filter(c => c.status === 'Pending').length,
    contacted: contacts.filter(c => ['Contacted', 'Completed'].includes(c.status)).length,
    waLeads: whatsappLeads.length,
    waNew: whatsappLeads.filter(l => l.status === 'New').length
  }

  // ── Date Format ────────────────────────────────────────────────────────────
  const formatDate = (item) => {
    const v = item.createdAt || item.date || item.timestamp
    if (v) {
      try { const d = new Date(v); if (!isNaN(d.getTime())) return d.toLocaleString() } catch (e) {}
    }
    if (item.id && /^\d{13}$/.test(String(item.id))) {
      try { const d = new Date(Number(item.id)); if (!isNaN(d.getTime())) return d.toLocaleString() } catch (e) {}
    }
    return 'N/A'
  }

  // ════════════════════════════════════════════════════════
  // LOGIN SCREEN
  // ════════════════════════════════════════════════════════
  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '100vh', background: '#080808',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* BG blobs */}
        <div style={{
          position: 'absolute', width: '500px', height: '500px', top: '-100px', left: '-150px',
          background: 'radial-gradient(circle, rgba(245,124,0,0.06) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px', bottom: '-100px', right: '-100px',
          background: 'radial-gradient(circle, rgba(37,211,102,0.05) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(60px)'
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100%', maxWidth: '420px', zIndex: 2,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px', padding: '3rem 2.5rem',
            backdropFilter: 'blur(20px)', textAlign: 'center',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5)'
          }}
        >
          <div style={{
            width: '64px', height: '64px', borderRadius: '18px',
            background: 'rgba(245,124,0,0.12)', border: '1px solid rgba(245,124,0,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem', color: '#f57c00', fontSize: '26px'
          }}>
            <FaLock />
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.9rem', fontWeight: 700, marginBottom: '0.4rem' }}>
            Admin Portal
          </h2>
          <p style={{ color: '#666', fontSize: '0.88rem', marginBottom: '2.2rem' }}>
            WebFusion Experts — Management Console
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="password"
              placeholder="Enter Passcode"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px', color: '#fff', padding: '14px 18px',
                textAlign: 'center', letterSpacing: '6px', fontSize: '1.1rem',
                outline: 'none', fontFamily: 'inherit', width: '100%'
              }}
              required autoFocus
            />
            {loginError && (
              <span style={{
                color: '#dc3545', fontSize: '0.85rem', padding: '10px',
                background: 'rgba(220,53,69,0.1)', borderRadius: '8px',
                border: '1px solid rgba(220,53,69,0.2)'
              }}>
                {loginError}
              </span>
            )}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(135deg, #f57c00, #ff9800)',
                border: 'none', borderRadius: '12px', color: '#fff',
                padding: '14px', fontWeight: 700, fontSize: '1rem',
                cursor: 'pointer', fontFamily: 'Space Grotesk',
                boxShadow: '0 4px 20px rgba(245,124,0,0.3)'
              }}
            >
              Verify & Enter
            </motion.button>
          </form>
        </motion.div>
      </div>
    )
  }

  // ════════════════════════════════════════════════════════
  // DASHBOARD TABS CONFIG
  // ════════════════════════════════════════════════════════
  const tabs = [
    {
      id: 'contacts', label: 'Contact Inquiries',
      icon: <FaEnvelope />, count: filteredContacts.length,
      color: '#f57c00'
    },
    {
      id: 'whatsapp', label: 'WhatsApp Leads',
      icon: <FaWhatsapp />, count: filteredWA.length,
      color: '#25D366', badge: stats.waNew > 0 ? stats.waNew : null
    }
  ]

  // ════════════════════════════════════════════════════════
  // DASHBOARD MAIN RENDER
  // ════════════════════════════════════════════════════════
  return (
    <div style={{ minHeight: '100vh', background: '#080808', paddingTop: isMobile ? '60px' : '72px', paddingBottom: '80px', color: '#fff' }}>

      {/* ── Fixed Admin Header ── */}
      <div style={{
        background: 'rgba(8,8,8,0.92)', borderBottom: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        padding: '0', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99,
        height: isMobile ? '60px' : '72px'
      }}>
        <div style={{
          maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px',
          height: isMobile ? '60px' : '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '14px' }}>
            <img src="/header_logo.png" alt="WebFusion" style={{ height: isMobile ? '30px' : '42px', width: 'auto' }} />
            {!isMobile && (
              <>
                <div style={{
                  height: '28px', width: '1px', background: 'rgba(255,255,255,0.1)'
                }} />
                <div>
                  <div style={{ color: '#f57c00', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '1.5px' }}>
                    ADMIN PORTAL
                  </div>
                  <div style={{ color: '#555', fontSize: '0.72rem', letterSpacing: '0.5px' }}>
                    WebFusion Experts — Management Console
                  </div>
                </div>
              </>
            )}
            {isMobile && (
              <span style={{
                background: 'rgba(245,124,0,0.12)', border: '1px solid rgba(245,124,0,0.3)',
                color: '#f57c00', padding: '2px 8px', borderRadius: '6px',
                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.5px', fontFamily: 'Space Grotesk'
              }}>
                PORTAL
              </span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '6px' : '10px' }}>
            {newLeadAlert && (
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)',
                  color: '#25D366', padding: isMobile ? '5px 8px' : '6px 14px', borderRadius: '20px',
                  fontSize: isMobile ? '0.7rem' : '0.78rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => { setActiveTab('whatsapp'); setNewLeadAlert(false) }}
              >
                <FaBell /> {!isMobile && 'New WhatsApp Leads!'}
              </motion.div>
            )}
            <button
              onClick={handleLogout}
              style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#888', padding: isMobile ? '6px 10px' : '8px 16px', borderRadius: '10px',
                cursor: 'pointer', fontSize: isMobile ? '0.75rem' : '0.82rem', display: 'flex',
                alignItems: 'center', gap: '6px', fontFamily: 'inherit'
              }}
              title="Logout"
            >
              <FaSignOutAlt /> {!isMobile && 'Logout'}
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '20px 16px 0' : '32px 24px 0' }}>

        {/* ── Page Title ── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between', gap: isMobile ? '12px' : '16px', marginBottom: isMobile ? '20px' : '32px'
        }}>
          <div>
            <div style={{ color: '#555', fontSize: '0.78rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
              Management Console
            </div>
            <h1 style={{ fontFamily: 'Space Grotesk', fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 800, margin: 0 }}>
              WebFusion{' '}
              <span style={{ background: 'linear-gradient(135deg, #f57c00, #ff9800)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Dashboard
              </span>
            </h1>
          </div>
          <div style={{ display: 'flex', gap: '10px', width: isMobile ? '100%' : 'auto' }}>
            <button
              onClick={syncToServer}
              style={{
                flex: isMobile ? 1 : 'none', justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#cfcfcf', padding: '10px 18px', borderRadius: '10px',
                cursor: 'pointer', fontSize: '0.83rem', display: 'flex',
                alignItems: 'center', gap: '7px', fontFamily: 'inherit'
              }}
            >
              <FaSyncAlt /> Sync Server
            </button>
            <button
              onClick={fetchData}
              style={{
                flex: isMobile ? 1 : 'none', justifyContent: 'center',
                background: 'rgba(245,124,0,0.1)', border: '1px solid rgba(245,124,0,0.25)',
                color: '#f57c00', padding: '10px 18px', borderRadius: '10px',
                cursor: 'pointer', fontSize: '0.83rem', display: 'flex',
                alignItems: 'center', gap: '7px', fontFamily: 'inherit'
              }}
            >
              <FaSyncAlt /> Refresh
            </button>
          </div>
        </div>

        {/* Sync Status Banner */}
        {syncStatus && (
          <div style={{
            background: syncStatus.includes('✅') ? 'rgba(37,211,102,0.08)' : 'rgba(220,53,69,0.08)',
            border: `1px solid ${syncStatus.includes('✅') ? 'rgba(37,211,102,0.2)' : 'rgba(220,53,69,0.2)'}`,
            color: syncStatus.includes('✅') ? '#25D366' : '#dc3545',
            borderRadius: '10px', padding: '12px 18px', fontSize: '0.88rem', marginBottom: '24px'
          }}>
            {syncStatus}
          </div>
        )}

        {/* ── Stats Cards ── */}
        <div
          style={isMobile ? {
            display: 'flex',
            overflowX: 'auto',
            gap: '12px',
            marginBottom: '24px',
            paddingBottom: '12px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          } : {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '32px'
          }}
          className="stats-container-scrollbar-hide"
        >
          {[
            { label: 'Total Inquiries',    value: stats.total,       icon: FaEnvelope,   color: '#f57c00' },
            { label: 'Pending Response',   value: stats.pending,     icon: FaClock,      color: '#ff9800' },
            { label: 'Leads Contacted',    value: stats.contacted,   icon: FaCheckCircle,color: '#28a745' },
            { label: 'WhatsApp Leads',     value: stats.waLeads,     icon: FaWhatsapp,   color: '#25D366', badge: stats.waNew },
          ].map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              style={{
                flex: isMobile ? '0 0 75%' : 'auto',
                scrollSnapAlign: 'start',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px', padding: '20px 18px',
                display: 'flex', alignItems: 'center', gap: '14px',
                position: 'relative', overflow: 'hidden'
              }}
            >
              {/* color stripe */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px', background: s.color, opacity: 0.6
              }} />
              <div style={{
                width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0,
                background: `${s.color}18`, border: `1px solid ${s.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color, fontSize: '18px'
              }}>
                <s.icon />
              </div>
              <div>
                <div style={{ color: '#666', fontSize: '0.75rem', marginBottom: '3px', letterSpacing: '0.3px' }}>{s.label}</div>
                <div style={{ fontSize: '1.7rem', fontWeight: 800, fontFamily: 'Space Grotesk', lineHeight: 1 }}>
                  {s.value}
                  {s.badge > 0 && (
                    <span style={{
                      marginLeft: '8px', fontSize: '0.7rem', fontWeight: 600,
                      background: '#25D366', color: '#000', borderRadius: '10px',
                      padding: '2px 7px', verticalAlign: 'middle'
                    }}>
                      +{s.badge} New
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div
          style={isMobile ? {
            display: 'flex', gap: '6px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '14px', padding: '5px', marginBottom: '20px',
            width: '100%',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          } : {
            display: 'flex', gap: '4px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '14px', padding: '5px', marginBottom: '24px',
            width: 'fit-content'
          }}
          className="stats-container-scrollbar-hide"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setNewLeadAlert(false) }}
              style={{
                flexShrink: 0,
                background: activeTab === tab.id ? tab.color + '18' : 'transparent',
                border: activeTab === tab.id ? `1px solid ${tab.color}40` : '1px solid transparent',
                color: activeTab === tab.id ? tab.color : '#a0a0a0',
                borderRadius: '10px', padding: isMobile ? '8px 14px' : '9px 18px', cursor: 'pointer',
                fontSize: isMobile ? '0.8rem' : '0.85rem', fontWeight: 600, fontFamily: 'Space Grotesk',
                display: 'flex', alignItems: 'center', gap: '7px',
                transition: 'all 0.2s', position: 'relative'
              }}
            >
              {tab.icon} {tab.label}
              <span style={{
                background: activeTab === tab.id ? tab.color : 'rgba(255,255,255,0.08)',
                color: activeTab === tab.id ? '#000' : '#a0a0a0',
                borderRadius: '20px', padding: '1px 8px', fontSize: '0.72rem', fontWeight: 700
              }}>
                {tab.count}
              </span>
              {tab.badge && (
                <span style={{
                  position: 'absolute', top: '-6px', right: '-6px',
                  background: '#25D366', color: '#000', borderRadius: '50%',
                  width: '18px', height: '18px', fontSize: '0.65rem', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Filter Bar ── */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '10px',
          alignItems: isMobile ? 'stretch' : 'center',
          marginBottom: '20px'
        }}>
          {/* Search */}
          <div style={{ position: 'relative', width: '100%', flex: isMobile ? 'none' : '1', minWidth: isMobile ? 'none' : '220px' }}>
            <FaSearch style={{
              position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
              color: '#555', fontSize: '13px', pointerEvents: 'none'
            }} />
            <input
              type="text"
              placeholder={
                activeTab === 'contacts' ? 'Search name, email, phone...' :
                activeTab === 'whatsapp' ? 'Search name, phone, message...' :
                'Search subscriber emails...'
              }
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%', paddingLeft: '38px', padding: '11px 16px 11px 38px',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', color: '#fff', fontSize: '0.87rem',
                outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Contact filters */}
          {activeTab === 'contacts' && (
            <div style={{ display: 'flex', gap: '10px', width: isMobile ? '100%' : 'auto' }}>
              <select
                value={serviceFilter}
                onChange={e => setServiceFilter(e.target.value)}
                style={{
                  flex: isMobile ? 1 : 'none',
                  minWidth: isMobile ? '0' : '170px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px', color: '#cfcfcf', padding: '11px 16px',
                  fontSize: '0.87rem', outline: 'none', fontFamily: 'inherit'
                }}
              >
                <option value="All">All Services</option>
                <option value="Website Development">Website Development</option>
                <option value="Custom CRM System">Custom CRM System</option>
                <option value="Shopify Development">Shopify Development</option>
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="API Integration">API Integration</option>
                <option value="Performance Optimization">Performance Optimization</option>
                <option value="Other Services">Other Services</option>
              </select>
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                style={{
                  flex: isMobile ? 1 : 'none',
                  minWidth: isMobile ? '0' : '140px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px', color: '#cfcfcf', padding: '11px 16px',
                  fontSize: '0.87rem', outline: 'none', fontFamily: 'inherit'
                }}
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Contacted">Contacted</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          )}

          {/* Export */}
          <button
            onClick={() => {
              if (activeTab === 'contacts') exportToCSV(contacts, 'contacts.csv')
              else exportToCSV(whatsappLeads, 'whatsapp_leads.csv')
            }}
            style={{
              background: 'linear-gradient(135deg, #f57c00, #ff9800)',
              border: 'none', borderRadius: '10px', color: '#fff',
              padding: '11px 20px', cursor: 'pointer', fontSize: '0.85rem',
              fontWeight: 700, display: 'flex', alignItems: 'center', gap: '7px',
              fontFamily: 'Space Grotesk', flexShrink: 0,
              width: isMobile ? '100%' : 'auto',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}
          >
            <FaDownload /> Export CSV
          </button>
        </div>

        {/* ── Loading ── */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#555' }}>
            <div style={{
              width: '40px', height: '40px', border: '3px solid rgba(245,124,0,0.2)',
              borderTop: '3px solid #f57c00', borderRadius: '50%',
              animation: 'spin 0.8s linear infinite', margin: '0 auto 16px'
            }} />
            <p style={{ fontSize: '0.88rem' }}>Loading data...</p>
          </div>
        )}

        {/* ════════ CONTACTS TAB ════════ */}
        {!loading && activeTab === 'contacts' && (
          <div style={{
            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px', overflow: 'hidden'
          }}>
            {filteredContacts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: '#555' }}>
                <FaEnvelope style={{ fontSize: '2rem', marginBottom: '12px', display: 'block', margin: '0 auto 12px' }} />
                No inquiries found.
              </div>
            ) : isMobile ? (
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredContacts.map((item, i) => (
                  <motion.div
                    key={item._id || item.id || i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '16px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    {/* Card Header: Name and Date */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                      <div>
                        <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{item.name}</div>
                        <div style={{ color: '#555', fontSize: '0.75rem', marginTop: '2px' }}>{formatDate(item)}</div>
                      </div>
                      <span style={{
                        padding: '4px 8px', background: 'rgba(245,124,0,0.1)',
                        border: '1px solid rgba(245,124,0,0.2)', color: '#f57c00',
                        borderRadius: '6px', fontSize: '0.7rem', fontWeight: 500,
                        whiteSpace: 'nowrap', flexShrink: 0
                      }}>
                        {item.service}
                      </span>
                    </div>

                    {/* Contact details */}
                    <div style={{
                      display: 'flex', flexDirection: 'column', gap: '6px',
                      background: 'rgba(255,255,255,0.01)', padding: '10px 12px',
                      borderRadius: '10px', border: '1px solid rgba(255,255,255,0.04)'
                    }}>
                      <div style={{ fontSize: '0.8rem', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        <span style={{ color: '#666' }}>Email:</span>
                        <a href={`mailto:${item.email}`} style={{ color: '#aaa', textDecoration: 'none', wordBreak: 'break-all' }}>{item.email}</a>
                      </div>
                      {item.phone && item.phone !== 'Not Provided' && (
                        <div style={{ fontSize: '0.8rem', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                          <span style={{ color: '#666' }}>Phone:</span>
                          <a href={`tel:${item.phone.replace(/\s+/g, '')}`} style={{ color: '#f57c00', fontWeight: 500, textDecoration: 'none' }}>{item.phone}</a>
                        </div>
                      )}
                    </div>

                    {/* Message Subject & Body */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '10px' }}>
                      <div style={{ color: '#eee', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                        {item.subject}
                      </div>
                      <ExpandableMessage text={item.message} />
                    </div>

                    {/* Footer actions: Status select and Delete button */}
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '10px', marginTop: '4px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.78rem', color: '#666' }}>Status:</span>
                        <select
                          value={item.status || 'Pending'}
                          onChange={e => handleContactStatusChange(item._id || item.id, e.target.value)}
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#cfcfcf', borderRadius: '8px',
                            padding: '6px 10px', fontSize: '0.8rem',
                            outline: 'none', cursor: 'pointer'
                          }}
                        >
                          {['Pending','Contacted','In Progress','Completed','Cancelled'].map(s => (
                            <option key={s} value={s} style={{ background: '#121212' }}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <button
                        onClick={() => handleDeleteContact(item._id || item.id)}
                        style={{
                          background: 'rgba(220,53,69,0.1)', border: '1px solid rgba(220,53,69,0.2)',
                          color: '#dc3545', width: '36px', height: '36px', borderRadius: '8px',
                          cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
                          justifyContent: 'center', fontSize: '14px'
                        }}
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', minWidth: '900px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                      {['Contact Info', 'Service', 'Message', 'Date', 'Status', 'Actions'].map(h => (
                        <th key={h} style={{
                          padding: '14px 16px', color: '#555', fontSize: '0.78rem',
                          fontWeight: 600, textAlign: 'left', letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContacts.map((item, i) => (
                      <motion.tr
                        key={item._id || item.id || i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.025)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <td style={{ padding: '14px 16px' }}>
                          <div style={{ fontWeight: 600, color: '#fff', marginBottom: '2px', fontSize: '0.9rem' }}>{item.name}</div>
                          <a href={`mailto:${item.email}`} style={{ color: '#555', fontSize: '0.78rem', display: 'block' }}>{item.email}</a>
                          {item.phone && item.phone !== 'Not Provided' && (
                            <a href={`tel:${item.phone.replace(/\s+/g, '')}`} style={{ color: '#f57c00', fontSize: '0.78rem', fontWeight: 500 }}>
                              {item.phone}
                            </a>
                          )}
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{
                            padding: '4px 10px', background: 'rgba(245,124,0,0.1)',
                            border: '1px solid rgba(245,124,0,0.2)', color: '#f57c00',
                            borderRadius: '6px', fontSize: '0.72rem', fontWeight: 500
                          }}>
                            {item.service}
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px', maxWidth: '260px' }}>
                          <div style={{ color: '#eee', fontSize: '0.82rem', fontWeight: 600, marginBottom: '3px' }}>
                            {item.subject}
                          </div>
                          <ExpandableMessage text={item.message} />
                        </td>
                        <td style={{ padding: '14px 16px', color: '#555', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                          {formatDate(item)}
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <select
                            value={item.status || 'Pending'}
                            onChange={e => handleContactStatusChange(item._id || item.id, e.target.value)}
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: '#cfcfcf', borderRadius: '8px',
                              padding: '6px 10px', fontSize: '0.8rem',
                              outline: 'none', cursor: 'pointer'
                            }}
                          >
                            {['Pending','Contacted','In Progress','Completed','Cancelled'].map(s => (
                              <option key={s} value={s} style={{ background: '#121212' }}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                          <button
                            onClick={() => handleDeleteContact(item._id || item.id)}
                            style={{
                              background: 'rgba(220,53,69,0.1)', border: '1px solid rgba(220,53,69,0.2)',
                              color: '#dc3545', width: '32px', height: '32px', borderRadius: '8px',
                              cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
                              justifyContent: 'center', fontSize: '13px'
                            }}
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ════════ WHATSAPP LEADS TAB ════════ */}
        {!loading && activeTab === 'whatsapp' && (
          <div style={{
            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(37,211,102,0.1)',
            borderRadius: '16px', overflow: 'hidden'
          }}>
            {/* Tab Header Banner */}
            <div style={{
              background: 'rgba(37,211,102,0.05)',
              borderBottom: '1px solid rgba(37,211,102,0.1)',
              padding: '14px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaWhatsapp style={{ color: '#25D366', fontSize: '20px' }} />
                <div>
                  <div style={{ color: '#25D366', fontWeight: 700, fontSize: '0.9rem', fontFamily: 'Space Grotesk' }}>
                    WhatsApp Leads
                  </div>
                  <div style={{ color: '#555', fontSize: '0.75rem' }}>
                    Ye leads aate hain jab visitor website pe WhatsApp button dabate hain
                  </div>
                </div>
              </div>
              <div style={{
                background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)',
                color: '#25D366', borderRadius: '20px', padding: '4px 14px',
                fontSize: '0.8rem', fontWeight: 600
              }}>
                {stats.waNew} New &bull; {stats.waLeads} Total
              </div>
            </div>

            {filteredWA.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: '#555' }}>
                <FaWhatsapp style={{ fontSize: '2.5rem', marginBottom: '12px', display: 'block', margin: '0 auto 12px', color: '#25D366', opacity: 0.3 }} />
                <p style={{ marginBottom: '4px' }}>Koi WhatsApp lead nahi hai abhi.</p>
                <p style={{ fontSize: '0.82rem' }}>Jab visitor WhatsApp button dabayega, lead yahan dikhegi.</p>
              </div>
            ) : isMobile ? (
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredWA.map((item, i) => (
                  <motion.div
                    key={item._id || item.id || i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    style={{
                      background: item.status === 'New' ? 'rgba(37,211,102,0.02)' : 'rgba(255,255,255,0.02)',
                      border: item.status === 'New' ? '1px solid rgba(37,211,102,0.2)' : '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '16px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    {/* Header: Name, date & index */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{
                            background: 'rgba(255,255,255,0.05)', color: '#888',
                            borderRadius: '6px', padding: '2px 6px', fontSize: '0.7rem', fontWeight: 600
                          }}>
                            #{i + 1}
                          </span>
                          <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{item.name}</div>
                        </div>
                        <div style={{ color: '#555', fontSize: '0.75rem', marginTop: '4px' }}>{formatDate(item)}</div>
                      </div>
                      <span style={{
                        padding: '3px 8px', background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px', fontSize: '0.7rem', color: '#888',
                        fontFamily: 'monospace', whiteSpace: 'nowrap', flexShrink: 0
                      }}>
                        {item.sourcePage || '/'}
                      </span>
                    </div>

                    {/* Phone link */}
                    {item.phone && item.phone !== 'Not Provided' ? (
                      <div style={{ background: 'rgba(37,211,102,0.04)', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(37,211,102,0.1)' }}>
                        <a
                          href={`tel:${item.phone.replace(/\s+/g, '')}`}
                          style={{ color: '#25D366', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <FaPhone style={{ fontSize: '12px' }} />
                          {item.phone}
                        </a>
                      </div>
                    ) : (
                      <div style={{ color: '#555', fontSize: '0.8rem' }}>No phone number provided</div>
                    )}

                    {/* Message */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '10px' }}>
                      <ExpandableMessage text={item.message || '(No message)'} />
                    </div>

                    {/* Footer actions: Status select, WhatsApp chat, and Delete */}
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '10px', marginTop: '4px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.78rem', color: '#666' }}>Status:</span>
                        <select
                          value={item.status || 'New'}
                          onChange={e => handleWAStatusChange(item.id, e.target.value)}
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#cfcfcf', borderRadius: '8px',
                            padding: '6px 10px', fontSize: '0.8rem',
                            outline: 'none', cursor: 'pointer'
                          }}
                        >
                          {['New','Replied','Converted','Closed'].map(s => (
                            <option key={s} value={s} style={{ background: '#121212' }}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div style={{ display: 'flex', gap: '8px' }}>
                        {item.phone && item.phone !== 'Not Provided' && (
                          <a
                            href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}?text=Hi ${encodeURIComponent(item.name || '')}! We're from WebFusion Experts. How can we help you?`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)',
                              color: '#25D366', width: '36px', height: '36px', borderRadius: '8px',
                              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '16px', textDecoration: 'none'
                            }}
                            title={`Open WhatsApp chat`}
                          >
                            <FaWhatsapp />
                          </a>
                        )}
                        <button
                          onClick={() => handleDeleteWA(item._id || item.id)}
                          style={{
                            background: 'rgba(220,53,69,0.1)', border: '1px solid rgba(220,53,69,0.2)',
                            color: '#dc3545', width: '36px', height: '36px', borderRadius: '8px',
                            cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
                            justifyContent: 'center', fontSize: '14px'
                          }}
                          title="Delete lead"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', minWidth: '750px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                      {['#', 'Lead Info', 'Message', 'Source Page', 'Date & Time', 'Status', 'Actions'].map((h, i) => (
                        <th key={h} style={{
                          padding: '14px 16px', color: '#555', fontSize: '0.75rem',
                          fontWeight: 600, textAlign: i === 0 ? 'center' : 'left',
                          letterSpacing: '0.5px', textTransform: 'uppercase'
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWA.map((item, i) => (
                      <motion.tr
                        key={item._id || item.id || i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        style={{
                          borderBottom: '1px solid rgba(255,255,255,0.04)',
                          background: item.status === 'New' ? 'rgba(37,211,102,0.02)' : 'transparent'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,0.04)'}
                        onMouseLeave={e => e.currentTarget.style.background = item.status === 'New' ? 'rgba(37,211,102,0.02)' : 'transparent'}
                      >
                        <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                          <span style={{
                            background: 'rgba(255,255,255,0.05)', color: '#555',
                            borderRadius: '6px', padding: '3px 8px', fontSize: '0.75rem', fontWeight: 600
                          }}>
                            #{i + 1}
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '3px' }}>
                            {item.name}
                          </div>
                          {item.phone && item.phone !== 'Not Provided' ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <a
                                href={`tel:${item.phone.replace(/\s+/g, '')}`}
                                style={{ color: '#25D366', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none' }}
                              >
                                <FaPhone style={{ fontSize: '11px', marginRight: '4px' }} />
                                {item.phone}
                              </a>
                            </div>
                          ) : (
                            <span style={{ color: '#444', fontSize: '0.78rem' }}>No phone</span>
                          )}
                        </td>
                        <td style={{ padding: '14px 16px', maxWidth: '220px' }}>
                          <ExpandableMessage text={item.message || '(No message)'} />
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{
                            padding: '3px 10px', background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '6px', fontSize: '0.75rem', color: '#888',
                            fontFamily: 'monospace'
                          }}>
                            {item.sourcePage || '/'}
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px', color: '#555', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                          {formatDate(item)}
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <select
                            value={item.status || 'New'}
                            onChange={e => handleWAStatusChange(item._id || item.id, e.target.value)}
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: '#cfcfcf', borderRadius: '8px',
                              padding: '6px 10px', fontSize: '0.8rem',
                              outline: 'none', cursor: 'pointer'
                            }}
                          >
                            {['New','Replied','Converted','Closed'].map(s => (
                              <option key={s} value={s} style={{ background: '#121212' }}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            {/* Direct WhatsApp chat button */}
                            {item.phone && item.phone !== 'Not Provided' && (
                              <a
                                href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}?text=Hi ${encodeURIComponent(item.name || '')}! We're from WebFusion Experts. How can we help you?`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)',
                                  color: '#25D366', width: '32px', height: '32px', borderRadius: '8px',
                                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                  fontSize: '15px', textDecoration: 'none'
                                }}
                                title={`Open WhatsApp chat with ${item.name}`}
                              >
                                <FaWhatsapp />
                              </a>
                            )}
                            <button
                              onClick={() => handleDeleteWA(item._id || item.id)}
                              style={{
                                background: 'rgba(220,53,69,0.1)', border: '1px solid rgba(220,53,69,0.2)',
                                color: '#dc3545', width: '32px', height: '32px', borderRadius: '8px',
                                cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
                                justifyContent: 'center', fontSize: '13px'
                              }}
                              title="Delete lead"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}


      </div>

      {/* Custom Confirm Modal */}
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        message={confirmModal.message}
        onConfirm={confirmModal.onConfirm}
        onCancel={closeConfirm}
      />

      {/* Global styles */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        select option { background: #121212 !important; color: #fff !important; }
      `}</style>
    </div>
  )
}

export default AdminDashboard
