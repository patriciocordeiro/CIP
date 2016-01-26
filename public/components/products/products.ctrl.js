(function() {
    'use strict';

    angular.module('cipApp').controller('PrdCtrl', ['ProductSrvc', PrdCtrl]);

    function PrdCtrl(ProductSrvc) {
        var vm = this;

        console.log(ProductSrvc);
        console.log('Product controller running');
        vm.newProduct = '';
        vm.fabricante = ['Philips', 'Samsung', 'Sony', 'Bourns']
        vm.categoria = ['componentes passivos', 'Semicondutores', 'Optoeletronicos', 'conversores', 'placas de desenvolvimento', 'kits ditáticos', 'microprocessadores', 'microcontroladores']


        vm.subcategorias = 
            [{
                categoria: 'componentes passivos',
                items: ['resistor', 'capacitor']

            },{
                categoria: 'conversores',
                items: ['DAC', 'ADC']

            }]
        
        vm.getProductReg = function(newProduct) {
            console.log(newProduct);
            ProductSrvc.prd.register(newProduct, function(data) {
                console.log(data);
            })

        }

        vm.getCategory = function(category) {
           var idx = _.findIndex(vm.subcategorias, {categoria:category})
            vm.seleSubcat =vm.subcategorias[idx]
            
            console.log(vm.seleSubcat);
        }
    }



})();