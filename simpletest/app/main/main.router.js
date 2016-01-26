(function () {
  'use strict';

  function MainRouter($stateProvider) {
    $stateProvider
      .state('simpletest', {
        url: '/simpletest',
        templateUrl: 'app/main/main.html'
      })
      .state('404', {
        templateUrl: 'app/main/404.html'
      })
      .state('dashboard.home', {
        url: '/home',
        controller: 'MainController',
        templateUrl: 'app/main/home.html'
      });
  }

  MainRouter.$inject = ['$stateProvider'];

  angular.module('main.router', [])
    .config(MainRouter);
})();

