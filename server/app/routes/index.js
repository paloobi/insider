'use strict';
var router = require('express').Router();


router.get('/companies', function(req, res, next) {

});

router.get('/companies/:company', function(req, res, next) {

});

router.get('/companies/:company/review', function(req, res, next) {

});

router.put('/companies/:company', function(req, res, next) {

});

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});

module.exports = router;
