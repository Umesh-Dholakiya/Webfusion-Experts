const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.log('ℹ️ [MongoDB] MONGODB_URI is not set in backend/.env. Using local JSON storage.');
    return false;
  }

  // Check for actual placeholder patterns only (not real URIs)
  if (
    uri.includes('<username>') ||
    uri.includes('<password>') ||
    uri === 'your_mongodb_connection_string_here'
  ) {
    console.log('ℹ️ [MongoDB] Placeholder URI detected in backend/.env.');
    console.log('💡 [MongoDB] To enable MongoDB Atlas: Replace MONGODB_URI in backend/.env with your real MongoDB Atlas connection string.');
    console.log('⚡ [MongoDB] Server is running with local JSON storage.');
    return false;
  }

  if (isConnected) {
    return true;
  }

  console.log('🔄 [MongoDB] Attempting to connect to MongoDB Atlas...');

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
    });
    isConnected = true;
    console.log(`✅ [MongoDB] Connected successfully to: ${conn.connection.host}`);
    return true;
  } catch (err) {
    if (err.message && (err.message.includes('querySrv') || err.message.includes('ECONNREFUSED'))) {
      console.error('❌ [MongoDB] Connection failed: DNS lookup failed.');
      console.error('💡 [MongoDB] Your MONGODB_URI cluster address seems incorrect.');
      console.error('   → Go to MongoDB Atlas → Connect → Drivers → Copy the correct connection string.');
      console.error('   → Make sure your IP is whitelisted in Network Access (0.0.0.0/0 for dev).');
    } else if (err.message && err.message.includes('Authentication failed')) {
      console.error('❌ [MongoDB] Authentication failed. Check your username/password in backend/.env.');
    } else {
      console.error(`❌ [MongoDB] Connection error: ${err.message}`);
    }
    console.log('⚡ [MongoDB] Falling back to local JSON storage.');
    return false;
  }
};

const getIsConnected = () => isConnected;

module.exports = { connectDB, getIsConnected };
