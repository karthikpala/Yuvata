var app = angular.module('ngoApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/home', {
            templateUrl : 'templates/dashboard.html',
            controller  : 'MainController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
