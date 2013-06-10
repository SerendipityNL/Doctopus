var Provider = require('../models/provider.njs'),
	User = Provider.load('user');

module.exports = {
	index: function(req, res) {
		console.log(User);
		res.send('user index');
	}
}