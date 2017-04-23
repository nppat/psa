var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);

// Set up routes and controllers
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
          .when('/', {
            templateUrl: 'partials/main.html',
            controller: ''
          })
          .otherwise({
            templateUrl: 'partials/main.html'
          });
}]);
