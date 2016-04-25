'use strict';

/* Factory */

angular.module('myApp.factory', []).
  service('servicePlanet', function ($http) {
    return {
      getPlanet : function(id){
        return $http.get('http://swapi.co/api/planets/'+id+'/');
      }
    }
  })
  .service('servicePeople', function ($http){
    return {
      getPeople : function(id){
        return $http.get('http://swapi.co/api/people/'+id+'/');
      }
    }
  })
  .service('serviceSpaceShip', function ($http){
    return {
      getShip : function(id){
        return $http.get('http://swapi.co/api/starships/'+id+'/');
      }
    }
  })
  .service('serviceVehicle', function ($http){
    return {
      getVehicle : function(id){
        return $http.get('http://swapi.co/api/vehicles/'+id+'/');
      }
    }
  })
  .service('serviceFilm', function ($http){
    return {
      getFilm : function(id){
        return $http.get('http://swapi.co/api/films/'+id+'/');
      }
    }
  })
  .service('serviceSpecies', function ($http){
    return {
      getSpecies : function(id){
        return $http.get('http://swapi.co/api/species/'+id+'/');
      }
    }
  })
  .service('serviceDetail', function ($http){
    return {
      getDetail : function(data, obj1, obj2, $scope){
        var temp = [].concat( data );
        data = [];
        for (var i = 0 ; i < temp.length; i++) {
          $http.get(temp[i]).success(function(res){
            data.push(res)
            switch (obj1){
              case 'people':
                if (obj2 == 'film') {
                  $scope.people.films = data;
                } else if (obj2 == 'species') {
                  $scope.people.species = data;
                } else if (obj2 == 'spaceship') {
                  $scope.people.starships = data;
                } else if (obj2 == 'vehicle') {
                  $scope.people.vehicles = data;
                } else if (obj2 == 'planet') {
                  $scope.people.homeworld = data;
                }
                break;
              case 'planet':
                if (obj2 == 'film') {
                  $scope.planet.films = data;
                } else if (obj2 == 'people') {
                  $scope.planet.residents = data;
                }
                break;
              case 'spaceship':
                if (obj2 == 'film') {
                  $scope.spaceship.films = data;
                } else if (obj2 == 'people') {
                  $scope.spaceship.pilots = data;
                }
                break;
              case 'vehicle':
                if (obj2 == 'film') {
                  $scope.vehicle.films = data;
                } else if (obj2 == 'people') {
                  $scope.vehicle.pilots = data;
                }
                break;
              case 'film':
                if (obj2 == 'people') {
                  $scope.film.characters = data;
                } else if (obj2 == 'planet') {
                  $scope.film.planets = data;
                } else if (obj2 == 'species') {
                  $scope.film.species = data;
                } else if (obj2 == 'spaceship') {
                  $scope.film.starships = data;
                } else if (obj2 == 'vehicle') {
                  $scope.film.vehicles = data;
                }
                break;
              case 'species':
                if (obj2 == 'film') {
                  $scope.species.films = data;
                } else if (obj2 == 'people') {
                  $scope.species.people = data;
                } else if (obj2 == 'planet') {
                  $scope.species.homeworld = data;
                }
                break;
            }
          })
        };
      }
    }
  })
  ;
