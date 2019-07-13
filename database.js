var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
  title : String,
});

mongoose.model('comments', Comment);

mongoose.connect('mongodb+srv://web:KtpgA5hSwZqrcOcT@mongodb-g7brx.mongodb.net/enduronut?retryWrites=true&w=majority')
