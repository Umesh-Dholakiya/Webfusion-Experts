const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log('⚠️ [MongoDB] MONGODB_URI not provided in .env. Falling back to local JSON storage.');
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
    console.log(`✅ [MongoDB] Connected to database host: ${conn.connection.host}`);
    return true;
  } catch (err) {
    console.error(`❌ [MongoDB] Connection error: ${err.message}`);
    console.log('⚠️ [MongoDB] Database connection failed. Falling back to local JSON storage.');
    return false;
  }
};

const getIsConnected = () => isConnected;

module.exports = { connectDB, getIsConnected };
