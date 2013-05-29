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
		'list_style_type': 'disc'
	}
}

// ---------------------------------------------
// Options for the select/input fields
// ---------------------------------------------

var options = {
	'fonts': {
		'arial': 'Arial',
		'comic sans ms': 'Comic Sans MS',
		'monospace': 'Monospace',
		'verdana': 'Verdana',
		'ubuntu': 'Ubuntu'
	},
	'list_style_types': {
		'circle': 'Circle',
		'disc': 'Disc',
		'square': 'Square',
		'none': 'None'
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

	createCss(style, function(css) {
		res.set('Content-Type', 'text/css');
		res.send(css);
	});	
}

var createCss = function(style, callback) {
	var css = '';

	for (var element in style) {
		css += '#blocks ' + element + ' {\n';
		for (var key in style[element]) {
			console.log(key);
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

exports.css = function(req, res) {
	createCss(style, function(css) {
		res.set('Content-Type', 'text/css');
		res.send(css);
	});	
}