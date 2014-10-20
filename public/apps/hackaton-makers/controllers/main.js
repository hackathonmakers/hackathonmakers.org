'use strict';
angular.module('hm-app.controllers')
.controller('main', function ($scope) {
    $scope.next = function(id){
      $('html,body').animate({ scrollTop: $('#'+ id).offset().top }, 'slow');    
    }  
});


