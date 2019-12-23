(function(angular) {
    "use strict";
  
    angular
    .module('WebTesterRoutes', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', webRotas]);

    function webRotas($routeProvider, $locationProvider){
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        $locationProvider.hashPrefix('');

        $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeWebController',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: 'app/views/login.html',
            controller: 'LoginWebController',
            controllerAs: 'vm'
        })
        .when('/signup', {
            templateUrl: 'app/views/sign-up.html',
            controller: 'SignUpWebController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
  })(angular);
  