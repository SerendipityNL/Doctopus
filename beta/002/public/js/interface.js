jQuery(document).ready( function() {
	var socket = io.connect('http://localhost');
	
	jQuery('.login a').click(function() {
		jQuery('#login-dropdown').toggle();
		console.log(jQuery('#login-dropdown').css('display'));
		if (jQuery('#login-dropdown').css('display') == 'block') {
			jQuery('input[name=email]', '#login-form').focus();
		}
	});
	
	jQuery('#newCollaboratorButton').on('click', function() {
		$('#newCollaboratorModal').modal('show');
	});
	
	jQuery('#newCollaboratorModal .modal-footer .btn-success').on('click', function() {
		var newCollaborator		= {};
		documentUrl = window.location.pathname.split('/');
		newCollaborator.email	= jQuery('#newCollaboratorModal .modal-body input[name="collaboratorEmail"]').val();
		newCollaborator.rights	= jQuery('#newCollaboratorModal .modal-body select[name="collaboratorRights"]').val();
		newCollaborator.documentId = documentUrl[3];
		socket.emit('collaborator.new', newCollaborator);
		socket.on('collaborator.new', function(data) {
			console.log(data);
		});
	});
	
	jQuery('#newDocumentButton').on('click', function() {
		$('#newDocumentModal').modal('show');
	});
	jQuery('#newDocumentModal .modal-footer .btn-success').on('click', function() {
		var newDocument 		= {};
		newDocument.title 		= jQuery('#newDocumentModal .modal-body input[name="documentTitle"]').val();
		newDocument.description	= jQuery('#newDocumentModal .modal-body input[name="documentDescription"]').val();
		newDocument.visibility	= jQuery('#newDocumentModal .modal-body select').val();
		newDocument.username	= jQuery('#newDocumentModal .modal-body input[name="username"]').val();
		
		socket.emit('document.new', newDocument);
		socket.on('document.new', function(data) {
			if (data.state == "success"){
				jQuery('#newDocumentModal').modal('hide');
				var html = '<li class="span4"><div class="thumbnail"><a href="#" class="thumbnail"><img width="300px" height="200px" data-src="holder.js/300x200/gray" alt="300x200" style="width: 300px; height: 200px;" src="data:image/png;base64,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"></a><div class="caption"><h3>'+data.document.title+'</h3><p>'+data.document.description+'</p><p class="muted">Last modified: ' + moment(data.document.updated_at).fromNow() + '</p><p><a href="/document/manage/'+data.document._id+'" class="btn btn-success">Manage</a>&nbsp;<a href="/document/edit/'+data.document._id+'" class="btn">Edit</a></p></div></div></li>';
				jQuery('ul.documentList').append(html);
			}
			else {
				alert('data is ' + data);
			}
		});
	});
});