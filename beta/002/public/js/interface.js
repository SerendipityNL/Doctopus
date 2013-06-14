jQuery(document).ready( function() {
	var socket = io.connect('http://localhost');
	
	jQuery('.login a').click(function() {
		jQuery('#login-dropdown').toggle();
		console.log(jQuery('#login-dropdown').css('display'));
		if (jQuery('#login-dropdown').css('display') == 'block') {
			jQuery('input[name=email]', '#login-form').focus();
		}
	});
	jQuery('#newDocumentButton').on('click', function() {
		$('#newDocumentModal').modal('show');
	});
	jQuery('#newDocumentModal .modal-footer .btn-success').on('click', function() {
		var newDocument 		= {};
		newDocument.title 		= jQuery('#newDocumentModal .modal-body input[name="documentTitle"]').val();
		newDocument.visibility	= jQuery('#newDocumentModal .modal-body select').val();
		newDocument.username	= jQuery('#newDocumentModal .modal-body input[name="username"]').val();
		
		socket.emit('new document', newDocument);
	});
});