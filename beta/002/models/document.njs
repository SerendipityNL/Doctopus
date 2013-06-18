var mongoose = require('mongoose');
	mongoose.createConnection('mongodb://localhost/doctopus');

var documentSchema = new mongoose.Schema({
	"_id": 3432342343,
	"title": "Technical design",
	"collaborators": ["43255443", "133214", "943723"],
	"public": false,
	"deleted": false,
	"styling": {
		"p": {
			"font_size": 14,
			"color": "#000000"
		},
		"li": {
			"list_style_type": "disc"
		}
	},
	"blocks": [
	email		: {type: String, required : true, index: {unique: true} },
	first		: {type: String },
	last		: {type: String },
	admin		: {type: Number, required : true, default: 0},
	token       : {type: String, required : true},
	username    : {type: String, required : true}
});

var Document = mongoose.model('User', documentSchema);

module.exports = {
	findAll: function(callback) {
		Document.find(function(err, documents) {
			if ( ! err) {
				callback(null, documents);
			}
		});
	},
	findByID: function(id, callback) {
		Document.findOne({'ObjectId' : id}, function (err, document) {
			callback(err, document);
		});
	},
	deleteById: function(id, callback){
		Document.findOne({'ObjectId' : id}, function (err, document){
			if ( ! err ){
				document.remove(function(err){
					if ( ! err) {
						callback(null);
					}
					else {
						callback(err);
					}
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
		document.save(function(err){
		
		});
	},
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