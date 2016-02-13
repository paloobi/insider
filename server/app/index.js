'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

// instantiate app
var app = express();

// basic configuration
var rootPath = "../.."

// setup paths to index, env, root, etc
app.set('projectRoot', rootPath);

// static routes
app.use(express.static(rootPath + '/node_modules'));
app.use(express.static(rootPath + '/public'));
app.use(express.static(rootPath + '/browser'));

// logging
app.use(require('morgan')('dev'));

// body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(require('./routes'));


// app.use(function (req, res, next) {
//     if (path.extname(req.path).length > 0) {
//         res.status(404).end();
//     } else {
//         next(null);
//     }
// });

app.get('/*', function (req, res) {
    res.sendFile(rootPath + '/browser/index.html');
});

// Error catching endware.
app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(3000)

module.exports = app;
