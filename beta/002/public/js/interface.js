jQuery(document).ready( function() {
	jQuery('.login a').click(function() {
		jQuery('#login-dropdown').toggle();
		console.log(jQuery('#login-dropdown').css('display'));
		if (jQuery('#login-dropdown').css('display') == 'block') {
			jQuery('input[name=email]', '#login-form').focus();
		}
	});
});