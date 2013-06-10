provider = require('../models/provider.njs'),
load = new provider.getModel();

exports.index = function(req, res){
	res.send('user index');
}