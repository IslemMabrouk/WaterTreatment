//Import express
const express = require('express');

//Instance express in App
const app = express();

// import mongoose
const mongoose = require('mongoose');
// import model User
const User = require('./models/user');

// import body parser
const bodyParser = require('body-parser');


// Connect to Data Base
mongoose.connect('mongodb://localhost:27017/WaterDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));







//Export App
module.exports = app;