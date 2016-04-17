// Configure our app
var config = require ('./server/config.json');
var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');

// Require MassiveJS to connect to PostgreSQL
var massive = require('massive');
var connection = "postgres://" +
								 config.postgres.user + ":" +
								 config.postgres.password + "@" +
								 config.postgres.host + ":" +
								 config.postgres.port + "/" +
								 config.postgres.db;
// var connection = "postgres://crwprravrqaurn:OygTkfp6dgaztg2wS7VpF7YZuf@ec2-23-21-215-184.compute-1.amazonaws.com:5432/d42fo6nihcr2iu";

// Connect to PostgreSQL Database
var massiveInstance = massive.connectSync({connectionString: connection});

app.set('db', massiveInstance);

// Configure routes
var router = express.Router();

require('./server/routes')(app, router);

app.use('/api/v1/', router);

// Set the static files location
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/assets/favicon.ico'));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/' + '/index.html'));
});

// Create the server
http.createServer(app).listen(3000, function() {
	console.log('Server listening on port 3000!');
});

exports = module.exports = app;