'use strict';

angular.module('myApp.customerInfo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Information_Client', {
    templateUrl: 'views/customerInfo/customerInfo.html',
    controller: 'CustomerInfoCtrl'
  });
}])

.controller('CustomerInfoCtrl', [function() {

}]);
