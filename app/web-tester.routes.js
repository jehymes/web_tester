(function(angular) {
  'use strict';

  angular
    .module('WebTesterRoutes', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', webRotas]);

  function webRotas($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'HomeWebController',
        controllerAs: 'vm'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminWebController',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginWebController',
        controllerAs: 'vm'
      })
      .when('/signup', {
        templateUrl: 'views/sign-up.html',
        controller: 'SignUpWebController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})(angular);
