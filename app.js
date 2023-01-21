const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');

const mongodbUtil = require('./modules/mongodb/module').mongodbUtil;
mongodbUtil.init();

const leaderboardController = require('./modules/leaderboard/module')().controller;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Headers', 'x-access-token');
	next();
});
request = require('request');
app.use('/leaderboard', leaderboardController);
app.get('/', function (req, res) {
	res.status(200).end(JSON.stringify({sex: true}));
})

app.use(function (req, res, next) {
	next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	console.log(err.message);
	// render the error page
	res.status(err.status || 500);
	res.json({
		message: res.locals.message,
		error: res.locals.error
	});
});

module.exports = app;
