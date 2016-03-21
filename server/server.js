// Import configuration
var config = require ('./config.json');
var connection = "postgres://" +
								 config.postgres.user + ":" +
								 config.postgres.password + "@" +
								 config.postgres.host + ":" +
								 config.postgres.port + "/" +
								 config.postgres.db;

var express = require('express');
var app = express();

// Set the static files location
app.use(express.static(__dirname + '../public'));

// Configure routes
require('./routes')(app)

// Get the route localhost:3000/ and send a response
// app.get('/', function (req, res) {
// 	res.send('Hola mon!');
// 	console.log(connection);
// })

// Create the server
app.listen(3000, function() {
	console.log('Server listening on port 3000!');
});

exports = module.exports = app;