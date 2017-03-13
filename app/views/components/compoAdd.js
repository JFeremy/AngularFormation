AppVM.directive('ngCompoadd', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/components/compoAdd.html',
        controller: function($scope, $http) {
            $scope.createComponent = function() {
                var data = {};
                var data_send = {
                    'name': $scope.Compo_Name,
                    'type': $scope.Compo_Type,
                    'description': $scope.Compo_Description,
                    'code': $scope.Compo_Code
                };

                $http.post('http://localhost:4800/components/create', data_send)
                    .success(function(data) {
                        console.log(data);
                    });
            };
        }
    }
});
