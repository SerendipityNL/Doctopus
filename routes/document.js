exports.edit = function(req, res) {
	res.render('document/edit', {
		'documentId': req.params.id,
		'pageTitle': 'Document ' + req.params.id + ' wijzigen'
	});
};