var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
  id: {type: Number, },
  body: { type: String, required: true },
  dateSubmitted: {type: Date, default: Date.now() },
  answer: {type: String, default: "type your response"}
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;
