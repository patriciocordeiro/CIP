angular.module('cipApp').service('ProductSrvc', ['httpSrvc', '$q',
    function(httpSrvc, $q) {
        this.prd = {
            register: function(query, callback) {
                httpSrvc.prd.save({
                    acao: 'register'
                }, query).$promise.then(function(res, err) {
                    if (err)
                        return callback(err)
                    return callback(res)
                });
            },
        }

    }
]);