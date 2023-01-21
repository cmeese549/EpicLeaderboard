(function () {
	'use strict';

	module.exports = {
		getTopTenScore: getTopTenScore,
		addScore: addScore
	};

	const model = require('./module')().model;

	function getTopTenScore (levelName, gameVersion) {
		return model.find({ level: levelName, gameVersion: gameVersion })
			.sort('-score')
			.limit(10)
			.exec();
	}

	function addScore (data) {
		console.log(data);
		return model.create(data);
	}
})();