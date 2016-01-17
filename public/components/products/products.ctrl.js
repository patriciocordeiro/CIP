(function() {
    'use strict';

    angular.module('cipApp').controller('PrdCtrl', ['ProductSrvc', PrdCtrl]);

    function PrdCtrl(ProductSrvc) {
        var vm = this;

        console.log(ProductSrvc);
        console.log('Product controller running');
        vm.newProduct = '';
        vm.fabricante = ['Philips', 'Samsung', 'Sony', 'Bourns'];



        vm.getProductReg = function(newProduct) {
            console.log(newProduct);
            ProductSrvc.prd.register(newProduct, function(data) {
                console.log(data);
            })

        }
    }



})();