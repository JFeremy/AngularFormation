'use strict';

angular.module('myApp.purchase', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Achat', {
    templateUrl: 'views/purchase/purchase.html',
    controller: 'PurchaseCtrl'
  });
}])

.controller('PurchaseCtrl', [function() {

}]);
