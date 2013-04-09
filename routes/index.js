exports.index = function(req, res){
	res.render('document/edit.jade', {
		pageTitle: 'Hello world!'
	});
};