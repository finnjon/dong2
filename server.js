var http = require('http');
var express = require('express');
var cors = require('cors');
var app = express();
var jwt = require('express-jwt');
var mongoose = require('mongoose');
var config = require('./server/config');
var apiController = require('./server/controllers/apiController');
var path = require('path');

var port = process.env.PORT || 8080;

mongoose.connect(config.getDbConnectionString());
apiController(app);

app.use(cors());
app.use(express.static(path.join(__dirname, '/dist'))); //figure this out

app.use('*', function(req, res) {
	return res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});

http.createServer(app).listen(port, function(err) {
	console.log('listening on ' + port);
});
