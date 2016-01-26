module.exports = function(app, express, produtos){
	var router = express.Router();
	router.post('/products/register', produtos.register);
	app.use('/', router);
}