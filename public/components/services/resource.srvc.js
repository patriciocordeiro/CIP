angular.module('cipApp').service('httpSrvc', function($resource) {
    this.prd =
        $resource('http://localhost:3000/products/:acao/', {
            acao: '@acao'
        }, {
            'get': {
                method: 'GET',
                isArray: true
            },
            'save': {
                method: 'POST',
                isArray: false
            }
        })
})