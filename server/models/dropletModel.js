var mongoose = require('mongoose').set('debug', true);

var Schema = mongoose.Schema;

var dropletSchema = new Schema({
	name: String,
	description: String,
	user_id: String,
	editor: String,
	created_at: String,
	updated_at: String,
	status: String,
	verified: String,
	language: String,
	open: Boolean,
	tags: [{
		tag: String,
		created_at: String
	}],
	hints: [{
		content: String,
		created_at: String,
		updated_at: String,
		comment: String
	}],
	explanations: [{
		content: String,
		created_at: String,
		updated_at: String,
		comment: String
	}],
	questions: [{
		prompt: String,
		answer: String,
		created_at: String,
		updated_at: String,
		filledAnswer: String,
		comment: String
	}],
	comments: {
		name: String,
		description: String,
		tags: String
	}
});

var Droplets = mongoose.model('Droplets3', dropletSchema);

module.exports = Droplets;
