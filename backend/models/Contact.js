const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, default: 'Not Provided' },
    service: { type: String, default: 'Not Specified' },
    subject: { type: String, default: 'No Subject' },
    message: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    notes: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
