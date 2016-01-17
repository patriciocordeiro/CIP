module.exports = function(app, express, produtos){
	var router = express.Router();
	router.get('/produtos/register', produtos.register);
	app.use('/', router);
}