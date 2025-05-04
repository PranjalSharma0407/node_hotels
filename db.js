// This file is responsable for database connection.

const mongoose = require('mongoose'); 

//define the mongodb connection url

const mongoURL =  'mongodb://127.0.0.1:27017/hotels' 

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
