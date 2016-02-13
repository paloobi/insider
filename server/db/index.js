'use strict';
var Promise = require('bluebird');
var path = require('path');
var chalk = require('chalk');
var mongoose = require('mongoose');


if (process.env.MODE === 'testing') {
    console.log('Connecting to DB in Testing Mode');
    mongoose.connect('mongodb://localhost/insider-testing');
} else {
    console.log('Connecting to DB in Production Mode')
    mongoose.connect('mongodb://localhost/insider');
}

require('./models');

var startDbPromise = new Promise(function (resolve, reject) {
  db.on('open', resolve);
  db.on('error', reject);
});

console.log(chalk.yellow('Opening connection to MongoDB . . .'));

startDbPromise.then(function () {
  console.log(chalk.green('MongoDB connection opened!'));
});

module.exports = startDbPromise;
