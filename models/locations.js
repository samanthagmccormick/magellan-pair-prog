/* An array of objects which you will use to build out your Jade pages */
var locations = {
	seville: {
		title: "Seville",
		description: "an awesome place in Spain",
		order: "first",
		imgurl: "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10727610_1545414575673793_1811096726_n.jpg",
		next: "canaryislands"
	},
	canaryislands: {
		title: "Canary Islands",
		description: "an awesome place",
		order: "second",
		imgurl: "http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10724892_674274842687382_147977390_n.jpg",
		next: "capeverde"
	},
	capeverde: {
		title: "Cape Verde",
		description: "an awesome place",
		order: "third",
		imgurl: "http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10735041_296450990560542_236076287_n.jpg",
		next: "straitofmagellan"
	},
	straitofmagellan: {
		title: "Strait of Magellan",
		description: "an awesome place",
		order: "fourth",
		imgurl: "http://scontent-a.cdninstagram.com/hphotos-xfa1/outbound-distilleryimage2/t0.0-17/OBPTH/3df9eca4b39911e395d30ec7201e8182_8.jpg",
		next: "guam"
	},
	guam: {
		title: "Guam",
		description: "an awesome place",
		order: "fifth",
		imgurl: "http://scontent-b.cdninstagram.com/hphotos-xfa1/t51.2885-15/10735031_1490303021224709_1184776617_n.jpg",
		next: "philippines"
	},
	philippines: {
		title: "Philippines",
		description: "an awesome place",
		order: "final",
		imgurl: "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10731784_307268022815125_1352536960_n.jpg",
		next: "/"
	}
};

/* Export the locations variable */
module.exports = locations;