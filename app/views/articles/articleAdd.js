AppVM.directive('ngArticleadd', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/articles/articleAdd.html',
        controller: function($scope, $http) {
            $scope.createArticle = function() {
                var data = {};
                var elements = [];
                if($scope.selectedApplications !== undefined)
                elements = $scope.selectedApplications;

                if($scope.selectedOS !== undefined)
                  elements.push($scope.selectedOS);
                if($scope.selectedCMS !== undefined)
                  elements.push($scope.selectedCMS);

                var data_send = {
                    'label': $scope.Article_Label,
                    'price': $scope.Article_Price,
                    'generalState' : $rootScope.generalState,
                    'elements' : elements
                };
                console.log(data_send);

                $http.post('http://localhost:4800/articles/create', data_send)
                    .success(function(data) {
                        console.log(data);
                    });
            };
        }
    }
});
