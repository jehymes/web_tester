(function(angular) {
    "use strict";
  
    angular
    .module('WebTesterRoutes', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', webRotas]);

    function webRotas($routeProvider, $locationProvider){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $locationProvider.hashPrefix('');

        $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeWebController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
  })(angular);
  