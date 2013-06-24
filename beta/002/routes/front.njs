var Provider = require('../models/provider.njs'),
	User = Provider.load('user');


module.exports = {
	index: function(req, res) {
		res.render('pages/front/index', {'pageTitle': 'Doctopus'});
	}
}