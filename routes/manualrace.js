var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('manualrace', { title: 'Enter a race manually' });
});

/* POST form. */
router.post('/', function(req, res, next) {
  calculateAvgSpd(req.body.distance, req.body.time, function(rslt) {
    res.render('recommendations', { calories: rslt});
  });

});

const calculateAvgSpd = (distance, time, callback) => {
  var avgspd = (distance*time);
  console.log('function called');
  if (callback && typeof(callback) === "function") {
    callback(avgspd);
  }
  return avgspd;
};

module.exports = router;
