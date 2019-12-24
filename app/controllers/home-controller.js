(function(angular) {
  'use strict';

  angular
    .module('webTesterApp')
    .controller('HomeWebController', homeControllerWeb);

  homeControllerWeb.$inject = [];

  function homeControllerWeb() {
    var vm = this;

    //Escopo de Funções

    //Variáveis
    vm.homeInit = homeInit;

    //Constantes

    //Funções
    function homeInit() {
      console.log('Home iniciado');
    }
  }
})(angular);
