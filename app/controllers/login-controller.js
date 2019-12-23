(function(angular) {
    "use strict";
  
    angular
    .module('webTesterApp')
    .controller('LoginWebController', loginControllerWeb);

    loginControllerWeb.$inject = ['LoginWebService'];

    function loginControllerWeb(){
        var LoginWebService = arguments[0];
        var vm = this;

        //Escopo de Funções

        //Variáveis
        vm.loginInit = loginInit;
        vm.testeUsuarios = testeUsuarios;

        //Constantes

        //Funções
        function loginInit(){
            console.log('Login iniciado');
        }

        function testeUsuarios(){
            LoginWebService.usuariosJsonPlaceholder2({email:'Sherwood@rosamond.me'})
            .then(function (retorno) {
                console.log(retorno);
            });
        }

    }
  })(angular);
  