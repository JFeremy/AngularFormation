'use strict';

angular.module('myApp.components', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Composants', {
    templateUrl: 'views/components/components.html',
    controller: 'ComponentsCtrl'
  });
}])

.controller('ComponentsCtrl', function($scope,$rootScope,$mdDialog) {
  $rootScope.componentType =[
    {Type:"OS",TypeLabel:"OS"},
    {Type:"SOFT",TypeLabel:"Application"},
    {Type:"CMS",TypeLabel:"CMS"}];

  $scope.showDetailComp = function(ev,index) {
    console.log('composant/detail:click');
    $rootScope.compoDetail_index = index;
    $mdDialog.show({
     contentElement: '#CompoDetail',
     parent: angular.element(document.body),
     clickOutsideToClose:true
    });
  };
  $scope.showAddComp = function(ev,index) {
    console.log('composant/add:click');
    $mdDialog.show({
     contentElement: '#CompoAdd',
     parent: angular.element(document.body),
     clickOutsideToClose:true
    });
  };
});
