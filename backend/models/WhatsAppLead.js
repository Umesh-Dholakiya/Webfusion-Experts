const mongoose = require('mongoose');

const WhatsAppLeadSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, default: 'Anonymous', trim: true },
    phone: { type: String, default: 'Not Provided' },
    message: { type: String, default: '' },
    sourcePage: { type: String, default: 'Unknown' },
    status: { type: String, default: 'New' },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.models.WhatsAppLead || mongoose.model('WhatsAppLead', WhatsAppLeadSchema);
