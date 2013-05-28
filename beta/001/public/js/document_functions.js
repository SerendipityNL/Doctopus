
jQuery(document).ready(function() {
	$(".block-text").on('mouseover', 
		function () {
			$(this).append('<div class="edit_bar">Double click to edit</div>');
			
		}).on('mouseout',
			function () {
			$('.edit_bar').remove();
			});
});
