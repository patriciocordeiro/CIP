(function () {
    'use strict';

    angular.module('cipApp').controller('PrdCtrl', ['ProductSrvc', PrdCtrl]);

    function PrdCtrl(ProductSrvc) {
        var vm = this;

        /*console.log(ProductSrvc);
        console.log('Product controller running');
        vm.newProduct = '';
        vm.fabricante = ['Philips', 'Samsung', 'Sony', 'Bourns']
        vm.categoria = ['componentes passivos', 'Semicondutores', 'Optoeletronicos', 'conversores', 'placas de desenvolvimento', 'kits ditáticos', 'microprocessadores', 'microcontroladores']


        vm.subcategorias = [{
            categoria: 'componentes passivos',
            items: ['resistor', 'capacitor']

        }, {
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
            var idx = _.findIndex(vm.subcategorias, {
                categoria: category
            })
            vm.seleSubcat = vm.subcategorias[idx]

            console.log(vm.seleSubcat);
        }

        vm.getSubCategory = function(subCategory) {
            console.log(subCategory);
           
        }
        
         vm.register = function(){
              console.log(vm.newProduct);
         }*/
        vm.product = {
            name: '',
            pictures: '',
            price: {
                amount: '',
            },
            category: {
                _id: '',
                parent: '',
                ancestors: []
            }
        };

        vm.addAncestor = function (value) {
            console.log(value);
            var ancestor = value;
            vm.product.category.ancestors.push(ancestor);
            vm.ancestor = "";
        }
        
        vm.submitProduct = function (product) {
            console.log(product);
            product.price.amount = Number(product.price.amount);

            ProductSrvc.prd.register(product);
        }
    }



})();