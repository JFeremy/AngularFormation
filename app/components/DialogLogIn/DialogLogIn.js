AppVM.directive('ngLogsign', function (dateFilter){
  return {
    restrict : 'E',
    templateUrl :'components/DialogLogIn/DialogLogIn.html',
    link : function(scope,element,attrs){
      scope.time = dateFilter(new Date(), 'hh:mm:ss');
    },
    controller: function($scope, $http){

      $scope.logIn = function(){
        console.log('se connecter:click');
        var data = {};
        var data_send = "Mail_User="+$scope.C_email+"&"+
              "Password_User="+$scope.C_password;

         $http.post("http://localhost:8081/user/find?"+data_send, data).success(function(data, status) {
           console.log('Data posted successfully');
           console.log(data);
         });
      };

      $scope.signIn = function(){
        console.log('sinscrire:click');
        var data = {};
         var data_send = "Mail_User="+$scope.R_firstName+"&"+
               "Password_User="+$scope.R_lastName+"&"+
               "FirstName_User="+$scope.R_email+"&"+
               "LastName_User="+$scope.R_password+"&"+
               "Admin_User=0";
               console.log(data_send);

         $http.post("http://localhost:8081/user/add?"+data_send, data).success(function(data, status) {
           console.log('Data posted successfully');
         });
      };

    }
  }
});
