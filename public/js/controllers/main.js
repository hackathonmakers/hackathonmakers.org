'use strict';
angular.module('App.controllers',[])
.controller('main', ['$scope', function ($scope, localStorageService, points) {

      //Map
      var mapOptions = {
        center: new google.maps.LatLng(-31.6404087, -60.7022833),
        zoom: 14,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-31.6404087, -60.6722833),
          map: map
      });

      var center;
      function calculateCenter() {
        center = map.getCenter();
      }
      google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
      });
      google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
      });


      $scope.projects = [];

      $scope.projects.push({
        pic:"/img/hipo.png",
        link: "http://hipo-hackathonmdq.herokuapp.com/",
        hack: "Hipo",
        where: "MDQ",
        description: "Te dice que es lo que podés hacer hoy para empezar el día en Mar del Plata!",
        apis: "Clima, FourSquare, MDQ Cultura"
      });
      $scope.projects.push({
        pic:"/img/mejorenbici.png",
        hack: "Mejor En Bici",
        link: "http://ecobici.buenosaires.gob.ar/",
        where: "BA",
        description: "Utilizando informacion sobre ciclovías se creó el primer Mapa de Red de Ciclovías",
        apis: "Bicis BA, Mapa BA"
      });
      $scope.projects.push({
        pic:"http://hackmdq.hackdash.org/uploads/1e541c5b8b60cf61afa532e7d928c3e4.jpg",
        link: "hhttps://play.google.com/store/apps/details?id=com.coffeeandcookies.estacionamientomdq",
        hack: "Parker",
        where: "MDQ",
        description: "Estaciona en Mar Del Plata con un solo tap!",
        apis: "Estacionamiento, mobile"
      });
      $scope.projects.push({
        pic:"/img/kiwi.png",
        link: "http://blog.palamago.com.ar/2013/05/kiwi-estacion-automatizada-de-bicicletas-prototipo/",
        hack: "Kiwi",
        where: "BA",
        description: "Sistema para automatizar las estaciones de bicicletas mediante SMS.",
        apis: "arduino, raspberry, nodejs, sockets, bicicletas, mobile"
      });



      console.log($scope.projects);

     $scope.htmlReady();



}]);


