(function () {
	'use strict';

	module.exports = {
		init: init
	};

	const mongoose = require('mongoose');
	const mongodbConfig = require('../../config/mongodb/mongodb-config')
		.mongodb;

	function init () {
        const options = { useNewUrlParser: true };
		const connectionString = prepareConnectionString(mongodbConfig);
		mongoose
			.connect(connectionString, options)
			.then(function () {
				console.log(
					'MongoDB connection successful.  DB: ' + connectionString
				);
			})
			.catch(function (err) {
				console.log(err.message);
				console.log(
					'Error occurred while connecting to DB: ' +
						connectionString
				);
			});
	}

	function prepareConnectionString (config) {
		let connectionString = 'mongodb://';
		if (config.user) {
			connectionString += config.user + ':' + config.password + '@';
		}
		connectionString += config.server + '/' + config.database;
		return connectionString;
	}
})();