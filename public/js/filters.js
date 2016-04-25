'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  })
  .filter('getId', function() {
    return function (x) {
    	if (x != undefined) {
	    	x = x.slice(0, -1);
	    	if (x.split("/",-1)[4] == 'people') {
	    		return 'people/'+x.split("/",-1)[5];
	    	} else if (x.split("/",-1)[4] == 'species') {
	    		return 'species/'+x.split("/",-1)[5];
	    	} else if (x.split("/",-1)[4] == 'starships') {
	    		return 'spaceship/'+x.split("/",-1)[5];
	    	} else if (x.split("/",-1)[4] == 'vehicles') {
	    		return 'vehicle/'+x.split("/",-1)[5];
	    	} else if (x.split("/",-1)[4] == 'films') {
	    		return 'film/'+x.split("/",-1)[5];
	    	} else if (x.split("/",-1)[4] == 'planets') {
	    		return 'planet/'+x.split("/",-1)[5];
	    	}
	        // return 'www.google.com';
	    }
    };
});
