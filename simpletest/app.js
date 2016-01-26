(function() {
  'use strict';

  angular.module('simpletest', [
    'ngRoute',
    'config',
    'login'
    // 'main.router'
  ])
  .config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/login/login.html',
        controller: 'SigninController',
        controllerAs: 'signinVm',
        url:'/login'
      }).
      when('/main',{
        templateUrl: 'app/facebook_login.html',
        // controller: 'SigninController',
        // controllerAs: 'signinVm',
        url:'/main'        
      });
  })
  .constant('APP_CONFIG', {
    'BACKEND_ADDRESS' : 'http://54.238.224.140/rest',
    'APP_API_KEY': 'soccjs'
   });

})();

