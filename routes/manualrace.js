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
    console.log(findClosest(array, 9));
    res.render('recommendations', { calories: rslt});
  });

});

const calculateAvgSpd = (distance, time, callback) => {
  var avgspd = (distance*time);
  if (callback && typeof(callback) === "function") {
    callback(avgspd);
  }
  return avgspd;
};

var array = [2, 4, 6, 7, 10];

function findClosest(array,num) {
  var i=0;
  var minDiff=1000;
  var ans;
  for(i in array){
    var m=Math.abs(num-array[i]);
    if(m<minDiff){
      minDiff=m;
      ans=array[i];
    }
  }
  return ans;
}

module.exports = router;
