'use strict';
angular.module('App.controllers',[])
.controller('main', ['$scope', function ($scope, localStorageService, points) {



      $scope.projects = [];

      $scope.projects.push({
        pic:"/img/hipo.png",
        link: "http://hipo-hackathonmdq.herokuapp.com/",
        hack: "Hipo",
        where: "MDQ",
        description: "Mezclando el clima, gustos personales y lugares, te entrega alternativas para disfrutar la ciudad en el dia.",
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
        pic:"/img/km404.png",
        hack: "KM404",
        link: "http://hipo.herokuapp.com/",
        where: "MDQ",
        description: "Mezclando el clima, gustos personales y lugares, te entrega alternativas para disfrutar la ciudad en el dia.",
        techs: "Wheather, FourSquare, MDQ Cultura"
      });
      $scope.projects.push({
        pic:"/img/kiwi.png",
        link: "http://hipo.herokuapp.com/",
        hack: "Kiwi",
        where: "BA",
        description: "Mezclando el clima, gustos personales y lugares, te entrega alternativas para disfrutar la ciudad en el dia.",
        apis: "Kiwi, kiwi"
      });




      console.log($scope.projects);

     $scope.htmlReady();



}]);


