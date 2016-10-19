var app = angular.module('ngoApp', ['ngRoute','gm.datepickerMultiSelect','ui.bootstrap']);

app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/home', {
            templateUrl : 'templates/dashboard.html',
            controller  : 'MainController'
        })
        .when('/plan-event', {
            templateUrl : 'templates/date-planner.html',
            controller  : 'DatePlanController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
