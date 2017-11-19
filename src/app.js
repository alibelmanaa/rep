// Filename: app.js
define([
    'router', // Request router.js
], function(Router) {
    var initialize = function() {
        console.log("app1");
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});
