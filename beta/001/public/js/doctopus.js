(function( jQuery ) {
	var methods = {
		init: function ( that, options ) {
			methods.el = that;
			
			methods.settings = jQuery.extend( {
				  sortable 		: {
					  selector				: '#blocks'
					, items					: ' > div'
					, delay					: 300
					, placeholder			: 'col-placeholder'
					, cursor				: {
						  left				: 5
						, top				: 5
					}
				  }
				, sortableTrash 				: {
					  selector				: '#trashcan'
				}
				, texteditor	: {
					  selector				: '#textarea'
					, defaultActions		: 'bold, underline, italic, strikethrough, align-left, align-center, align-right'
				}
				, changeBlock	: {
					  iconSet				: [
					  							  'text'
					  							, 'list'
					  							, 'image'
												, 'youtube'
					  							, 'music'
					  							, 'undo'
					  						  ]
				}
			}, options);
						
			methods.startSortable();
			methods.activateListeners();
		},
		startTrashcan : function() {
			var trashSettings = methods.settings.sortableTrash;

			jQuery(trashSettings.selector).sortable({
				connectWith 			: methods.settings.sortable.selector
				, update				: function (event, ui) {
					console.log(ui.item);
					ui.item.remove();
					console.log('removed');
					// Do what you need to to delete the item from the database
				}
			}).disableSelection().sortable('refresh');
		},

		startSortable: function() {
			methods.startTrashcan();
			
			var sortSettings = methods.settings.sortable;

			jQuery(sortSettings.selector).sortable({
				  items					: sortSettings.items
				, cursorAt				: {
					  left					: sortSettings.cursor.left
					, top					: sortSettings.cursor.top
				}
				, connectWith			: methods.settings.sortableTrash.selector
				, delay					: sortSettings.delay
				, placeholder			: sortSettings.placeholder

				, beforeStop					:function (e, ui) {
					console.log(ui.item[0].parentNode.classList);
				}
				, start					: function(e, ui) {
					jQuery(sortSettings.placeholder).width(ui.item.width()).height(ui.item.height());
				}
				, change				: function(e, ui) {
					if (jQuery(sortSettings.placeholder).prev().length > 0){
						if (ui.item.position().top == jQuery(sortSettings.placeholder).prev().position().top){
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
			// This stuff must be rewritten under jQuery.fn.getSurroundingBlocks, which needs to be renamed to resizePlaceholder
			var width = ui.item.width();
			jQuery(placeholderSelector).getSurroundingBlocks( function (first, data) {
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
				jQuery(placeholderSelector).width(width);
			});
		},
		changeBlock: function (el){
			jQuery(el).parent().find('.plus_icon').hide();
			jQuery(el).parent().append(methods.buildChangeMenu(methods.settings.changeBlock.iconSet));
			jQuery(el).parent().find('.icon_selector').show();
	
	
			// once clicked on a icon, get the classname and add this block
			jQuery('.icon').click(function() {
	
				var classes = jQuery(this).attr('class').split(/\s/);
				var add_block = true;
	
				if(classes[1] == 'block_more'){
					jQuery(this).parent().hide().parent().find('.more_icons').show();	
					add_block = false;
				}
	
				if(classes[1] == 'block_undo'){
					jQuery(this).parent().hide().parent().find('.normal_icons').show();
					add_block = false;
				}
	
				if(add_block == true){
					//no more selected, add class to parent block and hide the menu
					jQuery(this).parent().parent().parent().removeClass('emptyBlock').addClass(classes[1]);
					
					//removes the icon selector
					jQuery(this).parent().parent().remove();
				}
			});

			// close the block selector
			jQuery('.close_icon').click(function() {
				jQuery(this).parent().parent().find('.plus_icon').show();
				jQuery(this).parent().remove();

			});
		},
		buildChangeMenu: function(icons) {
			var html = '';
			var i = 0;
			html += '<div class="icon_selector"><div class="close_icon"></div><div class="normal_icons">';
			var numberOfIcons = icons.length;
			
			jQuery.each(icons, function(index, icon){
				i++
				if (i == 4) {
					html += '<div class="icon block_more"></div></div><div class="more_icons">';
				}
				
				html += '<div class="icon block_'+ icon +'"></div>';
				
				if (i == numberOfIcons) {
					html += '</div>';
				}
			});
			
			html += '</div>';
			return html;
		},
		addBlock: function() {
			var blockHtml = '<div class="empty-block col-1"><div class="plus_icon"></div></div>';
			jQuery(methods.settings.sortable.selector).append(blockHtml);
			methods.reactivateListeners();
		},
		createTexteditor: function(el) {
			methods.destroyTexteditor();
			jQuery(el).append('<textarea id="textarea"></textarea>');
			var text = el.parents('[class^=col_]').addClass('isBeingEdited').find('p:first').text();
			
			jQuery('#textarea').text(''+text+'');
			
			jQuery('#textarea').texteditor({
				defaultActions: methods.settings.texteditor.defaultActions
			});
			jQuery('.js-editor-container').append('<a id="js-save" class="btn btn-primary" href="javascript:;">Save</a>');
		},
		destroyTexteditor: function() {
			jQuery('.isBeingEdited').removeClass('isBeingEdited');
			jQuery('#textarea').remove();
			jQuery('.js-editor-container').remove();
		},
		saveText: function() {
			var text = jQuery('#textarea').text();
			jQuery('.isBeingEdited').find('p:first').html(''+text+'');
		},
		selectBlock: function (el){
			console.log(el);
			var classes = jQuery(el).attr('class').split(/\s/);
			var col  	= parseInt(classes[0].charAt(classes[0].length-1));
			var type	= classes[1];
			
			// there can only be one block selected at a time, if there is already one, remove all data
			if(selectedBlock = jQuery("#blocks").find("[data-selectedBlock]")){
				selectedBlock.removeData();
			}
			else{
				// add data to selected block
				jQuery(el).data("selectedBlock", { col : 1, type: type } );
			}

			console.log(jQuery(el).data());

			//console.log(type);
			//console.log(col);
		},
		resizeBlock: function (el, type) {
			var classes = jQuery(el).attr('class').split(/\s/);
			var col  	= parseInt(classes[0].charAt(classes[0].length-1));

			var resetCol = 1;

			console.log('current_col ='+col);

			if(type == "increase"){
				newCol = col +1;
			}
			if(type == "decrease"){
				if(col == 1){
					die();
				}
				else{
					newCol = col -1;
				}			
			}
		},

		reactivateListeners: function() {
			jQuery('.add_more_blocks_button').off('click.addMoreBlocks');
			jQuery('.plus_icon').off('click.changeBlock');
			jQuery('.block_text').off('click.textEditor');
			jQuery('#js-save').off('click.saveText');
			
			methods.activateListeners();
		},
		activateListeners: function (){
			jQuery('.add_more_blocks_button').on('click.addMoreBlocks', function() {
				methods.addBlock();
			});
			jQuery('.plus_icon').on('click.changeBlock', function() {
				methods.changeBlock(jQuery(this));
			});
			jQuery('.block_text').on('click.textEditor', function() {
				methods.editText(jQuery(this));
			});
			jQuery('#js-save').on('click.saveText', function() {
				methods.saveText()
			});

			jQuery('#blocks > div').on('click.selectBlock', function(){
				methods.selectBlock(jQuery(this));
			});

			jQuery('.increase, .decrease').on('click.resizeBlock', function() {
				selectedBlock = jQuery("#blocks [selectedBlock]");

				console.log(selectedBlock);
				if(selectedBlock){
					methods.resizeBlock(selectedBlock);
				}
				else{
					console.log('nothing selected');
				}
			});
		}
		
	};
	
	jQuery.fn.getPrev = function (data){
		var prevBlockOffset = data.usableData.prevBlockOffset;
		if (jQuery(this).prev().length > 0) {
			if (jQuery(this).prev().position().top == data.usableData.prevBlockOffset) {
				data.returnData.prevBlocks++;
				data.returnData.prevTotalSize += parseInt(jQuery(this).prev().attr('data-colspan'));
				jQuery(this).prev().getPrev(data);
			}
		}
	};
	jQuery.fn.getSurroundingBlocks = function(callback){
		var data = {
			  returnData : {
				  prevBlocks 		: 0
				, prevTotalSize		: 0
				, nextBlocks 		: 0
				, nextTotalSize 	: 0
				, first 			: false
			}
			, usableData : {
				  prevBlockOffset	: 0
				, placeholderOffset : 0
			}
			
		};
		data.usableData.placeholderOffset = jQuery(this).position().top;
		var first = false;
		
		if (jQuery(this).prev().length > 0) {
			data.usableData.prevBlockOffset = jQuery(this).prev().position().top;
			jQuery(this).getPrev(data);
		}
		else {
			first = true;
		}
		
		callback(first, data)
	};
	
	jQuery.fn.doctopus = function( method ) {
		return this.each( function() {
			if (methods[method]) {
				return methods[method].apply( this, Array.prototype.slice.call( arguments, 1) );
			}
			else if ( typeof method === 'object' || ! method ) {
				return methods.init ( this, method );
			}
			else {
				jQuery.error( 'Method ' + method + ' does not exist on jQuery.doctopus' );
			}
		});
	};
})( jQuery );

jQuery(function() {
	jQuery(document).doctopus();
});
