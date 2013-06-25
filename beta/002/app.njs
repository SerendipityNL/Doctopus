// Include the required modules
var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server, {log: false}),
	document = require('./routes/document.njs'),
	front = require('./routes/front.njs'),
	users = require('./routes/users.njs'),
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
	//app.use(express.logger('dev'));

	// Set the path to the public and upload directory
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

// Users routes
app.get('/register', users.register);
app.post('/register', users.create);
app.get('/login', users.login);
app.post('/login', users.login);
app.get('/logout', users.logout);
app.get('/dashboard', users.dashboard);

// Document routes
app.post('/setstyle', document.setstyle);
app.get('/document/edit/:id', document.edit);
app.get('/document/manage/:id', document.manage);
app.get('/custom.css', document.css);

// Files routes
app.post('/file-upload', files.upload);

// Let the app listen on the defined port
app = app.listen(port);

server.listen(app);

io.sockets.on('connection', function(socket){
	socket.on('document.new', function(data) {
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
				socket.emit('document.new', data);
			}
		});
	});
	
/* Document Methods */

	// new collaborator
	socket.on('collaborator.new', function(collaborator) {
		documentModel.newCollaborator(collaborator, function(err, document, user) {
			if (!err) {
				data = {'document' : document, 'user' : user, 'state' : 'success'};
				socket.emit('collaborator.new', data);
			}
			else {
				data = {'state' : 'error'};
				socket.emit('collaborator.new', data);
			};
		});
	});
	
	socket.on('document.remove', function(documentId) {
		documentModel.deleteById(documentId, function(err) {
			if (! err) {
				data = {'state' : 'succes'};
			}
			else {
				data = {'state' : 'error', 'error': err}
			}
			socket.emit('document.remove', data);
		})
	});
	
	// block content saved
	socket.on('block.saved', function(block) {
		console.log(block);

		// documentModel.saveBlock(block, function(err, document, user){
		// 	if(!err){
		// 		data = {'block' : document, 'user' : user, 'state' : 'succes'};
		// 		socket.emit('block.saved', data);
		// 	}
		// 	else{
		// 		data = {'state' : 'error'};
		// 		socket.emit('block.saved', data);
		// 	}
		// }
	});

	//new block added
	socket.on('block.added', function(block) {
		//console.log(block);

		// documentModel.addBlock(block, function(err, document, user){
		// 	if(!err){
		// 		data = {'block' : document, 'user' : user, 'state' : 'succes'};
		// 		socket.emit('block.added', data);
		// 	}
		// 	else{
		// 		data = {'state' : 'error'};
		// 		socket.emit('block.added', data);
		// 	}
		// }

	});

	//block has been removed
	socket.on('block.removed', function(block) {
		console.log(block);

		// documentModel.removeBlock(block, function(err, document, user){
		// 	if(!err){
		// 		data = {'block' : document, 'user' : user, 'state' : 'succes'};
		// 		socket.emit('block.removed', data);
		// 	}
		// 	else{
		// 		data = {'state' : 'error'};
		// 		socket.emit('block.removed', data);
		// 	}
		// }
	});

	//new size changed
	socket.on('block.sizeChange', function(block) {
		console.log(block);
		// documentModel.changeBlockSize(block, function(err, document, user){
		// 	if(!err){
		// 		data = {'block' : document, 'user' : user, 'state' : 'succes'};
		// 		socket.emit('block.sizeChange', data);
		// 	}
		// 	else{
		// 		data = {'state' : 'error'};
		// 		socket.emit('block.sizeChange', data);
		// 	}
		// }
	});

});
