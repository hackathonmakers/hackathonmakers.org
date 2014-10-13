
'use strict';
angular.module('App', ['seo','App.controllers'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/apps/parana-2014/views/main.html',
        controller: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

