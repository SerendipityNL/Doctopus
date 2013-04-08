exports.index = function(req, res){
	res.render('index.jade', {
		pageTitle: 'Hello world!'
	});
};