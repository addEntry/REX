// check user middleware

module.export(function(req, res, next) {


    console.log('middleware');

    // usr check

    // grab usr from database
    // var user = user.findOne({ username : req.params.username });

    // was no user = 404
    if (!user) {
        res.status(404);
        return re.send('404 not found')
    }

    next();
});
