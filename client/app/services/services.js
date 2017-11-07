/**
 * Created by gustavo on 20/07/17.
 */
/**
 *  SERVIÇO DO TOAST (AQUELA MENSAGEM DE SUCESSO OU ERRO AO SALVAR OU EDITAR UM PRODUTO)
 */
angular.module('services', []).factory('toast', function ($mdToast) {
   var toast = {};

    toast.last = {
        bottom: true,
        top: false,
        left: true,
        right: false
    };

    toast.toastPosition = angular.extend({}, toast.last);

    toast.getToastPosition = function() {

        return Object.keys(toast.toastPosition)
            .filter(function(pos) { return toast.toastPosition[pos]; })
            .join(' ');
    };

    toast.showToast = function(alert, buttonText) {
        var pinTo = this.getToastPosition();
        var toast = $mdToast.simple()
            .textContent(alert)
            .action(buttonText)
            .highlightAction(true)
            .highlightClass('md-accent')
            .position(pinTo);

        $mdToast.show(toast);
    };


   return toast;
})

/**
 * SERVICO DO MODAL
  */

    .factory('modal', function ($mdDialog) {

        var modal = {};
        var confirmObject = {};

        modal.configModalValues = function (data) {
            confirmObject = $mdDialog.confirm()
                .title(data.title)
                .textContent(data.textContent)
                .ariaLabel('Lucky day')
                .ok(data.okButtonText)
                .cancel(data.cancelButtonText);

        };

        modal.showModal = function() {
            return $mdDialog.show(confirmObject)
        };

        return modal;
});
