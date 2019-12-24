(function(angular) {
  'use strict';

  angular
    .module('webTesterApp')
    .controller('LoginWebController', loginControllerWeb);

  loginControllerWeb.$inject = ['LoginWebService', '$location', '$rootScope'];

  function loginControllerWeb() {
    var LoginWebService = arguments[0],
      $location = arguments[1],
      $rootScope = arguments[2];
    var vm = this;

    //Escopo de Funções

    //Variáveis
    vm.loginInit = loginInit;
    vm.testeUsuarios = testeUsuarios;

    //Constantes

    //Funções
    function loginInit() {
      console.log('Login iniciado');
    }

    function testeUsuarios(dadosLogin) {
      limpaMsgsTela();
      if (dadosLogin !== undefined &&
        dadosLogin.email === 'admin@admin.com' &&
        dadosLogin.senha === 'admin123'
      ) {
        $location.path('/admin');
      } else {
        adicionarMsgTela(
          'is-danger',
          'ERROR',
          'Email ou senha invalidos. Tente novamente!'
        );
      }
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
