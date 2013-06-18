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
		socket.on('new document', function(data) {
			if (data.state == "success"){
				jQuery('#newDocumentModal').modal('hide');
				var html = '<li class="span4"><div class="thumbnail"><a href="#" class="thumbnail"><img width="300px" height="200px" src="img/placeholder.png"></a><div class="caption"><h3>'+data.document.title+'</h3><p>Hier eventueel een omschrijving</p><p><a href="/document/manage/'+data.document._id+'" class="btn btn-success">Manage</a>&nbsp;<a href="'+data.document._id+'" class="btn">Edit</a></p></div></div></li>'
				jQuery('ul.documentList').append(html);
			}
			else {
				alert('data is ' + data);
			}
		});
	});
});