// This file is responsable for database connection.

const mongoose = require('mongoose'); 
require('dotenv').config();

//define the mongodb connection url

//const mongoURL = process.env.DB_local;
const mongoURL = process.env.DB_URL;

// setup mongose connection

mongoose.connect(mongoURL);

const db = mongoose.connection;

// define event listener for database connection

db.on('connected',()=>{
    console.log('Connected to mongodb server');
});

db.on('error',(err)=>{
    console.log('Mongodb connection error:',err);
});

db.on('reconnected', () => {
    console.log('🔄 MongoDB reconnected');
});

db.on('disconnected',()=>{
    console.log('Mongodb server disconnected');
});

// Export the databse connection

module.exports = db;
