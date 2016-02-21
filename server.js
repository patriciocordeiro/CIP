var express = require('express');
var app = express();
var cors = require('cors');
var logger = require('morgan');
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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//configurations
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//path to static files		
app.use(express.static(path.join(__dirname, 'public')));

/*Routes*/
require('./routes/products.routes')(app, express, productsConfig);
require('./routes/category.routes')(app, express);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(port, function() {
    console.log('Listening on port:', port);
})