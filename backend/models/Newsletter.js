const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema(
  {
    id: { type: String },
    email: { type: String, required: true, trim: true, lowercase: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.models.Newsletter || mongoose.model('Newsletter', NewsletterSchema);
