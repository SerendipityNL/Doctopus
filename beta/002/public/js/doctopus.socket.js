var debug = false;

var docsoc = {
	block: {
		changeSize: function(blockdata) {
			if (debug) console.log(blockdata);
			$block = jQuery('div[data-id="' + blockdata.id + '"]');			
			$block.data('colspan', blockdata.newSize);

			if ($block.hasClass('col-1')) {
				$block.switchClass('col-1', 'col-' + blockdata.newSize, 250);
			}
			else if ($block.hasClass('col-2')) {
				$block.switchClass('col-2', 'col-' + blockdata.newSize, 250);
			}
			else if ($block.hasClass('col-3')) {
				$block.switchClass('col-3', 'col-' + blockdata.newSize, 250);
			}
			else {
				$block.switchClass('col-4', 'col-' + blockdata.newSize, 250);
			}
		},
		updateSize: function() {
			var $block = jQuery('.selected-block');
			documentUrl	= window.location.pathname.split('/'),
			documentId 	= documentUrl[3];
			var blockdata = {
				'id': $block.data('id'),
				'oldSize': $block.data('colspan'),
				'documentId': documentId
			}
			socket.emit('block.resize', blockdata);
		},
		listener: function() {
			jQuery('.resize').on('click.resize', function () {
			 	docsoc.block.updateSize();
			});
			if (debug) console.log('Block listener activated.');
		}
	},
	reactivateListeners: function() {
		if (debug) console.log('Disabling all listeners.');
		jQuery('.resize').off('click.resize');
		docsoc.activateListeners();
	},
	activateListeners: function() {
		if (debug) console.log('Activating all listeners.');	
		docsoc.block.listener();
	}
}

jQuery(document).ready(function() {
	docsoc.activateListeners();

	socket.on('block.resize', docsoc.block.changeSize);
});