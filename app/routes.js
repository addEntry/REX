// routes.js

// Let's create a new express router:
var express = require('express');
var router = express.Router();
var mainController = require('./controllers/main.controller');
var eventsController = require('./controllers/events.controller');

// let's export our router:
module.exports = router;

// let's define our routes:
// home route
router.get('/', mainController.showHome);

// events route
router.get('/rexData/events', eventsController.showEvents);

// seed event route
router.get('/events/seed', eventsController.seedEvents);

// create events
router.get('/events/create', eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

// edit events
router.get('/events/:nameUrl/edit', eventsController.showEdit);
router.post('/events/:nameUrl', eventsController.processEdit)

// delete events
router.get('/events/:nameUrl/delete', eventsController.deleteEvent);

// single event route
router.get('/events/:nameUrl', eventsController.showSingle);
