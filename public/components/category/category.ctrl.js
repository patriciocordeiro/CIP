(function() {
    'use strict';

    angular.module('cipApp').controller('CatCtrl', [CatCtrl]);

    function CatCtrl() {
        var vm = this;
        
        /*
            A ideia é fazer o cadastro de uma categoria para depois essa categoria ser usada para o registro do produto
            * Se a categoria for uma raiz na árvore
                - Ela será seu próprio pai
                - Terá somente ela como antecessor
                - Ex: Eletronicos {nome: 'Eletronicos', pai: 'Eletronicos', antecessor: ['Eletronicos']}
            * Se a categoria descer no ramo:
                - Ela terá a raiz como pai
                - A raiz e ela mesma como anecessor
                - Ex: Computador {nome: 'Computador', pai: 'Eletronicos', antecessor: ['Eletronicos', 'Computador']}
            * Descendo mais no ramo:
                - Ela terá o elemento acima como pai
                - Tudo que vier a partir dela é antepassado
                - Ex: Apple {nome: 'Apple', pai: 'Computador', antecessor: ['Eletronicos', 'Computador', 'Apple']}
        */
        
        vm.category =  {
            name: '',
            father: '',
            ancestors: []
        };
        vm.addAncestor = function (value) {
            console.log(value);
            var ancestor = value;
            vm.category.ancestors.push(ancestor);
            vm.ancestor = "";
        }
        vm.submitCategory = function(category){
            console.log(category);
        }
    }
})();