// Include the required modules
var express = require('express'),
	app = express(),
	
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	document = require('./routes/document.njs'),
	front = require('./routes/front.njs')
	user = require('./routes/user.njs');
	var fs = require('fs');

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

// Page routes
app.get('*', function(req, res, next) {
	//console.log(req.session.username);
	next();
});

app.get('/', front.index);

app.get('/register', user.register);
app.get('/document', document.index);
app.get('/custom.css', document.css);
app.get('/register', user.register);
app.get('/login', user.login);
app.get('/logout', user.logout);

app.post('/setstyle', document.setstyle);
app.post('/register', user.create);
app.post('/login', user.login);

app.get('/dashboard', user.index);

// handles image upload
app.post('/file-upload', function(req, res){

	console.log(req.files);
	//console.log(req.body);
    //console.log(req.files.Image);

   	//settings
    var id  		= 1;
	var ext 		= req.files.file.name.split('.').pop();
	var new_name 	= Math.random().toString(36).substring(7);
	var max_width 	= 800;
	var max_height 	= 600;
	var max_size    = 5000000; // in bits, its 2mb
	var upload_dir  = "/public/uploads/";
	var resize = false;

	// write the new file
	fs.readFile(req.files.file.path, function (err, data) {
	  var newPath = __dirname + upload_dir + id + "_" + new_name + "." +ext+ " ";
	  fs.writeFile(newPath, data, function (err) {


		easyimg.info(req.files.file.path, function(err, img_info, img_err) {
				
			// if there are any errors return them
			if (err) throw err;
			console.log(img_info);

			//check file size again	
			if(img_info.size > max_size){
				console.log('file is too large '+ img_info.size +'');
				resize = false;
			}

			// check max width
			if(img_info.width > max_width){
				console.log('width '+img_info.width+' is too high');
				resize = true;
			}

			// check max height
			if(img_info.height > max_height){
				console.log('height '+img_info.height+' is too high');
				resize = true;
			}

			if(resize == true){
				easyimg.resize({src:req.files.file.path, dst:newPath, width:800, height:600}, function(err, stdout, stderr) {
				if (err) throw err;
					console.log('Resized to 800x600');
				});
			}

		});

	  	if (err) return console.log(err);

	  	res.redirect('/document/upload');
	    console.log(' '+newPath+' has been uploaded');
	  });
	});

});


// Let the app listen on the defined port
app = app.listen(port);

server.listen(app);

io.sockets.on('connection', function(socket){
	console.log('connection made');
	socket.on('new document', function(data) {
		console.log('New document created, titled ' + data.title + ' with the visibility setting on ' + data.visibility + ' by ' + data.username);
		socket.emit('new document', 'success');
	});
});


// Set the console message
console.log('Application accessible at http://localhost:1337');