'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.factory'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/planet/:id', {
      templateUrl: 'partials/planet',
      controller: 'planetCtrl'
    }).
    when('/people/:id', {
      templateUrl: 'partials/people',
      controller: 'peopleCtrl'
    }).
    when('/spaceship/:id', {
      templateUrl: 'partials/spaceship',
      controller: 'spaceShipCtrl'
    }).
    when('/vehicle/:id', {
      templateUrl: 'partials/vehicle',
      controller: 'vehiclesCtrl'
    }).
    when('/film/:id', {
      templateUrl: 'partials/film',
      controller: 'filmCtrl'
    }).
    when('/species/:id', {
      templateUrl: 'partials/species',
      controller: 'speciesCtrl'
    }).
    otherwise({
      redirectTo: '/film/1'
    });

  $locationProvider.html5Mode(true);
});
