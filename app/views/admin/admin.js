'use strict';

angular.module('myApp.admin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Administration', {
    templateUrl: 'views/admin/admin.html',
    controller: 'AdminCtrl'
  });
}])

.controller('AdminCtrl', function($scope,$rootScope) {
  var infoHome = $rootScope.infoHome;
  $scope.adminHome0 = [
    {value:infoHome.nbCustomer, icon:'supervisor_account', text:"Nombre de clients inscrits"},
    {value:infoHome.nbCustoApp, icon:'smartphone', text:"Nombre de clients ayant l'application"}
  ];
  $scope.adminHome1 = [
    {value:infoHome.nbCommand, icon:'shopping_cart', text:"Total des commandes"},
    {value:infoHome.amountSold, icon:'euro_symbol', text:"Total des ventes"}
  ];
  $scope.adminHome2 = [
    {value:infoHome.nbVMInstall, icon:'move_to_inbox', text:"Nombre de VM installées"},
    {value:infoHome.nbPackage, icon:'view_list', text:"Nombre de packages proposés"}
  ];
});
