/* An array of objects which you will use to build out your Jade pages */
var locations = [
	{
		title: "Seville",
		description: "An awesome place in Spain",
		next: "Canary Islands"
	},
	{
		title: "Canary Islands",
		description: "An awesome place",
		next: "Cape Verde"
	},
	{
		title: "Cape Verde",
		description: "An awesome place",
		next: "Strait of Magellan"
	},
	{
		title: "Strait of Magellan",
		description: "An awesome place",
		next: "Guam"
	},
	{
		title: "Guam",
		description: "An awesome place",
		next: "Philippines"
	},
	{
		title: "Philippines",
		description: "An awesome place",
		next: "Seville"
	}
];

/* Export the locations variable */
module.exports = {
	locations: locations
};