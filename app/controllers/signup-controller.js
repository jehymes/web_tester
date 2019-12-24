(function(angular) {
  'use strict';

  angular
    .module('webTesterApp')
    .controller('SignUpWebController', signUpControllerWeb);

  signUpControllerWeb.$inject = ['SignUpWebService'];

  function signUpControllerWeb() {
    var SignUpWebService = arguments[0];
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
      SignUpWebService.cadastrarUsuario(dadosUsuario).then(function(resposta) {
        console.log(resposta);
      });
    }
  }
})(angular);
