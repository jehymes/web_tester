(function(angular) {
  'use strict';

  // service
  angular.module('webTesterApp').factory('LoginWebService', loginWebService);

  loginWebService.$inject = ['$http', '$q'];

  function loginWebService($http, $q) {
    return {
      usuariosJsonPlaceholder: usuariosJsonPlaceholder,
      usuariosJsonPlaceholder2: usuariosJsonPlaceholder2
    };

    function usuariosJsonPlaceholder() {
      var deferred = $q.defer();

      $http
        .get('https://jsonplaceholder.typicode.com/users', {})
        .then(function(response) {
          deferred.resolve(response.data);
        })
        ['catch'](function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function usuariosJsonPlaceholder2(getUser) {
      return $http.get('https://jsonplaceholder.typicode.com/users', {
        params: getUser
      });
    }
  }
})(angular);
