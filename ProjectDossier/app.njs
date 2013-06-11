var express = require('express'),
	app = express();

var port = process.env.PORT || 1337;

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
});

app.get('/', function{
	res.send('hello!');
});

// Let the app listen on the port
app.listen(port);

// Set the console message
console.log('Application accessible at http://localhost:' + port);