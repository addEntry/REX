/* jQuery */

// console.log("Hello There!");

// global vars

// devListObject
var devList = [{
        id: 0,
        name: 'Pierre'
    },
    {
        id: 1,
        name: 'Esteve'
    },
    {
        id: 2,
        name: 'Julien'
    }
];

// formObject
var formObject = {
    customer: '',
    project: '',
    devs: [],
    seller: '',
    manager: '',
    notationIn: null,
    commIn: '',
    notationOut: null,
    commOut: ''
};

var helpers = {
    getWorkerById: function(id) {
        for (var i = 0; i < devList.length; i++) {
            if (devList[i].id === id) {
                return devList[i];
            }
        }
    },
    getActiveWorkerIndexById: function(id) {
        for (var i = 0; i < formObject.devs.length; i++) {
            if (formObject.devs[i].id === id) {
                return i;
            }
        }
    }
}
// jQuery init
$(document).ready(function() {
    // customer caption
    $('[data-input="input0"]').on('keyup', function(event) {
        formObject.customer = event.target.value;
    })

    // project caption
    $('[data-input="input1"]').on('keyup', function(event) {
        formObject.project = event.target.value;
    })

    // map devListObject
    devList.map(function(devList) {
        $('[data-div="standby"]').append('<p data-id="' + devList.id + '">' + devList.name + '</p>');
    })

    // click event to change available devs to active status
    $('[data-div="standby"]').on('click', '[data-id]', function(event) {
        var element = $(this);
        element.fadeOut('slow', null, element.remove());

        // get dev's id's
        var id = $(event.target).attr('data-id');
        id = parseInt(id, 10);

        // push dev id into formObject.devs array
        formObject.devs.push(id);

        // get the worker id and add it to the dom
        var worker = helpers.getWorkerById(id)
        $('[data-div="active"]').append('<p class="active" data-id="' + worker.id + '">' + worker.name + '</p>')
    })

    /*----------------------------------------------------------------------------*/

    // click event to change active devs to standby status
    // lui passer les enfants du noeud!

    // click event to change active devs to available status
    $('[data-div="active"]').on('click', '[data-id]', function(event) {
        var element = $(this);
        element.fadeOut('slow', null, element.remove());

        // get dev's id's
        var id = $(event.target).attr('data-id')
        id = parseInt(id, 10);

        // delete dev id from array
        var index = helpers.getActiveWorkerIndexById(id);
        formObject.devs.splice(index, 1);

        // get the worker id and add it to the dom
        var worker = helpers.getWorkerById(id)
        $('[data-div="standby"]').append('<p data-id="' + worker.id + '">' + worker.name + '</p>')

    });
    /*----------------------------------------------------------------------------*/

    // seller caption
    $('[data-select="selForm"]').on('click', function(event) {
        formObject.seller = event.target.value;
    })

    // project manager caption
    $('[data-select="pmForm"]').on('click', function(event) {
        formObject.manager = event.target.value;
    })

    // notation caption
    $('[data-div="radio0"]').on('click', function(event) {
        formObject.notationIn = event.target.value;
    })

    // notation caption
    $('[data-div="radio1"]').on('click', function(event) {
        formObject.notationOut = event.target.value;
    })


    // comments caption IN
    $('[data-ta="commin"]').on('keyup', function(event) {
        formObject.commIn = event.target.value;
    })

    // comment caption OUT
    $('[data-ta="commout"]').on('keyup', function(event) {
        formObject.commOut = event.target.value;
    })

    //  $('[data-button="feed"]').on('click', function() {
    //    console.log(genJson);
    //})

});

// JSONgenMe
// just use 'console.log(genJson)'
var genJson = formObject;
Object;
