'use strict';

angular.module('myApp.admin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Administration', {
    templateUrl: 'views/admin/admin.html',
    controller: 'AdminCtrl'
  });
}])

.controller('AdminCtrl', [function() {

}]);
