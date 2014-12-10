'use strict';

angular.module('hm-app.controllers', []);
angular.module('hm-app.directives', []);
angular.module('hm-app.services', []);
angular.module('hm-app.factories', []);
angular.module('hm-app.fiters', []);

// Declare app level module which depends on filters, and services
var app = angular.module('hm-app', [
  //'hm-app.filters',
  //'hm-app.services',
  //'hm-app.factories',
  'hm-app.directives',
  'hm-app.controllers',
  'ngRoute',
]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/apps/hackaton-makers/views/main.html',
        controller: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


app.run(['$rootScope', function ($rootScope) {

     //create a new instance
     new WOW().init();

    $rootScope.$on('$routeChangeStart', function (next, current) {
        //when the view changes sync wow
        new WOW().sync();
    });
}]);