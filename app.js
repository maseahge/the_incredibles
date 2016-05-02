var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var port = process.env.PORT || 3000;
var passport = require('passport');
var app = express();


//routes
var welcomeRoute = require('./routes/welcome.js');

//middleware
app.use(logger('dev'));


// var updater = require( path.resolve( __dirname, "../models/question.js" ) );



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//require our question model
var Question = require('./models/question');



// mongoose stuff
var mongoose = require( 'mongoose' );
var mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/queen-app';
mongoose.connect( mongoUrl );

app.use('/', welcomeRoute);

// app.get("/welcome", function(req,res){
//   res.render('../views/index');
// });

// app.get("/login", function(req, res){
//   res.render('../views/login');
// });


//
app.listen(port, function(){
  console.log('listening on port ' + port);
});
