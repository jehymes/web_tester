(function(angular) {
  'use strict';

  // service
  angular.module('webTesterApp').factory('SignUpWebService', signUpWebService);

  signUpWebService.$inject = ['$http', '$q'];

  function signUpWebService($http, $q) {
    var baseUrl = 'http://localhost:3000';
    return {
      cadastrarNovoUsuario: cadastrarNovoUsuario
    };

    function cadastrarNovoUsuario(userData) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: baseUrl + '/auth/register',
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
