$(document).ready(function() {
	$('img').click(function(e) {
		e.preventDefault();

		var image_href = $(this).attr("src");
		
		if ($('#lightbox').length > 0) {
			$('#content').html('<img src="' + image_href + '" />');
			$('#lightbox').show();
		}else{
			var lightbox = 
			'<div id="lightbox">' +
				'<div id="overlay"></div>' +
				'<div id="content">' + 
					'<img class="open" src="' + image_href +'" />' +
				'</div>' +
			'</div>';

			$('body').append(lightbox);
		}
	});

	$('#lightbox').on('click', function(){
		//alert('clicked');
		$('#lightbox').remove();
	});

});

$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $('#lightbox').remove();
    }
});