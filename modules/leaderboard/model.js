(function () {
	const mongoose = require('mongoose');
	// clear models for mocha --watch
	mongoose.models = {};
	mongoose.modelSchemas = {};
	mongoose.set('useFindAndModify', false);
	const schema = mongoose.Schema;

	const schemass = new schema({
		name: {
			type: String,
			required: true
		},
		score: {
            type: Number,
            required: true
		},
		wave: {
			type: String,
			required: true
		},
		gameVersion: {
			type: String,
			required: true
		}
	});

	module.exports = mongoose.model('leaderboard', schemass);
})();