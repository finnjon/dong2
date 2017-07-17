var mongoose = require('mongoose').set('debug', true);

var Schema = mongoose.Schema;

var poolSchema = new Schema({
	name: String,
	description: String,
	user_id: String,
	created_at: String,
	updated_at: String,
	status: String,
	language: String,
	open: Boolean,
	tags: [{
		tag: String,
		created_at: String
	}],
	droplets: [{
		droplet_id: String,
		created_at: String,
	}],
});

var Pools = mongoose.model('Pools', poolSchema);

module.exports = Pools;
