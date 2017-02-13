// server

// grab dependencies
var express = require('express');
var app = express();
var listenPort = process.env.PORT || 3000;
var expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var configDB = require('./config/database.js');

// app configuration

// database adress
mongoose.connect("mongodb://127.0.0.1/REX");

// static folders
app.use(express.static(__dirname + '/public'));

// set ejs as the templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// setup routes
app.use(require('./app/routes'));

// server fireUp
app.listen(listenPort, function(req, res) {
    console.log('app is running and listening on port ' + listenPort);
});
