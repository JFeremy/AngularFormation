'use strict';

angular.module('myApp.articleManage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Information_Article', {
    templateUrl: 'views/articleManage/articleManage.html',
    controller: 'ArticleManageCtrl'
  });
}])

.controller('ArticleManageCtrl', [function() {

}]);
