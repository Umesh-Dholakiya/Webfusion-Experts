/**
 * routes/contact.js
 * ─────────────────────────────────────────
 * Routes for handling contact form submission.
 * ─────────────────────────────────────────
 */

const express = require('express');
const router  = express.Router();
const { CONTACTS_FILE } = require('../config/paths');
const { readJSON, writeJSON } = require('../helpers/fileHelper');
const { getIsConnected } = require('../config/db');
const Contact = require('../models/Contact');

// POST /api/contact - Submit Contact Form
router.post('/contact', async (req, res, next) => {
  try {
    const { name, email, phone, service, subject, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const newSubmission = {
      id: req.body.id || Date.now().toString(),
      name,
      email,
      phone: phone || 'Not Provided',
      service: service || 'Not Specified',
      subject: subject || 'No Subject',
      message,
      status: req.body.status || 'Pending',
      createdAt: req.body.createdAt ? new Date(req.body.createdAt) : new Date()
    };

    // If MongoDB is connected, save to MongoDB
    if (getIsConnected()) {
      const contactDoc = new Contact(newSubmission);
      await contactDoc.save();
      console.log(`[contact] Saved submission to MongoDB: ${name} (${email})`);

      // Also update local JSON file as backup
      try {
        const contacts = readJSON(CONTACTS_FILE);
        contacts.push(newSubmission);
        writeJSON(CONTACTS_FILE, contacts);
      } catch (err) { /* silent */ }

      return res.status(201).json({ message: 'Contact request saved successfully.', data: contactDoc });
    }

    // Fallback to local JSON
    const contacts = readJSON(CONTACTS_FILE);
    contacts.push(newSubmission);
    
    if (writeJSON(CONTACTS_FILE, contacts)) {
      console.log(`[contact] Saved submission to JSON: ${name} (${email})`);
      res.status(201).json({ message: 'Contact request saved successfully.', data: newSubmission });
    } else {
      res.status(500).json({ error: 'Failed to save submission.' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
