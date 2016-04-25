'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });   
  }).
  controller('planetCtrl', function ($scope, servicePlanet, serviceDetail, $routeParams) {
    var id = $routeParams.id;
    servicePlanet.getPlanet(id)
    .success(function(data){
      $scope.planet = data;
      serviceDetail.getDetail($scope.planet.films, 'planet', 'film', $scope);
      serviceDetail.getDetail($scope.planet.residents, 'planet', 'people', $scope);
    })
  }).
  controller('peopleCtrl', function ($scope, servicePeople, serviceDetail, $routeParams) {
    var id = $routeParams.id;
    servicePeople.getPeople(id)
    .success(function(data){
      $scope.people = data;
      serviceDetail.getDetail($scope.people.films, 'people', 'film', $scope);
      serviceDetail.getDetail($scope.people.homeworld, 'people', 'planet', $scope);
      serviceDetail.getDetail($scope.people.species, 'people', 'species', $scope);
      serviceDetail.getDetail($scope.people.starships, 'people', 'spaceship', $scope);
      serviceDetail.getDetail($scope.people.vehicles, 'people', 'vehicle', $scope);
    })
  }).
  controller('spaceShipCtrl', function ($scope, serviceSpaceShip, serviceDetail, $routeParams) {
    var id = $routeParams.id;
    serviceSpaceShip.getShip(id)
    .success(function(data){
      $scope.spaceship = data;
      serviceDetail.getDetail($scope.spaceship.films, 'spaceship', 'film', $scope);
      serviceDetail.getDetail($scope.spaceship.pilots, 'spaceship', 'people', $scope);
    })
  }).
  controller('vehiclesCtrl', function ($scope, serviceVehicle, serviceDetail, $routeParams) {
    var id = $routeParams.id;
    serviceVehicle.getVehicle(id)
    .success(function(data){
      $scope.vehicle = data;
      serviceDetail.getDetail($scope.vehicle.films, 'vehicle', 'film', $scope);
      serviceDetail.getDetail($scope.vehicle.pilots, 'vehicle', 'people', $scope);
    })
  }).
  controller('filmCtrl', function ($scope, serviceFilm, serviceDetail, $routeParams) {
    var id = $routeParams.id;
    serviceFilm.getFilm(id)
    .success(function(data){
      $scope.film = data;
      serviceDetail.getDetail($scope.film.characters, 'film', 'people', $scope);      
      serviceDetail.getDetail($scope.film.planets, 'film', 'planet', $scope);
      serviceDetail.getDetail($scope.film.species, 'film', 'species', $scope);
      serviceDetail.getDetail($scope.film.starships, 'film', 'spaceship', $scope);
      serviceDetail.getDetail($scope.film.vehicles, 'film', 'vehicle', $scope);
    })
  }).
  controller('speciesCtrl', function ($scope, serviceSpecies, serviceDetail, $routeParams) {
    var id = $routeParams.id;
    serviceSpecies.getSpecies(id)
    .success(function(data){
      $scope.species = data;
      serviceDetail.getDetail($scope.species.films, 'species', 'film', $scope);
      serviceDetail.getDetail($scope.species.homeworld, 'species', 'planet', $scope);
      serviceDetail.getDetail($scope.species.people, 'species', 'people', $scope);
    })
  });
