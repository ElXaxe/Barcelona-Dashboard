// Configure our app
var config = require ('./server/config.json');
var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');

// Require MassiveJS to connect to PostgreSQL
var massive = require('massive');
var connection = "postgres://" +
								 config.postgres.user + ":" +
								 config.postgres.password + "@" +
								 config.postgres.host + ":" +
								 config.postgres.port + "/" +
								 config.postgres.db;

// Connect to PostgreSQL Database
var massiveInstance = massive.connectSync({connectionString: connection});

app.set('db', massiveInstance);

var db = app.get('db');

// Configure routes
var router = express.Router();

router.get('/', function(req, res) {
	res.json({message: "Benvinguts a l'API de Barcelona Dashboard"});
});

router.route('/poblacios')
			.get(function(request, response) {
				db.poblacio.find({}, function(err, res){
					response.json(res);
				});
			});

app.use('/api/v1/', router);


// Set the static files location
app.use(express.static(__dirname + '/public'));

// Create the server
http.createServer(app).listen(3000, function() {
	console.log('Server listening on port 3000!');
});

// Handle connection errors
var handleError = function(res) {
	return function(err) {
		console.log(err);
		res.send(500, {error: err.message});
	}
}

exports = module.exports = app;