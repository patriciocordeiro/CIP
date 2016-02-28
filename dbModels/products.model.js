var mongoose = require('mongoose');
var Category = require('./category.model');

/*var Schema = mongoose.Schema;

var prdSchema = new Schema({
	fabricante:String,
    categoria: String,
    subcategoria: String,
    ref_PM: String,
    ref_fabricante: String,
    disponibilidade: Number,
    preco: Number,
    descricao: String,
    imagens: String,
    tags: String,
    caracteristicas: [{
        nome: String,
        valor: String
    }, ],
})

module.exports = mongoose.model('produtos', prdSchema);*/

var productSchema = {
    name: {
        type: String,
        required: true
    },
    pictures: [{
        type: String,
        match: /^http:\/\//i
    }],
    price: {
        amount: {
            type: Number,
            required: true
        }
    },
    category: Category.categorySchema
};

module.exports = mongoose.model("produtos", new mongoose.Schema(productSchema));
module.exports.productSchema = productSchema;