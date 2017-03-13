'use strict';

angular.module('myApp.customers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Clients', {
    templateUrl: 'views/customers/customers.html',
    controller: 'CustomersCtrl'
  });
}])

.controller('CustomersCtrl', function($scope,$rootScope) {
  //var customers = $rootScope.infoHome;
  $scope.statFact = [
    {value:'0', text:'Non payée'},
    {value:'1', text:'Payée'}];

  $scope.usersList =[
    {firstName:'Jeremy'  ,lastName:'Fumeron',email:'jf@isen.fr',port:4950,nbVM:3,nbcommand:2,amountCommand:20,factState:1},
    {firstName:'Jeremy'  ,lastName:'Spriet' ,email:'js@isen.fr',port:5000,nbVM:1,nbcommand:1,amountCommand:15,factState:0},
    {firstName:'Antoine' ,lastName:'Volant' ,email:'av@isen.fr',port:5050,nbVM:3,nbcommand:3,amountCommand:25,factState:0},
    {firstName:'Kyrian'  ,lastName:'Mear'   ,email:'km@isen.fr',port:5100,nbVM:1,nbcommand:2,amountCommand:20,factState:1},
    {firstName:'Julien'  ,lastName:'Robert' ,email:'jr@isen.fr',port:5150,nbVM:4,nbcommand:4,amountCommand:40,factState:1},
    {firstName:'Valentin',lastName:'Wilm'   ,email:'vw@isen.fr',port:5150,nbVM:3,nbcommand:6,amountCommand:50,factState:1},
    {firstName:'Kevin'   ,lastName:'Lorcy'  ,email:'kl@isen.fr',port:5200,nbVM:1,nbcommand:1,amountCommand:15,factState:1}];

  console.log($scope.usersList);
});
