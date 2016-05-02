var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName:{type: String },
  lastName: {type: String},
  github: {type: String},
  password: {type: String},
  questions: {type: String},
  interviews: {type: String},
  companiesInterviewsAt: {type: String},
});



var User = mongoose.model('User', userSchema);
module.exports = User;
