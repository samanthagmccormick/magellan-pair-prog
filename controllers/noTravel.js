// Require your locations model file
var locations = require('../models/locations.js');

var noTravelController = {
	error: function(req, res) {
		var fileName = req.params.filename;
		res.send("Magellan did not visit " + fileName);
	}
};

module.exports = noTravelController;