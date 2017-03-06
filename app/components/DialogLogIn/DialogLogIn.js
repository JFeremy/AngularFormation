AppVM.directive('ngLogsign', function (){
  return {
    restrict : 'E',
    templateUrl :'components/DialogLogIn/DialogLogIn.html',
    controller: function($rootScope, $scope, $http, $mdDialog){

      $scope.logIn = function(){
        console.log('se connecter:click');
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
            localStorage.setItem('infoHome', JSON.stringify(data.content.infoHome));

            $rootScope.user = JSON.parse(localStorage.user);
            $rootScope.user.firstName = data.content.firstName;
            $rootScope.user.lastName = data.content.lastName;
            $rootScope.user_type = localStorage.user_type;

            if ($rootScope.user_type == "Admin") {
              $scope.titleNav = "HIVE - TABLEAU DE BORD ADMINISTRATEUR"; }
            else if ($rootScope.user_type == "Customer") {
              $scope.titleNav = "HIVE - TABLEAU DE BORD CLIENT"; }
            else {
              $scope.titleNav = "HIVE"; }

            $rootScope.infoHome = JSON.parse(localStorage.infoHome);
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
