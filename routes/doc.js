exports.index = function(req, res) {
	res.render('document/edit', {
		pageTitle: 'Edit document - Doctopus'
	});
}

exports.findOne = function(req, res) {
	var id = req.params.id;
	var doc = {
		id: id,
		title: 'Technical design'
	}
	res.send(doc);
}