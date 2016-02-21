//var express = require('express');
var status = require('http-status');
var categoryModel = require('../dbModels/category.model');

module.exports = function (app, express) {
    var router = express.Router();
    router.post('/category/register', function (req, res) {
        console.log(req.body);
        var cat = new categoryModel(req.body);
        cat.save(function (err, data) {
            if (err) {
                console.log(status.INTERNAL_SERVER_ERROR);
                //return res.send(status.INTERNAL_SERVER_ERROR);
            }
            console.log(status.OK);
        });
        //res.send(data, status.OK);
    });
    app.use('/', router);
}