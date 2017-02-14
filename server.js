// server.js

// Here, we are loading evironment variables
require('dotenv').config();

// let's define our dependencies
var express = require('express');
var app = express();
var listeningPort = process.env.PORT || 3000;
var expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var expressValidator = require('express-validator');
var bcrypt = require('bcrypt-nodejs');


// let's set session && cookieParser
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET,
    cookie: {
        maxAge: 60000
    },
    resave: false, // forced to be saved
    saveUninitialized: false // dont' save unmodified
}));
app.use(flash());

// let's set the connection parameters for mongoDB connection
mongoose.connect(process.env.DB_URI);

// let's configure our application
// - let's set our static folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
app.use(expressValidator());

// let's set 'ejs' as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

//check if is logged here
/* todo */

// let's set the routes for our app
app.use(require('./app/routes'));

// let's start our server
app.listen(listeningPort, function(req, res) {
    console.log('app is listening on http://localhost:' + listeningPort);
});;
