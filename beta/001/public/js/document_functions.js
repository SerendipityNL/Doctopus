
jQuery(document).ready(function() {

	$('.resize').on('click', function(e) {
            e.preventDefault();
            var new_col = $(this).attr('data-setcol');
            $(this).parent().removeClass();
            $(this).parent().addClass('col_' + new_col);
            
     });
});
