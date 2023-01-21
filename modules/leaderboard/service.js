(function () {
	'use strict';

	module.exports = {
		getTopTenScore: getTopTenScore,
		addScore: addScore
	};

	const model = require('./module')().model;

	function getTopTenScore (gameVersion) {
		return model.find({gameVersion})
			.sort('-score')
			.limit(10)
			.exec();
	}

	function addScore (data) {
		return model.create(data);
	}
})();