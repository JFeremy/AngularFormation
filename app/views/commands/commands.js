'use strict';

angular.module('myApp.commands', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Commandes', {
    templateUrl: 'views/commands/commands.html',
    controller: 'CommandsCtrl'
  });
}])

.controller('CommandsCtrl', function($scope,$rootScope) {
  //var customers = $rootScope.infoHome
  $scope.commandsList =[
    {Id_Command:0,Mail_User:'jf@isen.fr',Amount:20,DatePay_Command:"01-02-2016"},
    {Id_Command:1,Mail_User:'js@isen.fr',Amount:10,DatePay_Command:"01-02-2016"},
    {Id_Command:2,Mail_User:'av@isen.fr',Amount:5,DatePay_Command:"01-02-2016"},
    {Id_Command:3,Mail_User:'km@isen.fr',Amount:50,DatePay_Command:"01-02-2016"},
    {Id_Command:4,Mail_User:'jr@isen.fr',Amount:200,DatePay_Command:"01-02-2016"},
    {Id_Command:5,Mail_User:'vw@isen.fr',Amount:2,DatePay_Command:"01-02-2016"},
    {Id_Command:6,Mail_User:'kl@isen.fr',Amount:20,DatePay_Command:"01-02-2016"}];

  console.log($scope.commandsList);
});
