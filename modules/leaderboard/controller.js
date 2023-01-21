(function () {
	'use strict';

	const express = require('express');
	const router = express.Router();

	const middleware = require('./module')().middleware;

	router.get(
		'/top-10/:gameVersion',
		middleware.getTopTen,
		function (req, res) {
			res.status(200).end(JSON.stringify(req.response));
		}
	);

	router.get(
		'/all-scores/:gameVersion',
		middleware.getAllScores,
		function (req, res) {
			res.status(200).end(JSON.stringify(req.response));
		}
	);


	router.post(
		'/add-new-score',
		middleware.addNewScore,
		function (req, res) {
			res.status(200).end(JSON.stringify(req.response));
		}
	)

	module.exports = router;

})();
