// Require your locations model file
var locations = require('../models/locations.js');

var indexController = {
	index: function(req, res) {
		// Pass a reference to Jade that will tell it what locations means
		var filename = req.params.filename;

		if (!filename) {
			filename = 'seville';
		}

		var locationExists = locations[filename];

		if (locationExists) {
			res.render('port', {
				locations: locationExists
			});
		} else {
			res.render('404', {
				port: filename,
				locations: locations
			});
		}
	}
};

module.exports = indexController;