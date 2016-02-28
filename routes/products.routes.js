var productModel = require('../dbModels/products.model');
var status = require('http-status');

module.exports = function(app, express, produtos){
	var router = express.Router();
	router.post('/products/register', function(req, res){
        console.log(req.body);
        var product = new productModel(req.body);
        product.save(function (err, data) {
            if (err) {
                console.log(status.INTERNAL_SERVER_ERROR);
                //return res.send(status.INTERNAL_SERVER_ERROR);
            }else {
                console.log(data);
                console.log(status.OK);
            }
            
        });
    });
	app.use('/', router);
}