var mongoose = require('mongoose');
	mongoose.createConnection('mongodb://localhost/doctopus');

var blockSchema = new mongoose.Schema({
	type					: {type: String, required: true},
	order					: {type: Number, required: true, min: 0},
	content					: {type: mongoose.Schema.Types.Mixed, any: {}},
	cols					: {type: Number, required: true, min: 1, max: 4}
});

var documentSchema = new mongoose.Schema({
	title					: {type: String, required: true},
	description				: {type: String, required: false},
	owner					: {type: mongoose.Schema.Types.ObjectId, required: true},
	collaborators			: {type: Array, required: false},
	visibility				: {type: Boolean, required: true, default: true},
	deleted					: {type: Boolean, required: true, default: false},
	styling					: {type: Array, required: false},
	updated_at				: {type: Date, default: Date.now},
	blocks					: [blockSchema]
});

var Document = mongoose.model('Document', documentSchema);
var Block = mongoose.model('Block', blockSchema);
var User = require('./provider.njs').load('user');
var DocumentNotReady = true;
module.exports = {
	findAll: function(callback) {
		Document.find(function(err, documents) {
			if ( ! err) {
				callback(null, documents);
			}
		});
	},
	findByOwner: function(user, callback) {
		Document.find({owner : user._id}, function (err, documents) {
			callback(err, documents);
		});
	},
	findByCollaborator: function(id, callback){
		Document.find({collaborators: { $in: [id] }}, function(err, documents) {
			callback(err, documents);
		});
	},
	findByID: function(id, callback) {
	    var ObjectId = mongoose.Schema.Types.ObjectId;
	    var collaborators = new Array();
	
	
	    Document.findById(id, function (err, document) {
	    	if (document == null) {
		    	callback('noDocument');
	    	}
	    	else {
		        var length = document.collaborators.length,
		        	done = 0,
		        	count = 1 + length;
		
		        var onDone = function() {
		            done += 1;
		            if(done === count) {
		                callback(err, document, collaborators);
		            }
		        };
		        
		        for (var i = 0; i < length; i++) {
		            User.findByID(document.collaborators[i], function(err, user) {
		                collaborators.push(user);
		                onDone();
		            });
		        }
		        onDone();
	    	}

	    });
	},
	deleteById: function(id, callback){
		Document.findById(id, function (err, document){
			if ( ! err ){
				document.remove(function(err){
					callback(err);
				});
			}
			else {
				callback(err);
			}
		});
	},
	updateById: function(id, params, callback) {
		Document.findOne({'ObjectId' : id}, function (err, document) {
			if (! err){
				document.save(function (err) {
					if (! err) {
						callback(null);
					}
					else {
						callback(err);
					}
				});
			}
		});
	},
	save: function(params, callback) {
		User.findByUsername(params.username, function(err, user) {
			
			document = new Document;
			document.set('title', params.title);
			document.set('description', params.description);
			document.set('owner', user._id);
			document.set('visibility', params.visibility);
			
			document.save(function(err){
				callback(err, document);
			});
			
		});
		
	},
	saveBlock: function(params, callback){
		
		ObjectId = '51c99638a154c1cdca000002';
		
		Document.findById(ObjectId, function (err, document) {
			if (! err){
				
				// pushes values into array
				document.blocks.push({
					type	: 'block-text', 
					order	: 4,
					content	: 'test-content Douwe',
					cols	: 1}
				);
				
				document.save(function(err) {
					if (err) {
						callback( null, document );
						console.log('block has been changed');
					} 
					else {
						callback(err);
					}
				});
			}
			else{
				callback(err, document);
			}
		});
	},
	resizeBlock: function(params, callback){
		if (documentNotReady){
			ObjectId = '51c99638a154c1cdca000002';
		}

		Document.findById(ObjectId, function (err, document) {

			if ( ! err) {
				if (documentNotReady){
					blockId = '51cafa84176f0d6508000002';
				}
				block = document.blocks.id(blockId);
				if( ! err){
					block.set('cols', params.col);
					document.save(function(err) {
						if ( ! err) {
							callback( null, document );
						} 
						else {
							callback(err);
						}
					});	
				}
			}
			else{
				callback(err);
			}
		});
	},
	newCollaborator: function(params, callback) {
		User.findByEmail(params.email, function(err, user) {
			Document.findById(params.documentId, function(err, document) {
				document.collaborators.push(user._id);
				document.save(function(err, document) {
					callback(err, document, user);
				});
			});
		});
	}
};

/*
modelFunctions.prototype.resetPassword = function (email, callback){

	User.findOne({'email' : email}, function (err, user) {
		if (err) {
			var error = 'something went wrong';
		} // handle
		else {
				if (user) {
					// random string for email validation
					var randomstring = require("randomstring");
					var new_pw = randomstring.generate();

					found_user.password = new_pw;

					found_user.save(function (err) {
						callback(true);
						this.sendResetEmail (found_user.email, new_pw );
					});

				}
				else {
					var error = 'No user with such e-mail';
				}
		}
		
		callback(error);
	});
}

modelFunctions.prototype.activate = function(token, callback) {

	User.findOne({'token' : token}, function (err, found_user) {
		if (err) {
			var error = 'Something went wrong';
		} // handle
		else {
			if (found_user) {
				found_user.token = 1;

				found_user.save(function (err) {
					callback(true);
				});
			}else{
				var error = "No user with this token";

				callback(error)
			}
		}
		callback(error);
	});
};

modelFunctions.prototype.auth = function(req, callback) {

	
};

// sends e-mail
modelFunctions.prototype.sendRegisterEmail = function(username, user_email, token, callback){

		var activation_link = "<a href=\x22localhost:1337/users/activate/"+token+"\x22>link</a>";

		// e-mail settings
		var email   = require("../..//node_modules/emailjs/email");
		var server  = email.server.connect({
		   user:    "doctopus.nl@gmail.com", 
		   password:"borstenzijncool", 
		   host:    "smtp.gmail.com", 
		   ssl:     true,
		   content : "text/html; charset=utf-8"
		});

		// send the message and get a callback with an error or details of the message that was sent
		server.send({
		   text:    "Thanks "+username+" for using Doctopus! please click this "+activation_link+" to activate your account", 
		   from:    "you <doctopus.nl@gmail.com>", 
		   to:      "<"+user_email+">",
		   subject: "Activation e-mail Doctopus"
		}, function(err, message) { console.log(err || message); });
}


// sends e-mail
modelFunctions.prototype.sendResetEmail = function(user_email, new_pw, callback){

		// e-mail settings
		var email   = require("../..//node_modules/emailjs/email");
		var server  = email.server.connect({
		   user:    "doctopus.nl@gmail.com", 
		   password:"borstenzijncool", 
		   host:    "smtp.gmail.com", 
		   ssl:     true
		});

		// send the message and get a callback with an error or details of the message that was sent
		server.send({
		   text:    "Dear, "+username+" your password has been reset to: "+new_pw+", you can use this to login into your account.", 
		   from:    "you <doctopus.nl@gmail.com>", 
		   to:      "<"+user_email+">",
		   subject: "Password reset e-mail Doctopus"
		}, function(err, message) { console.log(err || message); });
}

*/
