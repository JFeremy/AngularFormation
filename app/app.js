'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.admin',
  'myApp.basket',
  'myApp.home',
  'myApp.purchase',
  'myApp.articles',
  'myApp.customers',
  'myApp.customerInfo',
  'myApp.articleManage',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/Accueil'});
}]).
config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
});;
