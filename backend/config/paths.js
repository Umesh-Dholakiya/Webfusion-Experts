/**
 * config/paths.js
 * ─────────────────────────────────────────
 * Centralized file paths for data storage.
 * All JSON data is stored inside server/data/
 * ─────────────────────────────────────────
 */

const fs   = require('fs');
const path = require('path');

// ── Data Directory ──────────────────────────────────────────
const DATA_DIR = path.join(__dirname, '..', 'data');

// ── Individual Data File Paths ──────────────────────────────
const CONTACTS_FILE       = path.join(DATA_DIR, 'contacts.json');
const NEWSLETTER_FILE     = path.join(DATA_DIR, 'newsletter.json');
const WHATSAPP_LEADS_FILE = path.join(DATA_DIR, 'whatsapp_leads.json');

// ── Auto-create data directory and files if missing ─────────
const ensureDataFiles = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    console.log('[paths] Created data/ directory');
  }

  const files = [CONTACTS_FILE, NEWSLETTER_FILE, WHATSAPP_LEADS_FILE];
  files.forEach(file => {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, JSON.stringify([], null, 2), 'utf8');
      console.log(`[paths] Created ${path.basename(file)}`);
    }
  });
};

// Run on require
ensureDataFiles();

module.exports = {
  DATA_DIR,
  CONTACTS_FILE,
  NEWSLETTER_FILE,
  WHATSAPP_LEADS_FILE
};
