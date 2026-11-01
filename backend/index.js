/**
 * ============================================================
 * WebFusion Experts — Backend Server
 * ============================================================
 */

require('dotenv').config();
const express     = require('express');
const cors        = require('cors');
const { connectDB } = require('./config/db');

// ── Import Routes ────────────────────────────────────────────
const contactRoutes    = require('./routes/contact');
const whatsappRoutes   = require('./routes/whatsapp');
const adminRoutes      = require('./routes/admin');

// ── App Setup ────────────────────────────────────────────────
const app  = express();
const PORT = process.env.PORT || 5000;

// ── Database Connection ──────────────────────────────────────
connectDB();

// ── Middleware ───────────────────────────────────────────────
const getAllowedOrigin = () => {
  const raw = process.env.ALLOWED_ORIGIN || '*';
  if (raw === '*') return '*';
  const origins = raw.split(',').map(o => o.trim()).filter(Boolean);
  return origins.length === 1 ? origins[0] : origins;
};

app.use(cors({
  origin: getAllowedOrigin(),
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: false
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
