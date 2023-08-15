const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const routes = require('./routes/routes');
app.set('view engine', 'ejs');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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

// Listen on port 3000
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
  
module.exports = app;
  