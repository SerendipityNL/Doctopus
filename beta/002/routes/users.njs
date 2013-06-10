var provider = require('../models/provider.njs'),
	load = new provider.getModel();

module.exports = {
	index: function(req, res) {
		var User = new load.model('user');
		console.log(User);
		res.send('user index');
	}
}