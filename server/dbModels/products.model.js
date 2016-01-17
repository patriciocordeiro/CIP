var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var prdSchema = new Schema({
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

module.exports = mongoose.model('produtos', prdSchema);