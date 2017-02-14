// mainController
var bcrypt = require('bcrypt-nodejs');

// let's show the homePage:
module.exports = {
    showHome: function(req, res) {
        res.render('./pages/users/login');
    },

    checkUser: function(req, res) {
        var password = "$2a$06$t.WW4R/x2HwJiR709TlMsufi/wz4BxEnkFK.MJx1laDsKNi8AtiKe";
        var incommingPassword = req.body.inputPassword;
        var result = bcrypt.compareSync(incommingPassword, password)
        if (result) {
            console.log(req.body.inputPassword)
            res.render('pages/users/usrProfile')
        } else {
            res.render('./pages/users/login');
        }
    }
};


/*
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy(
    function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Incorect Username.'
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorect password.'
                });
            }
            return done(null, user)
        })
    }
));
*/
