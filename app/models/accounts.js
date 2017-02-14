// accounts.js

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// set schema for user model
var userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String
    }
})

// hash generation
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// export the user model
module.exports = mongoose.model('User', userSchema);
