AppVM.directive('ngSidebar', function (){
  return {
    restrict: 'E',
    templateUrl: 'components/SideBar/SideBar.html',
    controller : function($scope, $rootScope) {

      $scope.navAdmin = [
        {text:'Accueil', icon:'dashboard', link:"#!/Administration"},
        {text:'Les clients', icon:'account_circle', link:"#!/Clients"},
        {text:'Les commandes', icon:'shopping_cart', link:"#!/Commandes"},
        {text:'Les produits', icon:'store', link:"#!/Articles"},
        {text:'Les composants', icon:'filter_none', link:"#!/Composants"},
        {text:'Les machines installées', icon:'move_to_inbox', link:"#!/VM"},
      ];
      $scope.navUser = [
        {text:'Accueil', icon:'dashboard', link:"#!/Accueil"},
        {text:'Mon panier :  '+ $rootScope.basket + '  article(s)', icon:'filter_none', link:"#!/Components"},
        {text:'Les articles', icon:'store', link:"#!/Articles"},
        {text:'Les composants', icon:'filter_none', link:"#!/Composants"},
        {text:'Mes commandes', icon:'shopping_cart', link:"#!/Commandes"},
        {text:'Mes VM', icon:'move_to_inbox', link:"#!/VM"},
        {text:'Application de monitoring', icon:'phonelink_setup', link:"#!/Application"}
      ];
      if ($rootScope.user_type === 'Admin')
        $scope.navbarHive = $scope.navAdmin;
      else
        $scope.navbarHive = $scope.navUser;
    }
  }
});
