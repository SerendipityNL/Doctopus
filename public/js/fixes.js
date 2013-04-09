$(function(){
	$('a.resize').on('click', (function(e) {
		e.preventDefault();
		var myparent = $(this).parents('.block');
	
		if ($(myparent).hasClass('col_1')) {
			$(myparent).removeClass('col_1');
			$(myparent).addClass('col_2');
		}
		else if ($(myparent).hasClass('col_2')) {
			$(myparent).removeClass('col_2');
			$(myparent).addClass('col_3');
		}
		else if ($(myparent).hasClass('col_3')) {
			$(myparent).removeClass('col_3');
			$(myparent).addClass('col_4');
		}
		else {
			$(myparent).removeClass('col_4');
			$(myparent).addClass('col_1');
		}
	}));
});