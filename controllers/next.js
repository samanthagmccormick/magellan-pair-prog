// Require your locations model file
var locations = require('../models/locations.js');

var nextController = {
	nextLoc: function(req, res) {
		var queryLoc = req.query.location;

		// var jsonLocations = JSON.parse(locations);

		var found = locations.filter(function(obj) {
			if (queryLoc === obj.title)
				return obj.title;
		});

		res.send(found);
	}
};

module.exports = nextController;