(function( jQuery ) {
	var methods = {
		init: function ( that, options ) {
			methods.el = that;
			
			methods.settings = jQuery.extend( {
				  sortable 		: {
					  selector				: '#blocks'
					, items					: ' > div'
					, handle				: '.block-actions .move'
					, delay					: 300
					, placeholder			: 'col-placeholder'
					, cursorAt				: {
						  left				: 5
						, top				: 5
					}
				  }
				, sortableTrash 				: {
					  selector				: '#trashcan'
				}
				, texteditor	: {
					  selector				: '#textarea'
					, defaultActions		: [
												  'bold'
												, 'underline'
												, 'italic'
												, 'strikethrough'
												, 'align-left'
												, 'align-center'
												, 'align-right'
											  ]
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
		// message is text, type is error, succes, warning and duration is int in ms
		showNotice : function (noticeData){
			console.log(noticeData.msg);
			$('.notice').stop(true);
			$('.notice').fadeIn().text(message).addClass(type).delay(duration).fadeOut('slow'); 
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
				, scroll                : true
				, scrollSensitivity		: 50
				, handle				: sortSettings.handle
				, connectWith			: methods.settings.sortableTrash.selector
				, delay					: sortSettings.delay
				, placeholder			: sortSettings.placeholder
				, beforeStop					:function (e, ui) {
					console.log(ui.item[0].parentNode.classList);
				}
				, start					: function(e, ui) {
					jQuery('.'+sortSettings.placeholder).width(ui.item.width()).height(ui.item.height());
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


				if(classes[1] == "block-image"){
					var form = '<div id="dropzone"><p>Upload</p><form enctype="multipart/form-data" id="dropzone" action="file-upload" class="dropzone"></div>';

					jQuery(this).parent().parent().parent().removeClass('empty-block').addClass(classes[1]).html(form);

					$("div#dropzone").dropzone({ url: "/file/post" });
				}
	
				if(add_block == true){
					//no more selected, add class to parent block and hide the menu
					if (classes[1] === 'block-text') {
						jQuery(this).parent().parent().parent().removeClass('empty-block').addClass(classes[1]).html('<p class="col-content">This is a textblock.</p>');
					}
					else {
						jQuery(this).parent().parent().parent().removeClass('empty-block').addClass(classes[1]);
					}
					
					//jQuery(this).parent().parent().parent().text('A textblock has been added');
					//removes the icon selector
					jQuery(this).parent().parent().remove();
				}
				methods.reactivateListeners();
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
				
				html += '<div class="icon block-'+ icon +'"></div>';
				
				if (i == numberOfIcons) {
					html += '</div>';
				}
			});
			
			html += '</div>';
			return html;
		},
		addBlock: function() {
			var blockHtml = '<div class="empty-block col-1" data-colspan="1"><div class="plus_icon"></div></div>';
			jQuery(methods.settings.sortable.selector).append(blockHtml).focus();

			$('html, body').stop(true);

			//scroll to new appended div
			$('html, body').animate({
				scrollTop: $(".empty-block:last").offset().top
			}, 1000);

			methods.reactivateListeners();
		},
		createTexteditor: function(el) {
			jQuery('#textarea').texteditor('destroyContainer');
			jQuery('.edit_bar').text('Editing mode - not saved yet');
			jQuery(el).append('<textarea id="textarea"></textarea>');
			var text = el.addClass('isBeingEdited').find('p:first').hide().html();
			
			jQuery('#textarea').text(''+text+'');
			
			jQuery('#textarea').texteditor({
				defaultActions: methods.settings.texteditor.defaultActions
			});
			
			methods.reactivateListeners();
		},
		// selectBlock: function (el){
		// 	var classes = jQuery(el).attr('class').split(/\s/);
		// 	var col  	= parseInt(classes[0].charAt(classes[0].length-1));
		// 	var type	= classes[1];
		// 	var id 		= jQuery(el).attr('data-id');			
				
		// 	jQuery('.selected-block').removeClass('selected-block');
		// 	jQuery(el).addClass('selected-block');

		// 	jQuery('.temp-hiding').show();
		// 	jQuery('.standard-container').hide();
		// 	jQuery('#selected-block .name').text(col);
		// 	jQuery('#selected-block .type').text(type);
		// },
		deselect: function(el){
			if(el == ""){
				jQuery('.selected-block').removeClass('selected-block')
			}

		},
		deleteBlock: function(){
			jQuery('.selected-block').remove();

			msg 		= "Block has been removed";
			msgtype  	= "error";
			duration	= 2000;

			methods.showNotice(msg, msgtype, duration);
		},
		resizeBlock: function() {

			var block = jQuery('.selected-block');

			if (block.hasClass('col-1')) {
				block.switchClass('col-1', 'col-2', 250);
			}
			else if (block.hasClass('col-2')) {
				block.switchClass('col-2', 'col-3', 250);
			}
			else if (block.hasClass('col-3')) {
				block.switchClass('col-3', 'col-4', 250);
			}
			else {
				block.switchClass('col-4', 'col-1', 250);
			}
		},
		reactivateListeners: function() {
			jQuery('.add_more_blocks_button').off('click.addMoreBlocks');
			jQuery('.plus_icon').off('click.changeBlock');
			jQuery('#blocks > div').off('click.selectBlock');
			jQuery('.block-text').off('dblclick.textEditor');
			jQuery('#js-save_and_close').off('click.saveAndCloseText');
			jQuery('#js-save').off('click.saveText');
			jQuery('#js-close').off('click.closeText');
			jQuery('.resize-block-btn-plus, .resize-block-btn-min').off('click.resizeBlock');
			jQuery('#trashcan').off('click.deleteBlock')
			jQuery('body').off('click.deselect');
			methods.activateListeners();
		},
		activateListeners: function () {

			jQuery('#blocks > div').on('click', function() {
				// OLD SCRIPT FROM TD
				//methods.selectBlock(jQuery(this));
				jQuery(this).selectBlock();
			});

			jQuery('.add_more_blocks_button').on('click.addMoreBlocks', function() {
				methods.addBlock();
			});
			jQuery('.plus_icon').on('click.changeBlock', function() {
				methods.changeBlock(jQuery(this));
			});
			jQuery('.block-text').on('dblclick.textEditor', function() {
				methods.createTexteditor(jQuery(this));
			});

			jQuery('#trashcan').on('click.deleteBlock', function() {
				methods.deleteBlock();
			});

			jQuery(document).on('click.deselect', function (){
				methods.deselect(event.target.className);
				//console.log(event.target);
			});	
			  
			jQuery('.resize-block-btn-plus, .resize-block-btn-min').on('click.resizeBlock', function(){

				console.log('click');
				if(jQuery(this).hasClass('resize-block-btn-min')){
					var step = 'decrease';
				}
				else{
					var step = 'increase';
				}

				methods.resizeBlock();
			});

			jQuery('#js-save').on('click.saveText', function() {
				methods.saveText();
			});
			jQuery('#js-close').on('click.closeText', function() {
				methods.destroyTexteditor();
			});
			jQuery('#js-save_and_close').on('click.saveAndCloseText', function() {
				methods.saveText();
				methods.destroyTexteditor();
			});
			
		}
	};
	jQuery.fn.selectBlock = function() {
		jQuery('.selected-block').removeClass('selected-block');
		jQuery(this).addClass('selected-block');
		var classes = jQuery(this).attr('class');
		console.log(classes);
		
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
				console.log(method);
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