// express router
var express = require('express');
var router = express.Router();
var mainController = require('./controllers/mainController');

// export router :
module.exports = router;

// define routes :
router.get('/', mainController.showHome);
