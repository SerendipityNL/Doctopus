// Include the required modules
var express = require('express'),
	app = express(),
	routes = require('./routes/index.njs'),
	user = require('./routes/user.njs');

var port = process.env.PORT || 1337;

// Configure the application
app.configure(function() {

	// Enable the bodyParser so we can access POST data
	app.use(express.bodyParser());
	
	// Enable the cookieParser so we can work with cookies
	app.use(express.cookieParser('super-duper-secret'));

	// add req.session cookie support
	app.use(express.cookieSession());

	// Enable the logging
	app.use(express.logger('dev'));

	// Set the path to the public directory
	app.use(express.static(__dirname + '/public'));

	// Set the views directory
	app.set('views', __dirname + '/views');

	// Set the view engine
	app.set('view engine', 'jade');

	// Set the local vars/functions
	app.locals(require('./modules/app.locals.njs'));
});

// Page routes
app.get('/', routes.index);
app.get('/custom.css', routes.css);
app.get('/register', user.register);
app.get('/login', user.loginView);
app.get('/logout', user.logout);

app.post('/setstyle', routes.setstyle);
app.post('/register', user.create);
app.post('/login', user.login);

app.all('*', function(req,res,next) {
	if (req.session.logged_in) {
		global.session = req.session;
	    next();
	}
	else {
		res.redirect('/login');
	}
});

app.get('/dashboard', user.index);
// Let the app listen on the defined port
app.listen(port);

// Set the console message
console.log('Application accessible at http://localhost:1337');