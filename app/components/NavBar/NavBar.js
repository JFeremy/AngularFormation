AppVM.directive('ngNavbar', function (){
  return {
    restrict: 'E',
    templateUrl: 'components/NavBar/NavBar.html',
    controller : function($scope, $rootScope, $mdDialog){
      $scope.showTabDialog = function(ev) {
        console.log('connexion/inscription:click');
        $mdDialog.show({
         contentElement: '#LogSign',
         parent: angular.element(document.body),
         clickOutsideToClose:true
        });
      };
      $scope.titleNav = "HIVE";
    }
  }
});
