// server

// grab dependencies
var express = require('express');
var app = express();
var listenPort = process.env.PORT || 3000;
var expressLayouts = require('express-ejs-layouts');

// app configuration

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
