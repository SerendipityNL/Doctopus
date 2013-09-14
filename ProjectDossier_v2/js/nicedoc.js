var NiceDoc = {
	fetch: function(url, callback) {
		var self = this
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest()
		}
		else {
			xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var output = self.process(xmlhttp.responseText)
				callback(output.html, output.list);
			}
		}
		xmlhttp.open('GET', url, false)
		xmlhttp.send()
	},
	process: function(markdown) {
		var depth			= 2
		var html 			= marked(markdown)
		var id 				= 100
		var lastHeading 	= 0
		var list 			= ''
		var pattern 		= '<h\s*([0-' + depth + '])>(.*?)<\/h[0-' + depth + ']>'

		var html = html.replace(new RegExp(pattern, "gi"), function(str, heading, title) {
			var anchor = title.replace(/[^a-zA-Z0-9\- ]/gi, '')
							  .replace(/ /gi, '-')
							  .toLowerCase() + '-' + id++

			if (heading > lastHeading) {
				list += ''
			}
			else if (heading < lastHeading) {
				list += (new Array(lastHeading - heading + 2)).join('</ul></li>')
			}
			else {
				list += '</ul></li>'
			}

			list += '<li><a href="#' + anchor + '">' + title + '</a><ul>'

			lastHeading = heading

			return '<h' + heading + ' id="'+ anchor + '">'+ title + '</h' + heading + '>'
		})

		return {
			'html': html,
			'list': list
		}
	},
	append: function(element, data) {
		document.getElementById(element).innerHTML = data
	}
}