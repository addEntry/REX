// server

// grab dependencies
var express = require('express');
var app = express();
var listenPort = process.env.PORT || 3000;

// app configuration

// static folders
app.use(express(__dirname + '/public'));

// setup routes
app.use(require('./app/routes'));

// server fireUp
app.listen(listenPort, function(req, res) {
    console.log('app is running and listening on port ' + listenPort);
});
