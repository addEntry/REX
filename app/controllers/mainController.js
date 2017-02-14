var bcrypt = require('bcrypt-nodejs');

module.exports = {

    // show the homePage :
    showLogin: function(req, res) {
        res.render('pages/auth/login');
    },

    // check user middleware
    /*
    checkUser: function(req, res, next) {
        console.log(req.params);
        next(); */

    checkUser: function(req, res) {
        var password = "$2a$06$t.WW4R/x2HwJiR709TlMsufi/wz4BxEnkFK.MJx1laDsKNi8AtiKe";
        var incommingPassword = req.body.inputPassword;
        var result = bcrypt.compareSync(incommingPassword, password)
        if (result) {
            res.render('pages/content/usrProfile')
        } else {
            res.body.showLogin;
        }

    }
}
