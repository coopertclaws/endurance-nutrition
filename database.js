var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
//  title : String,
  name: String,
  email: String,
  dob: Date,
  weight: Number
});

var Product = new Schema({
  product_type: String,
  product_name: String,
  flavour: String,
  mass: Number
});

mongoose.model('users', User);

mongoose.model('products', Product);

mongoose.connect('mongodb+srv://web:KtpgA5hSwZqrcOcT@mongodb-g7brx.mongodb.net/enduronut?retryWrites=true&w=majority')
