(function(angular) {
  'use strict';

  // service
  angular.module('webTesterApp').factory('LoginWebService', loginWebService);

  loginWebService.$inject = ['$http', '$q'];

  function loginWebService($http, $q) {
    var baseUrl = 'http://localhost:3000';
    return {
      loginUsuario: loginUsuario
    };

    function loginUsuario(userData) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: baseUrl + '/auth/authenticate',
        data: userData,
        headers: {
          'Content-type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(function(response) {
          deferred.resolve(response.data);
        })
        ['catch'](function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }
  }
})(angular);
