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

    const submissionId = req.body.id || Date.now().toString();

    const newSubmission = {
      id: submissionId,
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : 'Not Provided',
      service: service || 'Not Specified',
      subject: subject || 'No Subject',
      message: message.trim(),
      status: req.body.status || 'Pending',
      notes: req.body.notes || '',
      createdAt: req.body.createdAt ? new Date(req.body.createdAt) : new Date()
    };

    // If MongoDB is connected, save to MongoDB
    if (getIsConnected()) {
      // Prevent duplicate submission if the same ID already exists
      const existing = await Contact.findOne({ id: newSubmission.id });
      if (existing) {
        return res.status(200).json({ message: 'Contact request already exists.', data: existing });
      }

      const contactDoc = new Contact(newSubmission);
      await contactDoc.save();
      console.log(`[contact] Saved submission to MongoDB: ${name} (${email})`);

      // Also update local JSON file as backup without duplicates
      try {
        const contacts = readJSON(CONTACTS_FILE);
        if (!contacts.some(c => c.id === newSubmission.id)) {
          contacts.push(newSubmission);
          writeJSON(CONTACTS_FILE, contacts);
        }
      } catch (err) { /* silent */ }

      return res.status(201).json({ message: 'Contact request saved successfully.', data: contactDoc });
    }

    // Fallback to local JSON
    const contacts = readJSON(CONTACTS_FILE);
    const exists = contacts.some(c => c.id === newSubmission.id);
    if (exists) {
      return res.status(200).json({ message: 'Contact request already exists.', data: newSubmission });
    }

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
