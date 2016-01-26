(function () {
  'use strict';

  function HttpInterceptors($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  }

  HttpInterceptors.$inject = ['$httpProvider'];

  angular.module('config.HttpInterceptors', [])
    .config(HttpInterceptors)
    .factory('httpInterceptor', [
    function () {
        return {
            request: function (config) {

                // Append instance url before every api call
                if (config.url.indexOf('/api/v2') > -1) {
                    config.url = INSTANCE_URL + config.url;
                };

                return config;
            }
        }
    }
]);

})();


