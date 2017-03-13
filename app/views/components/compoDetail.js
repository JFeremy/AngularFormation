AppVM.directive('ngCompodetail', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/components/compoDetail.html',
        controller: function($rootScope, $scope, $http) {
            var data = {};
            var data_send = {};

            $scope.deleteComponent = function() {
                data_send = {
                    'name': $rootScope.componentsList[$rootScope.compoDetail_index].Name_Component
                };

                $http.post('http://localhost:4800/components/delete', data_send)
                .success(function(data) {
                    console.log(data);
                });
            };
            $scope.setComponent = function() {
                data_send = {
                    'name': $rootScope.componentsList[$rootScope.compoDetail_index].Name_Component,
                    'description': $rootScope.componentsList[$rootScope.compoDetail_index].Description_Component,
                    'code': $scope.Compo_Code
                };
                $http.post('http://localhost:4800/components/update', data_send)
                .success(function(data) {
                    console.log(data);
                });
            };
        }
    }
});
