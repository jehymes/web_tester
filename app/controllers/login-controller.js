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
      if (dadosLogin.email && dadosLogin.senha) {
        LoginWebService.loginUsuario(dadosLogin)
        .then(function(resposta){
          $location.path('/admin');
        }).catch(function(resposta){
          adicionarMsgTela(
            'is-danger',
            resposta.data.error,
            resposta.data.msg
          );
        });
      } else {
        adicionarMsgTela(
          'is-danger',
          'ERROR',
          'Preencha todos os campos e tente novamente!'
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
