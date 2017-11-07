/**
 * Created by gustavo on 27/06/17.
 */
angular.module('tucApp', ['ngRoute', 'ui.materialize', 'ngMaterial', 'services'])
    .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
           templateUrl: './partials/home.html',
           controller: 'HomeController'
        });

        $routeProvider.when('/produtos', {
            templateUrl: './partials/product-manager.html',
            controller: 'ProductManagerController'
        });

        $routeProvider.when('/produtos/edit/:id', {
            templateUrl: './partials/new-product.html',
            controller: 'FormProductController'
        });

        $routeProvider.when('/novo', {
            templateUrl: './partials/new-product.html',
            controller: 'FormProductController'
        });

        $routeProvider.when('/upload', {
            templateUrl: './partials/upload.html',
            controller: 'UploadController'
        });

        $routeProvider.when('/login', {
            templateUrl: './partials/login.html',
            controller: 'LoginController'
        });

        $routeProvider.otherwise({redirectTo: '/'});
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    });
   
