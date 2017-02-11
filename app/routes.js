// express router
var express = require('express');
var router = express.Router();

// export router :
module.exports = router;

// define routes :
router.get('/', function(req, res) {
    res.send('Hello, I am the app');
});
