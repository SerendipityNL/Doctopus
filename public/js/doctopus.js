(function( $ ) {
	var methods = {
		init: function ( that, options ) {
			methods.el = that;
			
			methods.settings = $.extend( {
				  sortable 		: {
					  selector		: '#blocks'
					, items			: ' > div'
					, delay			: 300
					, placeholder	: 'col-placeholder'
					, cursor		: {
						  left 			: 5
						, top			: 5
					}
				  }
				, texteditor	: {
					  selector		: '#textarea'
					, test			: 'bla'
				}
				, test					: 'bla'
			}, options);
			
			methods.startSortable();
		},
		startSortable: function() {

			var sortVar = methods.settings.sortable;

			$(sortVar.selector).sortable({
				  items					: sortVar.items
				, cursorAt				: {
					  left					: sortVar.cursor.left
					, top					: sortVar.cursor.top
				}
				, delay					: sortVar.delay
				, placeholder			: sortVar.placeholder
				, start					: function(e, ui) {
					$('.' + sortVar.placeholder).width(ui.item.width()).height(ui.item.height());
				}
				, change				: function(e, ui) {
					if ($(sortVar.placeholder).prev().length > 0){
						if (ui.item.position().top == $(sortVar.placeholder).prev().position().top){
							// Items are the same
						}
						else {
							methods.resizePlaceholder(e, ui);
						}
					} else {
						methods.resizePlaceholder(e, ui);
					}
				}
			}).disableSelection().sortable('refresh');
		},
		resizePlaceholder: function(e, ui) {
			var placeholderSelect = '.' + methods.settings.sortable.placeholder,
				sortableSelect = methods.settings.sortable.selector,
				prevLeft = $(placeholderSelect).prev().position().left,
				prevWidth = $(placeholderSelect).prev().width(),
				fieldOffset = $(sortableSelect).position().left,
				fieldWidth = $(sortableSelect).width();
				positionLast = Math.round(((prevLeft + prevWidth) - fieldOffset) / (0.01 * fieldWidth), 2),
				placeholderWidth = $(placeholderSelect).width(),
				placeholderPercentage = Math.round((placeholderWidth / (0.01 * fieldWidth)), 2);
			if ((placeholderPercentage > (100 - positionLast)) && (positionLast != 98)) {
				console.log('hier1');
			}
			else {
				console.log('hier2');
			}
				
			
			switch (positionLast) {
				case 23:
					prevTotalWidth = 1;
					break;
				case 48:
					prevTotalWidth = 2;
					break;
				case 73:
					prevTotalWidth = 3;
					break;
				case 98:
					prevTotalWidth = 4;
					break;
			}
		}
	};
	$.fn.doctopus = function( method ) {
		return this.each( function() {
			if (methods[method]) {
				return methods[methods].apply( this, Array.prototype.slice.call( arguments, 1) );
			}
			else if ( typeof method === 'object' || ! method ) {
				return methods.init ( this, method );
			}
			else {
				$.error( 'Method ' + method + ' does not exist on jQuery.doctopus' );
			}
		});
	};
})( jQuery );