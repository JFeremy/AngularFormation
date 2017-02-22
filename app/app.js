'use strict';

// Declare app level module which depends on views, and components
var AppVM = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngMessages',
  'myApp.admin',
  'myApp.basket',
  'myApp.home',
  'myApp.purchase',
  'myApp.articles',
  'myApp.customers',
  'myApp.customerInfo',
  'myApp.articleManage',
  'myApp.version'
]);
AppVM.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/Accueil'});
}]);
