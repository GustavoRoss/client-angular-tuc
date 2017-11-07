/**
 * Created by gustavo on 27/06/17.
 */
angular.module('tucApp').controller('ProductManagerController', function ($scope, $http, modal, toast) {

    $scope.products = [];
    $scope.inputData = '';
    $scope.alert = '';
    var modalConfig = {
        title: 'tem certeza?',
        textContent: 'deseja realmente remover este produto?',
        okButtonText: 'sim',
        cancelButtonText: 'não'

    };
    modal.configModalValues(modalConfig);

    $scope.findProducts = function() {
        $http.get('http://localhost:8080/procurar/' + $scope.inputData.trim()).then(function(produtosCallback) {

            $scope.products = produtosCallback.data;
        }).catch(function (error) {

            $scope.alert = 'Não foi encontrado nenhum produto\n' +
                           'Descrição do erro: ' + error;
        });
    };


    $scope.removeProduct = function(ev, produto) {

       modal.showModal().then(function () {
           $http.get('http://localhost:8080/remover/' + produto.id).then(function () {
               var index = $scope.products.indexOf(produto);
               $scope.products.splice(index, 1);
               toast.showToast('Produto removido com sucesso', 'ok');

           }).catch(function (error) {

               toast.showToast('ocorreu um erro: ' + error.data, 'ok');
           });
       }, function (error) {

           console.log(error);

       });
    };

    $scope.cleanProducts = function () {
        $scope.products = [];
        $scope.inputData = '';
    };


});