var styledb = require('../modules/styledb.njs');

/* -------------------------------------------------------------
Function which formats the JSON data to valid CSS .
The style var accepts a JSON object, and the callback 
returns CSS
------------------------------------------------------------- */

var createCSS = function(style, callback) {
	var css = '';
	for (var element in style) {
		css += '#blocks ' + element + ' {\n';
		for (var key in style[element]) {
			var name = key.replace(/_/g, '-');
			var value = style[element][key];

			if (typeof(value) == 'number') {
				value += 'px';
			}
			css += '\t' + name + ': ' + value + ';\n';
		}
		css += '}\n\n';
	}
	callback(css);
}


/* -------------------------------------------------------------
Module functions
------------------------------------------------------------- */

module.exports = {
	index: function(req, res) {
		res.render('pages/document/document', {
			'pageTitle': 'Docbuilder - Beta 001',
			'options': styledb.options,
			'style': styledb.current,
			'blocks': styledb.blocks
		});
	},
	css: function(req, res) {
		createCSS(styledb.current, function(css) {
			res.set('Content-Type', 'text/css');
			res.send(css);
		});	
	},
	setstyle: function(req, res) {
		var element = req.body.element;
		var name = req.body.name;
		var value = req.body.value;

		if (typeof(styledb.current[element]) === 'undefined') {
			styledb.current[element] = {};
		}

		styledb.current[element][name] = value;

		createCSS(styledb.current, function(css) {
			res.set('Content-Type', 'text/css');
			res.send(css);
		});	
	}
}