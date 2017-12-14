/* eslint no-console: 0 */

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
  app.use(logger('dev'));
} else {
  app.use(logger('prod'));
  app.use(express.static(__dirname + '/dist'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Set all available routes
routes(app);

// catch 404 and forward to error handler
const error404HandlingMiddleware = function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};
app.use(error404HandlingMiddleware);

// error handler
const errorHandlingMiddleware = function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
};
app.use(errorHandlingMiddleware);

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});