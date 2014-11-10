'use strict';

angular.module('hm-app.controllers', []);
angular.module('hm-app.directives', []);
angular.module('hm-app.services', []);
angular.module('hm-app.factories', []);
angular.module('hm-app.fiters', []);

// Declare app level module which depends on filters, and services
angular.module('hm-app', [
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

