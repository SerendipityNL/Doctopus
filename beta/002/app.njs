// Include the required modules
var express = require('express'),
	app = express(),
	
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	document = require('./routes/document.njs'),
	front = require('./routes/front.njs'),
	user = require('./routes/user.njs'),
	files = require('./routes/files.njs');		

	documentModel = require('./models/provider.njs').load('document');
	

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

// Homepage route
app.get('/', front.index);

// User routes
app.get('/register', user.register);
app.post('/register', user.create);
app.get('/login', user.login);
app.post('/login', user.login);
app.get('/logout', user.logout);
app.get('/dashboard', user.dashboard);

// Document routes
app.post('/setstyle', document.setstyle);
app.get('/document', document.index);
app.get('/custom.css', document.css);

// Files routes
app.post('/file-upload', files.upload);

// Let the app listen on the defined port
app = app.listen(port);

server.listen(app);

io.sockets.on('connection', function(socket){
	console.log('connection made');
	socket.on('new document', function(data) {
		console.log('New document created, titled ' + data.title + ' with the visibility setting on ' + data.visibility + ' by ' + data.username);
		documentModel.save(data, function(err, document) {
			if (err) {
				console.log(err);
			}
			else {
				var data = [];
				data = {
					state: 'success',
					document: document
				};
				console.log(document._id);
				socket.emit('new document', data);
			}
		})
	});
});


// Set the console message
console.log('Application accessible at http://localhost:1337');