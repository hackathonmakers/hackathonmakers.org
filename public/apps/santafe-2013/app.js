
'use strict';
angular.module('App', ['seo','App.controllers'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/apps/santafe-2013/views/main.html',
        controller: 'main'
      })
      .when('/agenda', {
        templateUrl: '/apps/santafe-2013/views/agenda.html',
        controller: 'agenda'
      })
      .when('/faq', {
        templateUrl: '/apps/santafe-2013/views/faq.html',
        controller: 'faq'
      })
      .when('/reglas', {
        templateUrl: '/apps/santafe-2013/views/reglas.html',
        controller: 'reglas'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

