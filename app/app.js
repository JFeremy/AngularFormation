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
  'myApp.components',
  'myApp.commands',
  //'myApp.commandDetail',
  'myApp.customers',
  'myApp.customerInfo'
]);
AppVM.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/Accueil'});
}]);
AppVM.config(function($mdThemingProvider) {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('red')
    .accentPalette('grey')
    .warnPalette('orange')
    .backgroundPalette('grey').dark();
    //.backgroundPalette('grey');
});
