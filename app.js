var express = require('express');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
     res.render('index', {
     	location: "Seville",
     	imgurl: "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10727610_1545414575673793_1811096726_n.jpg",
     	next: "canaryislands"
     });
});

app.get('/canaryislands', function(req, res) {
     res.render('canaryislands', {
     	location: "Canary Islands",
     	imgurl: "http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10724892_674274842687382_147977390_n.jpg",
     	next: "capeverde"
     });
});

app.get('/capeverde', function(req, res) {
     res.render('capeverde', {
     	location: "Cape Verde",
     	imgurl: "http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10735041_296450990560542_236076287_n.jpg",
     	next: "straitofmagellan"
     });
});

app.get('/straitofmagellan', function(req, res) {
     res.render('straitofmagellan', {
     	location: "Strait of Magellan",
     	imgurl: "http://scontent-a.cdninstagram.com/hphotos-xfa1/outbound-distilleryimage2/t0.0-17/OBPTH/3df9eca4b39911e395d30ec7201e8182_8.jpg",
     	next: "guam"
     });
});

app.get('/guam', function(req, res) {
     res.render('guam', {
     	location: "Guam",
     	imgurl: "http://scontent-b.cdninstagram.com/hphotos-xfa1/t51.2885-15/10735031_1490303021224709_1184776617_n.jpg",
     	next: "philippines"
     });
});

app.get('/philippines', function(req, res) {
     res.render('philippines', {
     	location: "Philippines",
     	imgurl: "http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10731784_307268022815125_1352536960_n.jpg",
     	next: "/"
     });
});

var server = app.listen(4927, function() {
	console.log('Express server listening on port ' + server.address().port);
});
