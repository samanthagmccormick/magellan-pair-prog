// Require your locations model file
var locations = require('../models/locations.js');

var indexController = {
	index: function(req, res) {
		// Pass a reference to Jade that will tell it what locations means
		res.render('index', {
			locations: locations
		});
	},
	canaryislands: function(req, res) {
		res.render('canaryislands', {
			locations: locations
		});
	}, 
	capeverde: function(req, res) {
		res.render('capeverde', {
			locations: locations
		});
	}, 
	straitofmagellan: function(req, res) {
		res.render('straitofmagellan', {
			locations: locations
		});
	}, 
	guam: function(req, res) {
		res.render('guam', {
			locations: locations
		});
	}, 
	philippines: function(req, res) {
		res.render('philippines', {
			locations: locations
		});
	}, 
};

module.exports = indexController;