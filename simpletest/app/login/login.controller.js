(function () {
  'use strict';

  function SigninController($http, $rootScope, $location, SigninService) {
    var vm = this;

    vm.email = '';
    vm.password = '';
    vm.signin = signin;
    vm.bar = 0;

    function signin() {
      SigninService.signin({
        email: vm.email,
        password: vm.password
      }).then(function() {
        $rootScope.isLoggedIn = true;
        $location.path('/main');
      });
    }

    function validateEmail(){
      $rootScope.email = 'junseok@classting.com';
    }
  }

  SigninController.$inject = ['$http', '$rootScope', '$location', 'SigninService'];

  angular.module('login.controller', []) .controller('SigninController', SigninController);


})();

