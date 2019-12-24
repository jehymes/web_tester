(function(angular) {
  'use strict';

  angular
    .module('webTesterApp')
    .controller('AdminWebController', adminControllerWeb);

  adminControllerWeb.$inject = ['$rootScope'];

  function adminControllerWeb() {
    var $rootScope = arguments[0];
    var vm = this;

    //Escopo de Funções
    vm.adminInit = adminInit;
    vm.aguardeNovasAtualizacoes = aguardeNovasAtualizacoes;

    //Variáveis

    //Constantes

    //Funções
    function adminInit() {
      console.log('Admin iniciado');
    }

    function aguardeNovasAtualizacoes(){
      limpaMsgsTela();
      adicionarMsgTela(
        'is-warning',
        'INFORMAÇÃO',
        'Esta ancioso pelas novas funcionalidades não é mesmo. Aguarde, estamos trabalhando nelas para você.'
      );
    }

    function adicionarMsgTela(tipo, titulo, msg) {
      $rootScope.ativo = true;
      $rootScope.mensagem = {
        type: tipo,
        title: titulo,
        text: msg
      };
    }

    function limpaMsgsTela(){
      $rootScope.ativo = false;
      $rootScope.mensagem = {};
    }

  }
})(angular);
