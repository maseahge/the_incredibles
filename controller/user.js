var User = require('../models/user');

var user = {};

user.index = function(req, res){
  User.find({}, function(err, user){
    if (err) throw err;
    res.json(user);
  });
};

user.create = function(req, res){
  var user = new User;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.github = req.body.github;
  user.password = req.body.password;
  user.questions = req.body.quesitons;
  user.interviews = req.body.interviews;
  user.companiesInterviewsAt = req.body.companiesInterviewsAt;
  user.save(function(err){
    if(err){
      throw err;
    }
    res.json({success: true, message: "succefully made a new user"});
  });
};

user.show = function(req,res){
  User.find({github: req.params.github}, function(err, user){
    if (err) throw err;
    res.json(user);
  });
};

module.exports = user;



