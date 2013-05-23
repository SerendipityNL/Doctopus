exports.index = function(req, res){
	var items = {
		'aaa': 'Tjerk',
		'bbb': 'Georgia',
		'ccc': 'Arial',
		'ddd': 'Bebas Regular',
		'eee': 'Vincent'
	}
	res.render('pages/document/document.jade', {
		'pageTitle': 'Docbuilder - Beta 001',
		'items': items
	});
};
