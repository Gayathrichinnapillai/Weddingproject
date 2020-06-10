var createError = require('http-errors');  
var express = require('express');  
var path = require('path');  
var cors=require('cors');  
var logger = require('morgan'); 
var forms=require('./Routes/Register');  
var register=require('./Routes/Userregistration'); 
var app = express();  
var bodyParser=require('body-parser');
  
// view engine setup  
app.use(express.static(path.join(__dirname, 'public')));  
app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'jade');  
app.use(cors());  
app.use(logger('dev'));  
app.use(express.json());  
app.use(express.urlencoded({ extended: false }));  
app.use(bodyParser.json());
app.use('/Register',register);  
app.use('/weddingform',forms)

// catch 404 and forward to error handler  
app.use(function(req, res, next) {  
  next(createError(404));  
});  
  
// error handler  
app.use(function(err, req, res, next) {  
  // set locals, only providing error in development  
  res.locals.message = err.message;  
  res.locals.error = req.app.get('env') === 'development' ? err : {};  
  
  // render the error page  
  res.status(err.status || 500);  
  res.render('error');  
});  
app.listen(8000);
module.exports = app; 