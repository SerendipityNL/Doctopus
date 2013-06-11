var express = require('express'),
	app = express();

var port = process.env.PORT || 1337;

app.configure(function() {
	app.use(express.static(__dirname));
	app.set('views', __dirname);
	app.set('view engine', 'jade');
});

app.get('/', function(req, res){
	res.render('index');
});

// Let the app listen on the port
app.listen(port);

// Set the console message
console.log('Application accessible at http://localhost:' + port);