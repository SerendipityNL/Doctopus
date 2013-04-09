jQuery(function(){
	jQuery('a.resize').on('click', (function(e) {
		e.preventDefault();
		var myparent = jQuery(this).parents('.block');
	
		if (jQuery(myparent).hasClass('col_1')) {
			jQuery(myparent).removeClass('col_1');
			jQuery(myparent).addClass('col_2');
		}
		else if (jQuery(myparent).hasClass('col_2')) {
			jQuery(myparent).removeClass('col_2');
			jQuery(myparent).addClass('col_3');
		}
		else if (jQuery(myparent).hasClass('col_3')) {
			jQuery(myparent).removeClass('col_3');
			jQuery(myparent).addClass('col_4');
		}
		else {
			jQuery(myparent).removeClass('col_4');
			jQuery(myparent).addClass('col_1');
		}
	}));
});