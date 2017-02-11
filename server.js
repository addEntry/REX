// server

// grab dependencies
var express = require('express');
var app = express();
var listenPort = process.env.PORT || 3000;

// app configuration


// setup routes
app.get('/', function(req, res) {
    res.send('Hello, I am the app');
});

// server fireUp
app.listen(listenPort, function(req, res) {
    console.log('app is running and listening on port ' + listenPort);
});
