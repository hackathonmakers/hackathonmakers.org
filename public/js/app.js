
'use strict';
angular.module('App', ['seo','App.controllers'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'main'
      })
      .when('/agenda', {
        templateUrl: 'views/agenda.html',
        controller: 'agenda'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'faq'
      })
      .when('/reglas', {
        templateUrl: 'views/reglas.html',
        controller: 'reglas'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

