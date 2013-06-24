var Gravatar = require('gravatar'),
	Provider = require('../models/provider.njs'),
	User = Provider.load('user'),
	Document = Provider.load('document');

module.exports = {
	register: function(req, res) {
		User.getInfo(req.cookies.authtoken, function(err, user) {

			if (user) res.redirect('/dashboard');

			res.render('pages/user/register', {
				pageTitle: 'User registration',
				session: req.session
			});
		});
	},
	login: function(req, res) {
		if (typeof(req.body.email) != 'undefined') {
			User.auth(req.body, function(err, authtoken) {
				if (! err) {
					// Set the authentication cookie with the token
					res.cookie('authtoken', authtoken);
					res.redirect('/dashboard');
				}
				else {
					res.send(err);
				}
			});
		}
		else {
			res.render('pages/user/login', {
				pageTitle: 'Login'
			})
		}
	},
	logout: function(req, res) {
		res.clearCookie('authtoken');
		res.redirect('/');
	},
	create: function(req, res) {
		User.save(req.body, function(err) {
			if (! err){
				res.send('Succesfully registered');
			} else {				
				console.log(err);
				res.render('pages/user/register', {
					pageTitle: 'User Registration'
				});
			}
		});
	},
	dashboard: function(req, res) {
		User.getInfo(req.cookies.authtoken, function(err, user) {

			if ( ! user) res.redirect('/');

			User.findByUsername(req.session.username, function(err, user) {
				Document.findByOwner(user, function(err, documents) {
					console.log(documents);
					var avatarUrl = Gravatar.url(user.email, {s: '230', r: 'x', d: '404'});

					res.render('pages/user/dashboard', {
						avatar:		avatarUrl,				
						pageTitle: 	'Dashboard',
						user:		user,
						documents:	documents
					});
				});
			});
		});

	}
}