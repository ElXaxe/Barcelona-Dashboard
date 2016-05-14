module.exports = function(app, router) {
	var db = app.get('db');

	// Root
	router.get('/', function(req, res) {
		res.json({message: "Benvinguts a l'API de Barcelona Dashboard"});
	});

	// Demography
	router.get('/population', function(request, response) {
		db.poblacio.find({}, function(err, res) {
			if (err) {
				handleError(err);
			}
			
			response.json({
				data: res.map( (el) => {
					var womenYears = [];
					var menYears = [];
					var womenTotal = 0
					var menTotal = 0;
					for (var i = 0; i <= 95; i++) {
						var women = el['donesanys' + i];
						var men = el['homesanys' + i];
						womenTotal += women;
						menTotal += men;
						womenYears.push(women);
						menYears.push(men);
					}

					return {
						id: el.id,
						type: 'poblacios',
						attributes: {
							year: el.anny,
							district: el.districte,
							neighbor: el.barri,
							womenYears: womenYears,
							menYears: menYears,
							womenTotal: womenTotal,
							menTotal: menTotal
						}
					};	
				})
			});
		});
	});

	// Libraries
	router.get('/libraries', function(request, response) {
		db.biblioteques.find({}, function(err, res) {
			if (err) {
				handleError(err);
			}

			response.json({
				data: res.map( (el) => {

					return {
						id: el.id,
						type: 'librarys',
						attributes: {
							year: el.anny,
							district: el.districte,
							libraryName: el.nom,
							visits: el.visites,
							loans: el.prestecs
						}
					}

				})
			});
		});
	});

	// Academic levels
	router.get('/academic', function(request, response) {
		db.academic.find({}, function(err, res) {
			if (err) {
				handleError(err);
			}
			
			response.json({
				data: res.map( (el) => {
					var womenTotal = el.sensedones + el.primarisdones + el.secundarisdones + 
						el.mitjansdones + el.superiorsdones;
					var menTotal = el.sensehomes + el.primarishomes + el.secundarishomes + 
						el.mitjanshomes + el.superiorshomes;
						
					return {
						id: el.id,
						type: 'academics',
						attributes: {
							year: el.anny,
							district: el.districte,
							neighbor: el.barri,
							women: {
								none: el.sensedones,
								primary: el.primarisdones,
								secondary: el.secundarisdones,
								average: el.mitjansdones,
								superior: el.superiorsdones,
								total: womenTotal
							},
							men: {
								none: el.sensehomes,
								primary: el.primarishomes,
								secondary: el.secundarishomes,
								average: el.mitjanshomes,
								superior: el.superiorshomes,
								total: menTotal
							}
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