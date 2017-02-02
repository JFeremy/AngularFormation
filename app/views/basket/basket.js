'use strict';

angular.module('myApp.basket', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Panier', {
    templateUrl: 'views/basket/basket.html',
    controller: 'BasketCtrl'
  });
}])

.controller('BasketCtrl', [function() {

}]);
