'use strict';

angular.module('myApp.articles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Articles', {
    templateUrl: 'views/articles/articles.html',
    controller: 'ArticlesCtrl'
  });
}])

.controller('ArticlesCtrl', [function() {

}]);
