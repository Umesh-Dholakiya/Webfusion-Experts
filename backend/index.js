/**
 * ============================================================
 * WebFusion Experts — Backend Server
 * ============================================================
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

// ── Import Routes ────────────────────────────────────────────
const contactRoutes = require('./routes/contact');
const whatsappRoutes = require('./routes/whatsapp');
const adminRoutes = require('./routes/admin');

// ── App Setup ────────────────────────────────────────────────
const app = express();
const PORT = process.env.PORT || 5000;

// ── Database Connection ──────────────────────────────────────
connectDB();

// ── Middleware ───────────────────────────────────────────────
const defaultOrigins = [
  'https://webfusion-experts-portfolio.netlify.app',
  'https://webfusion-experts-three.vercel.app',
  'http://localhost:3000',
  'http://localhost:5173'
];

const checkOrigin = (origin, callback) => {
  // Allow requests without Origin (e.g. mobile apps, curl, server-to-server)
  if (!origin) return callback(null, true);

  const rawEnv = process.env.ALLOWED_ORIGIN;
  if (!rawEnv || rawEnv === '*') return callback(null, true);

  const configured = rawEnv
    .split(',')
    .map(o => o.trim().replace(/\/$/, ''))
    .filter(Boolean);

  const allowedList = [...new Set([...defaultOrigins, ...configured])];
  const cleanOrigin = origin.replace(/\/$/, '');

  if (
    allowedList.includes(cleanOrigin) ||
    cleanOrigin.endsWith('.netlify.app') ||
    cleanOrigin.endsWith('.vercel.app') ||
    cleanOrigin.includes('localhost') ||
    cleanOrigin.includes('127.0.0.1')
  ) {
    return callback(null, true);
  }

  // Fallback: allow to ensure no legitimate customer messages are lost
  return callback(null, true);
};

app.use(cors({
  origin: checkOrigin,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Health Check ─────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    server: 'WebFusion Experts Backend',
    timestamp: new Date().toISOString()
  });
});

// ── Mount Routes ─────────────────────────────────────────────
app.use('/api', contactRoutes);
app.use('/api', whatsappRoutes);
app.use('/api', adminRoutes);

// ── 404 Handler ───────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.url}` });
});

// ── Global Error Handler ──────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).json({ error: 'Internal server error.' });
});

// ── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('\n╔══════════════════════════════════════════════╗');
  console.log('║   WebFusion Experts — Backend Server         ║');
  console.log(`║   Running on  → http://localhost:${PORT}        ║`);
  console.log(`║   Environment → ${(process.env.NODE_ENV || 'development').padEnd(29)}║`);
  console.log('╚══════════════════════════════════════════════╝\n');
});
