AppVM.directive('ngLogsign', function (){
  return {
    restrict : 'E',
    templateUrl :'components/DialogLogIn/DialogLogIn.html',
    controller: function($rootScope, $scope, $http, $mdDialog){

      $scope.logIn = function(){
        var data = {};
        var data_send = "Mail_User="+$scope.C_email+"&"+
              "Password_User="+$scope.C_password;

         $http.post("http://localhost:4800/user/find?"+data_send, data).success(function(data, status) {
         //$http.post("http://172.31.1.26:3999/user/find?"+data_send, data).success(function(data, status) {
            $rootScope.errorLog = data.error;
           if (data.error == 1) {
             $rootScope.errorLog_txt = data.error_txt;
           }
           else {
            localStorage.setItem('user', JSON.stringify(data.content));
            localStorage.setItem('user_type', data.content.type);
            localStorage.setItem('componentsList', JSON.stringify(data.content.Components));
            localStorage.setItem('articlesList', JSON.stringify(data.content.Articles));
            localStorage.setItem('commandsList', JSON.stringify(data.content.Commands));
            localStorage.setItem('vmsList', JSON.stringify(data.content.VMs));

            $rootScope.user = JSON.parse(localStorage.user);
            $rootScope.user_type = localStorage.user_type;
            $rootScope.componentsList = JSON.parse(localStorage.componentsList);
            $rootScope.articlesList = JSON.parse(localStorage.articlesList);
            $rootScope.commandsList = JSON.parse(localStorage.commandsList);
            $rootScope.vmsList = JSON.parse(localStorage.vmsList);

            if ($rootScope.user_type == "Admin") {
              $scope.titleNav = "HIVE - TABLEAU DE BORD ADMINISTRATEUR";
              localStorage.setItem('infoHome', JSON.stringify(data.content.infoHome));
              localStorage.setItem('customersList', JSON.stringify(data.content.Customers));
              $rootScope.infoHome = JSON.parse(localStorage.infoHome);
              $rootScope.customersList = JSON.parse(localStorage.customersList);
              $rootScope.generalState = 1;
            }
            else if ($rootScope.user_type == "User") {
              $scope.titleNav = "HIVE - TABLEAU DE BORD CLIENT";
              $rootScope.basket = 0;
              $rootScope.userCommand = {
                package : [],
                custom : {}
              };
              $rootScope.generalState = 0;
            }
            else {
              $scope.titleNav = "HIVE"; }

            $rootScope.connexionOK = 1;
          }
         });
      };

      $scope.signIn = function(){
        console.log('sinscrire:click');
        var data = {};
         var data_send = "Mail_User="+$scope.R_email+"&"+
               "Password_User="+$scope.R_password+"&"+
               "FirstName_User="+$scope.R_firstName+"&"+
               "LastName_User="+$scope.R_lastName+"&"+
               "Admin_User=0";
               console.log(data_send);

          //$http.post("http://172.31.1.26:3999/user/add?"+data_send, data).success(function(data, status) {
          $http.post("http://localhost:4800/user/add?"+data_send, data)
            .success(function(data, status) {
              if (data.error == 1) {
                $rootScope.errorSign = data.error;
                $rootScope.errorSign_txt = data.error_txt;
              }
              else {
                $mdDialog.hide();
              }
            });
      };

    }
  }
});
