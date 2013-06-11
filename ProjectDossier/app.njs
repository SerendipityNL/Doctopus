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

app.listen(port);

console.log('Application accessible at http://localhost:' + port);