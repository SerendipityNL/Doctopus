var style = require('../modules/style.njs');


exports.index = function(req, res){
	res.render('pages/document/document', {
		'pageTitle': 'Docbuilder - Beta 001',
		'options': style.getOptions(),
		'style': style.getStyle(),
		'blocks': style.getBlocks()
	});
};



// ---------------------------------------------
// Needed for temporary saving the style changes 
// (until the server restarts)
// ---------------------------------------------

/*
exports.setstyle = function(req, res) {
	var element = req.body.element;
	var name = req.body.name;
	var value = req.body.value;

	if (typeof(style[element]) === 'undefined') {
		style[element] = {};
	}

	style[element][name] = value;

	createCss(style, function(css) {
		res.set('Content-Type', 'text/css');
		res.send(css);
	});	
}

exports.css = function(req, res) {
	createCss(style, function(css) {
		res.set('Content-Type', 'text/css');
		res.send(css);
	});	
}
*/