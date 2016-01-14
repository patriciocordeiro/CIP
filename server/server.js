var express = require('express');
var app = express();
var port = 3000;
var mongoose = require('mongoose');
var db = require('./config/database')
mongoose.connect(db.url);


app.get('/', function(req, res) {
    res.send('Hello world');
});

app.listen(port, function() {
    console.log('Listening on port:', port);
})