// Require your locations model file
var locations = require('../models/locations.js');

var nextController = {
	nextLoc: function(req, res) {
		var query = req.params.nextloc;

		var currentLoc = locations[query].title;
		var nextLoc = locations[query].next;

		res.send("The location after " + currentLoc + " is " + nextLoc);

	}
};

module.exports = nextController;