var user = require('../controller/user');
var express = require('express');
var router = express.Router();


router.route('/welcome')
  .get(function(req, res){
  res.render("../views/index");
});

router.route('/login')
  .get(function(req,res){
    res.render('../views/login');
  })
  .post(user.show);


router.route('/sign_up')
  .get(function(req,res){
    res.render("../views/sign_up.ejs");
  })
  .post(user.create);

// router.route('/')
//   .get(function(req, res){
//     res.json({message: "hello there"});
//   });
module.exports = router;
