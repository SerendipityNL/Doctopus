module.exports = {
	load: function(modelName) {
		var model = require('./'+modelName+'.njs');
		return model;
	}
}