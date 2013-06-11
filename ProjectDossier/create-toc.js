var list = [];
var parentCount = 0;
var childCount = 0;

function mkId(title) {
	var newTitle = title.toLowerCase().replace(/ /g, '-');
	return newTitle;
}

$(':header').each(function() {
	var tag = $(this).get(0).tagName;
	if (tag == 'H1' || tag == 'H2') {
		var title = $(this).text();

		if (tag == 'H1') {
			childCount = 0;
			parentCount++;
			var anchor = parentCount + '-' + mkId(title);
			$(this).attr('id', anchor);

			list.push({
				'title': title,
				'number': parentCount,
				'anchor': anchor,
				'parent': null
			});
			
		}
		else {
			childCount++;
			var anchor = parentCount + '-' + childCount + '-' + mkId(title);
			$(this).attr('id', anchor);

			list.push({
				'parent': parentCount,
				'title': title,
				'number': parentCount + '.' + childCount,
				'anchor': anchor
			});
		}		
	}
});

var html = '';

for (var i = 0; i < list.length; i++) {
	if (list[i].parent === null) {
		if (i == 1) {
			html += '<li><a href="#' + list[i].anchor + '">' + list[i].title + '</a><ul>';
		}
		else {
			html += '</ul></li><li><a href="#' + list[i].anchor + '">' + list[i].title + '</a><ul>'
		}
	}
	else {
		html += '<li><a href="#' + list[i].anchor + '">' + list[i].title + '</a></li>';
	}
}
$('.toc').append(html);
