
$(document).ready(function() {
	/*
	$('#blocks > div').on('click', function(e) {
		var col = $(this);		
		if ($(col).hasClass('col-1')) {
			$(col).switchClass('col-1', 'col-2', 250);
		}
		else if ($(col).hasClass('col-2')) {
			$(col).switchClass('col-2', 'col-3', 250);
		}
		else if ($(col).hasClass('col-3')) {
			$(col).switchClass('col-3', 'col-4', 250);
		}
		else {
			$(col).switchClass('col-4', 'col-1', 250);
		}
	});
*/

	$('.col-resize').on('click', function(e) {
		e.preventDefault();
		var parent = $(this).parents('div[class^=col-]');
		var oldClass = parent.attr('class');
		var newClass = 'col-' + $(this).attr('data-set-cols');

		if (oldClass != newClass) {
			parent.switchClass(oldClass, newClass, 250);
		}	
	});
	
	$(document).doctopus();

});
