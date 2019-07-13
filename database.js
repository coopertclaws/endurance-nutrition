var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
//  title : String,
  name: String,
  email: String,
  dob: Date,
  weight: Number
});

mongoose.model('users', User);

mongoose.connect('mongodb+srv://web:KtpgA5hSwZqrcOcT@mongodb-g7brx.mongodb.net/enduronut?retryWrites=true&w=majority')
