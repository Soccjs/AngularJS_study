(function () {
  'use strict';

  function SigninRouter($stateProvider) {
    $stateProvider
      .state('signin', {
        templateUrl: 'app/login/login.html',
        controller: 'SigninController',
        controllerAs: 'signinVm',
        url:'/login'
      });

  }

  SigninRouter.$inject = ['$stateProvider'];

  angular.module('login.router', [])
    .config(SigninRouter);
})();

