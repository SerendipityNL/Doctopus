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
					$(sortVar.placeholder).width(ui.item.width()).height(ui.item.height());
				}
				, change				: function(e, ui) {
					if ($(sortVar.placeholder).prev().length > 0){
						if (ui.item.position().top == $(sortVar.placeholder).prev().position().top){
							// Items are the same
						}
						else {
							methods.placeholderResize(e, ui);
						}
					} else {
						methods.placeholderResize(e, ui);
					}
				}
			}).disableSelection().sortable('refresh');
		},
		placeholderResize: function(e, ui){
			var placeholderSelector = '.' + methods.settings.sortable.placeholder;
			// This stuff must be rewritten under $.fn.getSurroundingBlocks, which needs to be renamed to resizePlaceholder
			var width = ui.item.width();
			$(placeholderSelector).getSurroundingBlocks( function (first, data) {
				if ( (first == false) && (data.returnData.prevTotalSize < 4) ) {
					var restSize = 4 - data.returnData.prevTotalSize;
					if (restSize < parseInt(ui.item.attr('data-colspan'))){
						switch (restSize) {
							case 1:
								width = '23%';
								break;
							case 2:
								width = '48%';
								break;
							case 3:
								width = '73%';
								break;
							case 4:
								width = '98%';
								break;
						}
					}
				}
				$(placeholderSelector).width(width);
			});
		}
	};
	
	$.fn.getPrev = function (data){
		var prevBlockOffset = prevBlockOffset;
		if ($(this).prev().length > 0) {
			if ($(this).prev().position().top == data.usableData.prevBlockOffset) {
				data.returnData.prevBlocks++;
				data.returnData.prevTotalSize += parseInt($(this).prev().attr('data-colspan'));
				$(this).prev().getPrev(data);
			}
		}
	};
	$.fn.getSurroundingBlocks = function(callback){
		var data = {
			  returnData : {
				  prevBlocks 		: 0
				, prevTotalSize		: 0
				, nextBlocks 		: 0
				, nextTotalSize 	: 0
				, first 			: false
			}
			, usableData : {
				  prevBlockOffset	: $(this).prev().position().top
				, placeholderOffset : $(this).position().top
			}
			
		};
		var first = false;
		
		if ($(this).prev().length > 0) {
			data.usableData.prevBlockOffset = $(this).prev().position().top;
			$(this).getPrev(data);
		}
		else {
			first = true;
		}
		
		callback(first, data)
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