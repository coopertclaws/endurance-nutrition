var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = mongoose.model('products');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render(
    'product',
    {title : 'Add a Product'}
  );
});

/* POST form. */
router.post('/', function(req, res, next) {
  new Product({
    product_type : req.body.product_type,
    product_name : req.body.product_name,
    flavour : req.body.flavour,
    mass : req.body.mass
  })
  .save(function(err, product) {
    console.log(product.product_type);
    res.redirect('productlist');
  });
});

module.exports = router;
