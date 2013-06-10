getModel = function(){};

getModel.prototype.model = function(modelName) {
	var model = require('./'+modelName+'.njs');
	return model;
}

exports.getModel = getModel;