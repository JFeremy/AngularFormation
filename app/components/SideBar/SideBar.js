AppVM.directive('ngSidebar', function (){
  return {
    restrict: 'E',
    templateUrl: 'components/SideBar/SideBar.html',
    scope:{},
    controller : function($scope, $mdDialog){
      $scope.showTabDialog = function(ev) {
        console.log('connexion/inscription:click');
        $mdDialog.show({
         contentElement: '#LogSign',
         parent: angular.element(document.body),
         clickOutsideToClose:true
        });
      };
    }
  }
});
