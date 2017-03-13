AppVM.directive('ngNavbar', function (){
  return {
    restrict: 'E',
    templateUrl: 'components/NavBar/NavBar.html',
    controller : function($scope, $rootScope, $mdDialog){
      $scope.titleNav = "HIVE";

      $scope.showTabDialog = function(ev) {
        console.log('connexion/inscription:click');
        $mdDialog.show({
         contentElement: '#LogSign',
         parent: angular.element(document.body),
         clickOutsideToClose:true
        });
      };
      $scope.logOut = function() {
        console.log('déconnexion:click');
        sessionStorage.clear();
        window.location.href = 'http://localhost/Linux_Lab/AngularFormation/app/';
      };
    }
  }
});
