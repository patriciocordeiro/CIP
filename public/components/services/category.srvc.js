angular.module('cipApp').service('CategorySrvc', ['httpSrvc', '$q',
    function (httpSrvc, $q) {
        this.register = function (query, callback) {
            httpSrvc.registerCat.save({
                acao: 'register'
            }, query).$promise.then(function (res, err) {
                if (err)
                    return callback(err)
                return callback(res)
            });
        }

    }
]);