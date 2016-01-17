var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var port = 3000;
var mongoose = require('mongoose');

/*custom functions*/
var db = require('./config/database.config');
var productsModel = require('./dbModels/products.model');
var productsConfig = require('./config/products.config')
//var routes = require('./routes/')

/*Database*/
//Connect to database
mongoose.connect(db.url);
//Check if connected
var dbConnect = mongoose.connection;
dbConnect.on('error', console.error.bind(console, 'connection error:'));
dbConnect.once('open', function(callback) {
    console.log('connected to database');
});

//configurations
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//path to static files		
app.use(express.static(path.join(__dirname, 'public')));

/*Routes*/
require('./routes/products.routes')(app, express, productsConfig);

//app.use('/', routes)
app.get('/', function(req, res) {
    res.send('Hello world');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, function() {
    console.log('Listening on port:', port);
})