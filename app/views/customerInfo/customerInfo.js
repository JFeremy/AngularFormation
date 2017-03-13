'use strict';

angular.module('myApp.customerInfo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Client/:mailClient', {
    templateUrl: 'views/customerInfo/customerInfo.html',
    controller: 'CustomerInfoCtrl'
  });
}])

.controller('CustomerInfoCtrl', [function() {

}]);
