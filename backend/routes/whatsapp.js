/**
 * routes/whatsapp.js
 * ─────────────────────────────────────────
 * Routes for handling WhatsApp lead clicks.
 * ─────────────────────────────────────────
 */

const express = require('express');
const router  = express.Router();
const { WHATSAPP_LEADS_FILE } = require('../config/paths');
const { readJSON, writeJSON } = require('../helpers/fileHelper');
const { getIsConnected } = require('../config/db');
const WhatsAppLead = require('../models/WhatsAppLead');

// POST /api/whatsapp-lead - Save WhatsApp Lead
router.post('/whatsapp-lead', async (req, res, next) => {
  try {
    const { name, phone, message, sourcePage } = req.body;

    const leadId = req.body.id || Date.now().toString();

    const newLead = {
      id: leadId,
      name: name ? name.trim() : 'Anonymous',
      phone: phone ? phone.trim() : 'Not Provided',
      message: message ? message.trim() : '',
      sourcePage: sourcePage || 'Unknown',
      status: req.body.status || 'New',
      createdAt: req.body.createdAt ? new Date(req.body.createdAt) : new Date()
    };

    // If MongoDB is connected
    if (getIsConnected()) {
      const existing = await WhatsAppLead.findOne({ id: newLead.id });
      if (existing) {
        return res.status(200).json({ message: 'WhatsApp lead already exists.', data: existing });
      }

      const leadDoc = new WhatsAppLead(newLead);
      await leadDoc.save();
      console.log(`[whatsapp] Saved Lead to MongoDB: ${newLead.name} (${newLead.phone})`);

      // Local backup
      try {
        const leads = readJSON(WHATSAPP_LEADS_FILE);
        if (!leads.some(l => l.id === newLead.id)) {
          leads.push(newLead);
          writeJSON(WHATSAPP_LEADS_FILE, leads);
        }
      } catch (err) { /* silent */ }

      return res.status(201).json({ message: 'WhatsApp lead saved successfully.', data: leadDoc });
    }

    // Fallback to local JSON
    const leads = readJSON(WHATSAPP_LEADS_FILE);
    const exists = leads.some(l => l.id === newLead.id);
    if (exists) {
      return res.status(200).json({ message: 'WhatsApp lead already exists.', data: newLead });
    }

    leads.push(newLead);

    if (writeJSON(WHATSAPP_LEADS_FILE, leads)) {
      console.log(`[whatsapp] New Lead saved to JSON: ${newLead.name} (${newLead.phone})`);
      res.status(201).json({ message: 'WhatsApp lead saved successfully.', data: newLead });
    } else {
      res.status(500).json({ error: 'Failed to save WhatsApp lead.' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
