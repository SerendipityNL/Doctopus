var functions = {
	block: {
		resize: function(blockdata) {
			
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
		changed: function() {
			var $block = jQuery('.selected-block');

			var blockdata = {
				'id': $block.data('id'),
				'oldSize': $block.data('colspan')
			}
			socket.emit('block.resize', blockdata);
		}
	}

}

jQuery(document).ready(function() {
	jQuery('.resize').on('click.resize', function () {
	 	functions.block.changed();
	});
	socket.on('block.resize', functions.block.resize);
});