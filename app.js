var express = require('express');
var indexController = require('./controllers/index.js');
var noTravelController = require('./controllers/noTravel.js');
var nextController = require('./controllers/next.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Render the index page using your indexController method, 'index'
app.get('/', indexController.index);
app.get('/canaryislands', indexController.canaryislands);
app.get('/capeverde', indexController.capeverde);
app.get('/straitofmagellan', indexController.straitofmagellan);
app.get('/guam', indexController.guam);
app.get('/philippines', indexController.philippines);

// app.get('/:filename', noTravelController.error);

app.get('/next', nextController.nextLoc);

var server = app.listen(4927, function() {
	console.log('Express server listening on port ' + server.address().port);
});
