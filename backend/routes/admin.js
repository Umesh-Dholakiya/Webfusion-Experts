/**
 * routes/admin.js
 * ─────────────────────────────────────────
 * Routes for dashboard administration
 * (fetching, status updates, deletes).
 * ─────────────────────────────────────────
 */

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { CONTACTS_FILE, WHATSAPP_LEADS_FILE } = require('../config/paths');
const { readJSON, writeJSON } = require('../helpers/fileHelper');
const { getIsConnected } = require('../config/db');
const Contact = require('../models/Contact');
const WhatsAppLead = require('../models/WhatsAppLead');

// Helper to construct query that matches either Mongo _id or custom id
const buildIdQuery = (id) => {
  const isValidObjectId = mongoose.Types.ObjectId.isValid(id) && String(new mongoose.Types.ObjectId(id)) === id;
  if (isValidObjectId) {
    return { $or: [{ _id: id }, { id: id }] };
  }
  return { id: id };
};

// GET /api/submissions - Retrieve all submissions (Admin)
router.get('/submissions', async (req, res, next) => {
  try {
    if (getIsConnected()) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      const whatsappLeads = await WhatsAppLead.find().sort({ createdAt: -1 });
      return res.status(200).json({ contacts, whatsappLeads });
    }

    // Fallback JSON
    const contacts = readJSON(CONTACTS_FILE);
    const whatsappLeads = readJSON(WHATSAPP_LEADS_FILE);
    res.status(200).json({ contacts, whatsappLeads });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/submissions/contact/:id - Update Contact Inquiry Status/Notes
router.patch('/submissions/contact/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const updateData = {};
    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;

    if (getIsConnected()) {
      const query = buildIdQuery(id);
      const updated = await Contact.findOneAndUpdate(query, updateData, { new: true });

      // Keep local JSON backup in sync
      try {
        const contacts = readJSON(CONTACTS_FILE);
        const index = contacts.findIndex(c => c.id === id || c._id === id);
        if (index !== -1) {
          if (status) contacts[index].status = status;
          if (notes !== undefined) contacts[index].notes = notes;
          writeJSON(CONTACTS_FILE, contacts);
        }
      } catch (err) { /* silent */ }

      if (!updated) {
        return res.status(404).json({ error: 'Submission not found.' });
      }
      return res.status(200).json({ message: 'Submission updated successfully.', data: updated });
    }

    // Fallback JSON
    const contacts = readJSON(CONTACTS_FILE);
    const index = contacts.findIndex(c => c.id === id || c._id === id);

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
      const query = buildIdQuery(id);
      const updated = await WhatsAppLead.findOneAndUpdate(query, { status }, { new: true });

      // Keep local JSON backup in sync
      try {
        const leads = readJSON(WHATSAPP_LEADS_FILE);
        const index = leads.findIndex(l => l.id === id || l._id === id);
        if (index !== -1) {
          leads[index].status = status;
          writeJSON(WHATSAPP_LEADS_FILE, leads);
        }
      } catch (err) { /* silent */ }

      if (!updated) {
        return res.status(404).json({ error: 'WhatsApp lead not found.' });
      }
      return res.status(200).json({ message: 'WhatsApp lead updated successfully.', data: updated });
    }

    // Fallback JSON
    const leads = readJSON(WHATSAPP_LEADS_FILE);
    const index = leads.findIndex(l => l.id === id || l._id === id);

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
      const query = buildIdQuery(id);
      const deleteResult = await Contact.deleteMany(query);

      // Also clean up from local JSON backup
      try {
        let contacts = readJSON(CONTACTS_FILE);
        contacts = contacts.filter(c => c.id !== id && c._id !== id);
        writeJSON(CONTACTS_FILE, contacts);
      } catch (err) { /* silent */ }

      if (deleteResult.deletedCount === 0) {
        // Check if exists in fallback json
        let contacts = readJSON(CONTACTS_FILE);
        const exists = contacts.some(c => c.id === id || c._id === id);
        if (exists) {
          contacts = contacts.filter(c => c.id !== id && c._id !== id);
          writeJSON(CONTACTS_FILE, contacts);
          return res.status(200).json({ message: 'Submission deleted successfully.' });
        }
        return res.status(404).json({ error: 'Submission not found.' });
      }
      return res.status(200).json({ message: 'Submission deleted successfully.' });
    }

    // Fallback JSON
    let contacts = readJSON(CONTACTS_FILE);
    const exists = contacts.some(c => c.id === id || c._id === id);

    if (!exists) {
      return res.status(404).json({ error: 'Submission not found.' });
    }

    contacts = contacts.filter(c => c.id !== id && c._id !== id);

    if (writeJSON(CONTACTS_FILE, contacts)) {
      res.status(200).json({ message: 'Submission deleted successfully.' });
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
      const query = buildIdQuery(id);
      const deleteResult = await WhatsAppLead.deleteMany(query);

      // Also clean up from local JSON backup
      try {
        let leads = readJSON(WHATSAPP_LEADS_FILE);
        leads = leads.filter(l => l.id !== id && l._id !== id);
        writeJSON(WHATSAPP_LEADS_FILE, leads);
      } catch (err) { /* silent */ }

      if (deleteResult.deletedCount === 0) {
        let leads = readJSON(WHATSAPP_LEADS_FILE);
        const exists = leads.some(l => l.id === id || l._id === id);
        if (exists) {
          leads = leads.filter(l => l.id !== id && l._id !== id);
          writeJSON(WHATSAPP_LEADS_FILE, leads);
          return res.status(200).json({ message: 'WhatsApp lead deleted successfully.' });
        }
        return res.status(404).json({ error: 'WhatsApp lead not found.' });
      }
      return res.status(200).json({ message: 'WhatsApp lead deleted successfully.' });
    }

    // Fallback JSON
    let leads = readJSON(WHATSAPP_LEADS_FILE);
    const exists = leads.some(l => l.id === id || l._id === id);

    if (!exists) {
      return res.status(404).json({ error: 'WhatsApp lead not found.' });
    }

    leads = leads.filter(l => l.id !== id && l._id !== id);

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
