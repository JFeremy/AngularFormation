'use strict';

angular.module('myApp.articles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Articles', {
        templateUrl: 'views/articles/articles.html',
        controller: 'ArticlesCtrl'
    });
}])

.controller('ArticlesCtrl', function($scope, $rootScope, $mdDialog, $http) {
    $scope.articlesList = $rootScope.articlesList;
    var indexedArticles = [];

    $scope.articlesToFilter = function() {
        indexedArticles = [];
        return $scope.articlesList;
    }

    $scope.filterArticle = function(article) {
        var articleIsNew = indexedArticles.indexOf(article.Id_Article) == -1;
        if (articleIsNew) {
            indexedArticles.push(article.Id_Article);
        }
        return articleIsNew;
    }
    $scope.showDeleteArticle = function(ev,id) {
        var data_send = { 'id': id };
        var confirm = $mdDialog.confirm()
            .title('Suppression')
            .textContent("Voulez-vous vraiment supprimer l'article ?")
            .targetEvent(ev)
            .ok("Supprimer l'article");

        $mdDialog.show(confirm).then(function() {
          $http.post('http://localhost:4800/articles/delete', data_send)
              .success(function(data) {
                localStorage.setItem('articlesList', JSON.stringify(data));
                $rootScope.articlesList = JSON.parse(localStorage.articlesList);
                console.log($rootScope.articlesList);
              });
        });
    };
    $scope.showAddArticle = function(ev, index) {
        console.log('articles/add:click');
        if ($rootScope.generalState === 1) {
          $mdDialog.show({
            contentElement: '#ArticleAdd',
            parent: angular.element(document.body),
            clickOutsideToClose: true
          });
        }
        else {
          $mdDialog.show({
            contentElement: '#ArticleCustomAdd',
            parent: angular.element(document.body),
            clickOutsideToClose: true
          });
        }
    };
});
