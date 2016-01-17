'use strict'
var prd = require('../dbModels/products.model');

/*Product register */
exports.register = function(req, res) {
	console.log(req.body);
    var newPrd = new prd(req.body);
    newPrd.categoria = req.body.categoria;
    newPrd.save(function(err, prd) {
        if (err)
            console.log('Erro', err);
        res.json({prd:'suck this'})
    })
}
//---------------------------------------------------------------
