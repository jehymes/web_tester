(function(angular) {
  'use strict';

  angular
    .module('webTesterApp', ['WebTesterRoutes'])
    .controller('WebTesteAppController', webTesteAppController);
  webTesteAppController.$inject = ['$rootScope'];
  function webTesteAppController($rootScope) {
    var vm = this;

    vm.init = init;
    vm.limpaMsgsTela = limpaMsgsTela;

    function init(){
      $rootScope.ativo = false;
    }

    function limpaMsgsTela() {
      $rootScope.ativo = false;
      $rootScope.mensagem = {};
    }
  }
})(angular);
