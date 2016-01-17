'use strict'
var prd = require('../dbModels/products.model');
exports.register = function(req, res) {
    var newPrd = new prd();
    newPrd.categoria = req.body.categoria;
    newPrd.save(function(err, prd) {
        if (err)
            console.log('Erro', err);
//        console.log(prd);
        res.json({prd:'suck this'})
    })
}

