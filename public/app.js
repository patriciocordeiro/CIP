'use strict'
angular.module("cipApp", ['ui.router', 'ngMaterial', 'ngResource'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: "^",
                abstract: true,
                template: '<ui-view/>',

            })
            .state('app.home', {
                //                abstract: true,
                url: "/home",
                templateUrl: 'components/home/home.view.html',
            })
            .state('app.register', {
                url: '/register',
                templateUrl: 'components/products/register.view.html',
                controller: 'PrdCtrl as vm'
            })
            .state('app.stock', {
                url: '/register',
                templateUrl: 'components/products/stock.view.html',
                controller: 'PrdCtrl as vm'
            })
        //if no state redirect to home
        $urlRouterProvider.otherwise('home');

    });