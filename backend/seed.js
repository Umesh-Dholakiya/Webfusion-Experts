require('dotenv').config();
const mongoose = require('mongoose');
const { CONTACTS_FILE, NEWSLETTER_FILE, WHATSAPP_LEADS_FILE } = require('./config/paths');
const { readJSON } = require('./helpers/fileHelper');
const Contact = require('./models/Contact');
const Newsletter = require('./models/Newsletter');
const WhatsAppLead = require('./models/WhatsAppLead');

const seedData = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log('⚠️ [Seed] MONGODB_URI missing in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('✅ [Seed] Connected to MongoDB Atlas');

    // 1. Seed Contacts
    const contacts = readJSON(CONTACTS_FILE);
    if (contacts.length > 0) {
      for (const item of contacts) {
        await Contact.updateOne(
          { id: item.id },
          { $setOnInsert: item },
          { upsert: true }
        );
      }
      console.log(`✅ [Seed] Synced ${contacts.length} Contacts to MongoDB.`);
    }

    // 2. Seed Newsletter Subscribers
    const newsletters = readJSON(NEWSLETTER_FILE);
    if (newsletters.length > 0) {
      for (const item of newsletters) {
        await Newsletter.updateOne(
          { email: item.email.toLowerCase() },
          { $setOnInsert: item },
          { upsert: true }
        );
      }
      console.log(`✅ [Seed] Synced ${newsletters.length} Newsletter Subscribers to MongoDB.`);
    }

    // 3. Seed WhatsApp Leads
    const whatsappLeads = readJSON(WHATSAPP_LEADS_FILE);
    if (whatsappLeads.length > 0) {
      for (const item of whatsappLeads) {
        await WhatsAppLead.updateOne(
          { id: item.id },
          { $setOnInsert: item },
          { upsert: true }
        );
      }
      console.log(`✅ [Seed] Synced ${whatsappLeads.length} WhatsApp Leads to MongoDB.`);
    }

    console.log('🎉 [Seed] Seeding completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ [Seed] Error:', err);
    process.exit(1);
  }
};

seedData();
