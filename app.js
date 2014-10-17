var express = require('express');
var indexController = require('./controllers/index.js');
var nextController = require('./controllers/next.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Render the index page using your indexController method, 'index'
app.get('/', indexController.index);
app.get('/:filename', indexController.index);

app.get('/next/:nextloc', nextController.nextLoc);

var server = app.listen(4927, function() {
	console.log('Express server listening on port ' + server.address().port);
});
