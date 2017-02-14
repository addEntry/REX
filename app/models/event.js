// send data to database

// let's define mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create Schema
var eventSchema = new Schema({
    name: String,
    nameUrl: {
        type: String,
        unique: true
    },
    project: String,
    seller: String,
    proman: String,
    descriptIn: String,
    notIn: Number,
    descriptOut: String,
    notOut: Number

});


// midleware
// midleware will make sure that nameUrl is created from the name
// pre : the way that we call midleware
eventSchema.pre('save', function(next) {
    this.nameUrl = nameUrly(this.name);

    next();
});

// create model
var eventModel = mongoose.model('Event', eventSchema);

// export our model
module.exports = eventModel;

// function to slugify a name
function nameUrly(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};
