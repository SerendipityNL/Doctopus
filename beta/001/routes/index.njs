// ---------------------------------------------
// Some dummy data to test without database
// ---------------------------------------------

var blocks = [
	{ "id": 1, "content": "Dit is een tekstveld #1", "cols": 4, "type": "text" },
	{ "id": 2, "content": "Dit is een tekstveld #2", "cols": 2, "type": "text" },
	{ "id": 3, "content": ["List item #1", "List item #2", "List item #3"], "cols": 2, "type": "list" },
	{ "id": 4, "content": "Dit is een tekstveld #4", "cols": 3, "type": "text" },
	{ "id": 5, "content": "Dit is een tekstveld #5", "cols": 1, "type": "text" },
	{ "id": 6, "content": "Dit is een tekstveld #6", "cols": 2, "type": "text" },
	{ "id": 7, "content": "Dit is een tekstveld #7", "cols": 2, "type": "text" },
	{ "id": 8, "content": "Dit is een tekstveld #8", "cols": 4, "type": "text" },
	{ "id": 9, "content": "Dit is een tekstveld #9", "cols": 1, "type": "text" },
	{ "id": 10, "content": "Dit is een tekstveld #10", "cols": 3, "type": "text" }
];

// ---------------------------------------------
// Default document styling, this needs to be
// saved to the database when creating a new
// document.
// ---------------------------------------------

var style = {
	'p': {
		'font_size': '14',
		'color': '#000000',
		'font_family': 'arial',
		'font_weight': 'normal'
	},
	'ul': {
		'font_size': '14',
		'color': '#000000',
		'font_family': 'arial',
		'font_weight': 'normal'
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
	},
	'weights': {
		'normal': 'Normal',
		'bold': 'Bold'
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

exports.setstyle = function (req, res) {
	var element = req.body.element;
	var name = req.body.name;
	var value = req.body.value;

	if (typeof(style[element]) === 'undefined') {
		style[element] = {};
	}

	style[element][name] = value;

	res.send(style);
}

exports.getstyle = function (req, res) {
	res.send(style);
}

