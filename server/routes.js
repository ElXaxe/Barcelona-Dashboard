module.exports = function(app, router) {
	var db = app.get('db');

	// Root
	router.get('/', function(req, res) {
		res.json({message: "Benvinguts a l'API de Barcelona Dashboard"});
	});

	// Demography
	router.get('/poblacios', function(request, response) {
		db.poblacio.find({}, function(err, res){
			if (err) {
				handleError(err);
			}
			
			response.json({
				data: res.map( (el) => {
					var donesAnys = [];
					var homesAnys = [];
					
					for (var i = 0; i <= 95; i++) {
						donesAnys.push(el['donesanys' + i]);
						homesAnys.push(el['homesanys' + i]);
					}

					return {
						id: el.id,
						type: 'poblacios',
						attributes: {
							anny: el.anny,
							districte: el.districte,
							barri: el.barri,
							'dones-anys': donesAnys,
							'homes-anys': homesAnys
						}
					};	
				})
			});
		});
	});

}

// Handle connection errors
var handleError = function(res) {
	return function(err) {
		console.log(err);
		res.send(500, {error: err.message});
	}
}