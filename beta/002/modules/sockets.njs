var socket = require('socket.io');

var Document = require('../models/document.njs');


module.exports.listen = function(server) {
	var io = socket.listen(server, {log: false});

	io.sockets.on('connection', function(socket){
		socket.on('document.new', function(data) {
			Document.save(data, function(err, document) {
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

		// new collaborator
		socket.on('collaborator.new', function(collaborator) {
			Document.newCollaborator(collaborator, function(err, document, user) {
				if (!err) {
					data = {'document' : document, 'user' : user, 'state' : 'success'};
					socket.emit('collaborator.new', data);
				}
				else {
					data = {'state' : 'error', 'error' : err};
					socket.emit('collaborator.new', data);
				};
			});
		});
		
		socket.on('document.remove', function(documentId) {
			Document.deleteById(documentId, function(err) {
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

			// Document.saveBlock(block, function(err, document, user){
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

			// Document.addBlock(block, function(err, document, user){
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

			// Document.removeBlock(block, function(err, document, user){
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
		socket.on('block.resize', function(blockdata) {
			// blockdata.id blockdata.oldSize blockdata.newSize
			if 		(blockdata.oldSize == 1) blockdata.newSize = 2;
			else if (blockdata.oldSize == 2) blockdata.newSize = 3;
			else if (blockdata.oldSize == 3) blockdata.newSize = 4;
			else if (blockdata.oldSize == 4) blockdata.newSize = 1;

			var block = {
				objectId : '51c81a876798a7af43000005',
				col : blockdata.newSize,
				blockId : blockdata.id
			}

			console.log('hello');

			Document.resizeBlock(block, function(err, document){
				if(!err){
					console.log('saved resize to db');
					io.sockets.emit('block.resize', blockdata);
				}
				else{
					console.log('block resizing fail');
				}
			});

		});

	});

}

