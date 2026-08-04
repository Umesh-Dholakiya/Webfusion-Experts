/**
 * routes/newsletter.js
 * ─────────────────────────────────────────
 * Routes for handling newsletter subscriptions.
 * ─────────────────────────────────────────
 */

const express = require('express');
const router  = express.Router();
const { NEWSLETTER_FILE } = require('../config/paths');
const { readJSON, writeJSON } = require('../helpers/fileHelper');
const { getIsConnected } = require('../config/db');
const Newsletter = require('../models/Newsletter');

// POST /api/newsletter - Submit Newsletter Signup
router.post('/newsletter', async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const cleanEmail = email.toLowerCase().trim();

    // If MongoDB is connected
    if (getIsConnected()) {
      const existing = await Newsletter.findOne({ email: cleanEmail });
      if (existing) {
        return res.status(200).json({ message: 'Already subscribed.' });
      }

      const newSubDoc = new Newsletter({
        id: req.body.id || Date.now().toString(),
        email: cleanEmail,
        createdAt: req.body.createdAt ? new Date(req.body.createdAt) : new Date()
      });
      await newSubDoc.save();
      console.log(`[newsletter] Saved subscriber to MongoDB: ${cleanEmail}`);

      // Local backup
      try {
        const subscribers = readJSON(NEWSLETTER_FILE);
        if (!subscribers.some(s => s.email.toLowerCase() === cleanEmail)) {
          subscribers.push({ id: newSubDoc.id, email: cleanEmail, createdAt: newSubDoc.createdAt });
          writeJSON(NEWSLETTER_FILE, subscribers);
        }
      } catch (err) { /* silent */ }

      return res.status(201).json({ message: 'Subscribed successfully.', data: newSubDoc });
    }

    // Fallback to local JSON
    const subscribers = readJSON(NEWSLETTER_FILE);
    const exists = subscribers.some(s => s.email.toLowerCase() === cleanEmail);
    if (exists) {
      return res.status(200).json({ message: 'Already subscribed.' });
    }

    const newSub = {
      id: req.body.id || Date.now().toString(),
      email: cleanEmail,
      createdAt: req.body.createdAt || new Date().toISOString()
    };

    subscribers.push(newSub);

    if (writeJSON(NEWSLETTER_FILE, subscribers)) {
      console.log(`[newsletter] New subscriber saved to JSON: ${cleanEmail}`);
      res.status(201).json({ message: 'Subscribed successfully.', data: newSub });
    } else {
      res.status(500).json({ error: 'Failed to subscribe.' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
