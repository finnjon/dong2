var Droplets = require('../models/dropletModel');
var Pools = require('../models/poolModel');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('express-jwt');
var ObjectId = require('mongodb').ObjectID;
var jwksRsa = require('jwks-rsa');

var checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		jwksUri: 'https://deeply.eu.auth0.com/.well-known/jwks.json'
	}),

	audience: process.env.AUTH0_AUDIENCE,
	issuer: 'https://deeply.eu.auth0.com/',
	algorithms: ['RS256']
});

module.exports = function(app) {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(cors());

	app.get('/droplet', checkJwt, function(req, res) {
		res.send(200, {
			text: "You have fetched the droplet"
		});
	});

	app.get('/api/droplets/:id', function(req, res) {
		Droplets.findOne({
			_id: req.params.id
		}, function(err, droplet) {
			if (err) throw err;
			res.send(droplet);
		});
	});

	app.get('/api/pools/:id', function(req, res) {
		Pools.findOne({
			_id: req.params.id
		}, function(err, pool) {
			if (err) throw err;
			res.send(pool);
		});
	});

	app.post('/api/pooldrops', function(req, res) {
		Droplets.find({
			_id: {
				$in: req.body
			}
		}, function(err, result) {
			if (err) throw err;
			res.send(result);
		});
	});



	app.get('/api/latestPools', function(req, res) {
		Pools.find({}, function(err, pools) {
				if (err) throw err;
				res.send(pools);
			})
			.limit(10);
	});

	app.get('/api/userDroplets', checkJwt, function(req, res) {
		Droplets.find({
					user_id: req.user.sub
				}, //sub is ID
				function(err, droplets) {
					if (err) throw err;
					res.send(droplets);
				})
			.limit(60);
	});

	app.get('/api/userPools', checkJwt, function(req, res) {
		Pools.find({
					user_id: req.user.sub
				}, //sub is ID
				function(err, pools) {
					if (err) throw err;
					res.send(pools);
				})
			.limit(15);
	});

	app.get('/api/userReviewDroplets', checkJwt, function(req, res) {
		Droplets.find({
					editor: req.user.sub
				}, //sub is ID
				function(err, droplets) {
					if (err) throw err;
					res.send(droplets);
				})
			.limit(20);
	});

	app.get('/api/reviewDroplets', function(req, res) {
		Droplets.find({
					verified: "submitted"
				},
				function(err, droplets) {
					if (err) throw err;
					res.send(droplets);
				})
			.limit(10);
	});

	// get name and description based on search string
	app.get('/api/droplets', function(req, res) {
		var searchString = req.param('search');
		Droplets.find({
					name: new RegExp(searchString, "i")
				},
				'_id name description status verified language created_at',
				function(err, droplets) {
					if (err) throw err;
					res.send(droplets);
				})
			.limit(10);
	});

	app.get('/api/pools', function(req, res) {
		var searchString = req.param('search');
		Pools.find({
					name: new RegExp(searchString, "i")
				},
				'_id name description status droplets language created_at',
				function(err, pools) {
					if (err) throw err;
					res.send(pools);
				})
			.limit(10);
	});

	app.post('/api/droplets', checkJwt, function(req, res) {
		if (req.body._id) { //if id then obj exists and so update
			Droplets.findByIdAndUpdate(
				req.body._id, {
					$set: req.body
				}, {
					new: true
				}, //necessary to return updated object
				function(err, droplet) {
					if (err) throw err;
					res.send(droplet);
				});

		} else { //no id so create

			var newDroplet = Droplets({
				name: req.body.name,
				description: req.body.description,
				user_id: req.body.user_id,
				created_at: req.body.created_at,
				updated_at: req.body.updated_at,
				status: req.body.status,
				verified: req.body.verified,
				language: req.body.language,
				open: req.body.open,
				tags: req.body.tags,
				hints: req.body.hints,
				explanations: req.body.explanations,
				questions: req.body.questions,

			});

			newDroplet.save(function(err, droplet) {
				if (err) throw err;
				res.send(droplet);
			});
		}
	});

	app.post('/api/pools', checkJwt, function(req, res) {
		if (req.body._id) { //if id then obj exists and so update
			Pools.findByIdAndUpdate(
				req.body._id, {
					$set: req.body
				}, {
					new: true
				}, //necessary to return updated object
				function(err, pool) {
					if (err) throw err;
					res.send(pool);
				});

		} else { //no id so create

			var newPool = Pools({
				name: req.body.name,
				description: req.body.description,
				user_id: req.body.user_id,
				created_at: req.body.created_at,
				updated_at: req.body.updated_at,
				status: req.body.status,
				language: req.body.language,
				open: req.body.open,
				tags: req.body.tags,
				droplets: req.body.droplets
			});

			newPool.save(function(err, pool) {
				if (err) throw err;
				res.send(pool);
			});
		}
	});
};