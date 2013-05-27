// ---------------------------------------------
// Some dummy data to test without database
// ---------------------------------------------

var blocks = [
	{ "id": 1, "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus mauris sed odio feugiat mattis. Pellentesque sodales augue vitae mi pellentesque lobortis. Praesent bibendum aliquet lectus, ut tempus nisi ultrices vitae. Nunc tincidunt ultrices mauris, adipiscing interdum velit cursus ut. Pellentesque quam mi, vulputate faucibus commodo non, vestibulum et dui. Donec laoreet mauris non neque mollis sagittis. Sed auctor faucibus ullamcorper. Nullam eget imperdiet odio. Morbi in augue ac est vestibulum bibendum quis vel felis.", "cols": 4, "type": "text" },
	{ "id": 2, "content": "Nam mollis vehicula lobortis. Praesent gravida massa ut erat condimentum egestas. Morbi vestibulum molestie turpis vel ornare. Donec euismod, mi a ornare dignissim, mauris dui.", "cols": 2, "type": "text" },
	{ "id": 3, "content": ["List item #1", "List item #2", "List item #3", "List item #4"], "cols": 2, "type": "list" }
];

// ---------------------------------------------
// Default document styling, this needs to be
// saved to the database when creating a new
// document.
// ---------------------------------------------

var style = {
	'p': {
		'font_size': 14,
		'color': '#000000',
		'font_family': 'arial'
	},
	'ul': {
		'font_size': 14,
		'color': '#000000',
		'font_family': 'arial'
	},
	'li': {
		'list-style-type': 'disc'
	}
}

// ---------------------------------------------
// Options for the select/input fields
// ---------------------------------------------

var options = {
	'colors': {
		'#000000': 'Black',
		'#FF6A00': 'Orange',
		'#0026FF': 'Blue',
		'#FF0000': 'Red',
		'#008000': 'Green'
	},
	'fonts': {
		'arial': 'Arial',
		'comic sans ms': 'Comic Sans MS',
		'monospace': 'Monospace',
		'verdana': 'Verdana',
		'ubuntu': 'Ubuntu'
	}
}


exports.index = function(req, res){
	res.render('pages/document/document', {
		'pageTitle': 'Docbuilder - Beta 001',
		'options': options,
		'style': style,
		'blocks': blocks
	});
};


// ---------------------------------------------
// Needed for temporary saving the style changes 
// (until the server restarts)
// ---------------------------------------------

exports.setstyle = function(req, res) {
	var element = req.body.element;
	var name = req.body.name;
	var value = req.body.value;

	if (typeof(style[element]) === 'undefined') {
		style[element] = {};
	}

	style[element][name] = value;

	res.send(style);
}

exports.css = function(req, res) {
	var css = '';

	for (var element in style) {
		css += '#blocks ' + element + ' {\n';
		
		for (var key in style[element]) {
			var name = key.replace('_', '-');
			var value = style[element][key];

			if (typeof(value) == 'number') {
				value += 'px';
			}
			css += '\t' + name + ': ' + value + ';\n';
		}
		css += '}\n\n';
	}

	res.set('Content-Type', 'text/css');
	res.send(css);
}