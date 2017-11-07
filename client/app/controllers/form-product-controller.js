/**
 * Created by gustavo on 14/07/17.
 */
angular.module('tucApp').controller('FormProductController', function ($scope, $http, $routeParams, toast, $window) {

    $scope.product = {};
    $scope.alert = '';
    $scope.iconAddOrEdit = 'add';
    if($routeParams.id) {
        $scope.iconAddOrEdit = 'edit';
        $http.get('http://localhost:8080/procurarPorId/' + $routeParams.id).then(function (product) {

            $scope.product = product.data;
        
        }).catch(function (error) {
        
            console.log(error);
        
        })
    }

    $scope.saveProduct = function () {
        $scope.product.id = $routeParams.id;
        if($routeParams.id) {
            $http.put('http://localhost:8080/editar', $scope.product).then(function () {

                $scope.alert = 'o produto ' + $scope.product.descricao +' foi atualizado com sucesso!';
                $scope.product = {};
                toast.showToast($scope.alert, 'ok');
                setTimeout(function () {
                    $window.location.href = '/produtos';
                }, 4000);
            }).catch(function (error) {

                $scope.alert = 'ocorreu um problema ao atualizar o produto ' + $scope.product.descricao;
                toast.showToast($scope.alert + ':' + error, 'ok');

            });
        } else {
            $http.post('http://localhost:8080/salvar', $scope.product, {'Content-Type': 'application/json'}).then(function () {
                
                $scope.alert = 'o produto ' + $scope.product.descricao + ' foi adicionado com sucesso!';
                $scope.product = {};
                toast.showToast($scope.alert, 'ok');

            }).catch(function (error) {

                $scope.alert = 'ocorreu um problema ao salvar o produto ' + $scope.product.descricao;
                toast.showToast($scope.alert + ':' + error, 'ok');

            });
        }
    };
});
