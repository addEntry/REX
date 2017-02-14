// events controller
var Event = require('../models/event');

// show all events
module.exports = {
    showEvents: showEvents,
    showSingle: showSingle,
    seedEvents: seedEvents,
    showCreate: showCreate,
    processCreate: processCreate,
    showEdit: showEdit,
    processEdit: processEdit,
    deleteEvent: deleteEvent
}

function showEvents(req, res) {
    Event.find({}, function(err, events) {
        if (err) {
            res.error('404');
            res.send('Events not found!');
        }
        res.render('pages/rexData/events', {
            events: events,
            success: req.flash('success')
        });
    });
}

function showSingle(req, res) {
    Event.findOne({
        nameUrl: req.params.nameUrl
    }, function(err, event) {
        if (err) {
            res.error('404');
            res.send('Event not found!');
        }
        res.render('pages/rexData/single', {
            event: event,
            success: req.flash('success')
        });
    });
}

// seed our database
function seedEvents(req, res) {
    // create event
    // use event model to insert/save
    for (event of events) {
        var newEvent = new Event(event);
        newEvent.save();
    }
    // database seeded!
    res.send('REX database successfully seeded!')
}

// show create function
function showCreate(req, res) {
    res.render('pages/rexData/create', {
        errors: req.flash('errors')
    });
}

function processCreate(req, res) {
    // validate information
    req.checkBody('name', 'Client field is required.').notEmpty();
    req.checkBody('project', 'Project field is required.').notEmpty();
    req.checkBody('descriptIn', 'Description is required').notEmpty();

    // if there are errors, we'll go back
    var errors = req.validationErrors();
    if (errors) {
        //req.flash('errors', errors.map(err => err.msg));
        req.flash('errors', errors.map(function(err) {
            return err.msg
        }));
        return res.redirect('/rexData/events/create');
    }

    var event = new Event({
        name: req.body.name,
        project: req.body.project,
        seller: req.body.seller,
        proman: req.body.proman,
        descriptIn: req.body.descriptIn,
        notIn: req.body.notIn,
        descriptOut: req.body.descriptOut,
        notOut: req.body.notOut
    });

    // save event
    event.save(function(err) {
        if (err)
            throw err;
        // show a successfull flash message
        req.flash('success', 'REX successfully created!');
        // redirect to the newly created event
        showEvents(req, res)
    });
}

// showEdit function
function showEdit(req, res) {
    Event.findOne({
            nameUrl: req.params.nameUrl
        },
        function(err, event) {
            res.render('pages/rexData/edit', {
                event: event,
                errors: req.flash('errors')
            });
        });
};

// process edit
function processEdit(req, res) {
    // validate information
    req.checkBody('name', 'Client field is required.').notEmpty();
    req.checkBody('descriptIn', 'Description field is required').notEmpty();

    //if there are errors, we'll go back
    var errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors.map(err => err.msg));
        req.flash('errors', errors.map(function(err) {
            return err.msg
        }));
        return res.redirect(`/rexData/events/${req.params.nameUrl}/edit`);
    }

    // find current event
    Event.findOne({
        nameUrl: req.params.nameUrl
    }, function(err, event) {
        // updating event
        event.name = req.body.name;
        event.project = req.body.project;
        event.seller = req.body.seller;
        event.proman = req.body.proman;
        event.descriptIn = req.body.descriptIn;
        event.notIn = req.body.notIn;
        event.descriptOut = req.body.descriptOut;
        event.notOut = req.body.notOut;

        event.save(function(err) {
            if (err) {
                throw err;
                req.flash('error', err);
                res.redirect('/events');
                return
            }
            req.flash('success', 'REX successfully updated!');
            res.redirect('/rexData/events');
        });
    })
}

// delete event
function deleteEvent(req, res) {
    Event.remove({
        nameUrl: req.params.nameUrl
    }, function(err) {
        req.flash('success', 'REX successfully deleted!');
        res.redirect('/rexData/events');
        return
    })
}
