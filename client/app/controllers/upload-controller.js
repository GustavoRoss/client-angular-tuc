/**
 * Created by gustavo on 27/06/17.
 */
angular.module('tucApp').controller('UploadController', function ($scope) {
    var priceDropzone = new Dropzone("#price-upload",
        {
            url: "http://localhost:8080/admin/upload/precos",
            autoProcessQueue: false
        });

    $scope.uploadFile = function() {
        priceDropzone.processQueue();
    };
});