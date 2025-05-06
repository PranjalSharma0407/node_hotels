const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    sslValidate: false,  // Optional, if you want to bypass certificate validation
    tlsAllowInvalidCertificates: true,  // Allow invalid certificates (not recommended for production)
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB server disconnected');
});

module.exports = db;
