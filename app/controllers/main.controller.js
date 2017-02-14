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
            res.body.showHome;
        }
    }
};
