(function(angular) {
  'use strict';

  angular
    .module('webTesterApp')
    .controller('SignUpWebController', signUpControllerWeb);

  signUpControllerWeb.$inject = ['SignUpWebService', '$location', '$rootScope'];

  function signUpControllerWeb() {
    var SignUpWebService = arguments[0],
      $location = arguments[1],
      $rootScope = arguments[2];
    var vm = this;

    //Escopo de Funções
    vm.signUpInit = signUpInit;
    vm.cadastrarNovoUsuario = cadastrarNovoUsuario;

    //Variáveis

    //Constantes

    //Funções
    function signUpInit() {
      console.log('Sign Up iniciado');
    }

    function cadastrarNovoUsuario(dadosUsuario) {
      console.log('dados usuário: ', dadosUsuario);
      if (
        dadosUsuario &&
        dadosUsuario.primaryName && dadosUsuario.email && dadosUsuario.password
      ) {
        SignUpWebService.cadastrarNovoUsuario(dadosUsuario)
          .then(function(resposta) {
            $location.path('#/');
          })
          .catch(function(resposta) {
            adicionarMsgTela(
              'is-danger',
              resposta.data.error,
              resposta.data.msg
            );
          });
      }else{
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

    function limpaMsgsTela() {
      $rootScope.ativo = false;
      $rootScope.mensagem = {};
    }
  }
})(angular);
