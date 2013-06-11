var Gravatar = require('gravatar'),
	Provider = require('../models/provider.njs'),
	User = Provider.load('user')

module.exports = {
	register: function(req, res) {
		res.render('pages/user/register', {
			pageTitle: 'User registration',
			session: req.session
		});
	},
	loginView: function(req, res){
		res.send('login view');
	},
	login: function(req, res) {
		User.auth(req.body, function(err, username) {
			if (! err) {
				req.session.logged_in = true;
				req.session.username  = username;
				res.redirect('/register');
			}
			else {
				res.send(err);
			}
		});
	},
	logout: function(req, res) {
		req.session.logged_in = false;
		delete req.session.username;
		res.redirect('/');
	},
	create: function(req, res) {
		User.save(req.body, function(err) {
			if (! err){
				res.send('Succesfully registered');
			} else {				
				console.log(err);
				res.send(err);
			}
		});
	},
	index: function(req, res) {
		User.findByUsername(req.session.username, function(err, user){
			var avatarUrl = Gravatar.url(user.email, {s: '230', r: 'x', d: '404'});
			res.render('pages/user/dashboard', {
				avatar:		avatarUrl,				
				pageTitle: 	'Dashboard',
				session: 	req.session,
				user:		user
			});
		});
	}
}