'use strict';

angular.module('myApp.customers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Clients', {
    templateUrl: 'views/customers/customers.html',
    controller: 'CustomersCtrl'
  });
}])

.controller('CustomersCtrl', [function() {

}]);
