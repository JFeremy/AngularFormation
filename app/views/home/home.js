'use strict';

var appHome = angular.module('myApp.home', ['ngRoute','ngMaterial']);

appHome.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Accueil', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  });
}]);

appHome.controller('HomeCtrl', function() {});
