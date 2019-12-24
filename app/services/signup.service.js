(function(angular) {
  'use strict';

  // service
  angular.module('webTesterApp').factory('SignUpWebService', signUpWebService);

  signUpWebService.$inject = ['$http', '$q'];

  function signUpWebService($http, $q) {
    var baseRoot = 'localhost:3000/user';
    return {
      cadastrarUsuario: cadastrarUsuario
    };

    // function cadastrarUsuario(setNewUser) {
    //   return $http.post("localhost:3000/user/registerUser", {
    //     data: setNewUser
    //   });
    // }

    function cadastrarUsuario(setNewUser) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: baseRoot + '/newUser',
        data: setNewUser,
        headers: {
          'Content-type': 'application/json;charset=UTF-8'
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
