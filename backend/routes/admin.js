/**
 * routes/admin.js
 * ─────────────────────────────────────────
 * Routes for dashboard administration
 * (fetching, status updates, deletes).
 * ─────────────────────────────────────────
 */

const express = require('express');
const router = express.Router();
const { CONTACTS_FILE, NEWSLETTER_FILE, WHATSAPP_LEADS_FILE } = require('../config/paths');
const { readJSON, writeJSON } = require('../helpers/fileHelper');
const { getIsConnected } = require('../config/db');
const Contact = require('../models/Contact');
const Newsletter = require('../models/Newsletter');
const WhatsAppLead = require('../models/WhatsAppLead');

// GET /api/submissions - Retrieve all submissions (Admin)
router.get('/submissions', async (req, res, next) => {
  try {
    if (getIsConnected()) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      const newsletters = await Newsletter.find().sort({ createdAt: -1 });
      const whatsappLeads = await WhatsAppLead.find().sort({ createdAt: -1 });
      return res.status(200).json({ contacts, newsletters, whatsappLeads });
    }

    // Fallback JSON
    const contacts = readJSON(CONTACTS_FILE);
    const newsletters = readJSON(NEWSLETTER_FILE);
    const whatsappLeads = readJSON(WHATSAPP_LEADS_FILE);
    res.status(200).json({ contacts, newsletters, whatsappLeads });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/submissions/contact/:id - Update Contact Inquiry Status/Notes
router.patch('/submissions/contact/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    if (getIsConnected()) {
      const updateData = {};
      if (status) updateData.status = status;
      if (notes !== undefined) updateData.notes = notes;

      const updated = await Contact.findOneAndUpdate(
        { $or: [{ _id: mongoose.Types.ObjectId.isValid(id) ? id : null }, { id }] },
        updateData,
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({ error: 'Submission not found.' });
      }
      return res.status(200).json({ message: 'Submission updated successfully.', data: updated });
    }

    // Fallback JSON
    const contacts = readJSON(CONTACTS_FILE);
    const index = contacts.findIndex(c => c.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Submission not found.' });
    }

    if (status) contacts[index].status = status;
    if (notes !== undefined) contacts[index].notes = notes;

    if (writeJSON(CONTACTS_FILE, contacts)) {
      res.status(200).json({ message: 'Submission updated successfully.', data: contacts[index] });
    } else {
      res.status(500).json({ error: 'Failed to update submission.' });
    }
  } catch (err) {
    next(err);
  }
});

// PATCH /api/submissions/whatsapp/:id - Update WhatsApp Lead Status
router.patch('/submissions/whatsapp/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (getIsConnected()) {
      const updated = await WhatsAppLead.findOneAndUpdate(
        { $or: [{ _id: mongoose.Types.ObjectId.isValid(id) ? id : null }, { id }] },
        { status },
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({ error: 'WhatsApp lead not found.' });
      }
      return res.status(200).json({ message: 'WhatsApp lead updated successfully.', data: updated });
    }

    // Fallback JSON
    const leads = readJSON(WHATSAPP_LEADS_FILE);
    const index = leads.findIndex(l => l.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'WhatsApp lead not found.' });
    }

    if (status) leads[index].status = status;

    if (writeJSON(WHATSAPP_LEADS_FILE, leads)) {
      res.status(200).json({ message: 'WhatsApp lead updated successfully.', data: leads[index] });
    } else {
      res.status(500).json({ error: 'Failed to update WhatsApp lead.' });
    }
  } catch (err) {
    next(err);
  }
});

// DELETE /api/submissions/contact/:id - Delete Contact Inquiry
router.delete('/submissions/contact/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (getIsConnected()) {
      const deleted = await Contact.findOneAndDelete({
        $or: [{ _id: mongoose.Types.ObjectId.isValid(id) ? id : null }, { id }]
      });
      if (!deleted) {
        return res.status(404).json({ error: 'Submission not found.' });
      }
      return res.status(200).json({ message: 'Submission deleted successfully.' });
    }

    // Fallback JSON
    let contacts = readJSON(CONTACTS_FILE);
    const exists = contacts.some(c => c.id === id);

    if (!exists) {
      return res.status(404).json({ error: 'Submission not found.' });
    }

    contacts = contacts.filter(c => c.id !== id);

    if (writeJSON(CONTACTS_FILE, contacts)) {
      res.status(200).json({ message: 'Submission deleted successfully.' });
    } else {
      res.status(500).json({ error: 'Failed to delete.' });
    }
  } catch (err) {
    next(err);
  }
});

// DELETE /api/submissions/newsletter/:id - Delete Newsletter Subscriber
router.delete('/submissions/newsletter/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (getIsConnected()) {
      const deleted = await Newsletter.findOneAndDelete({
        $or: [{ _id: mongoose.Types.ObjectId.isValid(id) ? id : null }, { id }]
      });
      if (!deleted) {
        return res.status(404).json({ error: 'Subscriber not found.' });
      }
      return res.status(200).json({ message: 'Subscriber deleted successfully.' });
    }

    // Fallback JSON
    let subscribers = readJSON(NEWSLETTER_FILE);
    const exists = subscribers.some(s => s.id === id);

    if (!exists) {
      return res.status(404).json({ error: 'Subscriber not found.' });
    }

    subscribers = subscribers.filter(s => s.id !== id);

    if (writeJSON(NEWSLETTER_FILE, subscribers)) {
      res.status(200).json({ message: 'Subscriber deleted successfully.' });
    } else {
      res.status(500).json({ error: 'Failed to delete.' });
    }
  } catch (err) {
    next(err);
  }
});

// DELETE /api/submissions/whatsapp/:id - Delete WhatsApp Lead
router.delete('/submissions/whatsapp/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (getIsConnected()) {
      const deleted = await WhatsAppLead.findOneAndDelete({
        $or: [{ _id: mongoose.Types.ObjectId.isValid(id) ? id : null }, { id }]
      });
      if (!deleted) {
        return res.status(404).json({ error: 'WhatsApp lead not found.' });
      }
      return res.status(200).json({ message: 'WhatsApp lead deleted successfully.' });
    }

    // Fallback JSON
    let leads = readJSON(WHATSAPP_LEADS_FILE);
    const exists = leads.some(l => l.id === id);

    if (!exists) {
      return res.status(404).json({ error: 'WhatsApp lead not found.' });
    }

    leads = leads.filter(l => l.id !== id);

    if (writeJSON(WHATSAPP_LEADS_FILE, leads)) {
      res.status(200).json({ message: 'WhatsApp lead deleted successfully.' });
    } else {
      res.status(500).json({ error: 'Failed to delete.' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
