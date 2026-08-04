const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.log('ℹ️ [MongoDB] MONGODB_URI is not set in backend/.env. Using local JSON storage.');
    return false;
  }

  // Check for placeholder or incomplete URI
  if (
    uri.includes('<username>') ||
    uri.includes('<password>') ||
    uri.includes('cluster0.mongodb.net') // generic placeholder domain without Atlas cluster hash
  ) {
    console.log('ℹ️ [MongoDB] Placeholder URI detected in backend/.env.');
    console.log('💡 [MongoDB] To enable MongoDB Atlas: Replace MONGODB_URI in backend/.env with your real MongoDB Atlas connection string (e.g. mongodb+srv://user:pass@cluster0.a1b2c.mongodb.net/webfusion).');
    console.log('⚡ [MongoDB] Server is running seamlessly with local JSON storage.');
    return false;
  }

  if (isConnected) {
    return true;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`✅ [MongoDB] Connected successfully to database host: ${conn.connection.host}`);
    return true;
  } catch (err) {
    if (err.code === 'ECONNREFUSED' || err.message.includes('querySrv')) {
      console.log('⚠️ [MongoDB] DNS lookup failed. Please check if your MongoDB connection string in backend/.env is correct and your internet connection is active.');
    } else if (err.message.includes('Authentication failed')) {
      console.log('⚠️ [MongoDB] Authentication failed. Please verify your MongoDB username and password in backend/.env.');
    } else {
      console.error(`⚠️ [MongoDB] Connection warning: ${err.message}`);
    }
    console.log('⚡ [MongoDB] Falling back to local JSON storage so your app continues working smoothly.');
    return false;
  }
};

const getIsConnected = () => isConnected;

module.exports = { connectDB, getIsConnected };
