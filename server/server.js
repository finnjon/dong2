var http = require('http');
var express = require('express');
var cors = require('cors');
var app = express();
var jwt = require('express-jwt');
var mongoose = require('mongoose');
var config = require('./config');
var apiController = require('./controllers/apiController');
var Droplets = require('./models/dropletModel');
var bodyParser = require('body-parser');
var jwksRsa = require('jwks-rsa');
var path = require('path');

var checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		jwksUri: 'https://deeply.eu.auth0.com/.well-known/jwks.json'
	}),

	audience: process.env.AUTH0_AUDIENCE,
	issuer: 'https://deeply.eu.auth0.com/',
	algorithms: ['RS256']
});

mongoose.connect(config.getDbConnectionString());
apiController(app);

app.use(cors());
app.use(express.static(path.join(__dirname, '../dist'))); //figure this out

app.use('*', function(req, res) {
	return res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

var port = process.env.PORT || 8080;

http.createServer(app).listen(port, function(err) {
	console.log('listening in http://localhost:' + port);
});

app.get('/droplet', checkJwt, function(req, res) {
	res.send(200, {
		text: "You have fetched the droplet"
	});
});
