AppVM.directive('ngSidebar', function (){
  return {
    restrict: 'E',
    templateUrl: 'components/SideBar/SideBar.html',
    controller : function($scope, $rootScope) {
      $scope.navAdmin = [
        {text:'Mon compte', icon:'security', link:"#"},
        {text:'Les clients', icon:'account_circle', link:"#"},
        {text:'Les commandes', icon:'shopping_cart', link:"#"},
        {text:'Gérer les produits', icon:'store', link:"#"},
        {text:'Les machines installées', icon:'move_to_inbox', link:"#"},
      ];
    }
  }
});
